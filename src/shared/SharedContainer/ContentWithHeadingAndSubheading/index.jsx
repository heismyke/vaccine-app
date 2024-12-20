import React from 'react'
import PropTypes from 'prop-types'

const ContentWithHeadingAndSubheading = ({ heading, paragraph, className }) => {
  return (
    <div className={className}>
      <h1 className="text-[#545656] text-[20px]  md:text-[16px] lg:text-[22px] font-semibold py-5">
        {heading}
      </h1>
      <p className="text-[#545656] text-[16px] md:text-[10px] lg:text-[16px]  font-normal leading-[30.54px]">
        {paragraph}
      </p>
    </div>
  )
}

ContentWithHeadingAndSubheading.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ContentWithHeadingAndSubheading
