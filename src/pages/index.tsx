import { PostsCarousel } from "@src/components/post/PostsCarousel";
import { Header } from "@src/components/layouts/Header";
import { MainSection } from "@src/components/layouts/MainSection";

import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <main>
      <Header />
      <MainSection>
        <PostsCarousel />
      </MainSection>
    </main>
  );
};
export default HomePage;
