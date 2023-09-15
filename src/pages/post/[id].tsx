import { generateServerSideHelpers } from "@src/server/server-utils/generateServerSideHelpers";
import { api } from "@src/utils/api";
import { Header } from "@src/components/layouts/Header";
import { MainSection } from "@src/components/layouts/MainSection";
import { Post } from "@src/components/post/Post";

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type SinglePostPageProps = InferGetStaticPropsType<typeof getStaticProps> & { postId: string };

const SinglePostPage: NextPage<SinglePostPageProps> = ({ postId }) => {
  const { data: post } = api.post.getPost.useQuery({ postId });

  if (!post) return <div>404</div>;

  return (
    <main>
      <Header />
      <MainSection>
        <Post post={post.post} author={post.author} />
      </MainSection>
    </main>
  );
};

const getStaticProps: GetStaticProps = async (context) => {
  const postId = context.params?.id;
  if (typeof postId !== "string") throw new Error("Invalid post id");

  const ssg = generateServerSideHelpers();

  await ssg.post.getPost.prefetch({ postId });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      postId,
    },
  };
};

const getStaticPaths = () => ({ paths: [], fallback: "blocking" });

export { getStaticProps, getStaticPaths };
export default SinglePostPage;
