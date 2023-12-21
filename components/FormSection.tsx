"use client";

import { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { TypeOf } from "zod";

import Form from "./Form";
import Section from "./Section";
import { registerSchema } from "@/utils/validationSchema";

import successImage from "@/public/assets/success-image.svg";

type RegisterInput = TypeOf<typeof registerSchema>;

type Position = {
  id: number;
  name: string;
};

interface IFormSectionProps {
  isRegisterSuccessful: boolean;
  onSubmit: SubmitHandler<RegisterInput>;
  positions: Position[];
}

const FormSection: FC<IFormSectionProps> = ({
  isRegisterSuccessful,
  onSubmit,
  positions,
}) => {
  return (
    <>
      <Section className="pb-[100px]">
        {!isRegisterSuccessful && (
          <>
            <h2 id="signUp" className="text-[40px]/[40px] mb-[50px]">
              Working with POST request
            </h2>
            <Form onSubmit={onSubmit} positions={positions} />
          </>
        )}

        {isRegisterSuccessful && (
          <>
            <h2 className="text-[40px]/[40px] mb-[50px]">
              User successfully registered
            </h2>
            <Image
              width={328}
              height={290}
              alt="success-image"
              src={successImage}
              className="mx-auto"
            />
          </>
        )}
      </Section>
    </>
  );
};

export default FormSection;
