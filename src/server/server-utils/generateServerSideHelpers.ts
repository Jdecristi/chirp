import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";

import { appRouter } from "@src/server/api/root";
import { prisma } from "@src/server/db";

export const generateServerSideHelpers = () =>
  createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });
