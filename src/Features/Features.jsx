import React, { useContext } from "react";
import Navbar from "../shared/Navbar";
import DownloadApp from "../shared/DownloadApp";
import Footer from "../shared/Footer";
import SharedContainer from "../shared/SharedContainer";
import FeaturesContext from "../context/FeaturesContext";
import ContentWithHeadingAndSubheading from "../shared/SharedContainer/ContentWithHeadingAndSubheading";

function Features() {
  const { features } = useContext(FeaturesContext);
  return (
    <>
      <Navbar />
      <SharedContainer>
        {features.map((feature, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? "flex flex-col-reverse gap-10 md:gap-0 md:flex-row-reverse my-10 md:my-20 items-center justify-around"
                : "flex flex-col-reverse gap-10 md:gap-0 md:flex-row items-center my-10 md:my-20 justify-around"
            }
          >
            <div>
              <img src={feature.featuresSvg} alt="features thumbnail" />
            </div>
            <div className="md:w-[40%]">
              <ContentWithHeadingAndSubheading
                heading={feature.featuresTitle}
                paragraph={feature.featuresDescription}
              />
            </div>
          </div>
        ))}
      </SharedContainer>
      <DownloadApp />
      <Footer />
    </>
  );
}

export default Features;
