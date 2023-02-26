import Head from "next/head";
import CharacterRenderBox from "./CharacterRenderBox";
import HeroSection from "./HeroSection";
import MidSection from "./MidSection";

export const IndexPage = () => {
  return (
    <div className="flex flex-col gap-20 lg:gap-32">
      <Head>
        <title>NarutoDB</title>
        <meta
          name="description"
          content="NarutoDB API provides a comprehensive database of all the Characters, Clans, Villages, Kekkeigenkai, Tailed Beasts, Teams, Akatsuki, and Kara members from the most awesome anime and manga series, Naruto. With our API, you can easily access detailed information about each character, including their name, appearance, personality, jutsus and Ninja tools. Whether you're a fan of the series, a developer building a Naruto-themed app, or just looking for fun trivia about your favorite characters, our API has you covered. Our API is designed to be easy to use and accessible to everyone, so you can start exploring the world of Naruto characters today."
        />
        <link rel="icon" href="/leaf.png" />
      </Head>
      <HeroSection />
      <MidSection />
      <CharacterRenderBox />
    </div>
  );
};
