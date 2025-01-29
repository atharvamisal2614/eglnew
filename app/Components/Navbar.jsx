"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  return (
    <header className="bg-white w-full ">
      <div className="container mx-auto flex justify-between items-center px-2">
        <Link href="/">
          <Image
            src="/images/eagle-logo.png"
            alt="Logo"
            width={250}
            height={200}
            className='w-40 h-28'
          />
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-customGray text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes className="text-customRed" /> : <FaBars />}
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-center items-center gap-10 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-4xl text-customRed focus:outline-none"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center gap-8 text-xl font-semibold">
            <li>
              <Link
                href="/"
                className={`${isActive('/') ? 'text-customRed' : 'text-customGray'
                  } hover:text-customRed`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${isActive('/about') ? 'text-customRed' : 'text-customGray'
                  } hover:text-customRed`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${isActive('/contact') ? 'text-customGray p-3 rounded-full border-customRed border-2' : 'text-customGray p-3 rounded-full border-customRed border-2'
                  } text-white p-3 rounded-full bg-customRed transition duration-300 ease-in-out`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <ul className="flex gap-24 text-lg font-semibold">
            <li>
              <Link
                href="/"
                className={`${isActive('/') ? 'text-customRed' : 'text-customGray'
                  } hover:text-customRed`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${isActive('/about') ? 'text-customRed' : 'text-customGray'
                  } hover:text-customRed`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${isActive('/contact') ? 'text-customRed' : 'text-customGray p-3  rounded-full border-customRed border-2'
                  } text-white p-3 rounded-full bg-customRed transition duration-300 ease-in-out`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>


    
  );
};

export default Navbar;
