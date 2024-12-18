import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../shared/Button";
import Navbar from "../shared/Navbar";

function Header() {
  return (
    <header className="w-[100%]  bg-[#1E4EA2]">
      <Navbar iconColor="text-white" logoColor="text-white" />
      <div className=" flex justify-between flex-col lg:flex-row gap-20 md:gap-10 mt-20 xl:ml-22">
        <div className="p-5  lg:w-[60%] xl:mt-14 ">
          <div class=" flex flex-col text-[30px] xl:pl-[90px]  md:gap-5 lg:gap-6 xl:gap-10 text-white font-bold md:text-5xl lg:text-3xl  xl:text-[56px]">
            <p>Tracking your vaccines</p>
            <p>and medications</p>
            <p>just got easier</p>
          </div>
          <div className="flex flex-col gap-2 my-5 lg:my-14 font-normal xl:pl-[90px] text-[16px]  text-white md:text-[18px]  lg:text-[16px] xl:text-[20px] leading-[26.3px] xl:leading-[30.54px]">
            <div className="block lg:hidden">
              <p>Your virtual database for Centralized </p>
              <p>medication and vaccination platform</p>
            </div>
            <div className="hidden lg:block">
              <p>Never miss any vaccinnes ,your virtual database for </p>
              <p>Centralized medication and vaccination platform.</p>
            </div>
          </div>
          <Button
            color={"bg-white text-[#1E4EA2] xl:ml-[90px]"}
            font={"font-bold"}
          >
            Download App
            <IoIosArrowDown />{" "}
          </Button>
        </div>
        <div className="  bg-[#2362AB]  rounded-tl-[100px]">
          <img
            src="../assets/header_image.png"
            className="h-[485px] lg:h-[485px] xl:h-[600px] relative -left-[25px] md:left-0 lg:-left-[25px] object-cover"
            alt="Header Image thumbnail"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
