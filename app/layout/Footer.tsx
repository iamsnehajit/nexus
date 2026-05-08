import Image from 'next/image';
import Link from 'next/link';
import fb from '../../public/images/Facebook.svg';
import twitter from '../../public/images/Twitter.svg';
import yt from '../../public/images/Youtube.svg';
import gapy from '../../public/images/gpay.svg';
import phonepe from '../../public/images/phonepe.svg';
import amazonpay from '../../public/images/amazonpay.svg';
import visa from '../../public/images/visa.svg';
import master from '../../public/images/mastercard.svg';
import paytm from '../../public/images/paytm.svg';

export default function Footer() {
  return (
    <div>
      <footer className='bg-[#E2F9F0] overflow-hidden rounded-2xl my-5 mx-5 py-20'>
        <div className='container-custom'>
          <div className='grid grid-cols-12'>
            <div className='col-span-2'>
                <h2 className='poppin dark text-xl font-medium mb-3'>Company</h2>
                <ul>
                    <li className='poppin dark text-sm mb-2'><Link href="/">About Us</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Careers</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Blog</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Partner</Link></li>
                </ul>
                <h3 className='poppin dark text-xl font-medium mb-3 mt-1'>Our Services</h3>
                <ul>
                  <li className='poppin dark text-sm mb-2'><Link href="/">Order Medicine</Link></li>
                  <li className='poppin dark text-sm mb-2'><Link href="/">polyclinic</Link></li>
                  <li className='poppin dark text-sm mb-2'><Link href="/">Lab Tests</Link></li>
                </ul>
            </div>
            <div className='col-span-2'>
              <h2 className='poppin dark text-xl font-medium mb-3'>Featured Categories</h2>
                <ul>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Vitamin Store</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Summer Store</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Sexual Wellness</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Diabetes Essentials</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Personal Care</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Mother and Baby Care</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Mobility & Elderly Care</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Sports Nutrition</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Explore More</Link></li>
                </ul>
            </div>
            <div className='col-span-3 pl-5'>
                <h2 className='poppin dark text-xl font-medium mb-3'>Book Lab Tests at Home</h2>
                <ul>
                    <li className='poppin dark text-sm mb-2'><Link href="/">RT PCR Test At Home</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Renal Profile (KFT, RFT Test)</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Hemogram Test</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Lipid Profile Test</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Thyroid Profile Test (T3 T4 Tsh Test)</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">D Dimer Test</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Urine Culture Test</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Complete Blood Count (CBC Test)</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Liver Function Test (LFT Test)</Link></li>
                </ul>
            </div>
            <div className='col-span-2'>
                <h2 className='poppin dark text-xl font-medium mb-3'>Need Help</h2>
                <ul>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Privacy Policy</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Vulnerability Disclosure Policy</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Terms and Conditions</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Customer Support Policy</Link></li>
                    <li className='poppin dark text-sm mb-2'><Link href="/">Return Policy</Link></li>
                    
                </ul>
            </div>
            <div className='col-span-3 pl-5'>
              <h2 className='poppin dark text-xl font-medium mb-3'>Find us on</h2>
              <ul>
                    <li className='poppin dark text-sm mb-2 flex items-center text-center'>
                      <Link href="/"><Image src={fb} width={20} height={20} alt='image not found' /></Link>
                      <Link href="/"><Image src={twitter} width={20} height={20} className='mx-5' alt='image not found' /></Link>
                      <Link href="/"><Image src={yt} width={20} height={20} alt='image not found' /></Link>
                    </li>     
                </ul>
                <h3 className='poppin dark text-xl font-medium mt-1 mb-3'>Our Payment Partners</h3>
                <div className='flex mb-5'>
                  <Image src={gapy} width={50} height={50} alt='image not found' />
                  <Image src={phonepe} width={30} height={30} className='mx-5' alt='image not found' />
                  <Image src={paytm} width={50} height={50} className='mx-5' alt='image not found' />
                  
                </div>
                <div className='flex'>
                  <Image src={amazonpay} width={50} height={50} className='mx-5' alt='image not found' />
                  <Image src={visa} width={50} height={50} className='mx-5' alt='image not found' />
                  <Image src={master} width={50} height={50} alt='image not found' />
                </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='text-center py-4 w-[1000px] mx-auto'>
        <p className='poppin dark text-sm leading-[1.2]'>© 2026 Nexus. All rights reserved. All medicines are dispensed in compliance with the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process requests for Schedule X and habit forming drugs.</p>
      </div>
    </div>
  )
}
