'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  const images = [
    { src: "https://i.ibb.co/5jCb4Gp/floor-lamp-4226828.png", alt: "Floor Lamp" },
    { src: "https://i.ibb.co/KVNB17R/table-lamp-9175959.png", alt: "Table Lamp" },
    { src: "https://i.ibb.co/6D32gZ6/lamp-2251750.png", alt: "Technology" },
    { src: "https://i.ibb.co/pXdS8JN/chandelier-1171885.png", alt: "Chandelier" },
    { src: "https://i.ibb.co/8Df6hn7/wall-lamp-6384312.png", alt: "Wall Lamp" },
    { src: "https://i.ibb.co/K7Y2Y21/christmas-lights-6294953.png", alt: "Christmas Lights" },
    { src: "https://i.ibb.co/YXkrNyD/lamp-11041964.png", alt: "Lanterns" },
  ];

  return (
    <div className='mt-12'>
        <div className="grid grid-cols-7 gap-0 w-full   ">
      {images.map((image, index) => (
        <div key={index} className=" relative flex flex-col items-center justify-center border-2 p-6 transform transition-transform duration-500 ease-in-out  hover:scale-105" >
          <div data-aos="fade-in">
          <Image
            src={image.src}
            alt={image.alt}
            width={80} 
            height={80} 
            objectFit="contain"
          />
          <p className='text-lg mt-2'>{image.alt}</p>

          </div>
          
        </div>
      ))}
    </div>

    </div>
    
  );
};

export default Categories;
