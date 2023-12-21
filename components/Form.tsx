"use client";

import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf } from "zod";

import Input from "./Input";
import CustomButton from "./CustomButton";
import RadioInput from "./RadioInput";
import ImageInput from "./ImageInput";
import { registerSchema } from "@/utils/validationSchema";

type RegisterInput = TypeOf<typeof registerSchema>;

type Position = {
  id: number;
  name: string;
};
interface IFormProps {
  onSubmit: SubmitHandler<RegisterInput>;
  positions: Position[] | undefined;
}

const Form: FC<IFormProps> = ({ onSubmit, positions }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
    reset,
    watch,
  } = useForm<RegisterInput>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position_id: "",
      photo: {
        name: "",
        lastModified: 0,
        type: "",
        size: 0,
      },
    },
    resolver: zodResolver(registerSchema),
    delayError: 500,
    mode: "onChange",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const imageFile = watch("photo");

  return (
    <>
      <form
        className="flex flex-col gap-[50px] tablet:w-[380px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          errors={errors}
          id="name"
          label="Name"
          register={register}
          supportText="Jhon"
        />

        <Input
          errors={errors}
          id="email"
          label="Email address"
          type="email"
          register={register}
          supportText="jhon@example.com"
        />
        <Input
          errors={errors}
          id="phone"
          label="Phone number"
          type="tel"
          register={register}
          supportText="+38 (XXX) XXX - XX - XX"
        />
        <div className="flex flex-col items-start">
          <p className="mb-[11px]">Select your position</p>
          <div className="flex gap-[7px]  flex-col items-start">
            {positions?.map((pos, i) => (
              <RadioInput
                defaultChecked={i === 0}
                name="position_id"
                key={pos.id}
                id={pos.id.toString()}
                type="radio"
                label={pos.name}
                register={register}
              />
            ))}
          </div>
        </div>
        <ImageInput
          id="photo"
          register={register}
          errors={errors}
          supportText="*.jpg | *.jpeg"
          fileName={
            imageFile?.size !== 0
              ? imageFile[0]?.name || "Upload your photo"
              : "Upload your photo"
          }
        />
        <div>
          <CustomButton disabled={!isValid} text="Sign up" />
        </div>
      </form>
    </>
  );
};

export default Form;
