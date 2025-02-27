import React from 'react'
// import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Eye, Play } from "lucide-react";
// import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
// import { useContentStore } from "../store/content";
// import axios from "axios";
// import { Link} from "react-router-dom";
// import PulseMainVideo from "./PulseBiping";
const images=[{src:'./truck1.bmp',quote:'The greatest threat to our planet is the belief that someone else will save it'},{src:'./truck2.bmp',quote:'Fast Secure and Reliable Cargo Transportation'}]
function HomeSlider() {
  return (
    <>
      <div className="w-full  h-screen  ">
          <Swiper
            loop={true} // Infinite Loop
            navigation={true} // Next/Prev Buttons
            pagination={{ clickable: true }} // Pagination Dots
            slidesPerView={1} // Show 6 slides at a time
            spaceBetween={10} // Spacing between slides
            modules={[Navigation, Pagination]}
            className=" w-full h-[50%]  lg:h-full"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" h-full bg-gradient-to-r from-black via-slate-700 to-slate-400">
                  <img
                    src={item.src}
                    alt={`2`}
                    className="w-full h-full rounded-lg mix-blend-overlay"
                  />
                  <div className=" absolute z-50 w-full top-[18%] lg:top-[30%] py-5 flex flex-col gap-5 ml-20 text-white">
                    <h2 className=" text-4xl lg:text-6xl font-bold w-[60%]">
                      {item.quote}
                    </h2>
                    <div className=" flex w-[60%] md:w-[30%] lg:w-[40%] text-lg lg:text-xl text-slate-300  font-semibold  justify-start gap-1">
                      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsum cum tempore rerum, maxime quisquam deserunt molestiae! Nesciunt a atque officia maxime iste, vitae, sunt velit id suscipit libero non.</h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </>
  )
}
export default HomeSlider
