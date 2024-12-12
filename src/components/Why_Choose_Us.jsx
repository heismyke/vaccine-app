import React from 'react'
import WhyChooseUsData from '../Data/Home/Why_Choose_Us'
import SharedContainer from '../shared/SharedContainer'

function WhyChooseUs() {
  return (
    <SharedContainer variant="default">
      <h1 className="font-semibold text-[25px] text-[#434343] xl:text-[41.11px] xl:pb-10">
        Why Choose us?
      </h1>
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
            <h1 className="font-semibold text-[17.9px] text-[#434343] xl:text-[20.37px]">
              {WhyChooseUs.text}
            </h1>
            <p className="font-normal   text-[11.98px] text-[#434343] xl:text-[15.32px] leading-[16.84px] xl:leading-[30.54px]">
              {/* description */}
              {WhyChooseUs.description}
            </p>
          </div>
        ))}
      </div>
    </SharedContainer>
  )
}

export default WhyChooseUs
