/* eslint-disable @next/next/no-img-element */

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

import type { RouterOutputs } from "@src/utils/api";
import type { FC } from "react";

type PostProps = RouterOutputs["post"]["getAll"][number];

dayjs.extend(relativeTime);

const Post: FC<PostProps> = ({ post, author }) => (
  <div className="flex gap-4">
    <Image src={author.imageUrl} alt={`@${author.username}'s profile image`} className="aspect-square h-12 rounded-full" width={48} height={48} />
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl text-slate-300">@{author.username}</span>
        <span>•</span>
        <span className="text-xl font-thin text-slate-400">{dayjs(post.createdAt).fromNow()}</span>
      </div>
      <p className="text-2xl">{post.content}</p>
    </div>
  </div>
);

export { Post };
