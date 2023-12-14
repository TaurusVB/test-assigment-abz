import React from "react";
import Section from "./Section";
import UserList from "./UserList";
import CustomButton from "./CustomButton";

const UsersSection = () => {
  return (
    <Section className="mb-[140px]">
      <h2 id="users" className="text-[40px]/[40px] mb-[50px]">
        Working with GET request
      </h2>
      <UserList />
      <CustomButton disabled={false} type="button" text="Show more" />
    </Section>
  );
};

export default UsersSection;
