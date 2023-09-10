// import { z } from "zod";

import { clerkClient } from "@clerk/nextjs/server";
import { createTRPCRouter, publicProcedure } from "@src/server/api/trpc";

import type { User } from "@clerk/nextjs/dist/types/api";
import { TRPCError } from "@trpc/server";

const filterUserForClient = (user: User) => {
  return { id: user.id, username: user.username, imageUrl: user.imageUrl };
};

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
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
});
