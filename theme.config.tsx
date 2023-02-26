import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "@/components/Logo";
import Head from "next/head";
import FooterSection from "@/components/FooterSection";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/hellskater/narutodb-website",
  },
  docsRepositoryBase:
    "https://github.com/hellskater/narutodb-website/blob/master",
  footer: {
    text: "NarutoDB",
    component: <FooterSection />
  },
  primaryHue: 29,
};

export default config;
