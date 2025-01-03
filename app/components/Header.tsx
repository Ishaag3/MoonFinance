"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="https://res.cloudinary.com/dhrvr4sey/image/upload/v1726864546/Logo_cla0fe.png"
          alt="Moon Finance Logo"
          width={40}
          height={40}
          className="w-8 h-8"
        />
        <span className="font-bold text-black ml-2 text-lg">MOON FINANCE</span>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-8 text-black">
          <li>
            <Link href="/home" className="hover:text-violet-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-violet-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-violet-500">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-black border-black"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full mt-4 bg-white shadow-md rounded-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/home" className="hover:text-violet-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-violet-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-violet-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-violet-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-violet-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/dash" className="hover:text-violet-500"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block px-4 py-2 border rounded-full border-black text-black hover:bg-gray-100 transition"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="block px-4 py-2 border rounded-full border-black text-black hover:bg-gray-100 transition"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Action Buttons */}
      <div className="hidden lg:flex space-x-2">
        <Link
          href="/login"
          className="px-4 py-2 border rounded-full border-black text-black hover:bg-gray-100 transition"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 border rounded-full border-black text-black hover:bg-gray-100 transition"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
