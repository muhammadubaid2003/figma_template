import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">GET In Touch with Us</h1>
      <p className="text-center mb-8 text-gray-600">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      {/* Contact Info and Form Section */}
      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row p-6 rounded-lg">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-3 mt-1" size={20} />
              <div>
                <strong>Address</strong>
                <p>236 5th SE Avenue, New <br /> York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhoneAlt className="mr-3 mt-1" size={20} />
              <div>
                <strong>Phone Number:</strong>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="mr-3 mt-1" size={20} />
              <div>
                <strong>Working Time:</strong>
                <p>Monday-Friday: 9:00 - <br /> 22:00</p>
                <p> Saturday-Sunday: 9:00 - <br /> 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="flex flex-col space-y-4">
            <div>
              <label className="block mb-2 font-bold">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter the Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-500 px-8 py-2 mt-6 text-xl text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Responsive Images Section */}
      <div className="w-full mt-16 justify-evenly bg-slate-300 mx-4 md:mx-8 py-10">
        <div className="flex flex-wrap items-center gap-10 justify-center">
          <Image
            src="/Frame 5.png"
            alt="Service 1"
            width={250}
            height={250}
            className="w-full max-w-[300px] h-auto mb-4 md:mb-0"
          />
          <Image
            src="/Frame 19.png"
            alt="Service 2"
            width={250}
            height={250}
            className="w-full max-w-[300px] h-auto mb-4 md:mb-0"
          />
          <Image
            src="/Frame 4.png"
            alt="Service 3"
            width={250}
            height={250}
            className="w-full max-w-[300px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
