import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font shadow-md">
    <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
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

    <section className="bg-[#F0F2F3] w-full h-auto py-10">
  <div className="text-center py-10">
    <h1 className="font-semibold text-2xl mb-4">Or subscribe to the newsletter</h1>
    <div className="flex justify-center items-center space-x-4 mb-6">
      <input
        className="bg-transparent border-b-2 p-2 "
        type="email"
        placeholder="Email Address..."
      />
      <a
        className="underline text-black-500 hover:text-blue-600 transition-colors"
        href=""
      >
        SUBMIT
      </a>
    </div>
    <h1 className="font-semibold text-lg mt-4 text-gray-700">Follow products and discounts on Instagram</h1>
  </div>

  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between -m-4">
      {/* Product Card 1 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image.png"
          />
        </a>
      </div>

      {/* Product Card 2 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 1.png"
          />
        </a>
      </div>

      {/* Product Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 2.png"
          />
        </a>
      </div>

      {/* Product Card 4 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 3.png"
          />
        </a>
      </div>

      {/* Product Card 5 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 4.png"
          />
        </a>
      </div>

      {/* Product Card 6 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4 relative">
        <a className="block relative h-64 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block transition-transform duration-300 transform hover:scale-110"
            src="/Image 5.png"
          />
        </a>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default page
