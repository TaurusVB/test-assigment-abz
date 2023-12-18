import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { cn } from "@/utils/cn";

interface IInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: FC<IInputProps> = ({
  id,
  label,
  register,
  required,
  errors,
  type,
}) => {
  return (
    <div className=" relative">
      <input
        placeholder=" "
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        className={cn(
          `block 
          rounded
          px-4 
          py-[14px] 
          w-full 
          text-base/[26px]
        text-black/[87] 
          bg-lightGray
          appearance-none 
          focus:ring-0 
          peer         
          bg-transparent  
          border-[1px] 
          focus:outline-none 
          focus:border-blue-600 
          peer
          border-[#D0CFCF]`,
          errors[id] && "focus:ring-[#CB3D40]"
        )}
      />
      <label
        className=" absolute 
        text-md 
        text-zinc-400 
        transform 
        scale-75 
        origin-[0] 
        left-[12px]
        peer-placeholder-shown:scale-100 
        peer-focus:scale-75
        duration-300  
        -translate-y-4  
        top-1 
        z-10  
         bg-lightGray 
         px-2 
         peer-focus:px-2 
         peer-placeholder-shown:-translate-y-1/2 
         peer-placeholder-shown:top-1/2 
         peer-focus:top-1  
         peer-focus:-translate-y-4 
         peer-focus:left-[12px]
         rtl:peer-focus:translate-x-1/4 
         rtl:peer-focus:left-auto 
         start-1"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
