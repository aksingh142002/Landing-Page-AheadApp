"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import logo from "@/public/images/ahead-logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    }, []);
    if(!isMounted){
        return null;
    }
  return(
    <nav className="z-30 fixed bg-white py-2 md:py-3 px-2 md:px-10 lg:px-20 flex w-full justify-between items-center">
      <div>
        <Image src={logo} alt="ahead-app-logo" className="h-10 md:h-12 w-10 md:w-12 rounded-lg" />
      </div>
      <div className="hidden md:flex items-center gap-2 sm:gap-4 lg:gap-8 font-semibold text-gray-700 text-sm">
      <Link href="/#emotions" scroll={true}>Emotions</Link>
        <Link href="/#manifesto" scroll={true}>Manifesto</Link>
        <Link href="/#self-awareness-test" scroll={true}>Self Awareness Test</Link>
        <Link href="/#work-with-us" scroll={true}>Work With Us</Link>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <Button className="cursor-pointer bg-black text-gray-100 rounded-full px-6 py-3 text-sm font-semibold">
          <Link href="https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177?mt=8" target="_blank">
          Download app
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;