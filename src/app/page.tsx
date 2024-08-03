import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Label } from "@/ui/primitives/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={"h-screen relative flex flex-col justify-center items-center"}
    >
      <Label className={"text-3xl font-semibold tracking-tighter"}>
        Empowering Developers
      </Label>
      <p className={"my-4 max-w-[44rem] text-center"}>
        We're working on{" "}
        <Link href={"https://github.com/substancelabs"} target={"_blank"}>
          <Label
            className={
              "text-bold border-b dark:border-white border-black hover:cursor-pointer dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            }
          >
            Substance Lab
          </Label>
        </Link>
        , At Substance Lab, we test new things before public release. Such as
        upcoming React Compiler, Next.js Partial Pre-Rendering, TailwindCSS V4
        Oxide Engine, Rspack, JavaScript Bundlers, JavaScript Runtimes and
        JavaScript TC39 Proposals.
      </p>
      <div className={"flex flex-row gap-6 my-4"}>
        <Link href={"https://silver.vgseven.com"} target={"_blank"}>
          <Image
            src={
              "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-white-fill-favicon.png"
            }
            alt={"silvercompany-icon"}
            width={16}
            height={16}
          />
        </Link>
        <Link href={"https://github.com/silversubstance"} target={"_blank"}>
          <GitHubLogoIcon />
        </Link>
        <ThemeToggle />
      </div>
      <div>
        <Link href={"https://vgseven.com"} target={"_blank"}>
          <Label
            className={"text-sm dark:text-zinc-500 text-black cursor-pointer"}
          >
            VGSEVEN &copy; 2024
          </Label>
        </Link>
      </div>
    </main>
  );
}
