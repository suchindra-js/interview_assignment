import React from "react";
import Image from "next/image";
import { User } from "@/common";

type Props = {
  user: User;
};

const ProfileCard = ({ user }: Props) => {
  return (
    <div className="text-sm leading-6 bg-white  rounded-lg shadow-xl">
      <figure className="relative flex flex-col-reverse bg-white rounded-lg p-6 ">
        <figcaption className="flex items-start space-x-4">
          <Image
            src="/assets/user_avatar.png"
            width={30}
            height={30}
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold ">
              {user.name}
            </div>
            <p className="text-xs">
              Email:
              <span className="font-bold">{user.email}</span>
            </p>
            <p className="text-xs">
              Mobile:
              <span className="font-bold">{user.phone}</span>
            </p>
            <p className="text-xs">
              Company:
              <span className="font-bold">{user.company}</span>
            </p>
            <p className="text-xs">
              Address:
              <span className="font-bold">{user.address.street}</span>
            </p>
            <p className="text-xs">
              Age:
              <span className="font-bold">{user.age}</span>
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProfileCard;
