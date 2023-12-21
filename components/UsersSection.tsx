"use client";

import React, { useEffect, useState } from "react";
import Section from "./Section";
import UserList from "./UserList";
import CustomButton from "./CustomButton";
import { UserType } from "@/utils/types";
import axios from "axios";
import Loader from "./Loader";

const UsersSection = () => {
  const [isLoading, setIsloading] = useState(false);
  const [users, setUsers] = useState<UserType[]>();
  const [nextLink, setNextLink] = useState<string>("");

  useEffect(() => {
    fectchUsers();
  }, []);

  const fectchUsers = async () => {
    setIsloading(true);

    try {
      const response = await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
      );

      console.log(response);

      setUsers(response.data.users);
      setNextLink(response.data.links.next_url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const handleShowMoreBtn = async () => {
    setIsloading(true);

    try {
      const response = await axios.get(nextLink);

      setUsers([...users!, ...response.data.users]);

      setNextLink(response.data.links.next_url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <Section className="mb-[140px]">
        <h2 id="users" className="text-[40px]/[40px] mb-[50px]">
          Working with GET request
        </h2>
        <UserList users={users} />
        {nextLink !== null && (
          <CustomButton
            type="button"
            text="Show more"
            onClick={handleShowMoreBtn}
          />
        )}
      </Section>
    </>
  );
};

export default UsersSection;
