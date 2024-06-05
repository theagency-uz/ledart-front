"use client";
import { usePathname } from "next/navigation";

export default function LangSwitcher({ lng }: { lng: string }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className={` notranslate`}>
      <a href={redirectedPathName("ru")}>Ru</a>
      <a href={redirectedPathName("uz")}>Uz</a>
      <a href={redirectedPathName("en")}>En</a>
    </div>
  );
}
