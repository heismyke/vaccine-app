import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import SubscribeForm from './SubscribeForm'

const company_links = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contactUs' },
  { name: 'Careers ', href: '/careers' },
  { name: 'Pricing ', href: '/pricing' },
]

const support_links = [
  { name: 'FAQs ', href: '/FAQs' },
  { name: 'Privacy Policy ', href: '/privacy-policy' },
  { name: 'Help ', href: '/help' },
]

function Footer() {
  return (
    <footer className="w-[100%] xl:justify-around xl:items-start xl:gap-20  lg:p-20 px-10 py-10 xl:flex  text-white bg-[#1E4EA2] ">
      <div className="xl:w-[25%]">
        <h1 className="font-semibold text-[28px] leading-[28px] pb-10 lg:text-[28px] xl:text-[28.51px] ">
          Vaccine App
        </h1>
        <p className="font-normal text-[18px] leading-[30px] pb-10  lg:text-[18px] lg:leading-[40px] xl:text-[18px] xl:leading-[30px]">
          Your onr stop forr vaccines and medication tracking, we offer easy to use inerfacde and
          secured database.
        </p>
        <div className="flex gap-5 pb-10">
          <FaFacebookF size={30} />
          <FaTwitter size={30} />
          <FaInstagram size={30} />
        </div>
      </div>

      <div className=" xl:w-[20%] flex gap-20 flex-row">
        <div>
          <h2 className="font-semibold text-[20.29px] leading-[35.52px] lg:text-[20px] xl:text-[20.66px] ">
            Company
          </h2>
          <ul>
            {company_links.map((link, index) => (
              <li
                className="font-normal text-[16.49px] xl:text-[16.79px] lg:text-[16px] leading-[35.52px]"
                key={index}
                href={link.href}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-[20.29px] xl:text-[20.66px] leading-[35.52px] lg:text-[20px] ">
            Support
          </h2>
          <ul>
            {support_links.map((link, index) => (
              <li
                className="font-normal lg:text-[16px] xl:text-[16.79px]  text-[16.49px] leading-[35.52px]"
                key={index}
                href={link.href}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-10 xl:w-[20%] xl:py-0">
        <h2 className="font-semibold text-[20.29px]  xl:text-[20.66px] leading-[35.52px] lg:text-[20px] ">
          Newsletter
        </h2>
        <p className="font-normal text-[18px] lg:text-[16px] pt-5 xl:text-[16.79px]">
          Get real time update from us
        </p>
        <SubscribeForm />
      </div>
    </footer>
  )
}

export default Footer
