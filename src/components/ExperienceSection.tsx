import React from "react";
import Heading from "./Heading";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Experiences from "./Experiences";

const ExperienceSection = () => {
  const t = useTranslations("ExperienceSection");
  const locale = useLocale();

  return (
    <section className="min-h-screen py-10 md:py-16" id="experience">
      <div className="container flex justify-center">
        <div className="flex flex-col gap-10 w-full">
          <Heading title={t("heading")} />
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="flex-1 order-2 md:order-1 self-center">
              <Image
                src={
                  "/sections_images/product-quality-concept-illustration.png"
                }
                alt="about"
                width={500}
                height={500}
              />
            </div>
            <div className="flex-1 flex gap-2 flex-col">
              <Experiences locale={locale} title={t("exp-1")} />
              <div className="text-center hidden md:block">
                <Link href={`/${locale}/experience`}>
                  <Button>
                    {locale === "en" ? "Read more" : "أقراء المزيد"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center md:hidden">
            <Link href={`/${locale}/experience`}>
              <Button>{locale === "en" ? "Read more" : "أقراء المزيد"}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
