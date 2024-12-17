import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../shared/Button";
import Navbar from "../shared/Navbar";

function Header() {
  return (
    <header className="w-[100%]  bg-[#1E4EA2]">
      <Navbar iconColor="text-white" logoColor="text-white" />
      <div className=" flex justify-between flex-col gap-20 mt-8">
        <div className="p-5">
          <h1 className="text-white font-semibold leading-[45px] text-[30px]">
            Tracking your vaccines and medications just got easier
          </h1>
          <p className="font-normal text-[16px] my-5 text-white text-start xl:text-[15.32px] leading-[26.3px] xl:leading-[30.54px]">
            Your virtual database for Centralized medication and vaccination
            platform
          </p>

          <Button color={"bg-white text-[#1E4EA2]"} font={"font-semibold"}>
            Download App
            <IoIosArrowDown />{" "}
          </Button>
        </div>
        <div className="w-full  bg-[#2362AB]  rounded-tl-[100px]">
          <img
            src="../assets/header_image.png"
            className="h-[485px] relative -left-[25px] object-cover"
            alt="Header Image thumbnail"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
