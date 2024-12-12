import React from "react";
import { Step1, Step2 } from "../Data/Home/Steps";
import Phone from "../assets/phone.png";
import SharedContainer from "../shared/SharedContainer";
function HowItWorks() {
  return (
    <SharedContainer>
      <div className="flex flex-col items-center ">
        <h1 className="font-semibold text-[25px] text-[#434343] xl:text-[41.11px] pb-5 ">
          How it works
        </h1>
        <p className="ont-normal text-[16px] text-[#434343] xl:text-[15.32px] leading-[16.84px] xl:leading-[30.54px]">
          Get started with the four simple steps
        </p>
      </div>
      <div className="w-[100%] my-[50px] flex flex-col md:flex-row  md:justify-around items-center gap-10">
        <div className="md:w-[30%] lg:w-[25%] flex order-1  flex-col gap-10 lg:h-full">
          {Step1.map((step, index) => (
            <div key={index} className=" flex flex-col md:items-end">
              <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] font-semibold flex items-center justify-center text-[16px] md:text-[20px] lg:text-[30px] text-white  bg-[#1E4EA2]">
                {step.id}
              </div>
              <h1 className="text-[#545656] text-[20px]  md:text-[16px] lg:text-[22px] font-semibold py-6">
                {step.text}
              </h1>
              <p className="text-[#545656] text-[16px] md:text-[10px] lg:text-[16px] font-normal leading-[30.54px] md:text-right">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <img
          src={Phone}
          alt="phone"
          className="h-[500px] lg:h-[600px] order-3 md:order-2"
        />
        <div className=" md:w-[30%] lg:w-[25%] order-2 md:order-3 flex flex-col gap-10">
          {Step2.map((step, index) => (
            <div key={index} className="flex md:h-auto flex-col items-start">
              <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] font-semibold flex items-center justify-center text-[16px] md:text-[20px] lg:text-[30px] text-white  bg-[#1E4EA2]">
                {step.id}
              </div>
              <h1 className="text-[#545656] text-[20px]  md:text-[16px] lg:text-[22px] font-semibold py-5">
                {step.text}
              </h1>
              <p className="text-[#545656] text-[16px] md:text-[10px] lg:text-[16px]  font-normal leading-[30.54px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SharedContainer>
  );
}

export default HowItWorks;
