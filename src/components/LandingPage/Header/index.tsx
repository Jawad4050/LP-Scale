"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Header = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <div className="relative">
      <div className="lg:flex items-center justify-between mx-auto lg:w-[65%] px-[23px] lg:py-[12px] py-4">
        <div className="flex items-center">
          <div>
            <Image src="../logo.svg" alt="Logo" width={110} height={24} />
          </div>
          <div className="ms-auto lg:hidden block">
            <Image
              src={`${navMenu ? "../close.svg" : "../menu-icon.svg"}`}
              alt="Menu"
              width={24}
              height={16}
              onClick={() => setNavMenu((prev) => !prev)}
            />
          </div>
        </div>

        <div className={`w-full lg:flex ${navMenu ? "" : "hidden"} lg:mt-0 mt-5`}>
          <div className="lg:flex block items-center gap-[40px] text-[15.25px] font-[200] mx-auto">
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[rgb(255,255,255,73%)]">navlink</Link>
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[rgb(255,255,255,73%)]">navlink</Link>
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[rgb(255,255,255,73%)]">navlink</Link>
            <Link href="/" className="block lg:pb-0 pb-[18px] text-[rgb(255,255,255,73%)]">navlink</Link>
          </div>
          <div>
            <button className="text-[16px] text-white px-[20px] py-[10px] font-[500] rounded-full border-[1px] border-[rgb(251,251,251,20%)] bg-transparent hover:bg-[#1D1D26] lg:w-fit w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
