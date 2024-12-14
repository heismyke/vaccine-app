import SharedContainer from "../shared/SharedContainer";
import HeadingWithSubheading from "../shared/SharedContainer/HeadingWithSubheading";
import { useContext } from "react";
import FeaturesContext from "../context/FeaturesContext";
import ContentWithHeadingAndSubheading from "../shared/SharedContainer/ContentWithHeadingAndSubheading";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

const FeaturesPagination = () => {
  const { features } = useContext(FeaturesContext);
  return (
    <SharedContainer>
      <HeadingWithSubheading
        heading={"Features"}
        subheading={
          "The features below makes our mobile application the best out there."
        }
      />
      {features.slice(0, 3).map((feature, index) => (
        <div
          key={index}
          className={
            index % 2 === 1
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
      <div className="flex items-center justify-center">
        <Link to="/features">
          <Button>View all features</Button>
        </Link>
      </div>
    </SharedContainer>
  );
};

export default FeaturesPagination;
