'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import slider from "../../public/images/slider.jpg";

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  { id: 1, color: 'bg-blue-500', title: 'Slide 1' },
  { id: 2, color: 'bg-red-500', title: 'Slide 2' },
  { id: 3, color: 'bg-green-500', title: 'Slide 3' },
  { id: 4, color: 'bg-purple-500', title: 'Slide 4' },
];

export default function HeroSlider() {
  return (
    <div className="w-full overflow-hidden mt-33">
      <Swiper
        modules={[Autoplay, Pagination]}
        
        slidesPerView={'auto'} 
        
        centeredSlides={true} 
        
        loop={true}
        
        spaceBetween={10} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        watchSlidesProgress={true}
        grabCursor={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          
          <SwiperSlide key={slide.id} className="hero-slide">
            <div className=''>
              <Image src={slider} alt="Image not found"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* 6️⃣ pagination dots-এর জন্য প্যাডিং */
        .hero-swiper {
          padding-bottom: 40px !important;
        }
        
        /* 7️⃣ মেইন স্লাইডগুলোর সাইজ CSS দিয়ে সেট করছি (১.৪ ভিউ আনার জন্য) */
        .hero-slide {
          /* ৮০% প্রস্থ দিব যাতে দুইপাশে ১০%+১০% করে অন্য স্লাইড দেখা যায় */
          width: 80% !important; 
          transition: all 0.4s ease-in-out;
        }

        /* ডেসকটপের জন্য একটু ছোট করতে পারেন চাইলে */
        @media (min-width: 1024px) {
            .hero-slide {
              width: 70% !important; /* মেইন স্লাইড ৭০%, পাশে ১৫%+১৫% */
            }
        }

        /* 8️⃣ পাশের স্লাইডগুলোকে ছোট এবং ঝাপসা (fade) করার এফেক্ট */
        
        
        .swiper-slide-active {
          transform: scale(1); /* মেইন স্লাইড ফুল সাইজ */
          opacity: 1; /* মেইন স্লাইড উজ্জ্বল */
        }
        /* ডটগুলোর ডিজাইন এখানে যোগ করুন */
        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db; /* gray-300 */
            opacity: 1;
            margin: 0 3px !important;
        }

        .swiper-pagination-bullet-active {
            background: #F47527 !important; /* আপনার গোল্ডেন ইয়েলো কালার */
            width: 25px; /* লম্বাটে ডট এফেক্ট */
            border-radius: 5px;
        }
      `}</style>
    </div>
  );
}