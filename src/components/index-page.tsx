import CharacterRenderBox from "./CharacterRenderBox";
import HeroSection from "./HeroSection";
import MidSection from "./MidSection";

export const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MidSection />
      {/* <CharacterRenderBox /> */}
    </div>
  );
};
