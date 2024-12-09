import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const Hero = () => {
  return (
    <div>
    {/* Hero section */}
      <section className="bg-gray-100 py-16 px-8 sm:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-[100px] w-full">
          {/* Left Side Content */}
          <div className="max-w-md text-left space-y-4 w-full md:w-[50%]">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Welcome to Chairy
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
              Best Furniture Collection For Your Interior.
            </h1>
            <button className="mt-6 px-8 py-3 bg-teal-500 text-white font-medium rounded-md shadow-md hover:bg-teal-600 transition-all">
              Shop Now <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center w-full md:w-[50%] mt-8 md:mt-0">
            <img
              src="/Product Image.png"
              alt="Chair"
              className="w-[80%] max-w-[300px] object-contain mx-auto"
            />
          </div>
        </div>
      </section>
      {/* Brand section */}
      <section className='bg-white py-16 sm:px-12'>
  <div className='flex flex-wrap justify-center gap-32'>
    <img alt="" className="object-cover object-center w-[85px] h-[87px]" src="/Logo.png"/>
    <img alt="" className="object-cover object-center w-[85px] h-[87px]" src="/Logo 1.png"/>
    <img alt="" className="object-cover object-center w-[85px] h-[87px]" src="/Logo 2.png"/>
    <img alt="" className="object-cover object-center w-[85px] h-[87px]" src="/Logo 3.png"/>
    <img alt="" className="object-cover object-center w-[85px] h-[87px]" src="/Logo 4.png"/>
    <img alt="" className="object-cover object-center w-[85px] h-[87px]" src="/Logo 5.png"/>
  </div>
      </section>

    {/* feature section */}
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
    <div className="flex flex-wrap -m-4">
      {/* Product Card 1 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image.png"
          />
        </a>
        {/* "New" Tag */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
          New
        </span>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
              Library Stool Chair
            </a>
            <p className="text-gray-600 text-base mb-2">$16.00</p>
          </div>
          {/* Cart Icon */}
          <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
            <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Product Card 2 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 1.png"
          />
        </a>
        {/* "Sale" Tag */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
          Sale
        </span>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
              Library Stool Chair
            </a>
            <p className="text-gray-600 text-base mb-2">$21.15</p>
          </div>
          {/* Cart Icon */}
          <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
            <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Product Card 3 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 2.png"
          />
        </a>
        {/* "New" Tag */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
          New
        </span>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
              Library Stool Chair
            </a>
            <p className="text-gray-600 text-base mb-2">$12.00</p>
          </div>
          {/* Cart Icon */}
          <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
            <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Product Card 4 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 3.png"
          />
        </a>
        {/* "Sale" Tag */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
          Sale
        </span>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
              The 400 Blows
            </a>
            <p className="text-gray-600 text-base mb-2">$18.40</p>
          </div>
          {/* Cart Icon */}
          <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
            <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* Top categories */}

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <h1 className="text-3xl font-bold mb-8">Top Categories</h1>
    <div className="flex flex-wrap -m-4 items-center justify-center">
      {/* Product Card 1 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 4.png"
          />
          {/* Hover Box */}
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 flex justify-center w-full h-[25%]">
            <div className="text-center text-white">
              <p className="text-lg font-medium">The Catalyzer</p>
              <p className="text-base">$16.00</p>
            </div>
          </div>
        </a>
      </div>

      {/* Product Card 2 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 5.png"
          />
          {/* Hover Box */}
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 flex justify-center w-full h-[25%]">
            <div className="text-center text-white">
              <p className="text-lg font-medium">Shooting Stars</p>
              <p className="text-base">$21.15</p>
            </div>
          </div>
        </a>
      </div>

      {/* Product Card 3 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 6.png"
          />
          {/* Hover Box */}
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 flex justify-center w-full h-[25%]">
            <div className="text-center text-white">
              <p className="text-lg font-medium">Neptune</p>
              <p className="text-base mt-1">$12.00</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>


    {/* Gallery section */}
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col lg:flex-row h-auto lg:h-[648px]">
    {/* Left Section */}
    <div className="relative flex w-full lg:w-1/2 h-full">
      {/* Big Image */}
      <div className="w-full h-full p-2 lg:pl-[70px]">
        <img
          alt="gallery"
          className="w-full h-full object-cover object-center block"
          src="/Image.png"
        />
      </div>
    </div>

    {/* Right Section */}
    <div className="flex w-full lg:w-1/2 flex-wrap">
      {/* Top Row */}
      <div className="w-full lg:w-1/2 h-[50%] p-2">
        <img
          alt="gallery"
          className="w-full h-full object-cover object-center block"
          src="Image 1.png"
        />
      </div>
      <div className="w-full lg:w-1/2 h-[50%] p-2">
        <img
          alt="gallery"
          className="w-full h-full object-cover object-center block"
          src="Image 2.png"
        />
      </div>
      {/* Bottom Row */}
      <div className="w-full lg:w-1/2 h-[50%] p-2">
        <img
          alt="gallery"
          className="w-full h-full object-cover object-center block"
          src="Image 3.png"
        />
      </div>
      <div className="w-full lg:w-1/2 h-[50%] p-2">
        <img
          alt="gallery"
          className="w-full h-full object-cover object-center block"
          src="Image 4.png"
        />
      </div>
    </div>
  </div>
</section>

{/* product section */}
<section className="text-gray-600 body-font shadow-md">
    <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="flex flex-wrap -m-4">
        {/* Product Card 1 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="e-commerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image.png"
            />
            </a>
            {/* "New" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
            New
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div>
                
                <a href='/SingleProductPage' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                Library Stool Chair
                </a>
                <p className="text-gray-600 text-base mb-2">$16.00</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>

        {/* Product Card 2 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="e-commerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image 1.png"
            />
            </a>
            {/* "Sale" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
            Sale
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div> 
                <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                Library Stool Chair
                </a>
                <p className="text-gray-600 text-base mb-2">$21.15</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>

        {/* Product Card 3 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="e-commerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image 2.png"
            />
            </a>
            {/* "New" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
            New
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div>
                
            <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                Library Stool Chair
                </a>
                <p className="text-gray-600 text-base mb-2">$12.00</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>

        {/* Product Card 4 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="e-commerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image 3.png"
            />
            </a>
            {/* "Sale" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
            Sale
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div>
                
                <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                The 400 Blows
                </a>
                <p className="text-gray-600 text-base mb-2">$18.40</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="container mx-auto">
        <div className="flex flex-wrap -m-4">
        {/* Product Card 1 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image.png"
            />
            </a>
            {/* "New" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
            New
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div>
                
                <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                Library Stool Chair
                </a>
                <p className="text-gray-600 text-base mb-2">$16.00</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>

        {/* Product Card 2 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image 1.png"
            />
            </a>
            {/* "Sale" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
            Sale
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div> 
                <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                Library Stool Chair
                </a>
                <p className="text-gray-600 text-base mb-2">$21.15</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>

        {/* Product Card 3 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image 2.png"
            />
            </a>
            {/* "New" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
            New
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div>
                
            <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                Library Stool Chair
                </a>
                <p className="text-gray-600 text-base mb-2">$12.00</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>

        {/* Product Card 4 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
            <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
                src="/Image 3.png"
            />
            </a>
            {/* "Sale" Tag */}
            <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
            Sale
            </span>
            <div className="mt-4 flex items-center justify-between">
            <div>
                
                <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
                The 400 Blows
                </a>
                <p className="text-gray-600 text-base mb-2">$18.40</p>
            </div>
            {/* Cart Icon */}
            <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#029FAE] transition-all">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-white" />
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>


    </div>
  )
}

export default Hero
