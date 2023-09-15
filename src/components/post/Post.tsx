import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

import { ProfileImage } from "@src/components/avatar/ProfileImage";
import { Column } from "@src/components/ui/Column";
import { Row } from "@src/components/ui/Row";

import type { RouterOutputs } from "@src/utils/api";
import type { FC } from "react";

type PostProps = RouterOutputs["post"]["getAll"][number];

dayjs.extend(relativeTime);

const Post: FC<PostProps> = ({ post, author }) => {
  const authorSlug = `/@${author.username}`;
  const postSlug = `/post/${post.id}`;

  return (
    <Row content="left" align="top" className="gap-4">
      <Link href={authorSlug}>
        <ProfileImage {...author} />
      </Link>
      <Column align="left" className="gap-4">
        <Row content="left" className="gap-2">
          <Link href={authorSlug}>
            <span className="text-2xl text-slate-300 hover:text-primary hover:underline">@{author.username}</span>
          </Link>
          <span>•</span>
          <Link href={postSlug}>
            <span className="text-xl font-thin text-slate-400 hover:text-white">{dayjs(post.createdAt).fromNow()}</span>
          </Link>
        </Row>
        <p className="text-2xl">{post.content}</p>
      </Column>
    </Row>
  );
};

export { Post };
