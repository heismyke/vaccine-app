import React, { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { Link } from 'react-router-dom'
const navbarData = {
  links: [
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Blog', href: '/blog' },
  ],
}

const Navbar = ({ disabled = false, type = 'button', logoColor, iconColor }) => {
  const [menu, setMenu] = useState(false)
  const [isDisabled, setIsDisabled] = useState(disabled)

  const handleButtonClick = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <nav className="w-[100%] p-2 md:p-5 relative flex items-center justify-between lg:justify-around">
        <Link to="/">
          <div className="px-4 flex justify-center gap-2 items-center">
            <h1 className={`font-semibold ${logoColor} text-[25px]`}>Vaccine app</h1>
          </div>
        </Link>
        <ul
          className={`${
            menu ? 'flex' : 'hidden lg:flex lg:items-center lg:justify-center'
          } w-[100%] lg:w-[60%] z-50 bg-[#EFF5F6] text-black lg:text-white lg:bg-[#1E4EA2] shadow-lg lg:shadow-none top-[80px] lg:top-0  flex-col lg:flex-row gap-10 pl-10 py-5 left-0  lg:right-0 absolute lg:relative`}
        >
          {navbarData.links.map((nav_item, index) => (
            <Link to={nav_item.href} key={index}>
              <li>{nav_item.name}</li>
            </Link>
          ))}
        </ul>
        <button
          className="block lg:hidden"
          onClick={handleButtonClick}
          disabled={isDisabled}
          type={type}
        >
          <CiMenuFries className={`${iconColor}`} size={30} />
        </button>
      </nav>
    </div>
  )
}

export default Navbar
