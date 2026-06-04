"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularText from "./ui/CircularText";
import Arrow from "../../public/images/arrow.svg";
import Arrow2 from "../../public/images/Arrow2.svg";
import Image from "next/image";
import Link from "next/link";

// GSAP-er register kora hocche
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // bootom animation
  {/* ১. প্রথমে Refs তৈরি করে নিন (এই লাইন ৩টি useEffect-এর উপরে বসালেই হবে) */}
  const bounceRef = useRef<HTMLDivElement>(null);
  const contactTextRef = useRef<HTMLParagraphElement>(null);
  const contactButtonRef = useRef<HTMLAnchorElement>(null);
   const circularTextRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const getTargetWidth = () => {
      const width = window.innerWidth;
      if (width >= 1400) return "1400px";
      if (width >= 1366) return "1300px";
      if (width >= 1280) return "1220px";
      return "calc(100vw - 10px)";
    };

    const getTargetHeight = () => {
      const width = window.innerWidth;
      if (width < 1280) return "calc(100vh - 10px)";
      return "60vh";
    };

    const ctx = gsap.context(() => {
      // 🎯 timeline তৈরি করা হলো যাতে একের পর এক অ্যানিমেশন স্ক্রল অনুযায়ী প্লে হয়
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=150%",    // 🎯 সিকোয়েন্স বড় করার জন্য স্ক্রল লেন্থ ১৫০% করা হলো
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // স্টেপ ১: ভিডিও কন্টেইনার ফুল স্ক্রিন থেকে ছোট হবে
      tl.to(containerRef.current, {
        width: getTargetWidth(),
        height: getTargetHeight(),
        top: "10vh",
        borderRadius: "24px",
        ease: "none",
      })
      // স্টেপ ২: ভিডিও ছোট হওয়া মাত্রই bounce বাটনটি আস্তে আস্তে ফেইড আউট (Fade Out) হবে
      .to([bounceRef.current, circularTextRef.current], {
        opacity: 0,
        y: -20,
        ease: "power1.out",
      }, ">") // ">" মানে ঠিক আগের অ্যানিমেশন শেষ হওয়ার পর শুরু হবে
      // স্টেপ ৩: কন্টাক্ট টেক্সটটি আস্তে আস্তে ভেসে উঠবে (Fade In + Slide Up)
      .to(contactTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      })
      // স্টেপ ৪: সবশেষে টেস্ট (Test) বাটনটি মসৃণভাবে ফেইড ইন হবে
      .to(contactButtonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // Outer Pin Wrapper (Ata section ke pin korbe)
    <div ref={triggerRef} className="w-full bg-white overflow-hidden">
      
      {/* Container Layout - Prothome full screen (100vw, 100vh) thakbe */}
      <div 
        ref={containerRef} 
        className="relative mx-auto w-screen h-screen overflow-hidden bg-black flex items-center justify-center transition-all duration-100 ease-out"
      >
        
        {/* Real HTML5 Video Tag */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Apnar video file path ekhane diben */}
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay Layer (Optional - figma dark tint background text futiye tolar jonno) */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        

      </div>
      <div className="container-custom absolute bottom-5 z-3 left-1/2 -translate-x-1/2 w-full">
      <div>
          <h1 className="text-[55px] dark font-semibold leading-[1.2] w-3/4">
            We collect, pack, and deliver your medicines. Easy!
          </h1>
          <p className="text-[18px] dark font-medium leading-[1.1] w-3/4 pt-5">
            Pathology test, Medicines & Doctor Consolations - all in one place.
          </p>
          </div>
          <div className="absolute right-0 z-10 bottom-0" ref={circularTextRef}>
          <CircularText
            text="DO SCROLL * DO SCROLL * DO SCROLL * "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class "
          />
        </div>
        <div className="arrow bounce" ref={bounceRef}>
            <Image src={Arrow2} alt="Image not found" className="w-5"/>
        </div>
        <div className="arrow contact w-[385px] mr-0 ml-auto">
            {/* টেক্সটটি শুরুতে opacity-0 থাকবে এবং নিচ থেকে ওপরে ওঠার জন্য সামান্য translate থাকবে */}
            <p ref={contactTextRef} className="opacity-0 translate-y-4 dark text-[18px] leading-[1.2] ">
              Quality Health close to home Caring you every step
            </p>
            {/* বাটনটিও শুরুতে opacity-0 থাকবে */}
            <Link href="/" ref={contactButtonRef} className="opacity-0 translate-y-4 inline-block text-[18px] text-black mt-5">
              <span className=" bg-[#CCFA82] py-2.5 px-3.5 rounded-3xl">Contact Us</span> <div className="inline-block"><span className=" bg-[#CCFA82] w-10 h-10 rounded-4xl -ml-2 flex justify-center items-center"><Image src={Arrow} alt="image not found" className="w-3 inline-block rounded-2xl bg-[#CCFA82]"/></span></div>
            </Link>
        </div>
        </div>
        
    </div>
  );
}