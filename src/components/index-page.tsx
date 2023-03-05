import CharacterRenderBox from "./CharacterRenderBox";
import HeroSection from "./HeroSection";
import MidSection from "./MidSection";

function IndexPage() {
	return (
		<div className="flex flex-col gap-20 lg:gap-32">
			<HeroSection />
			<MidSection />
			<CharacterRenderBox />
		</div>
	);
}

export default IndexPage;
