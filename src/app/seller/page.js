'use client'
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Box from '@/components/box';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
const Seller = () => {
  const timelineRef = useRef(null);
  const [markerTop, setMarkerTop] = useState(0);
  

  const steps = [
    {
      title: 'REASON FOR SELLING',
      content: `DECIDING TO SELL YOUR HOME CAN BE A VERY EMOTIONAL PROCESS, NO MATTER THE REASON. THE FIRST STEP IN SELLING IS TO UNDERSTAND YOUR MOTIVATION AND GOAL. IF YOU ARE SELLING BECAUSE OF OUTSIDE CIRCUMSTANCES, YOU PROBABLY HAVE A TIMELINE TO WORK WITHIN\n\nWHY DO YOU WANT TO SELL YOUR HOME ? +\n\nTALK WITH YOUR KELLER WILLIAMS AGENT ABOUT THEIR STRATEGY TO SELL YOUR HOME.`,
      align: 'right',
    },
    {
      title: 'HIRE THE RIGHT AGENT',
      content: `IN THIS FAST-PACED REAL ESTATE ENVIRONMENT, HAVING THE RIGHT REAL ESTATE AGENT SELL YOUR HOME IS EXTREMELY IMPORTANT. IN MOST URBAN AREAS, INVENTORY IS LOW, SO YOU DON'T WANT TO UNDERPRICE NOR OVER-PRICE YOUR HOME FOR TODAY'S MARKET. SELLING IS A COMBINATION OF PRICING RIGHT, STRATEGIC MARKETING, STAGING, AND BRINGING IN THE RIGHT BUYER AT THE RIGHT TIME.\n\nWHEN CHOOSING A REAL ESTATE PROFESSIONAL +`,
      align: 'left',
    },
    {
      title: 'Price Your Home',
      content: `Your KW Agent will provide you with a CMA (Comparative Market Analysis). This report can be the most important tool in determining the listing price. Review the CMA carefully with your Agent so you understand the current. Studying the past sales will not only help you understand the pricing strategy but give you a realistic expectation as to how much your home might appraise for when you go under contract. Remember, the listing price of a similar home is your competition, not a comparable for value.

The CMA reports usually contain  +`,
      align: 'right',
    },
    {
      title: 'Preparing Your Home for Sell',
      content: `Once you decide to sell your house, it is no longer your home. Your house was a big investment and now you should get what it is worth. First impressions are everything when selling your home. You want buyers to be excited to get out of the car and come into the home..

Your KW Agent will guide you with a few suggestions such as  +`,
      align: 'left',
    },
    {
      title: 'Be Ready',
      content: `To sell your home, you must be flexible and ready. Living in a home for sale isn't always the easiest, especially with children.

Have a schedule  +.

The CMA reports usually contain  +`,
      align: 'right',
    },
  ];

   useEffect(() => {
  const handleScroll = () => {
    if (!timelineRef.current) return;

    const timelineRect = timelineRef.current.getBoundingClientRect();
    const timelineStart = window.scrollY + timelineRect.top;
    const timelineHeight = timelineRect.height;
    const currentScroll = window.scrollY+200;

    let progress = (currentScroll - timelineStart) / timelineHeight;

    // Clamp the progress between 0 and 1
    progress = Math.max(0, Math.min(progress, 1));

    setMarkerTop(progress * 100);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="relative">
      <Header />
    <Box
        src='/agentbg.jpg'
          h3="Steps for Sell Your Home"
          image="https://static.wixstatic.com/media/36a881_0ed2d4fa08bb4022acbbb9e48b783092~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4-removebg-preview.png"
        />
    

      {/* Main Content Section */}
      <main className="px-4 md:px-46 py-6 mt-4 md:mt-2">
        <div className="max-w-7xl mx-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="w-full md:w-auto text-center">
<p className='text-xs md:text-[0.6rem]'>
  You&rsquo;re ready to sell your property. And, while you&rsquo;re looking forward to seeing the word &quot;SOLD&quot; 
  posted from the curb, you know there&rsquo;s a lot to consider along the way. One of your first decisions is to select a real estate company and real estate agent who&rsquo;ll join you in the process.
</p>


            </div>
          </div>
        </div>
      </main>

      {/* Timeline Section */}
      <div ref={timelineRef} className="relative bg-white pt-12 pb-24">
        {/* Center Vertical Line - hidden on mobile */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-black z-0" />

       
        {/* Red Marker over vertical line */}
  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 z-10 h-full">
    <div
      className="absolute left-1/2 transform -translate-x-1/2"
      style={{
        top: `${markerTop}%`,
        transition: 'top 0.1s ease-out',
      }}
    >
     <div className="w-4 h-4 relative flex items-start justify-center">
  <span className="w-4 h-0.5 bg-red-700" />
</div>

    </div>
      </div>
      {/* Content Sections */}
        <div className="max-w-full mx-auto space-y-12 md:space-y-48">
        {steps.map((step, index) => (
  <div
    key={index}
    className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start px-4 md:px-8 lg:px-24"
  >
    {/* ✅ MOBILE ONLY */}
    <div className={`md:hidden mx-4 mb-4 ${step.align === 'right' ? 'text-left' : 'text-right'}`}>
    
      <h2 className="text-red-700 text-3xl font-normal uppercase inline-block">
      {step.title}
    </h2>
      <p className="whitespace-pre-line mt-2 text-xs">{step.content}</p>
    </div>

    {/* ✅ DESKTOP ONLY */}
    {step.align === 'right' ? (
      <>
        <div className="hidden md:block" />
        <div className="hidden md:block text-left px-0 md:px-12">
          <h2 className="text-red-700 text-xl font-normal uppercase">{step.title}</h2>
          <p className="whitespace-pre-line mt-2 md:mt-4 text-[0.6rem]">{step.content}</p>
        </div>
      </>
    ) : (
      <>
        <div className="hidden md:block text-right px-0 md:px-12">
          <h2 className="text-red-700 text-xl font-normal uppercase">{step.title}</h2>
          <p className="whitespace-pre-line mt-2 md:mt-4 text-[0.6rem]">{step.content}</p>
        </div>
        <div className="hidden md:block" />
      </>
    )}
  </div>
))}
</div>
</div>

<div className="order-1 md:order-2 flex flex-col items-center justify-center">
    <Image
      src="/howwillyouthink.png"
      alt="How Will You Thrive"
      width={800}
      height={400}
      className="w-70 h-20 md:w-[800px] md:h-[400px] object-contain"
    />
    <button className="bg-red-700 w-40 text-white px-8 py-1.5 text-[0.6rem] rounded-full block mx-auto md:hidden mt-4 mb-4">
      JOIN US
    </button>
  </div>
 
       <hr className="hidden md:blockw-8/12 md:w-5/12 mx-auto bg-red-500 h-[1.5px] mt-2 md:mt-14 mb-10" />
      <Footer />
    </div>
  );
}

export default Seller;