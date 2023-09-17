import { processEmailIntoUsername } from "./processEmailIntoUsername";

import type { User } from "@clerk/nextjs/dist/types/api";

export const filterUserForClient = (user: User) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const username = user.username ?? processEmailIntoUsername(user.emailAddresses[0]?.emailAddress!);

  return { id: user.id, username, imageUrl: user.imageUrl };
};
