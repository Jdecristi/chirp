import { Fragment } from "react";

import { LoadingSpinner } from "@src/components/loading/Spinner";
import { Post } from "@src/components/post/Post";
import { Column } from "@src/components/ui/Column";
import { Row } from "@src/components/ui/Row";
import { api } from "@src/utils/api";

import type { FC } from "react";

type PostsCarouselProps = {
  userId?: string;
};

const PostsCarousel: FC<PostsCarouselProps> = ({ userId }) => {
  const { data: posts, isLoading } = userId ? api.post.getPostsByAuthorId.useQuery({ userId }) : api.post.getAll.useQuery();

  return (
    <Column className="w-full gap-4 p-4">
      {(() => {
        if (isLoading || !posts)
          return (
            <Row className="mt-12" filled>
              {isLoading ? <LoadingSpinner loading={true} /> : <p>Something went wrong</p>}
            </Row>
          );
        return posts.map(({ post, author }) => (
          <Fragment key={post.id}>
            <Row content="left" filled>
              <Post post={post} author={author} />
            </Row>
          </Fragment>
        ));
      })()}
    </Column>
  );
};

export { PostsCarousel };
