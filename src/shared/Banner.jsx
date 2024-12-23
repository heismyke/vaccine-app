import React from 'react'

export default function Banner({ children, backgroundColor }) {
  return (
    <div
      className={`${backgroundColor} flex items-center flex-col justify-center my-14 p-7 lg:p-20`}
    >
      <div className="lg:w-[60%]">{children}</div>
    </div>
  )
}
