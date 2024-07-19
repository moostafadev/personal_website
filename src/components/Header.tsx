"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ChangeTheme";
import ChangeLang from "./ChangeLang";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import useScrollDirection from "@/hooks/useScrollDir";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollDirection = useScrollDirection(0);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const links: { title: string; to: string }[] = [
    {
      title: t("link_1"),
      to: `/${locale}/#about`,
    },
    {
      title: t("link_2"),
      to: `/${locale}/#experience`,
    },
    {
      title: t("link_3"),
      to: `/${locale}/#skills`,
    },
    {
      title: t("link_4"),
      to: `/${locale}/#projects`,
    },
    {
      title: t("link_5"),
      to: `/${locale}/#contact`,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.ceil(scrollPercentage));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const isOpenHandler = () => setIsOpen((prev) => !prev);

  const navMobileRender = links.map((link) => (
    <li
      key={link.title}
      className={`text-lg font-bold w-full hover:text-zinc-300 dark:hover:text-zinc-600 duration-300`}
      onClick={isOpenHandler}
    >
      <Link href={link.to} className="block w-full text-center p-2">
        {link.title}
      </Link>
    </li>
  ));
  const navRender = links.map((link) => (
    <li
      key={link.title}
      className={`font-semibold lg:text-lg lg:font-bold hover:text-zinc-300 dark:hover:text-zinc-600 duration-300`}
    >
      <Link href={link.to}>{link.title}</Link>
    </li>
  ));

  return (
    <header
      className={`h-16 flex items-center fixed bottom-0 md:top-0 w-full shadow-lg z-50 bg-[hsl(240deg,10%,4%,.95)] backdrop-blur-sm dark:bg-[hsl(0deg,0%,100%,.95)] duration-300 ${
        scrollDirection === "down"
          ? "bottom-[-64px] md:top-[-64px]"
          : "bottom-0 md:top-0"
      }`}
    >
      <div
        className={`h-1 fixed bottom-16 md:top-16 ${
          locale === "en" ? "left-0" : "right-0"
        } bg-zinc-950 dark:bg-white`}
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="container">
        <div className="flex justify-between items-center gap-2">
          <Logo />
          <nav className="flex gap-10 items-center">
            <ul
              className={`hidden md:flex gap-4 lg:gap-6 items-center text-white dark:text-zinc-950`}
            >
              {navRender}
            </ul>
            <div className="flex gap-2 items-center">
              <ModeToggle />
              <ChangeLang />
              <div
                className={`bg-white dark:bg-zinc-950 rounded-md px-[1px] md:hidden cursor-pointer hover:opacity-90 duration-300 relative w-[32px] h-[32px]`}
                onClick={isOpenHandler}
              >
                <span
                  className={`absolute w-[75%] h-1 bg-zinc-950 dark:bg-white top-2 left-[50%] translate-x-[-50%] rounded-md ${
                    isOpen ? "rotate-45 top-[14px] w-[28px] !bg-red-500" : ""
                  } duration-300`}
                ></span>
                <span
                  className={`absolute w-[75%] h-1 bg-zinc-950 dark:bg-white bottom-2 right-[50%] translate-x-[50%] rounded-md ${
                    isOpen ? "-rotate-45 top-[14px] w-[28px] !bg-red-500" : ""
                  } duration-300`}
                ></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* To Phones */}
      <div
        className={`fixed bottom-16 left-0 w-full ${
          isOpen ? "h-[calc(100vh-64px)]" : "h-0"
        } duration-300 bg-zinc-950 !backdrop-blur-sm dark:bg-white overflow-hidden`}
      >
        <ul
          className={`flex md:hidden gap-4 lg:gap-6 items-center flex-col py-16 text-white dark:text-zinc-950`}
        >
          {navMobileRender}
        </ul>
        <div className="p-4 py-8 flex flex-col gap-4 absolute bottom-0 z-50">
          <h3
            className={`text-lg font-bold relative text-white dark:text-zinc-950`}
          >
            {locale === "en" ? "Social media:" : "التواصل الاجتماعي:"}
            <span
              className={`absolute bottom-[-8px] ${
                locale === "en" ? "left-0" : "right-0"
              } h-1 bg-white dark:bg-zinc-950 duration-2000 ${
                isOpen ? "w-12" : "w-0"
              }`}
            ></span>
          </h3>
          <ul className="flex gap-1">
            <li>
              <Link
                href={"https://www.linkedin.com/in/mostafa-ahmed-1089132b4/"}
                target="_blank"
              >
                <Image
                  src={"/icons/linkedIn.svg"}
                  alt="linkedIn"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/m_daar4/"} target="_blank">
                <Image
                  src={"/icons/instagram.svg"}
                  alt="instagram"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.facebook.com/profile.php?id=100015156155072"}
                target="_blank"
              >
                <Image
                  src={"/icons/facebook.svg"}
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link
                href={"https://api.whatsapp.com/send?phone=201040991782"}
                target="_blank"
              >
                <Image
                  src={"/icons/whatsapp.svg"}
                  alt="whatsapp"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link href={"https://x.com/Mostafa56069655"} target="_blank">
                <Image src={"/icons/x.svg"} alt="x" width={40} height={40} />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.youtube.com/@mostafa_dev"}
                target="_blank"
              >
                <Image
                  src={"/icons/youtube.svg"}
                  alt="youtube"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
