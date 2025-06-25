'use client'
import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import PropertyType from '@/components/propertype'


const Rent = () => {
    return (
        <div>
          <Header />
      <Box h3={"Rental Listings"} src="/bgrent.jpg" image="/properties2.jpg" />
    
   <PropertyType type='Rent'></PropertyType>
      <Footer></Footer>
        </div>
    );
}

export default Rent;
