"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import CustomButton from "./CustomButton";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      photo: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-[50px] tablet:w-[380px] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input errors={errors} id="name" label="Name" register={register} />

      <Input
        errors={errors}
        id="email"
        label="Email address"
        type="email"
        register={register}
      />
      <Input
        errors={errors}
        id="phone"
        label="Phone number"
        type="tel"
        register={register}
      />
      <div>
        <CustomButton disabled={isLoading} text="Sign up" />
      </div>
    </form>
  );
};

export default Form;
