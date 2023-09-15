import { z } from "zod";

import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import { createTRPCRouter, privateProcedure, publicProcedure } from "@src/server/api/trpc";
import { filterUserForClient } from "@src/server/server-utils/filterUserForClient";

// Limit requests to 3 per 1 minuite
const ratelimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "3 m"),
  analytics: false,
});

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      orderBy: [{ createdAt: "desc" }],
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);

    return posts.map((post) => {
      const author = users.find((user) => user.id == post.authorId);

      if (!author?.username) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Author for post not found" });

      return { post, author: { ...author, username: author.username } };
    });
  }),
  create: privateProcedure
    .input(
      z.object({
        content: z.string().emoji().min(1).max(255),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const { success } = await ratelimiter.limit(authorId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });

      return post;
    }),
});
