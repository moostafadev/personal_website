import React from "react";
import Heading from "../Heading";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import "@/components/experienceSection/experienceSection.css";

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
                  <div className="relative">
                    <span
                      className={`absolute ${
                        locale === "en" ? "left-[-10px]" : "right-[-10px]"
                      } top-1 outline outline-[3px] outline-[#fe735b] border-2 border-white dark:border-zinc-950 bg-[#fe735b] rounded-full w-4 h-4`}
                    ></span>
                    <div
                      className={`flex flex-col gap-2 ${
                        locale === "en" ? "ml-4" : "mr-4"
                      }`}
                    >
                      <h3 className="text-lg font-bold">{t("april")}</h3>
                      <div className="flex gap-2">
                        <div className="w-10">
                          <Image
                            src={"/projects/raisa-icon.png"}
                            alt="Raisa image"
                            width={50}
                            height={50}
                            className="w-10 h-10"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold">
                            {t("project-1 title")}
                          </h4>
                          <p>{t("project-1 desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <span
                      className={`absolute ${
                        locale === "en" ? "left-[-10px]" : "right-[-10px]"
                      } top-1 outline outline-[3px] outline-[#fe735b] border-2 border-white dark:border-zinc-950 bg-white background-animation dark:bg-zinc-950 rounded-full w-4 h-4`}
                    ></span>
                    <div
                      className={`flex flex-col gap-2 ${
                        locale === "en" ? "ml-4" : "mr-4"
                      }`}
                    >
                      <h3 className="text-lg font-bold">{t("march")}</h3>
                      <div className="flex gap-2">
                        <div className="w-10"></div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold">
                            {t("project-2 title")}
                          </h4>
                          <p>{t("project-2 desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
