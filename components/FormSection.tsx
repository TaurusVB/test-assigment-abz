"use client";

import { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { TypeOf } from "zod";

import Form from "./Form";
import Section from "./Section";
import { registerSchema } from "@/utils/validationSchema";

import successImage from "@/public/assets/success-image.svg";
import Title from "./Title";

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
      <Section id="signUp" className="pb-[100px]">
        {!isRegisterSuccessful && (
          <>
            <Title text="Working with POST request" />
            <Form onSubmit={onSubmit} positions={positions} />
          </>
        )}

        {isRegisterSuccessful && (
          <>
            <Title text="User successfully registered" />
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
