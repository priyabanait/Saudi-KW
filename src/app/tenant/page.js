'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Box from '@/components/box';

const Tenant = () => {
  const sections = [
    {
      number: '01',
      title: 'Can You Realistically Afford?',
      description:
        'You want a home, but you also need to live; having monies for bills, outgoings and enjoying yourself is essential.',
    },
    {
      number: '02',
      title: 'Location Vs Budget?',
      description:
        "Do some research on rental properties in your preferred location and ask the advice of your local Keller Williams agent. You may need to make a compromise but it's better than struggling to meet your financial commitments.",
    },
    {
      number: '03',
      title: 'What Kind Of Property Do You Need?',
      description:
        'If you can be flexible, you will have more opportunities, as demand for rental property is high. Families will have different priorities to those who are single; focus on your needs rather than your wants.',
    },
    {
      number: '04',
      title: "What's in your future?",
      description:
        "No one has a crystal ball and life can certainly take us in directions we never imagined, but before you start to view, you need to have an idea of the type of tenancy you're looking for. Typically, it's a twelve-month term for properties let under assured shorthold tenancies, but some landlords prefer shorter or longer contracts, and some are even happy to include break clauses and notice periods. Discuss your needs and concerns with your local agent and we can ensure that the tenancy fits your future plans.",
    },
    {
      number: '05',
      title: 'Do you have references?',
      description:
        'Have you placed yourself in a good position to move? Remember, you will be asked for references and also details of your current employer. Having these things in place will speed up the process and also make it easier.',
    },
    {
      number: '06',
      title: 'Are you ready to move?',
      description:
        "We know the deposit is a big investment, it's normally one or two months' rent. You will need this ready to transfer should you see a property you like – remember, you also need to budget for moving costs and other expenses.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Box
        src="agentbg.jpg"
        h3="Tenant Guide"
        image="https://static.wixstatic.com/media/36a881_c580b86333874ddca3fad0d685aa3c7e~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6-removebg-preview.png"
      />

      {/* Intro */}
      <main className="px-4 py-6 md:mt-30 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs md:text-sm">
            Before you start your search for a rental property it's worth asking yourself
          </p>
        </div>
      </main>

      {/* Section Boxes */}
      <div className="max-w-7xl mx-auto mt-14 bg-gray-100">
        <hr className="w-full border-t border-gray-300" />
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-12 items-stretch hover:bg-red-800 group transition duration-300 px-4 min-h-[120px]">
              {/* Number */}
              <div className=" md:ml-30 col-span-2 md:col-span-1 flex items-center justify-center text-2xl md:text-4xl text-gray-400 group-hover:text-black font-light">
                {section.number}
              </div>

              {/* Title */}
              <div className=" md:ml-46 col-span-4 md:col-span-4 flex items-center text-xs font-semibold tracking-wide text-black group-hover:text-white">
                {section.title}
              </div>

               {/* Vertical Line Between Title and Description - disappears on hover */}
              <div className="col-span-1 flex justify-center">
                <div className=" ml-22 w-[1px] bg-red-500 h-auto md:h-28 my-4 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Description */}
              <div className="col-span-5 md:col-span-6 flex items-center text-[0.6rem] md:text-[0.6rem]  leading-relaxed text-gray-700 group-hover:text-white py-4">
                {section.description}
              </div>
            </div>
            
            {/* Horizontal divider between sections */}
            {index < sections.length - 1 && (
              <hr className="w-full border-t border-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>

       <main className="px-4 py-6 md:mt-2 mt-2">
        <div className="max-w-7xl mx-auto text-center md:mt-16">
          <p className="text-xl md:text-4xl font-normal">KW SAUDI ARABIA</p>
          <hr className="w-32 md:w-96 mx-auto bg-red-500 h-[1.5px] mt-4 md:mt-8" />
          <p className="mt-2 md:mt-8 text-xs md:text-xs">Together We Do More</p>
          <p className="px-4 md:px-0 text-xs md:text-xs">
            Keller Williams is there to help at every big step in the realestate journey.
          </p>
          <button className="w-36 md:w-56 bg-red-800 text-white py-3 rounded-full text-xs md:text-xs hover:bg-red-700 transition mt-8 md:mt-16">
            JOIN US
          </button>
        </div>
      </main>

      <div className="flex justify-center py-8 md:py-16 mt-16 md:mt-20 px-4">
        <img
          src="/howwillyouthink.png"
          alt="How Will You Thrive"
          className="w-full max-w-[800px] h-auto"
        />
      </div>

      <hr className="w-8/12 md:w-5/12 mx-auto bg-red-500 h-[1.5px] mt-10 md:mt-14 mb-10" />
      <Footer />
    </div>
  );
};

export default Tenant;