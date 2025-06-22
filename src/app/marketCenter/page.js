import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
const Page = () => {
    return (
        <div className="relative">
<Header></Header>
     
         
<Box h3={"All Market Centers"}
 src="/bgmarketcenter.png"
  image={'https://static.wixstatic.com/media/36a881_3c5b1d5faca941ea915b39acfedf52ee~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-removebg-preview.png'}>
    
  </Box>
  
<div className="w-full mx-auto px-4 md:px-8 md:mt-2 lg:px-20 py-8 mt-4">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
    
{/* First Image Block */}
<div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg">
  <Image 
    src="/reyadhsunny.jpg" 
    alt="Real Estate Property"
    width={800}
    height={570}
    className="w-full h-auto max-h-[300px] lg:max-h-[570px] object-cover rounded-lg" 
  />

  {/* Centered Button with Link */}
  <Link href="/riyadh" className="absolute inset-0 flex items-center justify-center">
   <button className="
  px-16 py-3
  bg-white text-black text-sm
  rounded-full hover:bg-gray-100 transition-all duration-300
  relative overflow-hidden
  group
  pr-12  // Reserve space for arrow
">
  <span className="inline-block transition-all duration-300 group-hover:-translate-x-3">
    RIYADH
  </span>
  <span className="
    absolute right-4 top-1/2 -translate-y-1/2
    opacity-0 group-hover:opacity-100
    transition-all duration-300 text-[rgba(202,3,32,255)]
    group-hover:translate-x-0 translate-x-4
  ">
    ⟶
  </span>
</button>
  </Link>
</div>



    {/* Second Image Block */}
   <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg">
  <Image 
    src="/formimage.jpg" 
    alt="Real Estate Property"
    width={800}
    height={570}
    className="w-full h-full max-h-full lg:max-h-full object-cover rounded-lg" 
  />

  {/* Centered Button with Link */}
  <Link href="/jeddah" className="absolute inset-0 flex items-center justify-center">
  <button className="
  px-16 py-3
  bg-white text-black text-sm
  rounded-full hover:bg-gray-100 transition-all duration-300
  relative overflow-hidden
  group
  pl-12  // Reserve space for left arrow
">
  <span className="
    absolute left-4 top-1/2 -translate-y-1/2
    opacity-0 group-hover:opacity-100
    transition-all duration-300 text-[rgba(202,3,32,255)]
    group-hover:translate-x-0 -translate-x-4
  ">
    ⟵
  </span>
  <span className="inline-block transition-all duration-300 group-hover:translate-x-3">
   JEDDAH
  </span>
</button>
  </Link>
</div>
</div>
</div>

<div className="order-2 md:order-1 bg-[rgba(202,3,32,255)] flex items-center justify-center h-[25px] md:h-[80px]">
    <Image
      src="/kwline.png"
      alt="KW Logo Center"
      width={80}
      height={80}
      className="object-contain mx-auto w-7 h-7 md:w-20 md:h-20"
    />
  </div>

      {/* Thrive Image Section */}
      <div className="order-1 md:order-2 flex flex-col items-center justify-center">
    <Image
      src="/howwillyouthink.png"
      alt="How Will You Thrive"
      width={800}
      height={400}
      className="w-70 h-20 md:w-[950px] md:h-[400px] object-contain"
    />
    <button className="bg-[rgba(202,3,32,255)] w-40 text-white px-8 py-1.5 text-[0.6rem] rounded-full block mx-auto md:hidden mt-4 mb-4">
      JOIN US
    </button>
  </div>
        <hr className=" hidden md:flex w-160 mx-auto bg-[rgba(202,3,32,255)] h-[1.5px] border-0 mt-2 md:mt-8 mb-10" />
        <Footer></Footer>
             </div>
    );
}

export default Page;
