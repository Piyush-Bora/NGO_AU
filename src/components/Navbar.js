import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

export default function Navbar(props) {

  const [navOpen, setNav] = useState('true');

    const toggleNav = () => {
        if (navOpen === 'false') {
            setNav('true');
        }
        else {
            setNav('false');
        }
    }

  return (
    <div className="sticky top-0 z-50 h-16 w-full shadow-lg">
      <header className="sticky w-full bg-[#FEFEFF] z-50 top-0 text-gray-700 h-16 flex items-center px-3 justify-between md:justify-center">

        {/* <!-- left elements div --> */}
        <div className="left md:absolute left-2 md:left-5">
          <img className="h-10" src="" alt="" />
        </div>

        {/* <!-- right elements div --> */}
        <nav className="right-div">
          <button onClick={toggleNav} className="p-2 mr-1 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`fixed left-0 right-0 min-h-screen backdrop:filter backdrop:blur bg-slate-900/90 space-y-2 p-5 mt-3 font-nunito font-medium text-lg z-50 transform translate-x-full ${
              navOpen === "false" ? "translate-x-0" : "translate-x-full"
            } duration-300 md:relative md:flex md:min-h-0 md:space-y-0 md:p-0 md:bg-transparent md:mt-0 md:space-x-4 md:translate-x-0 md:mr-2 md:justify-center md:items-center`}
          >
            <li
              className={`border-b-2 border-transparent hover:border-[#FDD831] px-3 py-2 text-center focus:outline-none transform duration-300 md:focus:bg-indigo-500 rounded-xl`}
            >
              <a href="/">Home</a>
            </li>

            <li className="border-b-2 border-transparent hover:border-[#FDD831] px-3 py-2 text-center focus:outline-none transform duration-300 md:focus:bg-indigo-500 rounded-xl">
              <a href="/">About</a>
            </li>

            <li className="border-b-2 border-transparent hover:border-[#FDD831] px-3 py-2 text-center focus:outline-none transform duration-300 md:focus:bg-indigo-500 rounded-xl">
              <a href="/">Products</a>
            </li>

            <li className="border-b-2 border-transparent rounded-2xl px-3 py-2 text-center focus:outline-none transform hover:bg-[#FDD831] duration-300">
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}