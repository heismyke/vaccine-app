import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import DownloadApp from '../shared/DownloadApp'
import Banner from '../shared/Banner'
import HeadingWithSubheading from '../shared/SharedContainer/HeadingWithSubheading'
import SharedContainer from '../shared/SharedContainer'
import Paragraph from '../shared/Paragraph'
import MeetTheTeam from './components/Meet_the_team'

export default function About() {
  return (
    <div>
      <Navbar iconColor="text-black" logoColor="text-black" />
      <Banner backgroundColor={'bg-[#EFF5F6]'}>
        <HeadingWithSubheading
          className="flex flex-col items-center justify-center text-center"
          textAlignment="text-center"
          heading="About Us"
          subheading="Providing the best modern health appication for humans."
        />
      </Banner>
      <SharedContainer>
        <img src="../assets/about.png" alt="doctors thumbnail" className="lg:w-full mb-14" />
        <Paragraph>
          We believe in technology and our team to take care of your health problems. We guarantee
          you will get the best service that you have never experienced. We guarantee you will get
          the best service that you have never experienced... We believe in technology and our team
          to take care of your health problems. We guarantee you will get the best service that you
          have never experienced. We guarantee you will get the best service that you have never
          experienced... E health is a Professional Blog Platform. Here we will provide you only
          interesting content, which you will like very much. We're dedicated to providing you the
          best of Blog, with a focus on dependability and Diet tips. We're working to turn our
          passion for Blog into a booming online website. We hope you enjoy our Blog as much as we
          enjoy offering them to you
        </Paragraph>
        <Paragraph>
          As a center, we provide individuals with the opportunity to consult with a professional
          nutritionist who can advise them on diets that are beneficial to their health. We also
          sell books, some of which may contain information on health and nutrition. Our primary
          goal is to give individuals with a variety of tools and means via which they may obtain
          sufficient nutrients from their meals, therefore encouraging them to live a healthy
          lifestyle.
        </Paragraph>
        <Paragraph>
          I will keep posting more important posts on my Website for all of you. Please give your
          support and love.
        </Paragraph>
      </SharedContainer>
    </div>
  )
}
