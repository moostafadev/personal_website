import { BreadcrumbDemo } from "@/components/Breadcrumb";
import Experiences from "@/components/Experiences";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const t = useTranslations("ExperienceSection");
  const locale = useLocale();

  return (
    <div className="container">
      <div className="mb-4 flex justify-between items-center flex-col md:flex-row gap-4">
        <BreadcrumbDemo
          links={[
            {
              name: locale === "en" ? "Experience" : "الخبرات",
              link: "/",
            },
          ]}
        />
      </div>
      <Experiences locale={locale} title={t("exp-1")} />
      <div className="py-8 flex flex-col gap-10">
        <Heading title={locale === "en" ? "Certificates" : "شهادات"} />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-2 items-center">
            <h2 className="text-xl font-bold">
              Pro Frontend Engineer ReactJS + TypeScript + Redux | [Udemy]
            </h2>
            <Link
              href={
                "https://www.udemy.com/certificate/UC-564161cf-aeec-400b-aadb-b7b987820b2f/"
              }
              target="_blank"
            >
              <Button variant={"link"} className="text-lg font-bold flex gap-1">
                <Link2 />
                <span>{locale === "en" ? "Certificate" : "الشهادة"}</span>
              </Button>
            </Link>
          </div>
          <div className="p-1 border-2 border-zinc-950 dark:border-white">
            <Image
              src={"/certificates/UC-564161cf-aeec-400b-aadb-b7b987820b2f.jpg"}
              alt={"Certificate image"}
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
