import React from "react";
import Heading from "./Heading";
import { useLocale } from "next-intl";
import Image from "next/image";
import SkillItem from "./SkillItem";

const SkillsSection = () => {
  const locale = useLocale();
  return (
    <section
      className="min-h-screen py-10 md:py-16 bg-zinc-50 dark:bg-zinc-900"
      id="skills"
    >
      <div className="container flex justify-center">
        <div className="flex flex-col gap-10 w-full">
          <Heading title={locale === "en" ? "Skills" : "المهارات"} />
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1 order-2 md:order-1 self-center">
              <Image
                src={"/sections_images/4911013_2517913.svg"}
                alt="Skills Image"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 py-10 md:py-20 justify-items-center items-center order-1 text-zinc-950">
              <SkillItem
                name="HTML"
                bgColor="bg-[rgb(242,102,37)]"
                isDark={true}
                imageUrl="/skills/html.png"
                borderColor="hover:border-[rgb(242,102,37)]"
              />
              <SkillItem
                name="CSS"
                bgColor="bg-[rgb(42,98,241)]"
                isDark={true}
                imageUrl="/skills/css.png"
                imageSize="w-[65%]"
                borderColor="hover:border-[rgb(42,98,241)]"
              />
              <SkillItem
                name="JS"
                bgColor="bg-[rgb(240,220,78)]"
                isDark={true}
                imageUrl="/skills/js.png"
                borderColor="hover:border-[rgb(240,220,78)]"
              />
              <SkillItem
                name="TS"
                bgColor="bg-[rgb(48,120,198)]"
                isDark={true}
                imageUrl="/skills/ts.png"
                borderColor="hover:border-[rgb(48,120,198)]"
              />
              <SkillItem
                name="ReactJs"
                bgColor="bg-[rgb(96,218,252)]"
                isDark={true}
                imageUrl="/skills/react.png"
                borderColor="hover:border-[rgb(96,218,252)]"
              />
              <SkillItem
                name="NextJs"
                bgColor="bg-[rgb(0,0,0)]"
                isDark={false}
                imageUrl="/skills/next.svg"
                borderColor="hover:border-[rgb(0,0,0)]"
              />
              <SkillItem
                name="SASS"
                bgColor="bg-[rgb(204,104,154)]"
                isDark={true}
                imageUrl="/skills/sass.png"
                borderColor="hover:border-[rgb(204,104,154)]"
              />
              <SkillItem
                name="Tailwind"
                bgColor="bg-[rgb(21,194,183)]"
                isDark={true}
                imageUrl="/skills/tailwind.png"
                borderColor="hover:border-[rgb(21,194,183)]"
              />
              <SkillItem
                name="Bootstrap"
                bgColor="bg-[rgb(111,17,245)]"
                isDark={true}
                imageUrl="/skills/bootstrap.png"
                borderColor="hover:border-[rgb(111,17,245)]"
              />
              <SkillItem
                name="ShadcnUI"
                bgColor="bg-[rgb(0,0,0)]"
                isDark={false}
                imageUrl="/skills/shadcn.png"
                borderColor="hover:border-[rgb(0,0,0)]"
              />
              <SkillItem
                name="ChakraUI"
                bgColor="bg-[rgb(93,202,201)]"
                isDark={true}
                imageUrl="/skills/chakra.png"
                borderColor="hover:border-[rgb(93,202,201)]"
              />
              <SkillItem
                name="Git"
                bgColor="bg-[rgb(241,81,53)]"
                isDark={true}
                imageUrl="/skills/git.png"
                borderColor="hover:border-[rgb(241,81,53)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
