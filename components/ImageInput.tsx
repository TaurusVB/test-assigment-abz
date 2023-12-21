import { cn } from "@/utils/cn";
import { registerSchema } from "@/utils/validationSchema";
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { TypeOf } from "zod";

type RegisterInput = TypeOf<typeof registerSchema>;

interface IImageInputProps {
  id: "name" | "email" | "phone" | "position_id" | "photo";
  register: UseFormRegister<RegisterInput>;
  errors: any;
  supportText: string;
  fileName: string | undefined;
}

const ImageInput: FC<IImageInputProps> = ({
  id,
  register,
  errors,
  supportText,
  fileName,
}) => {
  return (
    <div className="flex relative">
      <label
        className={cn(
          `flex items-center
          cursor-pointer 
          rounded-l-[4px]
          bg-lightGray
          appearance-none 
          focus:ring-0 
          w-[83px]
          peer         
          bg-transparent  
          border-[1px] 
          focus:outline-none 
          focus:border-blue-600 
          peer
           border-[#000]/[87]`,
          errors[id] && "focus:ring-[#CB3D40] border-[#CB3D40]"
        )}
      >
        <p className="ml-[15px] ">Upload</p>
        <input
          id={id}
          autoComplete={id}
          type="file"
          {...register(id)}
          className="invisible"
        />
      </label>
      <p
        className={cn(
          `flex 
          cursor-default
          rounded-r-[4px]
          px-4 
          py-[14px] 
          w-[calc(100%-83px)]
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
          errors[id] && "focus:ring-[#CB3D40] border-[#CB3D40]",
          fileName === "Upload your photo" && "text-[#7E7E7E]"
        )}
      >
        {fileName}
      </p>
      {errors[id] ? (
        <p className="absolute text-[#CB3D40] text-xs/[14px] left-4 -bottom-4">
          {errors[id]?.message}
        </p>
      ) : (
        <p className="absolute text-zinc-500 text-xs/[14px] left-4 -bottom-4">
          {supportText}
        </p>
      )}
    </div>
  );
};

export default ImageInput;
