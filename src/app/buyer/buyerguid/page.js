'use client'
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Box from '@/components/box';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
const Buyerguid = () => {
  const timelineRef = useRef(null);
  const [markerTop, setMarkerTop] = useState(0);
  

  const steps = [
    {
      id:'1.',
      title: ' Home Visit',
      content: `WE'LL ARRANGE TO VISIT THE HOMES YOU'VE SELECTED, TOGETHER AND IN-PERSON, TO DETERMINE THE BEST FIT FOR YOU.


HOW CAN I MAKE THE MOST OF MY TIME WHEN VISITING HOMES?   +

WHAT SHOULD I EXPECT WHEN VISITING HOMES?  +

HOW MANY HOMES SHOULD I VISIT?  +

WHAT SHOULD I LOOK FOR WHEN VISITING HOMES?   +`,
      align: 'right',
    },
    {
      id:'2.',
      title: 'Making an Offer',
      content: `ONCE YOU'VE NARROWED DOWN YOUR LIST AND HAVE A CLEAR FAVORITE, COLLABORATE WITH US TO MAKE AN OFFER ON A HOME.

WHAT SHOULD I INCLUDE WITH MY OFFER?  +

WHAT ARE THE MOST COMMON CONTINGENCIES? +

WHAT HAPPENS IF I FACE MULTIPLE OFFERS?  +

WHAT IS A COUNTEROFFER? +`,
      align: 'left',
    },
    {
      id:'3.',
      title: 'Execute Contract',
      content: `THE CRUCIAL PERIOD BETWEEN AN OFFER AND A FINAL CONTRACT IS AN IMPORTANT TIME TO STAY IN CLOSE CONTACT WITH YOUR KELLER WILLIAMS AGENT SO YOU'RE EQUIPPED WITH ALL THE INFORMATION YOU NEED TO MAKE SMART DECISIONS.

WHAT SHOULD I EXPECT TO SEE IN THE CONTRACT? +

HOW DO I KNOW WHEN TO NEGOTIATE AND WHEN TO LET GO? +

WHAT ARE COMMON CONTRACT PITFALLS I SHOULD AVOID? +`,
      align: 'right',
    },
    {
      id:'4.',
      title: 'Schedule Home Inspection',
      content: `AS SOON YOUR OFFER IS ACCEPTED, YOU SHOULD SCHEDULE YOUR HOME INSPECTION. IF YOU'RE BUYING IN A BUSY SEASON, IT MAY TAKE TIME TO FIND AN AVAILABLE INSPECTOR, SO RELY ON YOUR KELLER WILLIAMS AGENT TO RECOMMEND TRUSTED HOME INSPECTORS..

WHAT'S INCLUDED ON A HOME INSPECTION?+

WHAT SHOULD I WATCH FOR DURING THE HOME INSPECTION?  +

I'VE GOT THE HOME INSPECTION REPORT, NOW WHAT?  +`,
      align: 'left',
    },
   {
    id:'5.',
      title: 'Get a Home Warranty',
      content: `SOME HOME SELLERS PAY FOR A HOME WARRANTY THAT COVERS THEM WHILE THEIR HOME IS ON THE MARKET AND CONVEYS TO THE BUYERS AFTER THE SALE. YOU CAN ASK YOUR REAL ESTATE AGENT FOR ADVICE ABOUT NEGOTIATING FOR THE SELLERS TO PAY FOR A WARRANTY OR BUYING ONE YOURSELF.

WHAT IS A HOME WARRANTY?  +

DO I NEED A HOME WARRANTY? +

WHAT SHOULD I LOOK FOR IN A HOME WARRANTY? +`,
      align: 'right',
    },
    {
      id:'6.',
      title: 'Close',
      content: `WHILE YOU MAY FEEL JITTERY BEFORE YOUR CLOSING, YOUR KW AGENT AND LENDER SHOULD HAVE YOU FULLY PREPARED FOR THE DAY. AS THE BUYER, YOU CHOOSE THE TITLE COMPANY FOR YOUR TITLE SEARCH AND THE CLOSING. YOUR AGENT AND LENDER CAN RECOMMEND RELIABLE TITLE COMPANIES..

WHAT SHOULD I DO BEFORE THE CLOSING?+

WHAT CAN I EXPECT WHEN CLOSING? +

WHAT PAPERWORK IS REQUIRED TO CLOSE? +

WHAT'S NEXT? +`,
      align: 'left',
    }
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
          h3="Buyer Guide"
          image="/buyer2.jpg"
        />
    

      {/* Main Content Section */}
<main className="px-4 md:px-46 py-6  md:mt-2">
  <div className=" md:p-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="w-full md:w-auto"> {/* Removed text-center from here since parent has it */}
        <h1 className="text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.1em] py-4  md:py-8">Home <span className='text-red-700'>Buying </span> Tips from Keller Williams</h1>
       <div className='mx-12 md:mx-0 tracking-[0.1em] md:tracking-normal'>
       <p className="text-xs md:text-[0.6rem]">
          Our Experience, A House Is Not A Dream Home Because Of Its Size Or Colour. Its About How You Feel When You Walk Through The Front Door – The Way You Can Instantly See
        </p>
        <p className="text-xs md:text-[0.6rem]">
        Your Life Unfolding There. This Is About More Than Real Estate. It's About Your Life And Your Dreams..
        </p>
       </div>
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
      {/* mobile Content Sections */}
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-42">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-start px-4 md:px-8 lg:px-24`}
            >
             <div className={`mx-4 md:hidden mb-4 ${step.align === 'right' ? 'text-right' : 'text-left'}`}>
  {/* Step Number */}


  {/* Title - Reverse align compared to number */}
  <div className={`${step.align === 'right' ? 'text-left' : 'text-right'}`}>
    <h2 className="text-red-700 text-2xl font-normal uppercase inline-block">
      {step.title}
    </h2>
    <p className="whitespace-pre-line mt-2 text-xs">{step.content}</p>
  </div>
</div>


              {/* Desktop: Number on opposite side of vertical line */}
              {step.align === 'right' ? (
                <>
                  {/* Number on the left side */}
                  <div className="hidden md:flex items-center justify-end pr-4">
                    <span className="text-gray-500 text-5xl font-normal md:mb-4">{`${index + 1}.`}</span>
                  </div>
                  <div className="hidden md:block text-left px-0 md:px-8">
                    <h2 className="text-red-700 text-xl font-normal uppercase">
                      {step.title}
                    </h2>
                    <p className="whitespace-pre-line mt-2 md:mt-4 text-[0.8rem]">{step.content}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden md:block text-left md:text-right px-0 md:px-8">
                    <h2 className="text-red-700 text-xl font-normal uppercase">
                      {step.title}
                    </h2>
                    <p className="whitespace-pre-line mt-2 md:mt-4 text-[0.8rem]">{step.content}</p>
                  </div>
                  {/* Number on the right side */}
                  <div className="hidden md:flex items-center justify-start pl-4">
                    <span className="text-gray-500 text-5xl font-normal md:mb-4">{`${index + 1}.`}</span>
                  </div>
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

export default Buyerguid;