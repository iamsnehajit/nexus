'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const items = [
  { id: 1, label: 'Diabetes Care', img: "/images/Diabetes-Care.svg" },
  { id: 2, label: 'Cardiac Care' , img: "/images/Cardiac-Care.svg"},
  { id: 3, label: 'Stomach Care' , img: "/images/Stomach-Care.svg" },
  { id: 4, label: 'Pain Relief' , img: "/images/Pain-Relief.svg"},
  { id: 5, label: 'Liver Care' , img: "/images/Liver-Care.svg" },
  { id: 6, label: 'Oral Care' , img: "/images/Oral-Care.svg" },
  { id: 7, label: 'Respiratory', img: "/images/Respiratory.svg" },
  { id: 8, label: 'Elderly Care' , img: "/images/Elderly-Care.svg" },
  { id: 9, label: 'Brand 9' , img: "/images/Diabetes-Care.svg" },
  { id: 10, label: 'Brand 10' , img: "/images/Diabetes-Care.svg" },
];

export default function MultiSlideCarousel() {
  return (
    <div className="relative">
        <div className='container-custom'>
          <div className='product-cat-top'>
            <h2 className='dark text-[20px] md:text-[25px] font-medium pt-10 pb-7'>Browse by health concerns</h2>
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
            slidesPerView: 7.5, 
          },
        }}
        className="multi-swiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#E2F9F0] h-40 rounded-[20px] flex items-end justify-center hover:shadow-md transition-shadow relative overflow-hidden">
              
              <div className='bg-[#BEEEDB] absolute -top-12 -left-[10%] w-[120%] h-40 rounded-[50%] z-10 flex justify-center items-center'>
                  <Image src={item.img} width={50} height={50} className='pt-10' alt="Image not found"/>
              </div>
              <span className="poppin dark text-sm pb-3">{item.label}</span>
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