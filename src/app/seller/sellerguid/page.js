'use client'
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Box from '@/components/box';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
const Sellerguid = () => {
  const timelineRef = useRef(null);
  const [markerTop, setMarkerTop] = useState(0);
  

  const steps = [
    {
      title: 'MANAGEVIEWINGS',
      content: `ONCE YOU'VE CHOSEN YOUR KELLER WILLIAMS AGENT, AND TOGETHER HAVE PREPPED YOUR HOUSE FOR SALE AND SET A PRICE, YOU'RE READY FOR THE PUBLIC TO SEE YOUR HOME.

​

WHAT IS A VIEWING?   +

HOW DO I PREPARE MY HOUSE FOR A VIEWING?   +

WHAT CAN I EXPECT WHEN PEOPLE VIEW MY HOUSE?   +

SELLING YOUR HOME GUIDE.`,
      align: 'right',
    },
    {
      title: 'REVIEW OFFERS',
      content: `CONGRATULATIONS! YOU RECEIVED A MESSAGE FROM YOUR KW AGENT THAT YOU HAVE AN OFFER ON YOUR HOME. NOW YOU NEED TO EVALUATE THAT OFFER AND DECIDE HOW TO RESPOND

WHAT IS AN OFFER?   +

HOW DO I EVALUATE EACH OFFER?  +

WHAT HAPPENS IF I RECEIVE MULTIPLE OFFERS?  +`,
      align: 'left',
    },
    {
      title: 'PREPARE FOR INSPECTION',
      content: `Most buyers request a home inspection as a condition of their offer. While a home inspector will dig more deeply into your home than a buyer, the preparation you made before your first viewing should help you get ready for the inspection. Your Keller Williams agent can give you personalised advice, too.

​

What is a home inspection?  +

What is looked at during a home inspection? +

What's not looked at during a home inspection? +

How should I prepare for an inspection?  +

What happens now? +`,
      align: 'right',
    },
    {
      title: 'COMPLETION',
      content: `While it's tempting to focus on your next move, your Keller Williams agent is likely to remind you that until the completion is over, you have some final responsibilities as a seller.

.

What should I do before the completion?  +

What can I expect when we complete?   +

What's next?  +`,
      align: 'left',
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
          h3="Seller Guide"
          image="https://static.wixstatic.com/media/36a881_0ed2d4fa08bb4022acbbb9e48b783092~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4-removebg-preview.png"
        />
    

      {/* Main Content Section */}
<main className="px-4 md:px-46 py-6 mt-4 md:mt-2">
  <div className=" p-4 md:p-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
      <div className="w-full md:w-auto"> {/* Removed text-center from here since parent has it */}
        <h1 className="text-lg md:text-2xl md:py-8 py-4">Selling Your <span className='text-red-700'>Home</span> Guide</h1>
        <p className="text-xs md:text-[0.6rem]">
          You&rsquo;re ready to sell your property. And, while you&rsquo;re looking forward to seeing the word &quot;SOLD&quot; posted from the curb, you know there&rsquo;s a lot to consider along the way.
        </p>
        <p className="text-xs md:text-[0.6rem]">
          One of your first decisions is to select a real estate company and real estate agent who&rsquo;ll join you in the process.
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
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-42">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-start px-4 md:px-8 lg:px-24`}
            >
             <div className={`mx-4 md:hidden mb-4 ${step.align === 'right' ? 'text-right' : 'text-left'}`}>
  {/* Step Number */}
  <div className={`${step.align === 'right' ? 'flex justify-start' : 'flex justify-end'}`}>
    <span className="text-gray-500 text-2xl font-normal block mb-1">{`${index + 1}.`}</span>
  </div>

  {/* Title - Reverse align compared to number */}
  <div className={`${step.align === 'right' ? 'text-left' : 'text-right'}`}>
    <h2 className="text-red-700 text-3xl font-normal uppercase inline-block">
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

 
  <div className="hidden md:flex justify-center py-2 md:py-16">
         <Image
           src="/howwillyouthink.png"
           alt="How Will You Thrive"
           width={800}
           height={400}
         
         />
       </div>
 
       <hr className="hidden md:block w-8/12 md:w-5/12 mx-auto bg-red-500 h-[1.5px] mt-2 md:mt-14 mb-10" />
      <Footer />
    </div>
  );
}

export default Sellerguid;