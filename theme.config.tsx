import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "@/components/Logo";
import Head from "next/head";

const config: DocsThemeConfig = {
  chat: {
    link: "https://discord.gg/srini53168#3628",
  },
  logo: <Logo />,
  project: {
    link: "https://github.com/hellskater/narutodb-website",
  },
  docsRepositoryBase:
    "https://github.com/hellskater/narutodb-website/blob/master",
  footer: {
    text: "NarutoDB",
  },
  primaryHue: 29,
};

export default config;
