"use client";

import { FC } from "react";

import Section from "./Section";
import UserList from "./UserList";
import CustomButton from "./CustomButton";
import { UserType } from "@/utils/types";
import Title from "./Title";

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
    <Section id="users" className="mb-[140px]">
      <Title text="Working with GET request" />
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
