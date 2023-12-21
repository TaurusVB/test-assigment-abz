"use client";

import { FC } from "react";

import Section from "./Section";
import UserList from "./UserList";
import CustomButton from "./CustomButton";
import { UserType } from "@/utils/types";

interface IUsersSectionProps {
  users: UserType[];
  nextLink: string | undefined;
  handleShowMoreBtn: () => void;
}

const UsersSection: FC<IUsersSectionProps> = ({
  users,
  nextLink,
  handleShowMoreBtn,
}) => {
  return (
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
  );
};

export default UsersSection;
