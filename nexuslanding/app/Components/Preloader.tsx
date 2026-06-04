"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterObj = { value: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to("#preloader-overlay", {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          delay: 0.2,
        });
      }
    });

    tl.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: "power1.out",
      onUpdate: () => {
        setCount(Math.floor(counterObj.value));
      },
    });
  }, []);

  return (
    <div
      id="preloader-overlay"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#151515] text-white overflow-hidden select-none"
    >
      {/* মেইন কন্টেইনার বক্স যা স্ক্রিনের ৭০% উইডথ (w-[70vw]) জুড়ে থাকবে */}
      <div className="relative w-[70vw] h-[20vh] md:h-[30vh] flex items-center justify-center">
        
        {/* পেছনের আবছা টেক্সট - কন্টেইনারের পুরোটা জুড়ে বড় হবে (w-full h-full) */}
        <span className="absolute inset-0 flex items-center justify-center text-[15vw] font-black tracking-tight text-white/5 uppercase leading-none w-full text-center">
          Nexus
        </span>
        
        {/* সামনের ওয়াটার/ওয়েভ ফিল টেক্সট */}
        <span className="absolute inset-0 flex items-center justify-center text-[15vw] font-black uppercase tracking-tight text-white figma-exact-wave overflow-hidden leading-none w-full text-center">
          Nexus
        </span>

        {/* ছোট কাউন্টার - প্রোগ্রেস বার ছাড়া একদম নিচে ডান কোনায় সেট করা */}
        <div className="absolute bottom-[-25px] right-16 flex items-center gap-1 font-mono text-xs sm:text-sm text-neutral-500 bg-[#151515] px-2">
          <span>loading...</span>
          <span className="w-[35px] text-right">{count}%</span>
        </div>
        
      </div>
    </div>
  );
}