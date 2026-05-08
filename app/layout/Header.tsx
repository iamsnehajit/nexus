'use client';
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/images/logo.svg"; 
import map from "../../public/images/map-pin.svg";
import search from "../../public/images/search.svg";
import cart from "../../public/images/shopping-cart.svg";
import user from "../../public/images/user-round.svg";
import SearchDropdown from "../components/ui/SearchDropdown";
import Dropdown from "../components/ui/MenuDropdown";

export default function Header() {

  // menu details
  // Example data for different dropdowns
  const opt1 = [{ value: 'abc', label: 'abc' }, { value: 'xyz', label: 'xyz' }];
  const opt2 = [{ value: 'abc', label: 'abc' }, { value: 'xyz', label: 'xyz' }];
  const opt3 = [{ value: 'abc', label: 'abc' }, { value: 'xyz', label: 'xyz' }];
  const opt4 = [{ value: 'abc', label: 'abc' }, { value: 'xyz', label: 'xyz' }];
  const opt5 = [{ value: 'abc', label: 'abc' }, { value: 'xyz', label: 'xyz' }];

  const handleChange = (selectedOption, name) => {
    console.log(`Selected in ${name}:`, selectedOption);
  };

  return (
    <div className='fixed top-0 left-0 w-full pt-5 z-50 bg-white'>
      <div className='container-custom mx-auto'>
          <nav className='navbar'>
            <div className='grid grid-cols-12 gap-1'>
                <div className='col-span-1 pr-2 flex items-center logo-div relative'>
                    <Link href="/">
                      <Image 
                        src={logoImg} 
                        alt="Company Logo" 
                        width={200}
                        height={100} 
                        priority className="brand-logo"
                      />
                    </Link>
                </div>
                <div className='col-span-11'>
                  <div className='grid grid-cols-12 gap-1 pl-5'>
                    <div className='col-span-4'>
                      <div>
                        <label className='gray text-sm leading-0 mb-0 inline-block'>Delivery & Store Pickup Available</label>
                        <div className="flex">
                          <Image src={map} alt="Location" width={18} height={30} priority className="map-logo"/>
                          <SearchDropdown />
                        </div>
                      </div>
                    </div>
                    <div className='col-span-6 flex items-center justify-end pr-4'> 
                      <div className="search-div border border-[#EDEDED] w-[75%] px-2 py-2 relative">
                          <form className="flex">
                            <Image src={search} alt="Company Logo" width={20} height={40} priority className="brand-logo pr-1"/>
                            <input type="text" placeholder="Search for medicines, lab tests, wellness & beauty" className="border-0 outline-0 w-[85%] text-sm text-[#929292]"/>
                            <button type="reset" className="absolute right-1 top-2.5 cursor-pointer">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="15" 
                                height="15" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </form>
                      </div>
                    </div>
                    <div className='col-span-2'>
                      <div className="flex items-center h-full justify-end">
                          <div className="userarea flex justify-end">
                          <div className="relative">
                              <Image src={cart} alt="Company Logo" width={25} height={40} priority className="brand-logo"/>
                              <div className="cart-notification bg-[#F47527] text-white w-6 h-6 rounded-[50%] text-sm flex justify-center items-center poppin absolute -right-3 -top-3">0</div>
                          </div>
                          <div className="ml-7">
                            <Link href="/" className="text-sm text-[#2C2C2C] px-3.5 py-2 border border-[#2C2C2C] rounded-[5px] hover:bg-[#F47527] hover:text-white"><Image src={user} alt="Company Logo" width={15} height={20} priority className="inline-block"/> Login | Signup</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </nav>
      </div>

      {/* bottom menu */}
      <div className="border-t border-[#D7D7D7] bottom-menu">
          <div className="container-custom">
            <div className="grid grid-cols-12 bottom-menu-grid">
              <div className='col-span-4'>
                <div className="only-menu">
                  <ul className="p-0 m-0 flex">
                    <li><Link href="/" className="text-sm text-black hover:text-[#4EBBBC]">Medicines</Link></li>
                    <li><Link href="/" className="text-sm text-black hover:text-[#4EBBBC]">Lab tests</Link></li>
                    <li><Link href="/" className="text-sm text-black hover:text-[#4EBBBC]">Consult doctors</Link></li>
                  </ul>
                </div>
              </div>
              <div className='col-span-8'>
                <div className="dropdown-menu">
                    <ul className="p-0 m-0 flex justify-end">
                      <li className="mr-3">
                        <Dropdown  options={opt1} placeholder="Hair Care"  onChange={(val) => handleChange(val, 'opt1')}/>
                      </li>
                      <li className="mr-3">
                        <Dropdown  options={opt2} placeholder=" Fitness & Health"  onChange={(val) => handleChange(val, 'city')}/>
                      </li>
                      <li className="mr-3">
                        <Dropdown  options={opt3} placeholder="Vitamins & Nutrition"  onChange={(val) => handleChange(val, 'city')}/>
                      </li>
                      <li className="mr-3">
                        <Dropdown  options={opt4} placeholder="Supports & Braces"  onChange={(val) => handleChange(val, 'city')}/>
                      </li>
                      <li className="">
                        <Dropdown  options={opt5} placeholder="Immunity Boosters"  onChange={(val) => handleChange(val, 'city')}/>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
