import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <div className="container pl-[7%] pr-[4%] pt-6 mx-auto flex items-center justify-between space-x-[8vw]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/next.svg" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-6 text-[16px] text-gray-950">
          <Link href="/" className="">
            Female
          </Link>
          <Link href="#" className="">
            Male
          </Link>
          <Link href="#" className="">
            Kids
          </Link>
          <Link href="#" className="">
            All Products
          </Link>

        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="What are you looking for"
            className="w-[500px] px-4 py-1 rounded text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2"
          />
        </div>

        {/* Cart Button */}
        <div className="relative">
          <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H3m4 8l-1.35 6.75A1 1 0 0 0 10.6 21h7.8a1 1 0 0 0 .98-.8L21 13H7z" />
            </svg>
          </button>

          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
