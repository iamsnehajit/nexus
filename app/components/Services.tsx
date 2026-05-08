'use client';
import Image from "next/image";
import Link from "next/link";
import medicine from "../../public/images/medicine.svg";
import doctor from "../../public/images/doctor.svg";
import lab from "../../public/images/lab.svg"
import arrow from "../../public/images/arrow-right.svg"

export default function Services() {
  return (
    <div>
        <div className="container-custom py-8">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4 bg-[#E2F9F0] rounded-[12px] overflow-hidden">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 py-5 flex justify-center items-center h-full relative overflow-hidden">
                            <Image src={medicine} width={60} height={60} className="relative z-20" alt="Image not found"/>
                            <div className="bg-[#BEEEDB] h-[120%] w-[120%] -top-[10%] -left-[30%] absolute z-10 rounded-[50%]"></div>
                        </div>
                        <div className="col-span-6 flex justify-start items-center h-full pl-2">
                            <div>
                                <h3 className="poppin text-black font-medium text-xl leading-[1.2]">Get 20%* off on Medicines</h3>
                                {/* ইনপুটটি হিডেন থাকবে */}
                                <input 
                                    type="file" 
                                    id="file-upload" 
                                    className="hidden" 
                                    onChange={(e) => {if (e.target.files && e.target.files.length > 0) {console.log(e.target.files[0]);}}}
                                />

                                
                                <label 
                                    htmlFor="file-upload" 
                                    className="text-[#0D7F80] poppin font-medium cursor-pointer text-sm"
                                >
                                    Upload Now
                                </label>
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-center items-center h-full">
                            <Link href="">
                                <Image src={arrow} width={30} height={30} alt="Image not found"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 bg-[#FFF9D7] rounded-[12px] overflow-hidden">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 py-5 flex justify-center items-center h-full relative overflow-hidden">
                            <Image src={doctor} width={60} height={60} className="relative z-20" alt="Image not found"/>
                            <div className="bg-[#F9F0BF] h-[120%] w-[120%] -top-[10%] -left-[30%] absolute z-10 rounded-[50%]"></div>
                        </div>
                        <div className="col-span-6 flex justify-start items-center h-full pl-2">
                            <div>
                                <h3 className="poppin text-black font-medium text-xl leading-[1.2]">Doctor Appointment</h3>

                                
                                <label 
                                    
                                    className="text-[#A18906] poppin font-medium cursor-pointer text-sm"
                                >
                                    Book Now
                                </label>
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-center items-center h-full">
                            <Link href="">
                                <Image src={arrow} width={30} height={30} alt="Image not found"/>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-span-4 bg-[#FFEBF2] rounded-[12px] overflow-hidden">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 py-5 flex justify-center items-center h-full relative overflow-hidden">
                            <Image src={lab} width={60} height={60} className="relative z-20" alt="Image not found"/>
                            <div className="bg-[#FFDEE9] h-[120%] w-[120%] -top-[10%] -left-[30%] absolute z-10 rounded-[50%]"></div>
                        </div>
                        <div className="col-span-6 flex justify-start items-center h-full pl-2">
                            <div>
                                <h3 className="poppin text-black font-medium text-xl leading-[1.2]">Lab Tests</h3>

                               
                                <label 
                                   
                                    className="text-[#CC4370] poppin font-medium cursor-pointer text-sm"
                                >
                                    At Home
                                </label>
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-center items-center h-full">
                            <Link href="">
                                <Image src={arrow} width={30} height={30} alt="Image not found"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
