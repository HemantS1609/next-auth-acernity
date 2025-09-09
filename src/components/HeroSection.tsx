import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundLines } from "./ui/background-lines";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Development Tools & Tech Stack
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Our project is powered by modern web technologies ensuring
            scalability, performance, and a smooth developer experience. With a
            focus on clean architecture, optimized workflows, and seamless
            integrations, we build solutions that are not only fast and reliable
            but also adaptable to future growth.
          </p>
          <div className="mt-4">
            <Link href={"#"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore tools
              </Button>
            </Link>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default HeroSection;
