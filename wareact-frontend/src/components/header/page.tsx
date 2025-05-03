'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './logo/logo'
import LogoTitle from './logo/logoTitle'
import Menu from './logo/menu'
import MenuClose from './logo/menuClose'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-[30px]">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-[4px]">
         <Logo/>
         <LogoTitle/>
        </Link>

        {/* Web Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <div className="flex gap-4">
            <button className="text-blue-600">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Hamburger (Mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <MenuClose/> : <Menu/>}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-4 bg-white ">
          <Link href="#" className="block">
            Home
          </Link>
          <Link href="#" className="block">
          Features
          </Link>
          <Link href="#" className="block">
          Integrations
          </Link>
          <Link href="#" className="block">
          Pricing
          </Link>
          <Link href="#" className="block">
          Insight
          </Link>
          <Link href="#" className="block">
          F.A.Q
          </Link>
          <Link href="#" className="block">
          Contact
          </Link>
          <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded">
          Sign In / Sign Up
          </button>
          <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded">
          Book a Demo
          </button>

        </nav>
      )}
    </header>
  )
}

export default Header



// import React from "react";
// import Logo from "./logo/logo";
// import LogoTitle from "./logo/logoTitle";

// const Header = () => {
//   return (
//     <div>
//       <div className="md:bg-[url('/images/header/headerBg.png')] md:w-full md:h-[554px] md:flex md:bg-no-repeat md:bg-cover md:bg-center">
//         <div className="flex items-center space-x-[4px]">
//         <Logo />
//         <LogoTitle/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
