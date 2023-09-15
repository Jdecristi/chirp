/* eslint-disable @next/next/no-img-element */

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

import { ProfileImage } from "@src/components/avatar/ProfileImage";

import type { RouterOutputs } from "@src/utils/api";
import type { FC } from "react";

type PostProps = RouterOutputs["post"]["getAll"][number];

dayjs.extend(relativeTime);

const Post: FC<PostProps> = ({ post, author }) => {
  const authorSlug = `/@${author.username}`;
  const postSlug = `/post/${post.id}`;

  return (
    <div className="flex gap-4">
      <Link href={authorSlug}>
        <ProfileImage {...author} />
      </Link>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Link href={authorSlug}>
            <span className="text-2xl text-slate-300 hover:text-primary hover:underline">@{author.username}</span>
          </Link>
          <span>•</span>
          <Link href={postSlug}>
            <span className="text-xl font-thin text-slate-400 hover:text-white">{dayjs(post.createdAt).fromNow()}</span>
          </Link>
        </div>
        <p className="text-2xl">{post.content}</p>
      </div>
    </div>
  );
};

export { Post };
