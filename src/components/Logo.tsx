"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Link href={"/#"}>
      {isMounted && resolvedTheme ? (
        <Image
          src={
            resolvedTheme === "light"
              ? "/logo/logo_light.png"
              : "/logo/logo_dark.png"
          }
          alt={`Logo ${resolvedTheme}`}
          width={100}
          height={100}
        />
      ) : (
        <span></span>
      )}
    </Link>
  );
};

export default Logo;
