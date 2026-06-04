"use client";
import React, { useState } from 'react';
import Image from "next/image";
import contact from "../../public/images/contact.png";
import AnimatedContent from "./ui/AnimatedContent";
import SplitText from "../Components/ui/SplitText";
import CustomButton from "./ui/CustomButton";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Contact() {
 
    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
    <div>
        <div className="relative bg-[#f1f1f1] py-24">
            <div className="container-custom">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        <div className="contact-left">
                             <AnimatedContent distance={100} direction="vertical" reverse={false} duration={1} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={1}>
                                <Image src={contact} alt="Image not found" className="w-full"  />
                            </AnimatedContent>
                        </div>
                    </div>
                    
                    <div className="col-span-6">
                        <div>
                            <label className="text-xl text-[#0D7F80] relative pl-28"><span className="w-27 h-2 border-t border-[#0D7F80] z-10 absolute left-0 top-1/2"></span>Contact Us</label>
                        <div className="">
                            <SplitText
  text="Get in touch"
  className="text-[#0C0B0B] font-semibold text-[60px] leading-[1.2] tracking-[3%]"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
  onLetterAnimationComplete={handleAnimationComplete}
  
/>
                            
                           
                            <p className="dark text-[18px] leading-[1.2] mt-2 w-3/4">Book your appointment quickly and easily with our trusted healthcare experts for fast and reliable medical support.</p>

                        </div>

                        <div className="from-area mt-16">
                            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        
       
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                                <div className="relative border-b border-neutral-300 text-black py-2 focus-within:border-black transition-colors duration-300">
                                    <input
                                    type="text"
                                    id="name"
                                    placeholder=" " /* 👈 ক্রুসিয়াল স্পেস: এটি ফ্লোটিং লেবেলের জন্য লাগবে */
                                    className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                    />
                                    <label
                                    htmlFor="name"
                                    className="absolute left-0 top-4  text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
                                    peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                                    not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
                                    >
                                    Enter Your Name
                                    </label>
                                </div>

                                
                                <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
                                    <input
                                    type="tel"
                                    id="phone"
                                    placeholder=" "
                                    className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    required
                                    />
                                    <label
                                    htmlFor="phone"
                                    className="absolute left-0 top-4 text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
                                    peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                                    not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
                                    >
                                    Enter Your Phone
                                    </label>
                                </div>
                                </div>

                                
                                <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-2 pb-1 placeholder-transparent"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 top-4 text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
                                    peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                                    not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
                                >
                                    Enter Your Email
                                </label>
                                </div>

                                
                                <div className="relative border-b border-neutral-300 py-2 focus-within:border-black transition-colors duration-300">
                                <textarea
                                    id="message"
                                    placeholder=" "
                                    rows={2}
                                    className="peer w-full bg-transparent text-neutral-900 text-base font-medium outline-none border-none pt-3 pb-1 resize-none placeholder-transparent"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 top-4 text-black text-base font-normal pointer-events-none transition-all duration-300 ease-in-out 
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-black 
                                    peer-focus:top-0 peer-focus:text-xs peer-focus:text-black
                                    not-placeholder-shown:top-0 not-placeholder-shown:text-xs not-placeholder-shown:text-black"
                                >
                                    Enter Message
                                </label>
                                </div>

                                {/* পলিসি শর্ত এবং সাবমিট বাটন */}
                                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <p className="text-sm text-black  max-w-[340px] leading-relaxed">
                                    By clicking submit, I acknowledge I have read and accepted the{" "}
                                    <a href="#" className="underline hover:text-black transition-colors">Privacy Policy</a>.
                                </p>
                                
                                {/* আপনার কাস্টম লাইম কালার বাটন */}
                                <CustomButton 
                                    text="Book An Appointment" 
                                    variant="lime" 
                                    className=""
                                />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
  )
}
