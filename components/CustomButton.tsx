"use client";

import { FC } from "react";

interface ICustomButtonProps {
  disabled: boolean;
  type?: "submit" | "reset" | "button";
  text: string;
}

const CustomButton: FC<ICustomButtonProps> = ({
  disabled,
  type = "submit",
  text,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className=" transition w-[120px] h-[34px] text-base/[26px] text-black/[87] flex items-center justify-center bg-yellow rounded-[80px] hover:bg-[#FFE302] mx-auto disabled:bg-[#B4B4B4] disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
};

export default CustomButton;
