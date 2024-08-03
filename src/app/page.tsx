import { Button } from "@/ui/primitives/button";
import { Label } from "@/ui/primitives/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={"h-screen relative flex flex-col justify-center items-center"}
    >
      <Label
        className={
          "text-7xl font-semibold bg-gradient-to-tl from-white via-white/85 to-zinc-800 bg-clip-text tracking-tighter text-transparent"
        }
      >
        Empowering Developers
      </Label>
      <p className={"my-4 max-w-[44rem] text-center"}>
        We're working on{" "}
        <Link href={"https://github.com/substancelabs"} target={"_blank"}>
          <Label className={"text-bold border-b border-white cursor-pointer"}>
            Substance Lab
          </Label>
        </Link>
        , At Substance Lab, we test new things before public release. Such as
        upcoming React Compiler, Next.js Partial Pre-Rendering, TailwindCSS V4
        Oxide Engine, Rspack, JavaScript Bundlers, JavaScript Runtimes and
        JavaScript TC39 Proposals.
      </p>
      <div className="flex flex-row gap-6 my-4">
        <Link href={"https://github.com/silversubstance"} target={"_blank"}>
          <Button>
            Know More <GitHubLogoIcon className={"ml-2"} />{" "}
          </Button>
        </Link>
        <Link href={"https://github.com/substancelabs"} target={"_blank"}>
          <Button variant={"outline"}>Explore Substance Lab</Button>
        </Link>
      </div>
    </main>
  );
}
