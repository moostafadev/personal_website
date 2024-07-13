import React from "react";
import Heading from "./Heading";
import { useLocale } from "next-intl";
import Image from "next/image";

const SkillsSection = () => {
  const locale = useLocale();
  return (
    <section className="min-h-screen py-10 md:py-16" id="skills">
      <div className="container flex justify-center">
        <div className="flex flex-col gap-10 w-full">
          <Heading title={locale === "en" ? "Skills" : "المهارات"} />
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1 order-2 md:order-1">
              <Image
                src={"/sections_images/4911013_2517913.svg"}
                alt="Skills Image"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 py-10 md:py-20 justify-items-center order-1 text-zinc-950">
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  HTML
                </span>
                <Image
                  src="/skills/html.png"
                  alt="html"
                  width={100}
                  height={50}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  CSS
                </span>
                <Image
                  src="/skills/css.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[60%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  JS
                </span>
                <Image
                  src="/skills/js.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] group-hover:bottom-[-100px] rounded-md"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  TS
                </span>
                <Image
                  src="/skills/ts.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] rounded-md group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  ReactJs
                </span>
                <Image
                  src="/skills/react.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  NextJs
                </span>
                <Image
                  src="/skills/next.svg"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] h-[90%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  SASS
                </span>
                <Image
                  src="/skills/sass.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  Tailwind
                </span>
                <Image
                  src="/skills/tailwind.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] h-[90%] rounded-md group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  Bootstrap
                </span>
                <Image
                  src="/skills/bootstrap.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  ShadcnUI
                </span>
                <Image
                  src="/skills/shadcn.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] h-[90%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  Chakra
                </span>
                <Image
                  src="/skills/chakra.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] h-[90%] group-hover:bottom-[-100px]"
                />
              </div>
              <div className="overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md relative p-2 bg-[#eaf9f8] group cursor-pointer hover:shadow-sm hover:border-[#ff6224] border duration-300">
                <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
                  Git
                </span>
                <Image
                  src="/skills/git.png"
                  alt="html"
                  width={100}
                  height={100}
                  className="duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute w-[90%] h-[90%] group-hover:bottom-[-100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
