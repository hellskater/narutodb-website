import Head from "next/head";
import CharacterRenderBox from "./CharacterRenderBox";
import HeroSection from "./HeroSection";
import MidSection from "./MidSection";

export const IndexPage = () => {
  return (
    <div className="flex flex-col gap-20 lg:gap-32">
      <HeroSection />
      <MidSection />
      <CharacterRenderBox />
    </div>
  );
};
