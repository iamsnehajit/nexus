'use client';
import Image from "next/image";
import Link from "next/link";
import medicine from "../../public/images/medicine.svg";
import Book from "../../public/images/book.svg";
import Home from "../../public/images/home.svg"
import Fast from "../../public/images/fast.svg"

export default function Services() {
  return (
    <div className="py-8">
        <div className="container-custom relative">
            <h2 className='dark text-[20px] md:text-[25px] font-medium text-center mb-10'>How to Book a Lab Test in Easy Way</h2>
            <div className="absolute top-[67%] left-1/2 -translate-x-1/2  w-full h-1 border-t border-dashed border-[#F47527] z-10"></div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 relative z-20">
                    <label className="text-[16px] bg-[#F47527] py-0.5 px-5 rounded-[4px] text-white font-medium overflow-hidden absolute -top-3 left-8 z-10">Step 1</label>
                    <div className="grid grid-cols-12 bg-[#EEF3FA] rounded-[12px] overflow-hidden py-6">
                        <div className="col-span-4 py-5 flex justify-center items-center h-full relative overflow-hidden">
                            <Image src={Book} width={60} height={60} className="relative z-20" alt="Image not found"/>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-25 w-25 rounded-full bg-white"></div>
                        </div>
                        <div className="col-span-8 flex justify-start items-center h-full pr-5">
                            <div>
                                <h3 className="poppin text-black font-medium text-[20px] leading-[1.2] mb-2">Book Appointment</h3>
                                <p className="dark text-[16px] leading-[1.2]">Select a test/package and book an appointment on our website</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4 relative z-20">
                    <label className="text-[16px] bg-[#F47527] py-0.5 px-5 rounded-[4px] text-white font-medium overflow-hidden absolute -top-3 left-8 z-10">Step 2</label>
                    <div className="grid grid-cols-12 bg-[#EEF3FA] rounded-[12px] overflow-hidden py-6">
                        <div className="col-span-4 py-5 flex justify-center items-center h-full relative overflow-hidden">
                            <Image src={Home} width={60} height={60} className="relative z-20" alt="Image not found"/>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-25 w-25 rounded-full bg-white"></div>
                        </div>
                        <div className="col-span-8 flex justify-start items-center h-full pr-5">
                            <div>
                                <h3 className="poppin text-black font-medium text-[20px] leading-[1.2] mb-2">Home Sample Collection</h3>
                                <p className="dark text-[16px] leading-[1.2]">A certified agent visits you for sample collection at your selected time slot</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-4 relative z-20">
                    <label className="text-[16px] bg-[#F47527] py-0.5 px-5 rounded-[4px] text-white font-medium overflow-hidden absolute -top-3 left-8 z-10">Step 3</label>
                    <div className="grid grid-cols-12 bg-[#EEF3FA] rounded-[12px] overflow-hidden py-6">
                        <div className="col-span-4 py-5 flex justify-center items-center h-full relative overflow-hidden">
                            <Image src={Fast} width={60} height={60} className="relative z-20" alt="Image not found"/>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-25 w-25 rounded-full bg-white"></div>
                        </div>
                        <div className="col-span-8 flex justify-start items-center h-full pr-5">
                            <div>
                                <h3 className="poppin text-black font-medium text-[20px] leading-[1.2] mb-2">Fast & Accurate Results</h3>
                                <p className="dark text-[16px] leading-[1.2]">Get reports in 12-24hrs. View and download form our site.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
