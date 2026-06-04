'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const items = [
  { id: 1, label: 'Thyroid', img: "/images/Thyroid.svg" },
  { id: 2, label: 'Heart' , img: "/images/Heart.svg"},
  { id: 3, label: 'Joint Pain' , img: "/images/JointPain.svg" },
  { id: 4, label: 'Liver' , img: "/images/Liver.svg"},
  { id: 5, label: 'Kidney' , img: "/images/Kidney.svg" },
  { id: 6, label: 'Bone and Joint' , img: "/images/BoneJoint.svg" },
  { id: 7, label: 'Bone and Joint' , img: "/images/BoneJoint.svg" },
  { id: 8, label: 'Bone and Joint' , img: "/images/BoneJoint.svg" },
];

export default function OrgansCarousel() {
  return (
    <div className="relative">
        <div className='container-custom'>
          <div className='product-cat-top py-3'>
            <h2 className='dark text-[20px] md:text-[25px] font-medium pt-10 pb-3'>Checkups based on Vital Organs</h2>
          </div>
            <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={15} 
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        
        // --- মেইন সেটিংস ---
        slidesPerView={2.5} 
        
        breakpoints={{
          
          640: {
            slidesPerView: 4.5,
          },
          
          1024: {
            slidesPerView: 6.5, 
          },
        }}
        className="multi-swiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-[10px] py-2 flex items-center justify-center hover:shadow-md transition-shadow relative overflow-hidden border border-[#D2D2D2]">
              
              <div className='pr-1'>
                  <Image src={item.img} width={40} height={40} className='p-1' alt="Image not found"/>
              </div>
              <div className='h-full'>
                <p className="dark text-[18px] m-0">{item.label}</p>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
            </Swiper>
        </div>

      <style jsx global>{`
        .multi-swiper {
          padding-bottom: 40px !important;
        }
        
        /* Pagination Dots কাস্টমাইজেশন */
        .multi-swiper .swiper-pagination-bullet {
          background: #3b82f6; /* ব্লু কালার উদাহরণস্বরূপ */
        }
        
        // .multi-swiper .swiper-pagination-bullet-active {
        //   width: 20px;
        //   border-radius: 4px;
        // }
      `}</style>
    </div>
  );
}