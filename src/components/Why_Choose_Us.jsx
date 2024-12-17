import React from "react";
import WhyChooseUsData from "../Data/Home/Why_Choose_Us";
import SharedContainer from "../shared/SharedContainer";
import ContentWithHeadingAndSubheading from "../shared/SharedContainer/ContentWithHeadingAndSubheading";
import HeadingWithSubheading from "../shared/SharedContainer/HeadingWithSubheading";

function WhyChooseUs() {
  return (
    <div className="bg-[#EFF5F6]">
      <SharedContainer variant="default">
        <HeadingWithSubheading heading="Why choose us?" />
        <div className="grid  gap-5  xl:gap-20  my-5 md:grid-cols-2 lg:grid-cols-3">
          {WhyChooseUsData.map((WhyChooseUs, index) => (
            <div
              key={index}
              className="w-[100%] p-10 items-start justify-center flex flex-col gap-5 bg-white  rounded-xl"
            >
              {/* img icon */}
              <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#1E4EA2] xl:w-[79.41px] xl:h-[79.41px]">
                <img
                  src={WhyChooseUs.icon}
                  width={0}
                  height={0}
                  className="w-[20px] h-[20px] xl:w-[37.47px] xl:h-[40.47px]"
                  alt="Icon Thumbnail"
                />
              </div>
              {/*  text */}
              <ContentWithHeadingAndSubheading
                heading={WhyChooseUs.text}
                paragraph={WhyChooseUs.description}
              />
            </div>
          ))}
        </div>
      </SharedContainer>
    </div>
  );
}

export default WhyChooseUs;
