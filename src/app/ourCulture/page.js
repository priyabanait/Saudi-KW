import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import Image from 'next/image';
import {
  FaArrowUpRightFromSquare,
  FaBookOpen,
  FaStar,
  FaAnchor,
  FaCertificate,
  
} from 'react-icons/fa6';
import { FaShieldAlt } from 'react-icons/fa';

const OurCulture = () => {
  const cards = [
    {
      icon: <FaArrowUpRightFromSquare className="text-3xl mb-4" />,
      title: 'OUR MISSION',
      text: `TO BUILD CAREERS WORTH HAVING, BUSINESSES
WORTH OWNING, LIVES WORTH LIVING, EXPERIENCES
WORTH GIVING, AND LEGACIES WORTH LEAVING.`,
    },
    {
      icon: <FaBookOpen className="text-3xl mb-4" />,
      title: 'OUR VALUES',
      text: 'GOD, FAMILY, THEN BUSINESS.',
    },
    {
      icon: <FaStar className="text-3xl mb-4" />,
      title: 'OUR VISION',
      text:
        'TO BE THE REAL ESTATE COMPANY OF CHOICE FOR AGENTS AND THEIR CUSTOMERS.',
    },
    {
      icon: <FaAnchor className="text-3xl mb-4" />,
      title: 'OUR PERSPECTIVE',
      text: `A technology company that provides the real estate platform that our agents' buyers and sellers prefer. Keller Williams thinks like a top producer, acts like a trainer-consultant, and focuses all its activities on service, productivity, and profitability`,
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'WI4C2TES',
      text: `OUR BELIEF SYSTEM
WIN-WIN: OR NO DEAL
INTEGRITY: DO THE RIGHT THING
CUSTOMERS: ALWAYS COME FIRST
COMMITMENT: IN ALL THINGS
COMMUNICATION: SEEK FIRST TO UNDERSTAND
CREATIVITY: IDEAS BEFORE RESULTS
TEAMWORK: TOGETHER EVERYONE ACHIEVES MORE
TRUST: STARTS WITH HONESTY
EQUITY: OPPORTUNITIES FOR ALL
SUCCESS: RESULTS THROUGH PEOPLE`
    },
  ];
  const teamMembers = [
  {
    name: "MUHANNAD AWAD",
    title: "CEO / OPERATING PRINCIPLE",
    email: "M.AWAD@KWSAUDIARABIA.COM",
    phone: "+966 56 505 7711",
    image: "https://static.wixstatic.com/media/36a881_c32aecbd35de48f1839a4c8b90be6196~mv2.jpg/v1/fill/w_365,h_365,fp_0.46_0.15,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pic48_edited.jpg", // Image must be in /public
  },
  {
    name: "HAIFA SDIRI",
    title: "REGIONAL MCA",
    email: "HSDIRI@KWSAUDIARABIA.COM",
    phone: "+966 55 469 1606",
    image: "https://static.wixstatic.com/media/36a881_1d8efa05d1da4efcbcdcfd4a99921c79~mv2.png/v1/fill/w_365,h_365,fp_0.49_0.23,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Haifa%20Sdiri.png", // Image must be in /public
  },
  {
    name: "ABDALLAH BAKEER",
    title: "REGIONAL DIRECTOR",
    email: "A.BAKEER@KWSAUDIARABIA.COM",
    phone: "+966 50 006 1897",
    image: "https://static.wixstatic.com/media/36a881_0ddd8c953b7b41509013bd8846239274~mv2.png/v1/fill/w_336,h_336,fp_0.51_0.24,lg_1,q_85,enc_avif,quality_auto/Abdullah%20Bakeer.png"
  },
  {
    name: "ALAA MOFTAH",
    title: "REGIONAL TECHNOLOGY MANAGER",
    email: "ALAA.MOFTAH@KWSAUDIARABIA.COM",
    phone: "+966 50 060 0592",
    image: "https://static.wixstatic.com/media/36a881_e0f85e7b86444035b1f97950b5574a74~mv2.png/v1/fill/w_365,h_365,fp_0.51_0.24,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Alaa%20Moftah.png", // Image must be in /public
  },
  {
    name: "AYAN HASSAN",
    title: "REGIONAL OPERATION MANAGER",
    email: "AYANH@KWSAUDIARABIA.COM",
    phone: "+966 56 754 8770",
    image: "https://static.wixstatic.com/media/36a881_2841965220f84b56b10665f5679c8081~mv2.png/v1/fill/w_365,h_365,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nuha%20Alsubhi.png"
  },
  {
    name: "OSAMA HAMZE",
    title: "REGIONAL TECHNOLOGY",
    email: "OSAMA.HAMZE@KWSAUDIARABIA.COM",
    phone: "+966 59 848 0973",
    image: "https://static.wixstatic.com/media/36a881_da8c9c2ce26a4f6bb8c54774c402735f~mv2.png/v1/fill/w_365,h_365,fp_0.49_0.22,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Osama%20Hamza.png", // Image must be in /public
  },
];

  return (
    <div className="relative">
      <Header />
      <Box
        h3="About Us"
        src="/ourculturebg.jpg"
        image="https://static.wixstatic.com/media/36a881_a82aacde83a9442dae07d99a846cadf4~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8-removebg-preview%20(1).png"
      />

<div className="md:hidden order-1 md:order-2 flex flex-col items-center justify-center">
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
      {/* Insert mobile-only intro text above OUR BELIEFS */}
      <div className="md:hidden px-4 md:py-4 py-18">
        <div className="mx-auto text-center">
          <div className="mt-1">
            <p className="text-xs text-[0.6rem]">
              We are looking to introduce the individuals who are instrumental in driving our success. We believe that every moment holds great promise, and we are passionate about our daily
            </p>
            <p className="text-xs text-[0.6rem]">
              work. We have the most skilled employees at every stage of our operations. Our leadership team is a diverse group of individuals who bring a wealth of experience from various
            </p>
            <p className="text-xs text-[0.6rem]">
              areas within the company.
            </p>
          </div>
        </div>
      </div>
      {/* Intro Text */}
      <main className="px-4 mt-10">
        <div className="mx-auto text-center">
        <span className="md:font-[montserrat] text-lg tracking-[0.2em] md:text-[30px] no-underline bg-transparent leading-[1.3]">
  OUR BELIEFS
</span>


          <hr className="w-30 md:w-46 mx-auto bg-red-500 h-[1.5px] mt-1 md:mt-8" />
          <div className="md:mt-10 md:py-0 py-10">
          <p className="md:mx-0 mx-4 font-[montserrat] tracking-[0em] md:text-[0.7rem] text-[0.7rem] md:font-normal font-semibold no-underline bg-transparent leading-[1.6]">
  We believe that the company we keep can contribute to our lives in untold ways.
  To help cement this understanding we&rsquo;ve formalized a
</p>

<p className="md:mx-0 mx-4 font-[montserrat] tracking-[0em] md:text-[0.7rem] text-[0.7rem] md:font-normal font-semibold no-underline bg-transparent leading-[1.6]">
              Belief system that guides how we treat each other.
            </p>
          </div>
        </div>
      </main>

      {/* Cards Grid */}
<div className="hidden md:block max-w-full mx-auto px-10 py-10 md:mt-7 md:mb-0">
  {/* First 3 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {cards.slice(0, 3).map((card, index) => (
      <div
        key={index}
        className="group flex flex-col items-center justify-start rounded-xl bg-gray-100 px-6 py-14 text-center shadow-sm min-h-[300px] hover:shadow-md transition-all duration-300 ease-in-out"
      >
        {/* Icon moves up, right, and rotates */}
        <div className="group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-10 transform-gpu transition-all duration-300 ease-in-out">
          {card.icon}
        </div>
        {/* Text moves up */}
        <div className="group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <h3 className="mb-4 text-medium font-semibold tracking-wide">
            {card.title}
          </h3>
          <p className="md:text-[0.6rem] leading-5 tracking-wide uppercase text-neutral-600 whitespace-pre-line">
            {card.text}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Last 2 Cards Centered Horizontally */}
  <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 ">
    {cards.slice(3).map((card, index) => (
      <div
        key={index}
        className="group w-full sm:w-[300px] lg:w-[400px] min-h-[340px] flex flex-col items-center rounded-xl bg-gray-100 px-6 py-8 text-center shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
      >
        {/* Icon moves up, right, and rotates */}
        <div className="mb-4 flex-shrink-0 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-10 transform-gpu transition-all duration-300 ease-in-out">
          {card.icon}
        </div>
        
        {/* Content moves up */}
        <div className="group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <h3 className="mb-4 text-medium font-semibold tracking-wide line-clamp-2">
            {card.title}
          </h3>
        </div>
        
        {/* Text content moves up */}
        <div className="flex-1 overflow-y-auto w-full group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <p className="md:text-[0.6rem] leading-5 text-neutral-600 whitespace-pre-line">
            {card.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
<hr className=" hidden w-11/12 md:w-6/12 mx-auto bg-gray-200 mt-2 md:mt-8" />
 <main className="hidden md:block px-4 py-6">
        <div className="mx-auto text-center">
         
          <div className="mt-1">
            <p className="text-xs md:text-[0.7rem]">
            We are looking to introduce the individuals who are instrumental in driving our success. We believe that every moment holds great promise, and we are passionate about our daily
            </p>
            <p className="text-xs md:text-[0.7rem]">
              work. We have the most skilled employees at every stage of our operations. Our leadership team is a diverse group of individuals who bring a wealth of experience from various
            </p>
              <p className="text-xs md:text-[0.7rem]">
             areas within the company.
            </p>
          </div>
        </div>
      </main>
<div className="min-h-screen flex flex-col items-center justify-start pt-25 md:pt-10 md:mx-auto mx-6 tracking-[0.2em">
  <div className="flex flex-col md:flex-row w-full max-w-6xl ">
    {/* Left Image */}
    <div className="w-full md:w-1/2 flex justify-center items-start ">
      <Image
        src="https://static.wixstatic.com/media/36a881_b66311c7d0ce4bab88e85a84321bd1b0~mv2.jpg/v1/fill/w_798,h_934,fp_0.50_0.33,q_85,enc_avif,quality_auto/Pic153%20(4).jpg"
        alt="CEO"
        width={500}
        height={700}
        className="object-cover h-auto w-full md:w-[100%] border rounded-[4rem] border-gray-400 "
      />
    </div>

    {/* Right Content - Changed to items-start */}
    <div className="w-full md:w-1/2 flex flex-col justify-start items-center text-center mt-8 md:mt-12 px-2 md:px-10">
      <h1 className="text-4xl font-normal tracking-wide">
        MEET OUR <span className="text-red-700 font-bold">CEO</span>
      </h1>

      <h2 className="text-red-700 py-4 md:py-0 mt-4 md:mt-14 text-[0.7rem] font-semibold tracking-wider">
        CEO MESSAGE
      </h2>

      <p className="mt-4 md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
        More than ever, we want to thank and recognize our agents and partners
        for diligently bringing their very</p> 
        
<p className=" md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
 best when their clients need it most.
        As a company built by agents, and for agents, we wake up every day</p>
       <p className="md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
         asking
        ourselves how we can best support them.
      </p>

      <p className="mt-6 md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
        KW has cultivated a agent-  </p>
        <p className="md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
        centric, technology-driven, and</p>
          <p className="md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
        education-based culture that rewards agents as stakeholders.</p>
        <p className="md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
        Regional team members, market center team members, and </p>
       <p className="md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normalmax-w-md">
        agent partners. No
        one succeeds alone, and  </p>
      
         <p className="md:text-[0.6rem] text-[0.7rem] text-gray-700 md:leading-tight leading-normal max-w-md">
        this is truly a shared moment in recognition of
        our continuous achievements together.</p>
     
    </div>
  </div>
</div>
     <div className="min-h-screen bg-white mt-4 md:mt-20">
  {/* Changed outer container to stack on mobile */}
  <div className="flex flex-col md:flex-row border-t border-b border-r border-black">
    
    {/* Left Section - Full width on mobile, sticky 50% on desktop */}
    <div className="w-full md:w-1/2 flex justify-center items-center 
                   md:sticky md:top-0 top-20 h-auto md:h-screen 
                   border-b md:border-b-0 md:border-r border-black
                   py-6 md:py-0">
      <div className="text-center px-4">
        <h2 className="text-3xl font-semibold mb-2">OUR TEAM</h2>
        <div className="w-30 h-0.5 bg-red-500 mb-2 mx-auto mt-4 md:mt-10"></div>
        <p className="text-sm tracking-wider mt-4 md:mt-10">REGION TEAM</p>
      </div>
    </div>

    {/* Right Section - Full width on mobile, 50% on desktop */}
    <div className="w-full md:w-1/2">
      {teamMembers.map((member, index) => (
        <div key={index}>
          <div className="flex flex-row gap-3 md:gap-6 p-6 md:p-6 items-start">
          <div className="flex-shrink-0 w-32 h-32 sm:w-32 sm:h-32 md:w-60 md:h-60">
  <Image
    src={member.image}
    alt={member.name}
    width={160}
    height={160}
    className="rounded-xl object-cover w-32 h-32 sm:w-32 sm:h-32 md:w-60 md:h-60"
  />
</div>

            <div className="flex-1 text-left">
              <p style={{ 
                fontFamily: "wfont_0694d6_cf4b47fcc9af483482e7689365efadb1, wf_cf4b47fcc9af483482e768936, orig_alt_riviera_light !important",
                letterSpacing: "0em",
                fontWeight: 'normal',
                textDecoration: 'none',
                fontSize: 'max(15px, min(20px, max(0.5px, 0.0142522 * (var(--scaling-factor) - var(--scrollbar-width)))) !important',
                lineHeight: 1.2,
              }}>
                {member.name}
              </p>
              <div className="w-37 md:w-60 h-0.5 bg-red-500 my-1 mx-0"></div>
              <p style={{ 
                fontFamily: "montserrat,sans-serif",
                letterSpacing: "0em !important",
                fontWeight: 'normal !important',
                fontStyle: 'normal !important',
                textDecoration: 'none !important',
                fontSize: '10px !important',
                lineHeight: 1.6,
              }}>
                {member.title}
              </p>
              <p className="text-xs md:text-sm mb-1 text-gray-600 mt-8 md:mt-28">{member.email}</p>
              <p className="text-xs md:text-sm text-gray-600">{member.phone}</p>
            </div>
          </div>
          {index !== teamMembers.length - 1 && (
            <hr className="border-t border-black" />
          )}
        </div>
      ))}
    </div>
  </div>
</div>
<div className="flex justify-center py-2 md:py-0">
                   <Image
                     src="/howwillyouthink.png"
                     alt="How Will You Thrive"
                     width={800}
                     height={400}
                   
                   />
                 </div>
           
      <main className=" hidden md:block px-4 py-2 md:py-6 md:mt-2">
        <div className="max-w-7xl mx-auto text-center md:mt-14">
          <p className="text-2xl md:text-4xl font-normal">
            KW SAUDI ARABIA
          </p>
          <hr className="w-48 md:w-96 mx-auto bg-red-500 h-[1.5px] mt-6 md:mt-16" />
          <p className='mt-4 md:mt-8'>Together We Do More</p>
          <p className="px-4 md:px-0">Keller Williams Is There To Help At Every Big Step In The Realestate Journey.</p>
        
           <div className="flex justify-center md:justify-center mt-6 md:mt-10">
  <button className="
    w-56 bg-red-700 text-white py-3 rounded-full text-sm
    relative overflow-hidden
    group transition-all duration-300
    hover:pr-8 hover:pl-4
  ">
    <span className="inline-block transition-all duration-300 group-hover:-translate-x-3">
  JOIN US
    </span>
    <span className="
      absolute right-4 top-1/2 -translate-y-1/2
      opacity-0 group-hover:opacity-100
      transition-all duration-300 text-black
      group-hover:translate-x-0 translate-x-4
    ">
    ⟶
    </span>
  </button>
</div>
        </div>
      </main>
       <hr className=" hidden md:block w-8/12 md:w-6/12 mx-auto bg-red-500 h-[1.5px] mt-10 md:mt-20 mb-10" />
      <Footer />
    </div>
  );
};

export default OurCulture;
