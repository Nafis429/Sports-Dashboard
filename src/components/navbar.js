import React from "react";

export default function NavBar() {
  return (
    <div className="navbar sticky top-0 bg-[#002366] text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neonGreen"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#002366] rounded-box w-52"
          >
            <li>
              <a href="#" className="hover:text-[#ff4500]">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="#" className="hover:text-[#ff4500]">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff4500]">Contact</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl text-[#39ff14] hover:text-[#ff4500] transition-all">
          LiveScores
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#" className="hover:text-[#ff4500]">Home</a>
          </li>
          <li tabIndex={0}>
            <a href="#" className="hover:text-[#ff4500]">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#ff4500]">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#39ff14] text-black hover:bg-[#ff4500] transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
}
