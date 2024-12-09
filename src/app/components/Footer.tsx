import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto shadow-md">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              {/* Logo Section */}
              <li>
                <a href="#" className="flex title-font font-medium items-center text-gray-900">
                  <Image height={40} width={40} src="/Logo Icon.png" alt="Comforty Logo" />
                  <span className="font-semibold ml-3 text-xl sm:text-2xl">Comforty</span>
                </a>
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
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-gray-500 hover:text-[#007580] transition duration-300"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-gray-500 hover:text-[#007580] transition duration-300"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-gray-500 hover:text-[#007580] transition duration-300"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Pinterest"
                    className="text-gray-500 hover:text-[#007580] transition duration-300"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </span>
              </li>
            </nav>
          </div>

          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Sofa</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Armchair</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Wing Chair</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Desk Chair</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Wooden chair</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Park Bench</a>
              </li>
            </nav>
          </div>

          {/* Support Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">
              Support
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Help & Support</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Terms & Conditions</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Privacy Policy</a>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-[#007580]">Help</a>
              </li>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">
              Newsletter
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder='Your email'
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-auto flex flex-wrap mb-5 justify-between px-4 sm:h-[60px] sm:px-8 lg:px-20">
  <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col w-full">
    {/* Text on the left side */}
    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 flex-1">
      @ 2021 - Blogy - Designed & Developed by
      <a
        href="/"
        rel="noopener noreferrer"
        className="text-gray-600 ml-1 font-semibold"
        target="_blank"
      >
        Zakirsoft
      </a>
    </p>

    {/* Icons on the right side */}
    <div className="flex items-center justify-end gap-2">
      <Image className="text-gray-500" height={27} width={40} src="/Group 11.png" alt="" />
      <Image className="text-gray-500" height={27} width={40} src="/Group 12.png" alt="" />
      <Image className="text-gray-500" height={27} width={40} src="/Vector.png" alt="" />
      <Image className="text-gray-500" height={27} width={40} src="/Union.png" alt="" />
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
