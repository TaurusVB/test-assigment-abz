"use client";

import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { TypeOf } from "zod";

import Form from "./Form";
import Section from "./Section";
import getToken from "@/utils/getToken";
import { registerSchema } from "@/utils/validationSchema";
import Loader from "./Loader";

import successImage from "@/public/assets/success-image.svg";

type RegisterInput = TypeOf<typeof registerSchema>;

type Position = {
  id: number;
  name: string;
};

const FormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);
  const [positions, setPositions] = useState<Position[]>();

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      );

      setPositions(response.data.positions);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    setIsLoading(true);
    console.log({
      ...data,
      photo: data.photo[0],
      position_id: +data.position_id,
    });
    try {
      const token = await getToken();

      await axios.post(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          ...data,
          photo: data.photo[0],
          position_id: +data.position_id,
        },
        { headers: { "Content-Type": "multipart/form-data", Token: token } }
      );

      setIsRegisterSuccessful(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

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
