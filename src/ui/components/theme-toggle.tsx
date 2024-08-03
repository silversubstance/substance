"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className={"flex flex-row gap-4 text-black dark:text-zinc-400"}>
      <MoonIcon
        onClick={() => setTheme("dark")}
        width={15}
        height={15}
        className={
          "cursor-pointer rounded-full dark:hover:text-white hover:text-black"
        }
      />

      <SunIcon
        onClick={() => setTheme("light")}
        width={15}
        height={15}
        className={
          "cursor-pointer rounded-full dark:hover:text-white hover:text-black"
        }
      />
    </div>
  );
}
