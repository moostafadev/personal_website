"use client";

import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/components/heroSection/heroSection.css";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  return (
    <section className="h-[calc(100vh-64px)] py-4 md:py-10 lg:py-16 xl:py-20 relative overflow-hidden">
      <div className="container relative h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-2 lg:py-10 ">
          <div
            className={`flex flex-col ${
              locale === "ar" ? "gap-8" : "gap-6"
            } py-2 md:py-20`}
          >
            <div className="flex gap-2 flex-col">
              <h1 className="text-2xl md:text-4xl font-extrabold">
                {t("name")}.
              </h1>
              <p className="text-xl md:text-3xl font-bold">{t("jobName")}</p>
            </div>
            <p className="text-lg md:text-2xl font-semibold">{t("quote")}</p>
          </div>
          <div>
            <div
              className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px] ${
                resolvedTheme === "light" ? "bg-black" : "bg-zinc-900"
              } rounded-full flex justify-center items-center mx-auto overflow-hidden relative box-shadow duration-300 group`}
            >
              <Image
                src={"/person/person_rm_bg.png"}
                alt="Person image"
                width={320}
                height={320}
                className="absolute bottom-0 left-[50%] translate-x-[-50%] group-hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute z-10 ${
            locale === "en" ? "left-4" : "right-4"
          } scroll-animation`}
        >
          <Link
            href={"#about"}
            className="writing-mode flex justify-center items-center"
          >
            {locale === "en" ? (
              <>
                <span className="font-semibold">{t("scroll")}</span>
                <ChevronDown size={20} className="ml-[-2px]" />
              </>
            ) : (
              <>
                <ChevronDown size={20} className="ml-[-2px]" />
                <span className="font-semibold">{t("scroll")}</span>
              </>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
