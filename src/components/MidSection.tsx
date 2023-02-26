import Image from "next/image";
import Link from "next/link";

const MidSection = () => {
  return (
    <div className="px-5 lg:px-10 flex flex-col justify-center items-center font-mono">
      <div className="relative h-52 w-52 -mt-24">
        <Image
          src="/naruto-head.png"
          alt="naruto-head"
          fill
          className="h-full w-full object-contain"
        />
      </div>
      <h1 className="text-center font-[900] text-lg md:text-2xl lg:text-5xl lg:leading-[3.8rem]">
        Explore the World of Naruto Characters with NarutoDB
      </h1>
      <p className="text-center mt-10 text-sm lg:text-lg">
        NarutoDB API provides a comprehensive database of all the{" "}
        <DocLink link="characters" text="Characters" />,{" "}
        <DocLink link="clans" text="Clans" />,{" "}
        <DocLink link="villages" text="Villages" />,{" "}
        <DocLink link="kekkeigenkai" text="Kekkeigenkai" />,{" "}
        <DocLink link="tailedbeasts" text="Tailed Beasts" />,{" "}
        <DocLink link="teams" text="Teams" />,{" "}
        <DocLink link="akatsuki" text="Akatsuki" />, and{" "}
        <DocLink link="kara" text="Kara" /> members from the most awesome anime
        and manga series, Naruto. With our API, you can easily access detailed
        information about each character, including their name, appearance,
        personality, jutsus and Ninja tools. Whether you're a fan of the series,
        a developer building a Naruto-themed app, or just looking for fun trivia
        about your favorite characters, our API has you covered. Our API is
        designed to be easy to use and accessible to everyone, so you can start
        exploring the world of Naruto characters today.
      </p>
      <Link href="/docs">
        <button className="bg-orange-500 flex items-center gap-1 hover:bg-orange-600 text-white font-bold py-1 px-4 rounded mt-12">
          <img
            src="/leaf.png"
            alt="leaf logo"
            className="h-10 w-10 object-contain"
          />
          <p>Get Started</p>
        </button>
      </Link>
    </div>
  );
};

export default MidSection;

type DocLinkProps = {
  link: string;
  text: string;
};

const DocLink = ({ link, text }: DocLinkProps) => (
  <Link
    href={`/docs/${link}`}
    className="text-orange-500 underline underline-offset-[5px]"
  >
    {text}
  </Link>
);
