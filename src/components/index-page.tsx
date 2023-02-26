import CharacterRenderBox from "./CharacterRenderBox";
import HeroSection from "./HeroSection";
import MidSection from "./MidSection";
import { Card } from "nextra-theme-docs";

export const IndexPage = () => {
  return (
    <div className="flex flex-col gap-20 lg:gap-32">
      <HeroSection />
      <MidSection />
      <CharacterRenderBox />
    </div>
  );
};
