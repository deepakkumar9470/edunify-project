"use client"
import Link from 'next/link';
import React,{useState} from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="flex bg-indigo-400 text-white items-center justify-between flex-wrap p-6">
        <Link href="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img src={"/logo.png"} className="w-20 h-10 bg-red-400 py-2 rounded-md cursor-pointer mr-2" alt="Logo" />
        </div>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/addSchool" className="block mt-4 lg:inline-block lg:mt-0 text-base font-semibold uppercase text-white-200  mr-4">
              AddSchool
            </Link>
            <Link href="/showSchools" className="block mt-4 lg:inline-block lg:mt-0 text-base font-semibold uppercase text-white-200  mr-4">
              Schools
            </Link>
            <Link href="/showSchools" className="block mt-4 lg:inline-block lg:mt-0 text-base font-semibold uppercase text-white-200  mr-4">
              Admission
            </Link>
            <Link href="/showSchools" className="block mt-4 lg:inline-block lg:mt-0 text-base font-semibold uppercase text-white-200  mr-4">
              Form
            </Link>
            <Link href="/showSchools" className="block mt-4 lg:inline-block lg:mt-0 text-base font-semibold uppercase text-white-200  mr-4">
              Contact
            </Link>
            <Link href="/showSchools" className="block mt-4 lg:inline-block lg:mt-0 text-base font-semibold uppercase text-white-200  mr-4">
              Help
            </Link>
            
          </div>
          <div>
            <button className="inline-flex rounded-sm items-center bg-green-500 border-0 py-2 px-4 text-white">
              Log In
            </button>
          </div>
        </div>
      </nav>
    );
}

export default Navbar