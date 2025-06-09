'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Box from '@/components/box';

const Properties = () => {
  const [price, setPrice] = useState(750000);

  const properties = [
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043179/listing/734aaecdaf1936be42f85a35/cv7r6851g1lc70qjejgg.jpeg",
      price: 750000,
      agent: "Meshary Almalki",
      type: "Residential",
      beds: 4,
      baths: 2,
      area: 280,
      location: "Jeddah, Saudi Arabia",
    },
    {
      image: "https://source.unsplash.com/featured/?apartment,2",
      price: 510000,
      agent: "Layla Alsaud",
      type: "Commercial",
      beds: 0,
      baths: 1,
      area: 600,
      location: "Riyadh, Saudi Arabia",
    },
    {
      image: "https://source.unsplash.com/featured/?villa,3",
      price: 1200000,
      agent: "Fahad Almutairi",
      type: "Residential",
      beds: 5,
      baths: 4,
      area: 400,
      location: "Abha, Saudi Arabia",
    },
    {
      image: "https://source.unsplash.com/featured/?house,4",
      price: 830000,
      agent: "Nora Alharbi",
      type: "Residential",
      beds: 3,
      baths: 2,
      area: 320,
      location: "Dammam, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000095310/listing/266bf11f6f1a642adf96b812/cukvcdqhr9cs770mt8h0.png",
      price: 960000,
      agent: "Saad Alotaibi",
      type: "Commercial",
      beds: 0,
      baths: 2,
      area: 850,
      location: "Tabuk, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043542/listing/30cbbba08226bd44d555e39b/cu4ddknndonc773t63hg.png",
      price: 580000,
      agent: "Aisha Alghamdi",
      type: "Residential",
      beds: 2,
      baths: 1,
      area: 200,
      location: "Hail, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043542/listing/46a12c34c40bc918adfe272e/cu940vrpaooc70pb9f4g.png",
      price: 715000,
      agent: "Khaled Alrashid",
      type: "Residential",
      beds: 3,
      baths: 2,
      area: 310,
      location: "Taif, Saudi Arabia",
    },
    {
      image: "https://source.unsplash.com/featured/?apartment,8",
      price: 450000,
      agent: "Reem Alshehri",
      type: "Commercial",
      beds: 1,
      baths: 1,
      area: 150,
      location: "Yanbu, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043179/listing/e36de373fe8179a94c991478/cudvqtahr9cs770mmdi0.jpeg",
      price: 980000,
      agent: "Badr Alzahrani",
      type: "Residential",
      beds: 4,
      baths: 3,
      area: 370,
      location: "Al Khobar, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043179/listing/4a588fa29f9735dc22d6a40a/cudvs69u8mjc70kegq9g.jpeg",
      price: 675000,
      agent: "Huda Aljohani",
      type: "Residential",
      beds: 3,
      baths: 2,
      area: 290,
      location: "Jazan, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043179/listing/7a67ea5d225fc6d8aab293b9/cudvognklprc7765jj0g.jpeg",
      price: 870000,
      agent: "Talal Alnasser",
      type: "Commercial",
      beds: 0,
      baths: 2,
      area: 720,
      location: "Najran, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000095310/listing/5d94e50f0f72b839a8d718fb/cukvipfklprc7765qgc0.png",
      price: 535000,
      agent: "Sarah Alotaibi",
      type: "Residential",
      beds: 2,
      baths: 1,
      area: 230,
      location: "Al Baha, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043542/listing/5c1a9082279a92531156e9f1/cuksspqhr9cs770mt59g.png",
      price: 1020000,
      agent: "Mansour Aljaber",
      type: "Residential",
      beds: 5,
      baths: 4,
      area: 450,
      location: "Sakaka, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043542/listing/d4ec15602aac7608656baa02/cuhn3vihr9cs770mpu1g.png",
      price: 780000,
      agent: "Laila Alnami",
      type: "Commercial",
      beds: 0,
      baths: 2,
      area: 640,
      location: "Madinah, Saudi Arabia",
    },
    {
      image: "https://storage.googleapis.com/attachment-listing-prod-5af4/2000043542/listing/f5f164daabf06943d4ee27d4/cuh2t42hr9cs770mp0n0.png",
      price: 695000,
      agent: "Salem Alsuwailem",
      type: "Residential",
      beds: 3,
      baths: 2,
      area: 305,
      location: "Buraydah, Saudi Arabia",
    },
  ];

  const bedIconUrl = "/bed.png";
  const bathIconUrl = "/bath.png";
  const areaIconUrl = "/area.png";

  return (
    <div className="relative">
      <Header />
      <Box h3={"Search Listings"} src="/kwbg-image.jpg" image="/properties.png" />

      <div className="grid grid-cols-2 md:grid-cols-5 md:mt-40 mt-8 gap-4 text-[10px] md:text-xs w-full max-w-6xl px-4 md:px-40">
        <select className="text-[0.6rem] leading-tight">
          <option>PROPERTY TYPE</option>
        </select>
        <select className="text-[0.6rem] leading-tight">
          <option>MARKET CENTER</option>
        </select>
        <select className="text-[0.6rem] leading-tight">
          <option>PROPERTY SUBTYPE</option>
        </select>
        <select className="text-[0.6rem] leading-tight w-[100px] px-3 py-2 pr-7">
          <option>CITY</option>
        </select>

        <div className="flex flex-col col-span-2 md:col-span-1">
          <label htmlFor="price" className="mb-1 text-gray-700 text-[0.6rem] leading-tight">PRICE</label>
          <input
            type="range"
            id="price"
            min="0"
            max="1000000"
            step="10000"
            defaultValue="1000000"
            className="w-full h-1 bg-black rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-600"
          />
          <span className="text-right text-[0.6rem] mt-4">750000 SAR</span>
        </div>
      </div>

      <p className="md:mt-6 mt-2 text-[0.7rem] leading-tight ml-4 text-gray-700">
        Total Listings : <span className="text-red-600 font-semibold">74</span>
      </p>

      <div className="min-h-screen p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop, idx) => (
            <div key={idx} className="bg-gray-100 rounded-3xl overflow-hidden w-full">
              <div className="relative w-full h-60">
                <Image
                  src={prop.image}
                  alt="property"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <span className="relative w-5 h-5">
                      <Image src='/currency.png' alt="currency" fill className="object-cover rounded-3xl" />
                    </span>
                    {prop.price.toLocaleString()}
                  </h2>
                  <p className="text-sm">{prop.agent}</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm mb-2">
                    <span className="flex items-center gap-2 mr-4">
                      <span className="relative w-6 h-6">
                        <Image src={bathIconUrl} alt="bath" fill className="object-contain" />
                      </span>
                      {prop.baths}
                    </span>
                    <span className="flex items-center gap-2 mr-4">
                      <span className="relative w-6 h-6">
                        <Image src={bedIconUrl} alt="bed" fill className="object-contain" />
                      </span>
                      {prop.beds}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="relative w-6 h-6">
                        <Image src={areaIconUrl} alt="area" fill className="object-contain" />
                      </span>
                      {prop.area}
                    </span>
                  </div>
                  <p className="text-[0.7rem] mb-2">{prop.type}</p>
                </div>

                <p className="text-xs">{prop.location}</p>
                <button className="mt-10 w-full bg-black text-white py-2 rounded-full text-sm hover:bg-red-700 transition">
                  View Property Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center md:mt-5">
        <button className="w-3/6 py-2 px-8 bg-red-700 hover:bg-red-950 text-white font-normal rounded-full transition">
          View More Properties..
        </button>
      </div>

      <hr className="w-6/12 mx-auto bg-red-500 h-[1.5px] mt-5 md:mt-20 mb-16" />
      <Footer />
    </div>
  );
};

export default Properties;