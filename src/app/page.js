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
{/* Hero Section with Background Image */}
<div className="relative min-h-[74vh] md:min-h-screen">
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

  {/* Content Over Background */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] md:min-h-screen px-4">
    {/* Heading */}
    <h1 className="text-xl md:text-4xl md:mx-0 mx-10 font-bold text-center text-white mb-8 md:mb-5 mt-65 md:mt-74">
      ONE MOVE COULD SHAPE YOUR FUTURE
    </h1>

    <div className="w-full max-w-[690px] bg-gray-500/50 backdrop-blur-sm md:rounded-[40px] rounded-xl shadow-xl px-2 md:px-4 py-4 mx-auto">
  {/* Tabs - with reduced width */}
  <div className="flex justify-between items-center bg-white rounded-full  overflow-hidden text-xs md:text-sm font-semibold w-3/4 mx-auto">
  {["Buy", "Rent", "Commercial"].map((tab, i, arr) => (
    <React.Fragment key={tab}>
      <div
        className={`flex-1 text-center py-2 mx-4 cursor-pointer ${
          i === 0 
            ? "text-red-600 bg-white font-bold" 
            : "text-gray-600 font-normal"
        }`}
      >
        {tab}
      </div>
     {/* Divider with responsive spacing */}
{i < arr.length - 1 && (
  <div className="w-px h-8 bg-gray-400 mx-1 md:mx-2"></div>
)}
    </React.Fragment>
  ))}
</div>

   


  {/* Connected Search Bar - remains full width */}
  <div className="mt-4 bg-white rounded-full hidden md:flex items-center w-full overflow-hidden shadow-md">
    {/* Search Input */}
    <div className="flex items-center flex-1 px-8 py-2">
      <FaSearch className="text-gray-500 mr-2 text-sm" />
      <input
        type="text"
        placeholder="City , Area or Building"
        className="w-full text-xs md:text-sm text-gray-800 bg-transparent outline-none"
      />
    </div>

    {/* Divider */}
    <div className="w-px h-8 bg-gray-400 mx-2"></div>

    {/* Property Type */}
    <div className="flex items-center px-4 py-2 cursor-pointer text-xs md:text-sm text-gray-700">
      Property Type
      <FaChevronDown className="ml-2 text-[10px]" />
    </div>

    {/* Search Button */}
    <button className="bg-[#c8102e] text-white px-6 py-2 rounded-r-full text-xs md:text-sm font-semibold">
      Search
    </button>
  </div>
  
   {/* Mobile View (search input and dropdown in one group, button below) */}
   <div className="md:hidden flex flex-col gap-2 mt-4 mx-4">
  <div className="flex w-full max-w-md mx-auto">
  {/* Search Input */}
  <div className="flex-1 relative">
    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
    <input
      type="text"
      placeholder="City, Area or Building"
      className="w-full pl-10 pr-2 py-3 text-[0.7rem] border bg-white border-gray-500 rounded-l-full focus:outline-none focus:ring-0"
    />
  </div>

  {/* Property Type Dropdown */}
  <select className="w-32 py-2 px-2 text-[0.7rem]  border border-gray-500 border-l-0 rounded-r-full bg-white focus:outline-none focus:ring-0">
    <option value=""> Property Type</option>
    <option value="apartment">Apartment</option>
    <option value="villa">Villa</option>
  </select>
</div>

    {/* Search Button (full width below) */}
    <button className="bg-red-700 text-white justify-center items-center w-30 py-2 text-[0.6rem] rounded-full mt-1 focus:outline-none focus:ring-0 block mx-auto">
  Search
</button>
  </div>
</div>


</div>
</div>

<hr className="w-44 mx-auto bg-red-500 h-[1.5px] my-12 md:hidden" />

      {/* Image Grid Section */}
      <div className="md:mx-4 mx-14 md:py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-0 md:gap-2">
  {[
    { label: "Properties", path: 'properties', imageUrl: "/properties.jpg" },
    { label: "Market Center", path: 'marketCenter', imageUrl: "/marketcenter.jpg" },
    { label: "Agent", path: 'agent', imageUrl: "/agent.jpg" },
    { label: "Seller", path: 'seller', imageUrl: "/seller.jpg" },
    { label: "Buyer", path: 'buyer', imageUrl: "/buyer.jpg" },
    { label: "Tenant", path: 'tenant', imageUrl: "/tenant.jpg" },
    { label: "Franchise", path: 'franchise', imageUrl: "/franchise.jpg" },
    { label: "Our Culture", path: 'ourCulture', imageUrl: "/ourculture.jpg" },
  ].map(({ label, imageUrl, path }, i) => (
    <Link href={path} key={i} className="group">
      <div className="rounded-xl md:py-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <Image
          src={imageUrl}
          alt={label}
          width={230}
          height={189}
          className="h-26 w-26 md:h-50 md:w-50 object-contain"
        />
      </div>
    </Link>
  ))}
</div>

      <div className="flex justify-center items-center md:my-0 my-12 mt-20 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
        <hr className="md:w-140 w-44 mx-auto bg-red-500 h-[1.5px]" />
      </div>

      <div className="w-full mx-auto px-4 md:px-12 lg:px-18 md:py-14 py-4 md:mt-11">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          {/* First Image Block */}
          <div className="lg:w-1/2">
  <Link href="/riyadh">
    <Image
      src="/riyaddh.jpg"
      alt="Real Estate Property"
      width={800}
      height={500}
      className="w-full h-auto max-h-[500px] object-contain cursor-pointer"
    />
  </Link>
