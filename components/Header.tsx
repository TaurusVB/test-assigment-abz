import Image from "next/image";
import React from "react";

import logo from "@/public/assets/Logo.svg";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <header className=" bg-white h-[60px] px-4 tablet:px-8 laptop:px-[60px] desktop:px-[30px] ">
      <nav className="flex items-center justify-between h-full max-w-[1170px] mx-auto">
        <a href="/">
          <Image width={104} height={26} alt="logo" src={logo} />
        </a>
        <div className="flex items-center justify-between w-[210px]">
          <CustomLink text="Users" href="#users" />
          <CustomLink text="Sign Up" href="#signUp" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
