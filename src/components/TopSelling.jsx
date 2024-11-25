
import Image from 'next/image';
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart } from 'react-icons/fa';


const TopSelling = () => {
   
    return (
        <div>
            <p className="text-4xl text-center mt-16 mb-4">Trending Now</p>
            <p className="text-md text-gray-700 text-center">
                Here’s some of our most popular products people have purchased
            </p>

            <div className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="mt-8 flex flex-col items-center group">
                        <div className="relative w-[300px] h-[400px] overflow-hidden">
                            <div className="absolute top-2 left-2 bg-gray-900 text-white text-sm font-semibold py-1 px-3 rounded-md shadow-md z-10">
                                -10%
                            </div>

                            <Image
                                src="https://i.ibb.co/T4hq7n3/O1-CN01-Dgn8j-N1ucc-J7-H2-W0-R-2216861346058-0-cib.webp"
                                alt="item"
                                height={200}
                                width={300}
                                className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                            />

                            <Image
                                src="https://i.ibb.co/b7qnfkH/O1-CN01-Ngwb-MT1c-Kb-WJti-Xi-H-2212736933582-0-cib-gigapixel-highfidelityv2-8x.webp"
                                alt="item hover"
                                height={200}
                                width={300}
                                className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-110 transform"
                            />

                            <button   className="absolute inset-x-0 bottom-4 mx-auto w-[150px] py-2 bg-white text-black text-sm rounded-sm flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:bg-gray-900 hover:text-white">
                                <FaShoppingCart />
                                Quick Shop
                            </button>
                        </div>
                        <p className="text-md mt-4">Walnut Floor Lamp Solid Wood Art Lamp</p>
                        <p className="flex items-center text-yellow-500 mt-2">
                            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar />
                        </p>
                        <p className="text-md mt-2">
                            <span className="line-through text-gray-500">$348.00 USD</span>
                            <span className="text-black ml-2">$314.00 USD</span>
                        </p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center mt-8'>            
                <button className='btn border-2 border-black rounded-3xl px-12 py-3'>Load More</button>
            </div>
        </div>
    );
};

export default TopSelling;
