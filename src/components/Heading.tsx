import React from "react";

interface IProps {
  title: string;
}

const Heading = ({ title }: IProps) => {
  return (
    <h1 className="text-4xl text-center font-extrabold relative group">
      <span>{title}</span>
      <span
        className={`absolute w-8 h-1 bg-zinc-950 dark:bg-white bottom-[-12px] left-[50%] translate-x-[-50%] duration-300 group-hover:w-20`}
      ></span>
    </h1>
  );
};

export default Heading;
