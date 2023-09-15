import Image from "next/image";

import { cn } from "@src/utils";
import { cva } from "class-variance-authority";

import type { FC } from "react";
import type { RouterOutputs } from "@src/utils/api";
import type { VariantProps } from "class-variance-authority";

type ProfileProps = {
  username: RouterOutputs["post"]["getAll"][number]["author"]["username"];
  imageUrl: RouterOutputs["post"]["getAll"][number]["author"]["imageUrl"];
  className?: string;
};

const profileImageVariants = cva("rounded-full border", {
  variants: {
    size: {
      sm: "h-9 w-9",
      md: "h-12 w-12",
      lg: "h-24 w-24",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ProfileImageProps = ProfileProps & VariantProps<typeof profileImageVariants>;

const ProfileImage: FC<ProfileImageProps> = ({ imageUrl, username, size, className }) => (
  <Image src={imageUrl} alt={`@${username}'s profile image`} className={cn(profileImageVariants({ size, className }))} width={48} height={48} />
);

export { ProfileImage };
