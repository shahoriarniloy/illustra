"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Heading = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathName =usePathname();
  const router =useRouter();
  const links = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Track My Orders", path: "/orders" },
    { title: "Contact", path: "/contact" },
  ];


  const handler=()=>{
    router.push('/login')
  }
  return (
    <nav className='text-black'>
      <p className='w-full text-amber-500 text-sm text-center bg-gray-100 py-2'>
        PRE-BLACK FRIDAY <span className='text-red-700'>SALE! 10%</span> Off Sitewide
      </p>
      <div className='flex justify-between py-4 px-4 sm:px-24 items-center'>
        <p className='text-black text-2xl'>Illustra</p>
        <div className='hidden sm:flex gap-6'>
          {links.map(link => (
            <Link className={`${pathName=== link.path && "font-bold"}`} key={link.path} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className='hidden sm:flex gap-6'>
          <FiSearch />
          <FiShoppingCart />
          <button onClick={handler}><FiUser /></button>
          </div>
        <div className='sm:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`sm:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <div className='fixed top-0 right-0 w-64 h-full bg-white p-4'>
          <button onClick={toggleMenu} className='mb-4'>
            <FiX size={24} />
          </button>
          {links.map(link => (
            <Link key={link.path} href={link.path}>
              <p>{link.title}</p>
            </Link>
          ))}
          <div className='flex gap-6 mt-4'>
            <FiSearch />
            <FiShoppingCart />
            <button onClick={handler}><FiUser /></button>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Heading;
