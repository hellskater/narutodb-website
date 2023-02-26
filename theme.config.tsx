import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "@/components/Logo";
import Head from "next/head";
import FooterSection from "@/components/FooterSection";
import { ThemeSwitch } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/hellskater/narutodb-website",
  },
  docsRepositoryBase:
    "https://github.com/hellskater/narutodb-website/blob/master",
  footer: {
    text: "NarutoDB",
    component: <FooterSection />,
  },
  primaryHue: 29,
  useNextSeoProps() {
    return {
      defaultTitle: "NarutoDB",
      titleTemplate: "%s | NarutoDB",
      description:
        "NarutoDB API provides a comprehensive database of all the Characters, Clans, Villages, Kekkeigenkai, Tailed Beasts, Teams, Akatsuki, and Kara members from the most awesome anime and manga series, Naruto. With our API, you can easily access detailed information about each character, including their name, appearance, personality, jutsus and Ninja tools. Whether you're a fan of the series, a developer building a Naruto-themed app, or just looking for fun trivia about your favorite characters, our API has you covered. Our API is designed to be easy to use and accessible to everyone, so you can start exploring the world of Naruto characters today.",
      openGraph: {
        title: "NarutoDB",
        description:
          "NarutoDB API provides a comprehensive database of all the Characters, Clans, Villages, Kekkeigenkai, Tailed Beasts, Teams, Akatsuki, and Kara members from the most awesome anime and manga series, Naruto. With our API, you can easily access detailed information about each character, including their name, appearance, personality, jutsus and Ninja tools. Whether you're a fan of the series, a developer building a Naruto-themed app, or just looking for fun trivia about your favorite characters, our API has you covered. Our API is designed to be easy to use and accessible to everyone, so you can start exploring the world of Naruto characters today.",
        images: [
          {
            url: "https://images.freeimages.com/fic/images/icons/1275/naruto_vol_1/256/uzumaki_naruto.png",
            width: 800,
            height: 600,
            alt: "NarutoDB Logo",
          },
        ],
      },
    };
  },
  navbar: {
    extraContent: <ThemeSwitch />,
  },
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/jpg" sizes="32x32" href={`/logo.png`} />
      </>
    );
  },
};

export default config;
