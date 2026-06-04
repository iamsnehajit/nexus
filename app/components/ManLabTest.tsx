
import Image from "next/image"
import Lab1 from "../../public/images/lab1.svg";
import Lab2 from "../../public/images/lab2.svg";
import Lab3 from "../../public/images/lab3.svg";
export default function TopLabTest() {
  return (
    <div className="py-10 lg:py-10">
        <div className="container-custom relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className='dark text-[20px] md:text-[25px] font-medium'>Recommended Checkups for Women</h2>
                <button className="text-[#F47527] text-[14px] md:text-[16px] font-medium uppercase">View All &gt;</button>
            </div>
            <div className="lab-details">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className=" bg-[#FFFBE4] relative p-4 rounded-xl overflow-hidden min-h-45">
                            <div className="lab-details-top flex justify-between items-center">
                                <label className="text-[16px] bg-[#F47527] py-1 px-3 rounded-[4px] text-white font-medium overflow-hidden">60% OFF</label>
                                <p className="dark text-[18px] font-semibold">₹ 1449 <span className="text-sm text-[#798383] line-through">₹ 3599</span></p>
                            </div>
                            <div className="w-[70%] z-20 relative">
                                <h3 className="dark text-[16px] font-medium leading-[1.2] mb-2 mt-6">Healthy 2026 Full Body Checkup</h3>
                                <p className="gray3 text-sm font-medium leading-[1.2]">Diagnostic tool for screening and monitoring of your health</p>
                            </div>
                            <Image src={Lab1} width={100} height={100} alt="Image not found" className="absolute right-0 bottom-0 z-10"/>
                        </div>
                    </div>

                    {/* lab 2 */}

                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className=" bg-[#FFFBE4] relative p-4 rounded-xl overflow-hidden min-h-45">
                            <div className="lab-details-top flex justify-between items-center">
                                <label className="text-[16px] bg-[#F47527] py-1 px-3 rounded-[4px] text-white font-medium overflow-hidden">60% OFF</label>
                                <p className="dark text-[18px] font-semibold">₹ 800 <span className="text-sm text-[#798383] line-through">₹ 1250</span></p>
                            </div>
                            <div className="w-[70%] z-20 relative">
                                <h3 className="dark text-[16px] font-medium leading-[1.2] mb-2 mt-6">Diabetes Care</h3>
                                <p className="gray3 text-sm font-medium leading-[1.2]">Specially designed package to cover the preventive care aspects for diabetics</p>
                            </div>
                            <Image src={Lab2} width={100} height={100} alt="Image not found" className="absolute right-0 bottom-0 z-10"/>
                        </div>
                    </div>

                      {/* lab 3 */}

                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className=" bg-[#FFFBE4] relative p-4 rounded-xl overflow-hidden min-h-45">
                            <div className="lab-details-top flex justify-between items-center">
                                <label className="text-[16px] bg-[#F47527] py-1 px-3 rounded-[4px] text-white font-medium overflow-hidden">60% OFF</label>
                                <p className="dark text-[18px] font-semibold">₹ 1449 <span className="text-sm text-[#798383] line-through">₹ 3599</span></p>
                            </div>
                            <div className="w-[70%] z-20 relative">
                                <h3 className="dark text-[16px] font-medium leading-[1.2] mb-2 mt-6">Basic Health Checkup</h3>
                                <p className="gray3 text-sm font-medium leading-[1.2]">Assesses health of 47 essential body parameters</p>
                            </div>
                            <Image src={Lab3} width={120} height={120} alt="Image not found" className="absolute right-0 bottom-0 z-10"/>
                        </div>
                    </div>

                    {/* lab 4 */}

                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className=" bg-[#FFFBE4] relative p-4 rounded-xl overflow-hidden min-h-45">
                            <div className="lab-details-top flex justify-between items-center">
                                <label className="text-[16px] bg-[#F47527] py-1 px-3 rounded-[4px] text-white font-medium overflow-hidden">60% OFF</label>
                                <p className="dark text-[18px] font-semibold">₹ 1449 <span className="text-sm text-[#798383] line-through">₹ 3599</span></p>
                            </div>
                            <div className="w-[70%] z-20 relative">
                                <h3 className="dark text-[16px] font-medium leading-[1.2] mb-2 mt-6">Healthy 2026 Full Body Checkup</h3>
                                <p className="gray3 text-sm font-medium leading-[1.2]">Diagnostic tool for screening and monitoring of your health</p>
                            </div>
                            <Image src={Lab1} width={100} height={100} alt="Image not found" className="absolute right-0 bottom-0 z-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
