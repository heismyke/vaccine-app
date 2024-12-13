import React from "react";
import WhyWeGetVaccinatedData from "../Data/Home/Why_We_Get_Vaccinated";
import SharedContainer from "../shared/SharedContainer";
import ContentWithHeadingAndSubheading from "../shared/SharedContainer/ContentWithHeadingAndSubheading";
import HeadingWithSubheading from "../shared/SharedContainer/HeadingWithSubheading";

function WhyWeGetVaccinated() {
  return (
    <SharedContainer>
      <div>
        <HeadingWithSubheading
          heading="Why we get vaccinated"
          subheading="Safety is our watch word. We are committed to health of your kids, our application ensures kids have the best possible health care."
        />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className=" md:w-[60%]">
            {WhyWeGetVaccinatedData.map((why, index) => (
              <div key={index} className="flex flex-col">
                <ContentWithHeadingAndSubheading
                  heading={why.WhyWeGetVaccinatedHeading}
                  paragraph={why.WhyWeGetVaccinatedParagraph}
                />
              </div>
            ))}
          </div>
          <div>
            <img src="../assets/caution.svg" alt="caution thumbnail" />
          </div>
        </div>
      </div>
    </SharedContainer>
  );
}

export default WhyWeGetVaccinated;
