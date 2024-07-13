import React from "react";
import Heading from "../Heading";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import "@/components/experienceSection/experienceSection.css";
import ExpItem from "../ExpItem";

const ExperienceSection = () => {
  const t = useTranslations("ExperienceSection");
  const locale = useLocale();

  return (
    <section
      className="min-h-screen md:h-screen py-10 md:py-16"
      id="experience"
    >
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
            <div className="flex flex-1 py-8 flex-col gap-3">
              <h2 className="text-xl font-bold">{t("exp-1")}</h2>
              <div
                className={`${
                  locale === "en" ? "border-l-4" : "border-r-4"
                } border-zinc-950 dark:border-white ml-1`}
              >
                <div className="py-4 flex flex-col gap-4">
                  <ExpItem
                    title={t("project-1 title")}
                    desc={t("project-1 desc")}
                    month={t("april")}
                    locale={locale}
                    image={{
                      url: "/projects/raisa-icon.png",
                      alt: "Raisa image",
                    }}
                    lastItem={false}
                  />
                  <ExpItem
                    title={t("project-2 title")}
                    desc={t("project-2 desc")}
                    month={t("march")}
                    locale={locale}
                    lastItem={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
