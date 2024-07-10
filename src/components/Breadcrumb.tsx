"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocale } from "next-intl";
import Link from "next/link";

interface ILink {
  links: {
    name: string;
    link: string;
  }[];
}

export function BreadcrumbDemo({ links }: ILink) {
  const locale = useLocale();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/"}>
              {locale === "en" ? "Homa Page" : "الصفحة الرئيسية"}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {links?.map((li, idx) => (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {links.length === idx + 1 ? (
                <BreadcrumbPage>{li.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={{ pathname: li.link }}>{li.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
