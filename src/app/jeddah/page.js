import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import RiyadhJedah from '@/components/riyadhJedah';
const Jeddhah = () => {
    return (
        <div>
           <Header />
      <Box
        h3={"Jeddah Contact Us"}
        src="/bgriyadh.jpg"
        image={
          'https://static.wixstatic.com/media/36a881_3c5b1d5faca941ea915b39acfedf52ee~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-removebg-preview.png'
        }
      /> 
         

      <RiyadhJedah p={'JEDDAH'} map={'https://www.google.com/maps?q=Jeddah,+Saudi+Arabia&output=embed'} address={'Al Khalidiyyah, Jeddah 23421'}></RiyadhJedah>
        </div>
    );
}

export default Jeddhah;
