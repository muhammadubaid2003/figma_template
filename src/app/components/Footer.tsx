import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto shadow-md">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              {/* Logo Section */}
              <li>
                <Link href="#" className="flex title-font font-medium items-center text-gray-900">
                  <Image height={40} width={40} src="/Logo Icon.png" alt="Comforty Logo" />
                  <span className="font-semibold ml-3 text-xl sm:text-2xl">Comforty</span>
                </Link>
              </li>

              {/* Description Section */}
              <li className="mt-2">
                <p className="text-gray-600 text-sm">
                  Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
                </p>
              </li>

              {/* Social Media Links */}
              <li className="mt-4">
                <span className="inline-flex justify-center sm:justify-start space-x-3">
                  <Link href="#" aria-label="Facebook" className="text-gray-500 hover:text-[#007580] transition duration-300">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </Link>
                  <Link href="#" aria-label="Twitter" className="text-gray-500 hover:text-[#007580] transition duration-300">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </Link>
                  {/* Add remaining social media links here */}
                </span>
              </li>
            </nav>
          </div>

          {/* Repeat the same process for other sections */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#007580]">Sofa</Link>
              </li>
              {/* Add other categories */}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
