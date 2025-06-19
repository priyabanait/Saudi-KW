import React from 'react';
import RiyadhJedah from '@/components/riyadhJedah';
import Header from '@/components/header';
import Box from '@/components/box';
const Riyadh = () => {
  return (
    <div>
         <Header />
      <Box
        h3={"Jasmin Contact Us"}
        src="/bgriyadh.jpg"
        image={
          'https://static.wixstatic.com/media/36a881_3c5b1d5faca941ea915b39acfedf52ee~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-removebg-preview.png'
        }
      /> 
         

     <RiyadhJedah p={'JEDDAH'} map={'https://www.google.com/maps?q=2740+King+Fahd+Branch+Rd,+Riyadh,+Saudi+Arabia&output=embed'}  address={'DIST, 2740 KING FAHD BRANCH RD, AS SAHAFAH, 6403, RIYADH 13315'}></RiyadhJedah>
    </div>
  );
}

export default Riyadh;
