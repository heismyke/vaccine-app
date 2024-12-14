import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Mobile from "../assets/home/mobile/Services.png";
import Button from "./Button";

function DownloadApp() {
  return (
    <div className="w-[100%] lg:w-[95%] xl:w-[85%] lg:mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between pb-28 lg:pb-0 bg-[#EFF5F6] ">
      <div className="p-5 md:p-10 flex flex-col gap-5 items-start ">
        <h1 className="text-[25px] font-semibold leading-[38px] md:text-[25px] lg:text-[41.11px] lg:leading-[59.45px] text-[#434343]">
          Get the app now and give your child the best healthcare today!
        </h1>
        <p className="text-[16px] leading-[26.3px] font-normal md:text-[18px] lg:leading-[30.54px] text-[#434343]">
          It only takes few minutes to start enjoying this benefits, Download
          vaccinne app from playtore and Apple store from the button below
        </p>
        <Button>
          Download App <IoIosArrowDown />
        </Button>
      </div>
      <div className="w-[100%] p-5 flex items-center justify-center mt-[70px]">
        <img
          src={Mobile}
          alt="Mobile app thumbnail"
          className="w-[271.28px] h-[242px] md:w-[350px] md:h-[300px] lg:w-[356.86px] lg:h-[318.34px]"
        />
      </div>
    </div>
  );
}

export default DownloadApp;
