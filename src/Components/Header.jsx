import React from "react";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className="w-screen flex items-center justify-between px-3 md:px-10 border-b-1">
      <a href="#" className="h-30 w-30 md:h-50 md:w-50 bg-[url('/logo.png')] bg-cover bg-center"></a>
        <div className="md:hidden flex items-center text-[var(--font-color)] ">
            <a href=""><IoMenu className="text-3xl"/></a>
            Menu
        </div>

      <div className="hidden md:flex md:flex-col md:gap-5 md:text-lg">
        <div className="flex justify-end text-[var(--font-color)] gap-10 ">
            <a href="#" className="hover:text-black">Visit Us</a>
            <a href="#" className="hover:text-black">Mandatory Public Disclosure</a>
        </div>
        <div className="flex gap-10 flex-wrap">
            <a href="#" className="hover:text-[var(--font-color)]">About</a>
            <a href="#" className="hover:text-[var(--font-color)]">Admissions</a>
            <a href="#" className="hover:text-[var(--font-color)]">Academics</a>
            <a href="#" className="hover:text-[var(--font-color)]">Student Life</a>
            <a href="#" className="hover:text-[var(--font-color)]">Campus Life</a>
            <a href="#" className="hover:text-[var(--font-color)]">News</a>
            <a href="#" className="hover:text-[var(--font-color)]">Contact Us</a>
        </div>
      </div>

    </div>
  );
}

export default Header;
