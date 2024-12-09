import React from 'react'
import Image from 'next/image'
import { LiaShippingFastSolid } from 'react-icons/lia'

const page = () => {
  return (
    <div>FaCartShopping
      <section className="text-gray-600 body-font py-12">
  <div className="container px-5 md:px-28 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">
    {/* Content Section */}
    <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 bg-[#007580] p-8 shadow-lg text-white flex flex-col justify-between items-center md:items-start">
      <h1 className="title-font text-2xl md:text-3xl mb-4 text-white font-bold text-center md:text-left">
        About Us - Comforty
      </h1>
      <p className="leading-relaxed mb-6 text-center md:text-left">
        At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
      </p>
      <button className="px-6 py-2 bg-[#F9F9F926] text-white font-semibold rounded hover:bg-teal-900 transition duration-300">
        View Product
      </button>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 px-4 md:px-8 rounded-lg overflow-hidden mt-6 md:mt-0">
      <div className="relative w-full h-96">
        <Image
          className="object-cover object-center"
          src="/Image 4.png"
          alt="Comforty product image"
          layout="fill"
        />
      </div>
    </div>
  </div>

  {/* Brand Difference Section */}
  <h1 className="text-center text-2xl md:text-3xl font-bold mb-6 mt-20">
  What Makes Our Brand Different
</h1>
<div className="flex flex-row justify-center items-center gap-6 px-6 md:px-16">
  {/* Box 1 */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-[#F9F9F9] transform hover:scale-105 transition duration-300 ease-in-out">
    <div className="flex flex-col items-center text-center">
      <LiaShippingFastSolid className="text-[#007580] text-4xl mb-4" />
      <h3 className="text-[#007580] text-xl font-semibold mb-2">Next Day as Standard</h3>
      <h5 className="text-[#007580] font-light text-base">
        Order before 3pm and get your order the next day as standard
      </h5>
    </div>
  </div>

  {/* Box 2 */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-[#F9F9F9] transform hover:scale-105 transition duration-300 ease-in-out">
    <div className="flex flex-col items-center text-center">
      <LiaShippingFastSolid className="text-[#007580] text-4xl mb-4" />
      <h3 className="text-[#007580] text-xl font-semibold mb-2">Fast Shipping</h3>
      <h5 className="text-[#007580] font-light text-base">
        Enjoy fast and reliable shipping for all your orders.
      </h5>
    </div>
  </div>

  {/* Box 3 */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-[#F9F9F9] transform hover:scale-105 transition duration-300 ease-in-out">
    <div className="flex flex-col items-center text-center">
      <LiaShippingFastSolid className="text-[#007580] text-4xl mb-4" />
      <h3 className="text-[#007580] text-xl font-semibold mb-2">Quality Assurance</h3>
      <h5 className="text-[#007580] font-light text-base">
        We ensure the highest quality for all our products.
      </h5>
    </div>
  </div>

  {/* Box 4 */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-[#F9F9F9]  transform hover:scale-105 transition duration-300 ease-in-out">
    <div className="flex flex-col items-center text-center">
      <LiaShippingFastSolid className="text-[#007580] text-4xl mb-4" />
      <h3 className="text-[#007580] text-xl font-semibold mb-2">Customer Support</h3>
      <h5 className="text-[#007580] font-light text-base">
        We provide excellent customer support 24/7.
      </h5>
    </div>
  </div>
</div>

<div className="container mx-auto">
  <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-20 pl-28 ">
    Our Popular Products
  </h1>
  <div className="flex flex-wrap justify-center -m-4">
    {/* Product Card 1 */}
    <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full relative">
      <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
          src="/Image.png"
        />
      </a>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
            Library Stool Chair
          </a>
          <p className="text-gray-600 text-base mb-2">$16.00</p>
        </div>
      </div>
    </div>

    {/* Product Card 2 */}
    <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full relative">
      <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
          src="/Image 1.png"
        />
      </a>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
            Library Stool Chair
          </a>
          <p className="text-gray-600 text-base mb-2">$21.15</p>
        </div>
      </div>
    </div>

    {/* Product Card 3 */}
    <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4 w-full relative">
      <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
          src="/Image 2.png"
        />
      </a>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <a href='' className="text-gray-900 hover:text-teal-500 title-font text-lg font-medium mb-2">
            Library Stool Chair
          </a>
          <p className="text-gray-600 text-base mb-2">$12.00</p>
        </div>
      </div>
    </div>
  </div>
</div>



</section>

    </div>
  )
}

export default page
