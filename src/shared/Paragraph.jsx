import React from 'react'
export default function Paragraph({ children }) {
  return (
    <p className="text-[#545656] text-[16px] md:text-[10px] lg:text-[16px] py-10 font-normal leading-[30.54px]">
      {children}
    </p>
  )
}
