'use client'
import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import PropertyType from '@/components/propertype';

const Newdevelopment = () => {
    return (
        <div>
            <Header />
      <Box h3={"New Development"} src="/bgauction.jpg" image="/properties2.jpg" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 text-[10px] md:text-xs w-full mt-4 md:mt-12 max-w-full px-4 md:px-34 mb-10">
  {/* Row 1 - First two dropdowns */}
  <div className="col-span-1">
    <select className="w-full text-sm md:text-[0.9rem] md:leading-normal p-1.5 md:p-0 flex justify-center text-center">
      <option>PROPERTY TYPE</option>
      <option>All</option>
      <option>Commercial</option>
      <option>Farm and Agriculture</option>
      <option>Lots and Land</option>
      <option>Residential</option>
    </select>
  </div>
  
  <div className="col-span-1">
    <select className="w-full text-sm md:text-[0.9rem] md:leading-normal p-1.5 md:p-0 flex justify-center text-center">
      <option>MARKET CENTER</option>
      <option>All</option>
      <option>Jasmin</option>
      <option>Jeddah</option>
    </select>
  </div>

  {/* Row 2 - Next two dropdowns */}
  <div className="col-span-1 mt-3 md:mt-0">
    <select className="w-full text-sm md:text-[0.9rem] md:leading-normal p-1.5 md:p-0 flex justify-center text-center">
      <option>PROPERTY SUBTYPE</option>
      <option>All</option>
      <option>Apartment</option>
      <option>Condominium</option>
      <option>Duplex</option>
      <option>Hotel-Motel</option>
      <option>Industrial</option>
      <option>Mobile Home</option>
      <option>Multi-Family</option>
      <option>Other</option>
      <option>Quadruplex</option>
      <option>Ranch</option>
      <option>Single Family Attach</option>
      <option>Single Family detached</option>
      <option>Townhouse</option>
      <option>Unimproved land</option>
      <option>Warehouse</option>
    </select>
  </div>

  <div className="col-span-1 mt-3 md:mt-0">
    <select className="w-full text-sm md:text-[0.9rem] md:leading-normal p-1.5 md:p-0 flex justify-center text-center">
      <option>CITY</option>
      <option>All</option>
      <option>ALRIYADH</option>
      <option>JED</option>
      <option>JEDDAH</option>
      <option>Jeddah</option>
      <option>Jeddah city</option>
      <option>KSA</option>
      <option>Khobar</option>
      <option>Riyadh</option>
      <option>Saudi Arabia</option>
      <option>alriyadh</option>
      <option>jeddah</option>
      <option>jedah</option>
      <option>riyad</option>
      <option>riyadh</option>
      <option>الرياض</option>
      <option>جدة</option>
      <option>جده</option>
    </select>
  </div>

 

  <div className="flex flex-col col-span-2 md:col-span-1 items-center md:items-start text-center md:text-left md:ml-10">
  <label htmlFor="price" className="mb-1 mr-33 md:mr-0 text-gray-700 text-sm md:text-[0.9rem] leading-tight ">
    PRICE
  </label>
  <input
    type="range"
    id="price"
    min="0"
    max="1000000"
    step="10000"
    defaultValue="1000000"
    className="w-40 h-1 bg-black rounded-lg appearance-none 
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:h-4 
      [&::-webkit-slider-thumb]:w-4 
      [&::-webkit-slider-thumb]:rounded-full 
      [&::-webkit-slider-thumb]:bg-[rgba(202,3,32,255)]"
  />
  <span className="md:text-[0.9rem] text-sm mt-4 ml-35 md:ml-28">750000 SAR</span>
</div>

      </div>
   <PropertyType type='New Development'></PropertyType>
      <Footer></Footer>   
        </div>
    );
}

export default Newdevelopment;
