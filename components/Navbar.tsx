"use client"

import Link from "next/link"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

function Navbar() {
  const navLinks = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Facilities",
      link: "/facilities",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Team",
      link: "/team",
    },
    {
      title: "Publications",
      link: "/publications",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ]
  const [menu, setMenu] = useState(false)
  return (
    <header className="flex justify-between items-center bg-[#242424] px-10 md:px-32 py-8 z-20 border-b-4 border-[#F7AB0A]">
      <Link
        href={"/"}
        className="text-2xl text-[#F7AB0A] font-bold hover:scale-110 transition-all duration-200 ease-out"
      >
        VSAL
      </Link>
      <nav className="text-lg font-semibold hidden md:flex space-x-5">
        <hr />
        {navLinks.map((navLink) => (
          <Link
            key={navLink.title}
            href={navLink.link}
            className="text-white px-2 py-1 hover:bg-white hover:text-[#F7AB0A] rounded-lg"
          >
            {navLink.title}
          </Link>
        ))}
      </nav>
      {menu ? (
        <XMarkIcon
          className="h-10 w-10 text-white flex md:hidden"
          onClick={() => setMenu(!menu)}
        />
      ) : (
        <Bars3Icon
          className="h-10 w-10 text-white flex md:hidden"
          onClick={() => setMenu(!menu)}
        />
      )}
      {menu && (
        <nav className="flex flex-col text-lg font-semibold md:hidden absolute top-[100px] left-0 w-full z-20">
          <hr />
          {navLinks.map((navLink) => (
            <Link
              key={navLink.title}
              onClick={() => setMenu(!menu)}
              href={navLink.link}
              className="px-10 py-3 border-b bg-[#242424] text-white"
            >
              {navLink.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
