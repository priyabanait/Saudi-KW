'use client'
import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import PropertyType from '@/components/propertype';

const Auction = () => {
    return (
        <div>
            <Header />
      <Box h3={"Auction Listings"} src="/bgauction.jpg" image="/properties2.jpg" />
      
   <PropertyType  type="Auction"></PropertyType>
      <Footer></Footer>   
        </div>
    );
}

export default Auction;
