import { z } from "zod";

import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";

import { filterUserForClient } from "@src/server/server-utils/filterUserForClient";
import { createTRPCRouter, publicProcedure } from "@src/server/api/trpc";

export const profileRouter = createTRPCRouter({
  getUserByUsername: publicProcedure.input(z.object({ username: z.string() })).query(async ({ input }) => {
    const [user] = await clerkClient.users.getUserList({ username: [input.username] });

    if (!user) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "User not found" });

    return filterUserForClient(user);
  }),
});