</div>

{/* Second Image Block */}
<div className="lg:w-1/2">
  <Link href="/jeddah">
    <Image
      src="/jeddhah.jpg"
      alt="Real Estate Agent"
      width={800}
      height={500}
      className="w-full h-auto max-h-[500px] object-contain cursor-pointer"
    />
  </Link>
</div>
        </div>
      </div>

      <div className="flex justify-center my-12 md:my-0 md:mt-11">
        <h1 className="text-center text-[1rem] md:text-[1.6rem] font-bold">TOOLS FOR YOUR NEEDS</h1>
      </div>

      <div className=" md:flex justify-center items-center md:my-2 my-0">
      <div className="md:mx-4 mx-14 md:py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 md:gap-2">
    {[
      {
        label: "Seller",
        path: "seller/sellerguid",
        imageUrl:
          "/sellerguid.jpg",
      },
      {
        label: "Buyer",
        path: "buyer/buyerguid",
        imageUrl:
          "/buyerguid.jpg",
      },
      {
        label: "Tenant",
        path: "tenant",
        imageUrl:
          "/tenantguid.jpg",
      },
      {
        label: "KW Training",
        path: "training",
        imageUrl:
          "/kwtraining.jpg"
      },
    ].map(({ imageUrl, path }, i) => (
      <Link href={path} key={i} className="group">
        <div className="rounded-xl md:py-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <Image
            src={imageUrl}
            alt="image"
            width={230}
            height={189}
            className="h-25 w-25 md:h-38 md:w-38 object-contain"
          />
        </div>
      </Link>
    ))}
  </div>
</div>

      <div className="flex justify-center items-center my-4 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8 mb-10 md:mb-0">
        <hr className="md:w-140 w-44 mx-auto bg-red-500 h-[1.5px]" />
      </div>

      {/* First Home Block */}
      <div className="md:my-12 my-4">
         <Link href="/properties">
        <Image
          src="/marinaView.jpg"
          alt="Modern Home"
          width={1920}
          height={1080}
          className="w-full h-auto md:h-auto border-2 border-white rounded-2xl object-contain"
        />
        </Link>
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
                  <label className="block text-white text-sm ml-2 font-normal mb-2 sm:mb-4" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-2 sm:py-3 border text-white text-[0.8rem] border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-normal ml-2 mb-2 sm:mb-4" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-2 sm:py-3 border text-white text-[0.8rem] border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-normal ml-2 mb-2" htmlFor="purpose">
                  I Want To
                </label>
                <input
                  className="w-64 px-4 py-2 sm:py-3 border text-white text-[0.8rem] border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  id="purpose"
                  type="text"
                  placeholder="Buy Property, Find agent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm font-normal ml-2 mb-2" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  className="w-full px-4 py-1 sm:py-2 border text-white text-[0.8rem] border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  id="notes"
                  rows="3"
                ></textarea>
              </div>

              <button className="w-full md:w-2/5 bg-white hover:bg-gray-100 text-red-700 font-bold text-sm py-2 sm:py-3 border px-6 rounded-2xl transition duration-200">
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <div className="relative ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/mapbg.jpg"
            alt="Company showcase"
            fill
            className="  w-full h-auto object-contain"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 px-4 sm:px-8 md:py-16 my-4 text-black text-center bg-white/50 ">
          {/* Heading */}
          <div className="mb-10 md:mb-28 md:mt-34 my-20 md:my-0">
          <h1 className="md:hidden text-xs md:text-3xl font-bold mb-2 text-red-700">
              OUR STATS
            </h1>
            <h1 className="text-xs md:text-3xl font-bold mb-2">
              WHY WORK WITH US
            </h1>
            <hr className="md:w-1/2 w-50 mx-auto border-gray-400" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-15 md:mt-0 max-w-5xl mx-6 mb-12 md:mb-60">
            {/* Stat 1 */}
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">$532B</p>
              <div className="flex max-w-[200px] mx-auto my-2">
  <div className="flex-1 h-px bg-red-500"></div>
  <div className="flex-1 h-px bg-gray-500"></div>
</div>

              <p className="text-[0.8rem]">Total Sales Volume</p>
              <p className="text-[0.8rem]">Worldwide</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">$1.4B</p>
              <div className="flex max-w-[200px] mx-auto my-2">
  <div className="flex-1 h-px bg-red-500"></div>
  <div className="flex-1 h-px bg-gray-500"></div>
</div>

              <p className="text-[0.8rem]">Closed Transactions</p>
              <p className="text-[0.8rem]">Worldwide</p>
            </div>

            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">1002</p>
              <div className="flex max-w-[200px] mx-auto my-2">
  <div className="flex-1 h-px bg-red-500"></div>
  <div className="flex-1 h-px bg-gray-500"></div>
</div>

              <p className="text-[0.8rem]">Market Centers</p>
              
              
              <p className="text-[0.8rem] ">Worldwide</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <p className="text-xl md:text-4xl font-bold mb-2">191K</p>
              <div className="flex max-w-[200px] mx-auto my-2">
  <div className="flex-1 h-px bg-red-500"></div>
  <div className="flex-1 h-px bg-gray-500"></div>
</div>

              <p className="text-[0.8rem]">Real Estate Agents</p>
              <p className="text-[0.8rem]">Worldwide</p>
            </div>
          </div>

          {/* Bottom Red Line */}
          <div className="flex justify-center items-center md:mt-14 my-2 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
            <hr className="md:w-6/12 w-44 mx-auto bg-red-500 h-[1.5px]" />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;