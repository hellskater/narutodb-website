import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="h-[50vh] w-screen relative">
        <Image
          src="/banner.jpg"
          alt="naruto banner"
          fill
          className="h-full w-full object-cover opacity-40"
        />

        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <header className="text-8xl leading-normal tracking-wider font-naruto font-semibold text-gray-800 dark:text-white selection:text-orange-600 text-center dark:selection:bg-black selection:bg-white selection:bg-opacity-70 dark:selection:bg-opacity-80 ">
            Naruto Character Universe
          </header>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
