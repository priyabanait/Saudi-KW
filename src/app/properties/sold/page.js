'use client'
import React from 'react';
import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import Properties from '@/components/property';
const Sold = () => {
    return (
        <div>
          <Header />
      <Box h3={"Sold  Listings"} src="/kwbg-image.jpg" image="/properties.png" />
      <Properties></Properties>
      <Footer></Footer>
        </div>
    );
}

export default Sold;
