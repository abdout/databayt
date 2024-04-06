"use client";
import SmIcon from "@/component/atom/icon/sm";
import Burger from "@/component/atom/icon/burger";
import { UserButton } from "@/component/auth/user-button";

const Header = () => {
  
  return (
    <>
     
        <div className="flex justify-end items-center gap-4 pr-7">
          <SmIcon src="/search.png" alt="search" path="" />
          <div className="profile">
            <div className="profile-overlay"></div>
            <div className=" z-20 w-full h-full">
              <UserButton />
            </div>
          </div>
        </div>
      
      <div className="hidden">
        <Burger />
      </div>
    </>
  );
};

export default Header;
