import React from "react";
import ExpItem from "./expItem/ExpItem";
import { useTranslations } from "next-intl";

const Experiences = ({ locale, title }: { locale: string; title: string }) => {
  const t = useTranslations("ExperienceSection");

  return (
    <div className="flex flex-1 py-8 flex-col gap-3">
      <h2 className="text-xl font-bold">{title}</h2>
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
            image={{
              url: "/projects/favicon.ico",
              alt: "Raisa image",
            }}
            lastItem={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
