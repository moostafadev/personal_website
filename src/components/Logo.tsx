"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href={"/"}>
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
    </Link>
  );
};

export default Logo;
