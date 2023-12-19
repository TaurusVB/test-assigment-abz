"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "./Input";
import CustomButton from "./CustomButton";
import RadioInput from "./RadioInput";
import { registerSchema } from "@/utils/validationSchema";
import { TypeOf } from "zod";

type RegisterInput = TypeOf<typeof registerSchema>;

const positions = [
  {
    id: 1,
    name: "Lawyer",
  },
  {
    id: 2,
    name: "Content manager",
  },
  {
    id: 3,
    name: "Security",
  },
  {
    id: 4,
    name: "Designer",
  },
];

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
    reset,
  } = useForm<RegisterInput>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      photo: "",
    },
    resolver: zodResolver(registerSchema),
    delayError: 1000,
    mode: "onChange",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    setIsLoading(true);
    console.log(data);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-[50px] tablet:w-[380px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        errors={errors}
        id="name"
        label="Name"
        register={register}
        supportText="Vasyl Balaban"
      />

      <Input
        errors={errors}
        id="email"
        label="Email address"
        type="email"
        register={register}
        supportText="example@gmail.com"
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
          {positions.map((pos, i) => (
            <RadioInput
              defaultChecked={i === 0}
              name="position"
              key={pos.id}
              id={pos.name.toString()}
              type="radio"
              label={pos.name}
              register={register}
            />
          ))}
        </div>
      </div>
      <div>
        <CustomButton disabled={!isValid} text="Sign up" />
      </div>
    </form>
  );
};

export default Form;
