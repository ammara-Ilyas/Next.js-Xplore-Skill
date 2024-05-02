"use client";
import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaStaylinked } from "react-icons/fa";
import Link from "next/link";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className=" border-2 border-blue-600 ">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex text-2">
          Xplore
          <FaStaylinked />
          kill
        </div>
        <div
          className={`nav-links ${menuOpen ? "block" : "hidden"} md:block`}
          id="navLinks"
        >
          {/* Responsive bar open and close */}
          <IoReorderThreeSharp
            className=" block cursor-pointer text-white md:hidden "
            onClick={toggleMenu}
          />

          <ul className="flex">
            <li>
              <a href="index.html" className="block px-4 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="course.html" className="block px-4 py-2">
                Course
              </a>
            </li>
            <li>
              <a href="blog.html" className="block px-4 py-2">
                Blog
              </a>
            </li>
            <li>
              <a href="about.html" className="block px-4 py-2">
                About
              </a>
            </li>
            <li>
              <a href="contact.html" className="block px-4 py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <i
          className="fa fa-bars cursor-pointer md:hidden"
          onClick={toggleMenu}
        ></i>
        {/* Responsive bar open and close */}
      </nav>
    </section>
  );
}

export default Header;
