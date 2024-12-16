import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../shared/Button";
import Navbar from "../shared/Navbar";

function Header() {
  return (
    <header className="w-[100%] h-[1015px] bg-[#1E4EA2]">
      <Navbar iconColor="text-white" logoColor="text-white" />
      <div className="p-5 mt-8">
        <div className="">
          <h1 className="text-white font-semibold leading-[45px] text-[30px]">
            Tracking your vaccines and medications just got easier
          </h1>
          <p className="font-normal text-[16px] my-5 text-white text-start xl:text-[15.32px] leading-[26.3px] xl:leading-[30.54px]">
            Your virtual database for Centralized medication and vaccination
            platform
          </p>
          <button className="bg-white text-[#1E4EA2]">
            Download App
            <IoIosArrowDown />
          </button>
          {/* <Button
            color={"bg-white"}
            colorFont={"text-bg-[#1E4EA2]"}
            font={"font-semibold"}
          >
            Download App
            <IoIosArrowDown />{" "}
          </Button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
