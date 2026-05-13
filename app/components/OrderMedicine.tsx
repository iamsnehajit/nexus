'use client';
import Image from "next/image";
import Link from "next/link";
import upload from "../../public/images/upload.svg";
import reorder from "../../public/images/reorder.svg";
import paperclip from "../../public/images/paperclip.svg"; 

export default function OrderMedicine() {
  return (
    <div>
        <div className="relative container-custom py-10">
             <div className="grid grid-cols-12 gap-3">
                <div className="md:col-span-6 col-span-12">
                    <div className="order-medicine relative overflow-hidden bg-[#EBF9FF] rounded-xl h-36">
                        <div className="grid grid-cols-12 gap-3 h-full">
                            <div className="col-span-4 flex justify-center items-center relative overflow-hidden h-full">
                                <Image src={upload} width={70} height={70} className="relative z-20" alt="Image not found"/>
                                <div className="absolute w-[150px] h-[150px] z-10 rounded-[50%] bg-[#C0EBFC] -bottom-[75px]"></div>
                            </div>
                            <div className="col-span-8 flex justify-start items-center h-full">
                                <div>
                                    <h2 className="poppin text-[16px] md:text-xl font-medium dark leading-[1.2]">Upload for Order</h2>
                                    <p className="poppin text-sm dark leading-[1.2] mt-3 mb-4">Upload prescription and we will deliver your medicines</p>
                                    <div className="bg-[#F47527] flex justify-center items-center max-w-[180px] p-1 rounded-[5px] overflow-hidden">
                                    <Image src={paperclip} width={20} height={20} alt="Image not found"/>
                                    <input 
                                        type="file" 
                                        id="file-upload" 
                                        className="hidden" 
                                        onChange={(e) => {if (e.target.files && e.target.files.length > 0) {console.log(e.target.files[0]);}}}
                                    />

                                   

                                    <label 
                                        htmlFor="file-upload" 
                                        className="text-white poppin font-medium cursor-pointer text-sm pl-1"
                                    >
                                        Upload Prescription
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                    <div className="order-medicine relative overflow-hidden bg-[#F7EEFA] rounded-xl h-36">
                        <div className="grid grid-cols-12 gap-3 h-full">
                            <div className="col-span-4 flex justify-center items-center relative overflow-hidden h-full">
                                <Image src={reorder} width={70} height={70} className="relative z-20" alt="Image not found"/>
                                <div className="absolute w-[150px] h-[150px] z-10 rounded-[50%] bg-[#f1cdfd] -bottom-[75px]"></div>
                            </div>
                            <div className="col-span-8 flex justify-start items-center h-full">
                                <div>
                                    <h2 className="poppin text-[16px] md:text-xl font-medium dark leading-[1.2]">Re-Order Medicine</h2>
                                    <p className="poppin text-sm dark leading-[1.2] mt-3 mb-4">Restock your frequently bought items with a single tap</p>
                                    <div className="bg-[#F47527] flex justify-center items-center max-w-[150px] p-1 rounded-[5px] overflow-hidden">
                                    
                                    <button 
                                        
                                        className="text-white poppin font-medium cursor-pointer text-sm pl-1"
                                    >
                                        Re-Order Medicine
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
