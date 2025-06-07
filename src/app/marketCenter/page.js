import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
const Page = () => {
    return (
        <div className="relative">
<Header></Header>
     
         
<Box h3={"All Market Centers"}
 src="bgmarketcenter.png"
  image={'https://static.wixstatic.com/media/36a881_3c5b1d5faca941ea915b39acfedf52ee~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-removebg-preview.png'}>
    
  </Box>
          

  <div className="w-full mx-auto px-4 md:px-8 md:mt-40 lg:px-20 py-8 mt-10">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
    {/* First Image Block - Full width on mobile, 50% on desktop */}
    <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
      <img 
        src="/reyadhsunny.jpg" 
        alt="Real Estate Property"
        className="w-full h-auto max-h-[300px] lg:max-h-[570px] object-cover"  
      />
    </div>

    {/* Second Image Block - Full width on mobile, 50% on desktop */}
    <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
      <img 
        src="formimage.jpg" 
        alt="Real Estate Agent"  
        className="w-full h-auto md:h-full max-h-[300px] lg:max-h-[570px] object-cover"
      />
    </div>
  </div>
</div>
 <div className="bg-red-700 py-4 flex justify-center mt-10">
        <img src="kwline.png" alt="KW Logo Center" width={80} height={80} />
      </div>

      {/* Thrive Image Section */}
      <div className="flex justify-center py-16">
        <img
          src="howwillyouthink.png"
          alt="How Will You Thrive"
          width={800}
          height={400}
        
        />
      </div>
        <hr className="w-5/12 mx-auto bg-red-500 h-[1.5px] mt-8 mb-10" />
        <Footer></Footer>
             </div>
    );
}

export default Page;
