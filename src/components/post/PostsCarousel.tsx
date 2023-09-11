import { api } from "@src/utils/api";
import { Fragment } from "react";
import { CreatePost } from "@src/components/post/CreatePost";
import { Post } from "@src/components/post/Post";
import { LoadingSpinner } from "@src/components/loading/Spinner";

const PostsCarousel = () => {
  const { data, isLoading } = api.post.getAll.useQuery();

  return (
    <>
      <CreatePost />
      <div className="flex flex-col gap-4 p-4">
        {(() => {
          if (isLoading || !data)
            return (
              <div className="mt-12 flex items-center justify-center">
                {isLoading ? <LoadingSpinner loading={true} /> : <p>Something went wrong</p>}
              </div>
            );
          return data.map(({ post, author }) => (
            <Fragment key={post.id}>
              <Post post={post} author={author} />
            </Fragment>
          ));
        })()}
      </div>
    </>
  );
};

export { PostsCarousel };
