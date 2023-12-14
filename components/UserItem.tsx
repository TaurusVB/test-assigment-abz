import Image from "next/image";
import React, { FC } from "react";

import photoCover from "@/public/assets/photo-cover.svg";

interface IUserItemProps {
  user: {
    name: string;
    email: string;
    phone: string;
    position: string;
    photo: string;
  };
}

const UserItem: FC<IUserItemProps> = ({
  user: { name, email, phone, position, photo = photoCover },
}) => {
  return (
    <li className="w-full p-5 bg-white rounded-[10px] flex items-center justify-center flex-col">
      <Image
        width={70}
        height={70}
        alt={position}
        src={photo}
        className="rounded-full"
      />
      <p className="my-5 text-base/[26px]">{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </li>
  );
};

export default UserItem;
