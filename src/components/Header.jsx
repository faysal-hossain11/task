import React from "react";
import { IoSearch } from "react-icons/io5";

import User from "../assets/img/user.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex justify-between xl:w-[800px]">
        <h1 className="text-2xl text-[#393939] font-semibold">Dua Page</h1>
        <div className=" flex max-w-[371px] h-[52px] bg-white pl-[16px] rounded-[10px] p-1 justify-between items-center">
          <input
            type="search"
            placeholder="Search by Categories"
            className="text-[16px] font-[400] text-[#868686] outline-none focus:outline-none   "
          />
          <span className="w-[52px] h-[44px] flex items-center justify-center text-[#868686] rounded-[6px] bg-[#F3F4F6]">
            <IoSearch />
          </span>
        </div>
      </div>
      <div>
        <Image src={User} alt="user" />
      </div>
    </div>
  );
};

export default Header;
