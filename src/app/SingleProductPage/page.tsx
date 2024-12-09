import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'; 

const page = () => {
  return (
    <div>
 <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Product Image Section */}
        <div className="lg:max-w-lg lg:w-full ml-32 md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded shadow-lg"
            alt="hero"
            src="/Image.png"
          />
        </div>

        {/* Product Details Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center relative">

          {/* Product Name and Price */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
            Library Stool Chair
            <br className="hidden lg:inline-block" />
            Chair
          </h1>

          {/* Price Section */}
          <div className="mb-6 py-2 px-4 bg-[#029FAE] text-white rounded-full inline-block">
            <span className="text-xl font-semibold">$99</span>
          </div>

          {/* Description */}
          <p className="mb-8 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>

          {/* Button with Cart Icon */}
          <div className="flex justify-center">
            <button className="inline-flex items-center text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <FaCartPlus className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>

         {/* feature section */}
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className=" mb-8 flex justify-between items-center">
  <h1 className='text-3xl font-bold'>Featured Products</h1>
  <a href="" className='underline text-black'>View All</a>
  </div>
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

export default page
