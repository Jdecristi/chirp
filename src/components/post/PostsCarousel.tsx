import { api } from "@src/utils/api";
import { Fragment } from "react";
import { Post } from "@src/components/post/Post";
import { LoadingSpinner } from "../loading/Spinner";

const PostsCarousel = () => {
  const { data, isLoading } = api.post.getAll.useQuery();

  if (isLoading)
    return (
      <div className="mt-12 flex items-center justify-center">
        <LoadingSpinner loading={true} />
      </div>
    );

  if (!data)
    return (
      <div className="mt-12 flex items-center justify-center">
        <p>Something went wrong</p>;
      </div>
    );

  return (
    <div className="flex flex-col gap-4 p-4">
      {data.map(({ post, author }) => (
        <Fragment key={post.id}>
          <Post post={post} author={author} />
        </Fragment>
      ))}
    </div>
  );
};

export { PostsCarousel };
