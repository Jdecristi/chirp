import Head from "next/head";

import { PostsCarousel } from "@src/components/post/PostsCarousel";
import { Header } from "@src/components/layouts/Header";

import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="Chirp" content="Twitter with only Emojis" />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <main>
        <div className="mx-auto min-h-screen md:max-w-2xl md:border-x">
          <Header />
          <PostsCarousel />
        </div>
      </main>
    </>
  );
};
export default Page;
