'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function BlueBannerSlider() {
  const banners = [
    { id: 1, title: "GET 10% OFF", subtitle: "across 16+ specialties", text: "Skip the queues and high fees" },
    { id: 2, title: "GET 20% OFF", subtitle: "on your first consult", text: "Expert doctors available 24/7" },
  ];

  return (
    // 'blue-banner-scope' ক্লাসটি ব্যবহার করা হয়েছে যেন অন্য স্লাইডারের ডিজাইন না ভাঙে
    <div className="blue-banner-scope w-full py-8">
      <div className="container-custom mx-auto rounded-[15px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="blue-swiper"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[343px] rounded-[15px] overflow-hidden bg-[#007095] flex items-center">
                
                {/* Background Pattern/Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  {/* এখানে আপনি আপনার প্যাটার্ন ইমেজ দিতে পারেন */}
                  <div className="w-full h-full bg-[url('/images/pattern.png')] bg-no-repeat bg-cover"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10 px-10 md:px-20 w-full flex justify-between items-center">
                  <div className="max-w-xl text-white">
                    <p className="poppin text-white text-4xl font-light mb-2">{banner.text}</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">
                      <span className="text-[#F8C129] poppin">{banner.title}</span>
                    </h2>
                    <p className="poppin text-white text-2xl font-light mb-5">{banner.subtitle}</p>
                    
                    <button className="bg-[#FF6D00] hover:bg-[#e66200] text-white px-6 py-2 text-sm rounded-md font-medium transition-all poppin">
                      Consult Now
                    </button>
                  </div>
                </div>
                {/* Doctor Image */}
                  <div className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[343px]">
                    <Image 
                      src="/images/doctors-image.png" // আপনার কাটা ডক্টর ইমেজ এখানে দিন
                      alt="Doctors"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* Scoped CSS: শুধুমাত্র এই স্লাইডারের ডটগুলোকে পরিবর্তন করবে */
        .blue-banner-scope .blue-swiper {
          padding-bottom: 0px !important;
        }

        .blue-banner-scope .swiper-pagination {
          position: relative !important; margin-top: 20px;
          text-align: center;
        }

        .blue-banner-scope .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #BFBFBF !important;
          opacity: 0.5;
          margin: 0 4px !important;
        }

        .blue-banner-scope .swiper-pagination-bullet-active {
          background: #F47527 !important;
          opacity: 1;
          width: 24px; /* লম্বাটে ডট */
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}