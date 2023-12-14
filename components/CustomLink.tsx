"use client";

import Link from "next/link";
import { FC } from "react";

interface ICustomLinkProps {
  text: string;
  href: string;
}

const CustomLink: FC<ICustomLinkProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="w-[100px] h-[34px] text-base/[26px] text-black/[87] flex items-center justify-center bg-yellow rounded-[80px] hover:bg-[#FFE302] mx-auto"
    >
      {text}
    </Link>
  );
};

export default CustomLink;
