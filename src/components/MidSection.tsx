import Image from 'next/image';
import Link from 'next/link';
import DocLink from './DocLink';

function MidSection() {
	return (
		<div className="flex flex-col items-center justify-center px-5 font-mono lg:px-10">
			<div className="relative -mt-24 h-52 w-52">
				<Image
					src="/naruto-head.png"
					alt="naruto-head"
					fill
					className="h-full w-full object-contain"
				/>
			</div>
			<h1 className="text-center text-lg font-[900] md:text-2xl lg:text-5xl lg:leading-[3.8rem]">
				Explore the World of Naruto Characters with NarutoDB
			</h1>
			<p className="mt-10 text-center text-sm lg:text-lg">
				NarutoDB API provides a comprehensive database of all the{' '}
				<DocLink link="characters" text="Characters" />,{' '}
				<DocLink link="clans" text="Clans" />, <DocLink link="villages" text="Villages" />,{' '}
				<DocLink link="kekkeigenkai" text="Kekkeigenkai" />,{' '}
				<DocLink link="tailedbeasts" text="Tailed Beasts" />,{' '}
				<DocLink link="teams" text="Teams" />, <DocLink link="akatsuki" text="Akatsuki" />,
				and <DocLink link="kara" text="Kara" /> members from the most awesome anime and
				manga series, Naruto. With our API, you can easily access detailed information about
				each character, including their name, appearance, personality, jutsus and Ninja
				tools. Whether you&apos;re a fan of the series, a developer building a Naruto-themed
				app, or just looking for fun trivia about your favorite characters, our API has you
				covered. Our API is designed to be easy to use and accessible to everyone, so you
				can start exploring the world of Naruto characters today.
			</p>
			<Link
				href="/docs"
				className="mt-12 flex items-center gap-1 rounded bg-orange-500 py-1 px-4 font-bold text-white hover:bg-orange-600"
			>
				<button type="button" className="flex items-center gap-1">
					<img src="/leaf.png" alt="leaf logo" className="h-10 w-10 object-contain" />
					<p>Get Started</p>
				</button>
			</Link>
		</div>
	);
}

export default MidSection;
