"use client";

import { BreadcrumbDemo } from "@/components/Breadcrumb";
import CVDownload from "@/components/CVDownload";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CV = () => {
  const locale = useLocale();
  return (
    <div className="container">
      <div className="mb-4 flex justify-between items-center flex-col md:flex-row gap-4">
        <BreadcrumbDemo
          links={[
            {
              name: locale === "en" ? "CV" : "السيرة الذاتية",
              link: "/",
            },
          ]}
        />
        <CVDownload
          text={locale === "en" ? "Download CV" : "تحميل السيرة الذاتية"}
        />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex gap-4 flex-col items-center">
          <h2 className="text-xl font-bold">
            {locale === "en" ? "Page 1" : "صفحة 1"}
          </h2>
          <div className="border border-zinc-950 dark:border-zinc-950">
            <Image
              src={"/cv/Screenshot 2024-07-11 212505.png"}
              alt="CV Image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col items-center">
          <h2 className="text-xl font-bold">
            {locale === "en" ? "Page 2" : "صفحة 2"}
          </h2>
          <div className="border border-zinc-950 dark:border-zinc-950">
            <Image
              src={"/cv/Screenshot 2024-07-11 212518.png"}
              alt="CV Image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
