import React from 'react'
import PropTypes from 'prop-types'

const HeadingWithSubheading = ({
  heading,
  subheading = null,
  className = null,
  textAlignment = 'text-start',
}) => {
  return (
    <div className={className}>
      <h1 className="font-semibold text-[25px] text-[#434343] xl:text-[41.11px] pb-5 ">
        {heading}
      </h1>
      {subheading && (
        <p
          className={`font-normal text-[16px] text-[#434343] ${textAlignment} xl:text-[15.32px] leading-[30px] xl:leading-[30.54px] `}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}

HeadingWithSubheading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  className: PropTypes.string,
  textAlignment: PropTypes.string,
}

export default HeadingWithSubheading
