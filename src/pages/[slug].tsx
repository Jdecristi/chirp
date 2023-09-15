import Head from "next/head";

import { ProfileImage } from "@src/components/avatar/ProfileImage";
import { Header } from "@src/components/layouts/Header";
import { MainSection } from "@src/components/layouts/MainSection";
import { PostsCarousel } from "@src/components/post/PostsCarousel";
import { Row } from "@src/components/ui/Row";
import { generateServerSideHelpers } from "@src/server/server-utils/generateServerSideHelpers";
import { api } from "@src/utils/api";

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type ProfilePageProps = InferGetStaticPropsType<typeof getStaticProps> & { username: string };

const ProfilePage: NextPage<ProfilePageProps> = ({ username }) => {
  const { data: user } = api.profile.getUserByUsername.useQuery({ username });

  if (!user) return <div>404</div>;

  return (
    <>
      <Head>
        <title>@{username}</title>
      </Head>
      <main>
        <Header />
        <MainSection>
          <Row filled>
            <div style={{ backgroundImage: "url(/images/default-banner-image.png)" }} className="relative h-40 w-full bg-contain">
              <div className="absolute bottom-0 translate-y-1/2 px-4">
                <ProfileImage imageUrl={user.imageUrl} username={user.username!} size="lg" />
              </div>
            </div>
          </Row>
          <Row content="left" filled className="border-b p-4 pt-20">
            <span className="text-3xl">@{user.username}</span>
          </Row>
          <PostsCarousel userId={user.id} />
        </MainSection>
      </main>
    </>
  );
};

const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  if (typeof slug !== "string") throw new Error("No Slug");

  const username = slug.replace("@", "");

  const ssg = generateServerSideHelpers();

  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};

const getStaticPaths = () => ({ paths: [], fallback: "blocking" });

export { getStaticPaths, getStaticProps };
export default ProfilePage;
