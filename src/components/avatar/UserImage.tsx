import Image from "next/image";

import type { FC } from "react";
import type { RouterOutputs } from "@src/utils/api";

type UserImageProps = {
  imageUrl: RouterOutputs["post"]["getAll"][number]["author"]["imageUrl"];
  username: RouterOutputs["post"]["getAll"][number]["author"]["username"];
};

const UserImage: FC<UserImageProps> = ({ imageUrl, username }) => (
  <Image src={imageUrl} alt={`@${username}'s profile image`} className="aspect-square h-12 rounded-full border" width={48} height={48} />
);

export { UserImage };
