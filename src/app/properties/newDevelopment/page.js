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
     
   <PropertyType type='New Development'></PropertyType>
      <Footer></Footer>   
        </div>
    );
}

export default Newdevelopment;
