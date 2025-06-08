'use client'
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaBuilding, FaChevronDown } from "react-icons/fa";
import Link from 'next/link';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="relative w-full">
  <Header />

  {/* Hero Section */}
  <div className="relative min-h-screen">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image
        src="/kwbg-image.jpg"
        alt="hero"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-sm md:text-4xl font-bold text-white mb-4 md:mb-8 mt-30 md:mt-60">
        ONE MOVE COULD SHAPE YOUR FUTURE
      </h1>
    </div>

    {/* Fixed Search Box in Center */}
    <div className="absolute left-0 right-0 top-[65%] md:top-[80%] z-10">
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-white rounded-t-3xl p-4 shadow-lg pb-12">
          <div className="flex flex-col md:flex-row items-center w-full px-6 mt-4 sm:px-8 gap-2 sm:gap-0">
            {/* Search Input */}
            <div className="flex items-center w-full min-h-[48px] px-6 border border-gray-300 rounded-full md:rounded-l-full md:rounded-r-none focus-within:ring-1 transition-all">
              <FaSearch className="text-gray-500 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Looking For a Home Start Here..."
                className="w-full outline-none text-sm sm:text-md text-black bg-transparent"
              />
            </div>

            {/* Select Dropdown */}
            <div className="relative w-full md:w-auto min-w-[150px]">
              <select className="w-full min-h-[48px] px-4 pr-8 border border-gray-300 text-sm rounded-full md:rounded-r-full md:rounded-l-none text-gray-700 hover:border-gray-400 transition-all appearance-none">
                <option className="text-gray-400">Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="bg-red-700 rounded-b-3xl p-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
          <button className="w-56 px-4 py-2 bg-red-800 text-white font-medium rounded-xl md:rounded-l-xl md:rounded-r-none border border-gray-300">
            Find a Property
          </button>
          <button className="w-56 px-4 py-2 bg-red-800 text-white font-medium rounded-xl md:rounded-r-xl md:rounded-l-none border border-gray-300">
            Find an Agent
          </button>
        </div>
      </div>
    </div>
  </div>



      {/* Image Grid Section */}
      <div className="px-4 md:py-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-0 md:gap-2 mt-20 lg:mt-20">
        {[
          { label: "Properties", path: 'properties', imageUrl: "https://static.wixstatic.com/media/36a881_58e60526563049da91b5a702cb9995ac~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png" },
          { label: "Market Center", path: 'marketCenter', imageUrl: "https://static.wixstatic.com/media/36a881_63ae150a87e247f4910718ae270a72c0~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png" },
          { label: "Agent", path: 'agent', imageUrl: "https://static.wixstatic.com/media/36a881_e044755275e349d683e96f438b0bb5c2~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png" },
          { label: "Seller", path: 'seller', imageUrl: "https://static.wixstatic.com/media/36a881_19eaa839fd874fc8981955a4021a4ca8~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png" },
          { label: "Buyer", path: 'buyer', imageUrl: "https://static.wixstatic.com/media/36a881_e46ac8d781f74cc4b8398f64c2d63425~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png" },
          { label: "Tenant", path: 'tenant', imageUrl: "https://static.wixstatic.com/media/36a881_464aa2c8eefd4c3aab2ff966735952a8~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png" },
          { label: "Franchise", path: 'franchise', imageUrl: "https://static.wixstatic.com/media/36a881_93371d3a91d7440b895906dd5eb1620a~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png" },
          { label: "Our Culture", path: 'ourCulture', imageUrl: "https://static.wixstatic.com/media/36a881_795b387ef3734f7b97a97edd833d71b7~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png" },
        ].map(({ label, imageUrl, path }, i) => (
          <Link href={path} key={i} className="group">
            <div className="rounded-xl md:py-6 flex flex-col items-center text-center transition-all cursor-pointer">
              <Image
                src={imageUrl}
                alt={label}
                width={230}
                height={189}
                className="h-25 w-25 md:h-50 md:w-50 object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center my-4 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
        <hr className="md:w-140 w-60 mx-auto bg-red-500 h-[1.5px]" />
      </div>

      <div className="w-full mx-auto px-4 md:px-12 lg:px-18 md:py-14 py-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          {/* First Image Block */}
          <div className="lg:w-1/2">
            <Image
              src="/riyaddh.jpg"
              alt="Real Estate Property"
              width={800}
              height={500}
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          {/* Second Image Block */}
          <div className="lg:w-1/2">
            <Image
              src="/jeddhah.jpg"
              alt="Real Estate Agent"
              width={800}
              height={500}
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-2">
        <h1 className="text-center text-2xl md:text-[1.6rem] font-bold">TOOLS FOR YOUR NEEDS</h1>
      </div>

      <div className="flex flex-col justify-center items-center my-2">
        <div className="px-4 md:px-12 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1">
          {[
            { label: "Seller", path: "seller", imageUrl: "https://static.wixstatic.com/media/36a881_7d53aec344d244b891df7800700c036c~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png" },
            { label: "Buyer", path: "buyer", imageUrl: "https://static.wixstatic.com/media/36a881_6bcb0ad030b34b878edcd2e359c9b9be~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png" },
            { label: "Tenant", path: "tenant", imageUrl: "https://static.wixstatic.com/media/36a881_04928a3d51144f029d4575a4a9266682~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png" },
            { label: "KW Training", path: "training", imageUrl: "https://static.wixstatic.com/media/36a881_59922235a80840b59bf72d4e8b785757~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png" },
          ].map(({ imageUrl, path }, i) => (
            <Link href={path} key={i} className="group">
              <div className="rounded-xl md:py-6 flex flex-col items-center text-center transition-all cursor-pointer">
                <Image
                  src={imageUrl}
                  alt='image'
                  width={230}
                  height={189}
                  className="h-25 w-25 md:h-36 md:w-36 object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-4 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
        <hr className="md:w-140 w-60 mx-auto bg-red-500 h-[1.5px]" />
      </div>

      {/* First Home Block */}
      <div className="md:my-12 my-4">
        <Image
          src="/marinaView.jpg"
          alt="Modern Home"
          width={1920}
          height={1080}
          className="w-full h-auto md:h-full border-2 border-white rounded-2xl"
        />
      </div>

      <main className="w-full">
        <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
          {/* Left Side - Image (Full Height on Laptops) */}
          <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-full relative">
            <Image
              src="/formimage.jpg"
              alt="Property"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Form (Full Height & Centered Content) */}
          <div className="w-full lg:w-1/2 bg-red-700 flex items-center justify-center min-h-[50vh] lg:min-h-full">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-extralight text-white mb-6 sm:mb-8">
                YOUR FUTURE MARKET CENTER STARTS WITH ONE BOLD STEP
              </h2>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label className="block text-white text-sm font-bold mb-2 sm:mb-4" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-2 sm:py-3 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2 sm:mb-4" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-2 sm:py-3 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="purpose">
                  I Want To
                </label>
                <input
                  className="w-64 px-4 py-2 sm:py-3 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  id="purpose"
                  type="text"
                  placeholder="Buy Property, Find agent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  className="w-full px-4 py-1 sm:py-2 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  id="notes"
                  rows="3"
                ></textarea>
              </div>

              <button className="w-full md:w-2/5 bg-white hover:bg-gray-100 text-red-800 font-bold py-2 sm:py-3 border border-black px-6 rounded-3xl transition duration-200">
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mapbg.jpg"
            alt="Company showcase"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 px-4 sm:px-8 md:py-16 my-4 text-black text-center bg-white/50 ">
          {/* Heading */}
          <div className="mb-10 md:mb-28 md:mt-34">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              WHY WORK WITH US
            </h1>
            <hr className="md:w-1/2 mx-auto border-gray-400" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 md:mb-60">
            {/* Stat 1 */}
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">$532B</p>
              <hr className="max-w-[200px] mx-auto border-t border-gray-400 my-2" />
              <p className="text-[0.8rem]">Total Sales Volume</p>
              <p className="text-[0.8rem] text-gray-600">Worldwide</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">$1.4B</p>
              <hr className="max-w-[200px] mx-auto border-t border-gray-400 my-2" />
              <p className="text-[0.8rem]">Closed Transactions</p>
              <p className="text-[0.8rem] text-gray-600">Worldwide</p>
            </div>

            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">191K</p>
              <hr className="max-w-[200px] mx-auto border-t border-gray-400 my-2" />
              <p className="text-[0.8rem]">Real Estate Agents</p>
              <p className="text-[0.8rem] text-gray-600">Worldwide</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">1002</p>
              <hr className="max-w-[200px] mx-auto border-t border-gray-400 my-2" />
              <p className="text-[0.8rem]">Market Centers</p>
              <p className="text-[0.8rem] text-gray-600">Worldwide</p>
            </div>
          </div>

          {/* Bottom Red Line */}
          <div className="flex justify-center items-center md:mt-14 my-2 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
            <hr className="w-6/12 mx-auto bg-red-500 h-[1px]" />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;