"use client";

import { FC, ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
}

const Section: FC<ISectionProps> = ({ children }) => {
  return (
    <section className=" w-full mobile:w-[360px] tablet:w-[768px] laptop:w-[1024px] desktop:w-[1200px] px-4 tablet:px-8 laptop:px-[60px] desktop:px-[30px]">
      {children}
    </section>
  );
};

export default Section;
