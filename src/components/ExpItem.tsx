import Image from "next/image";
import React from "react";

interface IProp {
  locale: string;
  month: string;
  title: string;
  desc: string;
  image?: {
    url: string;
    alt: string;
  };
  lastItem: boolean;
}

const ExpItem = ({ desc, locale, month, title, image, lastItem }: IProp) => {
  return (
    <div className="relative">
      <span
        className={`absolute ${
          locale === "en" ? "left-[-10px]" : "right-[-10px]"
        } top-1 outline outline-[3px] outline-[#fe735b] border-2 border-white dark:border-zinc-950 ${
          lastItem ? "background-animation" : "bg-[#fe735b]"
        } dark:bg-zinc-950 rounded-full w-4 h-4`}
      ></span>
      <div
        className={`flex flex-col gap-2 ${locale === "en" ? "ml-4" : "mr-4"}`}
      >
        <h3 className="text-lg font-bold">{month}</h3>
        <div className="flex gap-2">
          <div className="w-10">
            {image ? (
              <Image
                src={image.url}
                alt={image.alt}
                width={50}
                height={50}
                className="w-10 h-10"
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-sm md:text-base">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpItem;
