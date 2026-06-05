"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import Arrow from "../../public/images/arrow.svg";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "py-2 bg-white/30 backdrop-blur-md border-b border-white/10 shadow-sm" // 
          : "py-4 bg-transparent"
      }`}>
      <div className="container-custom flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="image not found" className="w-48"/>
     </Link>

     
      <nav className="flex items-center gap-6 md:gap-6 font-medium text-xs md:text-sm text-neutral-400 tracking-wide">
        
        <Link href="/" className="nav-link text-black text-[16px] transition-colors">
          Why Us <span className="inline-block pl-5">|</span>  
        </Link>
        <Link href="/contact" className="text-black text-[16px] transition-colors">
          Service <span className="inline-block pl-5">|</span> 
        </Link>
        <Link href="/contact" className="text-black text-[16px] transition-colors">
          Benefits
        </Link>
        <Link href="/contact" className="text-black text-[16px]  border border-black rounded-3xl transition-colors px-4 py-1.5">
          Let’s Talk! <Image src={Arrow} alt="image not found" className="w-4 pl-1 inline-block"/>
        </Link> 
      </nav>
      </div>
    </header>
  );
}