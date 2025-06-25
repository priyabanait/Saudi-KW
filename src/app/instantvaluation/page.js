'use client'
import React, { useEffect, useState } from 'react';
import Box from '@/components/box';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa'

const Instantvaluation = () => {
  // Add state to track screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <Header />

      <Box
        h3={"Let The Kw Agents"}
        src="/buildexperties.jpg"
        image={
          '/instantval4.png'
        }
      ></Box>

     
      <main className="px-4 py-6 md:mt-32 mt-10">
              <div className="md:mx-auto text-center">
                <h1 className="text-xl md:text-4xl font-light md:font-normal tracking-[0.1em] text-gray-800">
                Sell Your Home
                </h1>
                <hr className="w-60 md:w-80 border-0 mx-auto bg-[rgba(202,3,32,255)]
                 h-[1.5px] mt-6 md:mt-14" />
                <div className="mt-10 md:mx-40">
                  <p className="text-xs md:text-[1rem]">
                  Your Valuation Is Based On Millions Of Pieces Of Data, From Sold House Prices In Your Area To Current Market Trends And The Size Of Your Home.
                  </p>
                </div>
              </div>
            </main>
      {/* Form Section */}
      <div className="min-h-screen md:mt-20">
        {/* Title Banner */}
        <div className="bg-[rgba(202,3,32,255)] md:py-2 py-2 flex justify-center relative">

          <div className="relative">
            {/* KW Logo */}
            <Image
              src="/kwlinelogo.png"
              alt="KW Logo"
              width={120}
              height={120}
              className="object-contain w-10 h-10 md:w-30 md:h-25"
            />
            <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-normal text-base md:text-3xl tracking-[0.2em] whitespace-nowrap">
            GET IN TOUCH WITH US !
</span>

            </div>
          </div>
        </div>

        {/* Form + Sidebar Container */}
        <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
          {/* Left Black Sidebar */}
          <div className="hidden md:flex bg-black text-white flex-col items-center w-full md:w-80 lg:w-90 border-r-2 md:rounded-r-2xl relative min-h-full px-4 md:px-0">
            <div className="flex flex-col items-center w-full pt-6 md:pt-0">
              {/* Logo in sidebar */}
              <Image
                src="/KellerWilliams_KSA.png"
                alt="logo"
                width={230}
                height={230}
                className="mb-2 w-32 md:w-[230px] h-auto mx-auto"
              />
            </div>
            <div className="md:pt-20 space-y-2 group flex flex-col items-center justify-center  w-full">
              <div className="relative h-auto w-full mb-4 text-center ">
                <div className="text-center text-xs md:text-sm md:mx-8">
                <p>Thinking About Selling Your Property?</p><br />
<p>
  Our Experienced Kw Agents Are Here To Help You Every Step Of The Way. With Deep Market Knowledge 
  And Powerful Tools, We Provide A Free, No-obligation Evaluation Of Your Property — Helping You Understand Its 
  True Market Value And How To Position It For A Successful Sale.
</p>
<p>
  Whether You&apos;re Ready To List Or Just Exploring Your Options, Our Team Is Committed To Giving You 
  Honest Insights And A Seamless Experience.
</p>
<p className="mt-10 md:mt-40 font-bold">
  Let Us Guide You — From Evaluation To Closing.
</p>

                </div>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar (show only on mobile) */}
          <div className="flex md:hidden bg-black text-white flex-col items-center w-full rounded-b-2xl py-6 px-4">
            <Image
              src="/KellerWilliams_KSA.png"
              alt="logo"
              width={120}
              height={120}
              className="mb-2 w-20 h-auto mx-auto"
            />
            <div className="text-center text-xs mt-2">
            <p>Thinking About Selling Your Property?</p><br />
<p>
  Our Experienced Kw Agents Are Here To Help You Every Step Of The Way. With Deep Market Knowledge 
  And Powerful Tools, We Provide A Free, No-obligation Evaluation Of Your Property — Helping You Understand Its 
  True Market Value And How To Position It For A Successful Sale.
</p>
<p>
  Whether You&apos;re Ready To List Or Just Exploring Your Options, Our Team Is Committed To Giving You 
  Honest Insights And A Seamless Experience.
</p>
<p className='mt-6 font-bold'>Let Us Guide You — From Evaluation To Closing.</p>

            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex-1 py-6 md:py-10 px-4 md:px-30">
            <form className="w-full max-w-full space-y-4">
              <div>
              <label className="block mb-2 ml-2 md:text-[1rem] text-[0.8rem] font-normal md:font-normal ">First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full pl-4 py-2 md:py-3 rounded-2xl bg-white"
                />
              </div>
              <div>
              <label className="block ml-2  mb-2 md:text-[1rem] text-[0.8rem] font-normal md:font-normal ">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full pl-4 py-2 md:py-3 rounded-2xl bg-white"
                />
              </div>
              <div>
              <label className="block ml-2 mb-2 md:text-[1rem] text-[0.8rem] font-normal md:font-normal ">City</label>
                <input
                  type="text"
                  placeholder="City"
                   className="w-full pl-4 py-2 md:py-3 rounded-2xl bg-white"
                />
              </div>
              <div>
              <label className="block ml-2 mb-2 md:text-[1rem] text-[0.8rem] font-normal md:font-normal ">Email *</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-4 py-2 md:py-3 rounded-2xl bg-white"
                />
              </div>
              <div>
              <label className="block ml-2 mb-2 md:text-[1rem] text-[0.8rem] font-normal md:font-normal ">Property Type</label>
                <input
                  type="text"
                  placeholder="Property Type"
               className="w-full pl-4 py-2 md:py-3 rounded-2xl bg-white"
                />
              </div>
              <div>
              <label className="block ml-2 mb-2 md:text-[1rem] text-[0.8rem] font-normal md:font-normal ">Upload Photos</label>
                <input
                  type="file"
                  placeholder="Upload Photos"
                   className="w-full pl-4 py-2 md:py-3 rounded-2xl bg-white"
                />
              </div>
              <div>
              <label className="block ml-2 mb-2 md:text-[1rem] text-[0.8rem] font-normal md:font-normal ">Enter the Property Details *</label>
                <textarea
                  placeholder="Enter the Property Details"
                  rows="3"
                   className="w-full pl-4 py-2 md:py-3 rounded-2xl bg-white"
                />
              </div>
              <button
                type="submit"
                className="bg-red-700 text-white px-8 py-2 rounded-full float-right mt-4 md:mt-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div  className="hidden md:flex order-2 bg-[rgba(202,3,32,255)] md:order-1 items-center justify-center h-[25px] md:h-[76px]">
    <Image
      src="/kwline1.png"
      alt="KW Logo Center"
      width={80}
      height={80}
      className="object-contain mx-auto w-7 h-7 md:w-20 md:h-20"
    />
  </div>
  <div className="order-1 md:order-2 flex flex-col items-center justify-center">
    <Image
      src="/howwillyouthink.png"
      alt="How Will You Thrive"
      width={800}
      height={400}
      className="w-70 h-20 md:w-[950px] md:h-[400px] object-contain"
    />
   
  </div>
        <hr className=" hidden md:flex w-160 mx-auto bg-[rgba(202,3,32,255)] h-[1.5px] border-0 mt-2 md:mt-8 mb-10" />
        <Footer></Footer>
        </div>
  );
};

export default Instantvaluation;
