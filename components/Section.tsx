"use client";

import { cn } from "@/utils/cn";
import { FC, ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
  className?: string;
}

const Section: FC<ISectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "h-full w-full mobile:w-[360px] tablet:w-[768px] laptop:w-[1024px] desktop:w-[1200px] px-4 tablet:px-8 laptop:px-[60px] desktop:px-[30px] mx-auto text-center",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
