import React from "react";
import Heading from "./Heading";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { NotepadText } from "lucide-react";
import CVDownload from "./CVDownload";

const ExperienceSection = () => {
  const t = useTranslations("ExperienceSection");
  const locale = useLocale();

  return (
    <section
      className="min-h-screen md:h-screen py-10 md:py-16"
      id="experience"
    >
      <div className="container flex h-full content-stretch flex-wrap justify-center">
        <div className="flex flex-col gap-10">
          <Heading title={t("heading")} />
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 h-full">
            <div className="flex-1 order-2 md:order-1">
              <Image
                src={
                  "/sections_images/product-quality-concept-illustration.png"
                }
                alt="about"
                width={500}
                height={500}
              />
            </div>
            <div className="flex-1 flex flex-col gap-6 order-1 md:order-2">
              <p
                className={`font-semibold text-center text-sm md:text-base leading-normal ${
                  locale === "en" ? "md:text-left" : "md:text-right"
                }`}
              ></p>
              <div className="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
                <Link href={locale === "en" ? "/en/cv" : "/ar/cv"}>
                  <Button className="font-semibold flex gap-1">
                    <span>
                      <NotepadText />
                    </span>
                    <span>
                      {locale === "en" ? "Veiw CV" : "مشاهدة السيرة الذاتية"}
                    </span>
                  </Button>
                </Link>
                <CVDownload
                  text={
                    locale === "en" ? "Download CV" : "تحميل السيرة الذاتية"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
