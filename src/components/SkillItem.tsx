import Image from "next/image";
import React from "react";

interface IProps {
  name: string;
  bgColor: string;
  borderColor: string;
  isDark: boolean;
  imageUrl: string;
  imageSize?: string;
}

const SkillItem = ({
  name,
  bgColor,
  isDark,
  imageUrl,
  imageSize,
  borderColor,
}: IProps) => {
  return (
    <div
      className={`overflow-hidden w-[120px] h-[120px] md:w-[100px] md:h-[100px] rounded-md ${bgColor} relative p-2 bg-opacity-30 ${
        isDark ? "dark:text-white" : "dark:bg-white"
      } group cursor-pointer hover:shadow-md hover:scale-105 ${borderColor} border duration-300`}
    >
      <span className="text-xl font-bold absolute -top-10 left-1/2 -translate-x-1/2 duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
        {name}
      </span>
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className={`duration-300 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 absolute ${
          imageSize ? imageSize : "w-[90%]"
        } rounded-md group-hover:bottom-[-100px]`}
      />
    </div>
  );
};

export default SkillItem;
