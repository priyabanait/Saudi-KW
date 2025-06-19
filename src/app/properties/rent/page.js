'use client'
import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import Properties from '@/components/property';


const Rent = () => {
    return (
        <div>
          <Header />
      <Box h3={"Rental Listings"} src="/bgrent.jpg" image="/properties.png" />
      <Properties></Properties>
      <Footer></Footer>
        </div>
    );
}

export default Rent;
