"use client";

import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const t = useTranslations("HeroSection");
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  return (
    <section
      className={`min-h-screen ${
        resolvedTheme === "light" ? "bg-zinc-50" : "bg-zinc-900"
      }`}
      id="about"
    >
      <div className="container">
        <Image src={"/about_image.png"} alt="about" width={500} height={500} />
      </div>
    </section>
  );
};

export default AboutSection;
