import React, { useContext, useEffect } from 'react'
import Navbar from '../shared/Navbar'
import DownloadApp from '../shared/DownloadApp'
import Footer from '../shared/Footer'
import SharedContainer from '../shared/SharedContainer'
import FeaturesContext from '../context/FeaturesContext'
import ContentWithHeadingAndSubheading from '../shared/SharedContainer/ContentWithHeadingAndSubheading'
import { useLocation } from 'react-router-dom'
import Banner from '../shared/Banner'
import HeadingWithSubheading from '../shared/SharedContainer/HeadingWithSubheading'

function Features() {
  const { features } = useContext(FeaturesContext)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Navbar />
      <Banner>
        <HeadingWithSubheading
          className="flex flex-col items-center lg:hidden justify-center text-center"
          textAlignment="text-center"
          heading="Features"
          subheading="Vaccine App is here to elevate your worries with our upto date vaccine tracking software.  We record all the required vaccines and send series of reminders to ensure you dont miss any dosage."
        />
        <HeadingWithSubheading
          className="hidden flex-col items-center lg:flex justify-center text-center"
          textAlignment="text-center"
          heading="Features designed specifically for you"
          subheading="Are you wondering how to track all the needed vaccines for your kids without missing anyone? Vaccine App is here to elevate your worries with our upto date vaccine tracking software.  We record all the required vaccines and send series of reminders to ensure you dont miss any dosage."
        />
      </Banner>
      <SharedContainer>
        {features.map((feature, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? 'flex flex-col-reverse gap-10 md:gap-0 md:flex-row-reverse my-10 md:my-20 items-center justify-around'
                : 'flex flex-col-reverse gap-10 md:gap-0 md:flex-row items-center my-10 md:my-20 justify-around'
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
  )
}

export default Features
