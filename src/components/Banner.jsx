"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-5 lg:gap-4 gap-1">
        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src="https://i.ibb.co/7vxJnLb/brown-glass-pendant-lamp.jpg"
            alt="Brown Glass Pendant Lamp"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src="https://i.ibb.co/tmZFc3b/hanging-lamp.jpg"
            alt="Hanging Lamp"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src="https://i.ibb.co/xLhd8Tn/beautiful-hotel-insights-details.jpg"
            alt="Beautiful Hotel Insights Details"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src="https://i.ibb.co/DKJ9Hnc/lifestyle.jpg"
            alt="Lifestyle"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src="https://i.ibb.co/TMLGhGY/yellow-chinese-lantern.jpg"
            alt="Yellow Chinese Lantern"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
        <p data-aos="fade-in" className="text-2xl sm:text-3xl font-semibold mb-4">
          Light Up Your Home with Illustra
        </p>
        <p data-aos="fade-in" className="text-sm mb-12">
          Explore our collection today and add a touch of creativity to your home! Transform any space with our stunning collection of lighting and wall art.
        </p>
        <button className="text-lg px-6 py-2 hover:bg-amber-600 border-2 flex justify-center items-center gap-2">
          Shop Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
