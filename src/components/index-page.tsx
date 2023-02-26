import CharacterRenderBox from "./CharacterRenderBox";
import HeroSection from "./HeroSection";

export const IndexPage = (props) => {
  return (
    <div className="min-h-screen font-naruto">
      <HeroSection />
      <CharacterRenderBox />
    </div>
  );
};
