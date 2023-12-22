"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { TypeOf } from "zod";

import FormSection from "@/components/FormSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import UsersSection from "@/components/UsersSection";
import getToken from "@/utils/getToken";
import { UserType } from "@/utils/types";
import { registerSchema } from "@/utils/validationSchema";
import {
  toasterHandleError,
  toasterHandleErrorPositions,
} from "@/utils/toasterHandleError";

type RegisterInput = TypeOf<typeof registerSchema>;

type Position = {
  id: number;
  name: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);
  const [positions, setPositions] = useState<Position[]>();
  const [users, setUsers] = useState<UserType[]>();
  const [nextLink, setNextLink] = useState<string>("");

  useEffect(() => {
    fectchUsers();
    fetchPositions();
    setIsLoading(false);
  }, []);

  const fectchUsers = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
      );

      setUsers(response.data.users);
      setNextLink(response.data.links.next_url);
    } catch (error) {
      toasterHandleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMoreBtn = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(nextLink);

      setUsers([...users!, ...response.data.users]);

      if (response.data.page === response.data.total_pages) {
        setNextLink(null!);
        return;
      }

      setNextLink(response.data.links.next_url);
    } catch (error) {
      toasterHandleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPositions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      );

      setPositions(response.data.positions);
    } catch (error) {
      toasterHandleErrorPositions(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitForm: SubmitHandler<RegisterInput> = async (data) => {
    setIsLoading(true);

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

      await fectchUsers();
    } catch (error) {
      toasterHandleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <Toaster />

      <Header />
      <HeroSection />
      <UsersSection
        users={users!}
        nextLink={nextLink}
        handleShowMoreBtn={handleShowMoreBtn}
      />
      <FormSection
        isRegisterSuccessful={isRegisterSuccessful}
        onSubmit={handleSubmitForm}
        positions={positions!}
      />
    </>
  );
}
