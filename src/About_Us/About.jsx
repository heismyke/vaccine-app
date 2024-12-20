import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import DownloadApp from '../shared/DownloadApp'
import Banner from '../shared/Banner'
import HeadingWithSubheading from '../shared/SharedContainer/HeadingWithSubheading'

function About() {
  return (
    <div>
      <Navbar iconColor="text-black" logoColor="text-black" />
      <Banner>
        <HeadingWithSubheading
          className="flex flex-col items-center justify-center text-center"
          textAlignment="text-center"
          heading="About"
          subheading="Providing the best modern health appication for humans."
        />
      </Banner>
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default About
