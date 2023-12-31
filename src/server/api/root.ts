import { postRouter } from "@src/server/api/routers/post";
import { profileRouter } from "@src/server/api/routers/profile";
import { createTRPCRouter } from "@src/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  profile: profileRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
