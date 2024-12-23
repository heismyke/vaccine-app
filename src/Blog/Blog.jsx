import React from 'react'
import Navbar from '../shared/Navbar'
import DownloadApp from '../shared/DownloadApp'
import Footer from '../shared/Footer'
import Banner from '../shared/Banner'
import HeadingWithSubheading from '../shared/SharedContainer/HeadingWithSubheading'
import SharedContainer from '../shared/SharedContainer'
import Heading from '../shared/Heading'
import { useContext } from 'react'
import BlogContext from '../context/BlogContext'
import ContentWithHeadingAndSubheading from '../shared/SharedContainer/ContentWithHeadingAndSubheading'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

function Blog() {
  const { blogs } = useContext(BlogContext)
  return (
    <>
      <Navbar />
      <Banner backgroundColor={'bg-white'}>
        <HeadingWithSubheading
          className="flex flex-col items-center justify-center text-center"
          textAlignment="text-center"
          heading="Blog"
          subheading="Are you wondring how to track all the needed vacines for your kids wihouy=t missing anyone? Vaccinne App is here to aleviate your worries with our upto date vaccine tracking software.  We record all the required vaccines and send series of remiders to ensure you dont miss any dosage."
        />
      </Banner>
      <SharedContainer>
        <h1 className="text-[#545656] text-[20px]  md:text-[16px] lg:text-[22px] font-semibold py-6">
          Features
        </h1>
        {blogs.slice(0, 1).map((blog, index) => (
          <div key={index}>
            <img src={blog.upload} alt="blog thumbnail" />
            <ContentWithHeadingAndSubheading
              heading="8 ways to support a loved one struggling with their mental Health healthy living"
              paragraph="We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced..."
            />
            <Link to="" className="flex gap-5 items-center justify-start my-5">
              Continue reading <FaArrowRight />
            </Link>
          </div>
        ))}
        <div className="grid mt-[200px] my-[50px] lg:mb-[100px] grid-cols-1 md:grid-cols-2 gap-20">
          {blogs.slice(1).map((blog, index) => (
            <div key={index}>
              <img src={blog.upload} alt="blog thumbnail" />
              <ContentWithHeadingAndSubheading
                heading="8 ways to support a loved one struggling with their mental Health healthy living"
                paragraph="We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced..."
              />
              <Link to="" className="flex gap-5 items-center justify-start my-5">
                Continue reading <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </SharedContainer>
      <DownloadApp />
      <Footer />
    </>
  )
}

export default Blog
