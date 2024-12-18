import React from "react";
import SharedContainer from "../shared/SharedContainer";
import HeadingWithSubheading from "../shared/SharedContainer/HeadingWithSubheading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useContext } from "react";
import WhatOurUsersSayContext from "../context/WhatOurUsersSayContext";
import { Link } from "react-router-dom";

const WhatOurUsersSay = () => {
  const { reviews } = useContext(WhatOurUsersSayContext);

  return (
    <SharedContainer>
      <HeadingWithSubheading
        className={"flex items-center flex-col justify-center"}
        heading={"What our users say"}
        subheading={
          "Hear what professionals and moms have o say about our mobile App"
        }
      />
      <Carousel className="m-5 md:m-10">
        <CarouselContent className="gap-10 m-2">
          {reviews.map((review, index) => (
            <React.Fragment key={index}>
              <CarouselItem className="basis-1/1 w-full p-10 rounded-3xl md:basis-1/2  bg-[#1E4EA2] text-white">
                <h1 className="font-semibold text-[20px]">
                  Available on the playstore
                </h1>
                <p className="font-normal text-[16px] py-8">
                  {review.review}
                  <span className="font-semibold">
                    -{review.author}, {review.date}
                  </span>
                </p>
                <Link to="">
                  <h1 className="font-semibold">Download Now </h1>
                </Link>
              </CarouselItem>
            </React.Fragment>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SharedContainer>
  );
};

export default WhatOurUsersSay;
