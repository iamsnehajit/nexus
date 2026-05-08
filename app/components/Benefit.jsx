import Image from "next/image";
import sefty from "../../public/images/safe.svg";
import click from "../../public/images/click.svg";
import delivary from "../../public/images/delivary.svg";
import record from "../../public/images/record.svg";

export default function Benefit() {
  return (
    <div>
        <div className='container-custom py-8'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-3'>
                    <div className='relative overflow-hidden bg-[#d5f7e9] border border-[#BEEEDB] rounded-xl p-4 h-32'>
                        <div className='grid grid-cols-12 h-full'>
                            <div className='col-span-4 flex justify-center items-center h-full'>
                                <Image src={sefty} width={80} height={80} alt="Image not found"/>
                            </div>
                            <div className='col-span-8 flex justify-center items-start h-full'>
                                <div>
                                    <h2 className="poppin font-medium mb-2 text-xl dark leading-[1.2]">100% Safe & Secure</h2>
                                    <p className="poppin font-light text-sm gray leading-[1.2]">We take all safety and hygiene measures to keep our customers safe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-3'>
                    <div className='relative overflow-hidden bg-[#d5f7e9] border border-[#BEEEDB] rounded-xl p-4 h-32'>
                        <div className='grid grid-cols-12 h-full'>
                            <div className='col-span-4 flex justify-center items-center h-full'>
                                <Image src={click} width={80} height={80} alt="Image not found"/>
                            </div>
                            <div className='col-span-8 flex justify-center items-start h-full'>
                                <div>
                                    <h2 className="poppin font-medium mb-2 text-xl dark leading-[1.2]">Click and Pick</h2>
                                    <p className="poppin font-light text-sm gray leading-[1.2]">Click to buy a range of products across categories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-3'>
                    <div className='relative overflow-hidden bg-[#d5f7e9] border border-[#BEEEDB] rounded-xl p-4 h-32'>
                        <div className='grid grid-cols-12 h-full'>
                            <div className='col-span-4 flex justify-center items-center h-full'>
                                <Image src={delivary} width={80} height={80} alt="Image not found"/>
                            </div>
                            <div className='col-span-8 flex justify-center items-start h-full'>
                                <div>
                                    <h2 className="poppin font-medium mb-2 text-xl dark leading-[1.2]">Home Delivery</h2>
                                    <p className="poppin font-light text-sm gray leading-[1.2]">We offer convenient home delivery of medicines & general goods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-3'>
                    <div className='relative overflow-hidden bg-[#d5f7e9] border border-[#BEEEDB] rounded-xl p-4 h-32'>
                        <div className='grid grid-cols-12 h-full'>
                            <div className='col-span-4 flex justify-center items-center h-full'>
                                <Image src={record} width={80} height={80} alt="Image not found"/>
                            </div>
                            <div className='col-span-8 flex justify-center items-start h-full'>
                                <div>
                                    <h2 className="poppin font-medium mb-2 text-xl dark leading-[1.2]">Unlimited Health Records</h2>
                                    <p className="poppin font-light text-sm gray leading-[1.2]">Save all your health records (Medical Records...)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* spotlight details */}
            <div className="border-t border-[#D8D6D6] mt-12 pt-8">
                <ul>
                    <li className="poppin gray2 leading-[1.3] mb-5 text-sm">
                        <span className="dark text-xl poppin font-medium leading-[1.3] ">Top-Selling Medicines:</span> Montair LC | Telma 40 | Wegovy 0.25mg | Mounjaro 2.5mg | Rybelsus 7mg | Mounjaro 7.5mg | Pantocid DSR | Erly 6mg | Nurokind LC | Yurpeak 5mg | Megalis 10 | Lirafit 6mg | Yurpeak 10mg | Amoxyclav 625 | Wegovy 0.5mg | Levipil 500
                    </li>
                    <li className="poppin gray2 leading-[1.3] mb-5 text-sm">
                        <span className="dark text-xl poppin font-medium leading-[1.3] ">Top-Tests we cover:</span> Thyroid Profile Test | Prolactin Test | D Dimer Test | FBS Test | ESR Test | CBC Test | HbA1c Test | VDRL Test | RBS Test | SGPT Test | Creatinine Test | HIV Test | Troponin Test | CRP Test | Liver Function Test | Lipid Profile Test | PSA Test
                    </li>
                    <li className="poppin gray2 leading-[1.3] mb-5 text-sm">
                        <span className="dark text-xl poppin font-medium leading-[1.3] ">100% Genuine Medicine From Nexus:</span> All medicines/healthcare products sold on Apollo Pharmacy are procured from our sister company - Apollo Pharmacy, with a reputation of selling only 100% genuine products. The products sold through Apollo Pharmacy are inspected thoroughly to ensure only genuine products make the cut. We believe that when it comes to medicines, quality and authenticity should never be compromised.
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
