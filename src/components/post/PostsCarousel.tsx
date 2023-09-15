import { Fragment } from "react";

import { LoadingSpinner } from "@src/components/loading/Spinner";
import { Post } from "@src/components/post/Post";
import { api } from "@src/utils/api";

import type { FC } from "react";

type PostsCarouselProps = {
  userId?: string;
};

const PostsCarousel: FC<PostsCarouselProps> = ({ userId }) => {
  const { data: posts, isLoading } = userId ? api.post.getPostsByAuthorId.useQuery({ userId }) : api.post.getAll.useQuery();

  return (
    <div className="flex flex-col gap-4 p-4">
      {(() => {
        if (isLoading || !posts)
          return (
            <div className="mt-12 flex items-center justify-center">
              {isLoading ? <LoadingSpinner loading={true} /> : <p>Something went wrong</p>}
            </div>
          );
        return posts.map(({ post, author }) => (
          <Fragment key={post.id}>
            <Post post={post} author={author} />
          </Fragment>
        ));
      })()}
    </div>
  );
};

export { PostsCarousel };
