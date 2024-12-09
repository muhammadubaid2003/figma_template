import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TiTick } from 'react-icons/ti';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { IoCartOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="w-full h-auto bg-[#272343] flex flex-wrap items-center justify-between px-4 py-2 sm:h-[45px] sm:px-8 lg:px-20">
        <div className="w-full sm:w-auto text-white flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0">
          <TiTick className="mt-1" />
          <span className="text-sm sm:text-base">Free shipping on all orders over $50</span>
        </div>
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-5">
          <select className="bg-[#272343] text-white border border-white rounded px-2 py-1 text-sm sm:text-base">
            <option value="English">Eng</option>
          </select>
          <Link href="/Faq" className="text-white text-sm sm:text-base">
            Faqs
          </Link>
          <HiOutlineExclamationCircle className="text-white mt-1" />
          <Link href="#" className="text-white text-sm sm:text-base">
            Need Help
          </Link>
        </div>
      </div>

      {/* Middle Header */}
      <div className="w-full h-auto bg-[#F0F2F3] flex flex-wrap items-center justify-between px-4 py-2 sm:h-[60px] sm:px-8 lg:px-20">
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-0">
          <Link href="#" className="flex title-font font-medium items-center text-gray-900">
            <Image height={40} width={40} src="/Logo Icon.png" alt="Comforty Logo" />
            <span className="font-semibold ml-3 text-xl sm:text-2xl">Comforty</span>
          </Link>
        </div>
        <Link href="/AddCard">
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-5">
            <div className="bg-white w-[120px] h-[35px] flex items-center justify-between gap-3 px-3 rounded-md shadow-lg">
              <IoCartOutline className="text-gray-700 text-lg" />
              <h4 className="text-black text-sm sm:text-base font-medium">Cart</h4>
              <Image height={20} width={20} src="/No.png" alt="Cart Status" />
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Header */}
      <div className="w-full h-auto bg-[#FFFFFF] flex flex-wrap items-center justify-between px-4 py-2 sm:h-[60px] sm:px-8 lg:px-20 shadow-md">
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-0">
          <Link href="/" className="mr-5 hover:text-[#007580]">
            Home
          </Link>
          <Link href="/About" className="mr-5 hover:text-[#007580]">
            About
          </Link>
          <Link href="/Contact_us" className="mr-5 hover:text-[#007580]">
            Contact
          </Link>
          <Link href="/product" className="mr-5 hover:text-[#007580]">
            Pages
          </Link>
          <Link href="/About" className="mr-5 hover:text-[#007580]">
            Signup
          </Link>
        </div>
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-2">
          <h4 className="text-sm sm:text-base">Contact:</h4>
          <h4 className="font-semibold text-sm sm:text-base">(808) 555-0111</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
