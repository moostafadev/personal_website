"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ChangeTheme";
import ChangeLang from "./ChangeLang";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <header className="h-16"></header>;
  }

  return (
    <header
      className="h-16 flex items-center"
      style={{ backgroundColor: resolvedTheme === "light" ? "black" : "white" }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="flex gap-2 items-center">
            <ModeToggle />
            <ChangeLang />
            <div
              className={`bg-white ${
                resolvedTheme === "light" ? "bg-white" : "bg-black"
              } rounded-md px-[1px] sm:hidden`}
              onClick={() =>
                setIsOpen((prev) => (prev === false ? true : false))
              }
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
