import { UserType } from "@/utils/types";
import UserItem from "./UserItem";
import { FC } from "react";

interface IUserListProps {
  users: UserType[] | undefined;
}

const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <ul className="grid gap-5 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 mb-[50px]">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
