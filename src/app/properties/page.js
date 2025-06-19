'use client'
import React from 'react';
import Image from 'next/image';

import Footer from '@/components/footer';

import { useState,useRef,useEffect } from 'react';
import { FaSearch, FaCheckCircle,FaBars, FaGavel, FaTimes,FaStar, FaGlobeAmericas, FaHome } from 'react-icons/fa';
import Link from 'next/link';

const Properties = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
       const [isVisible, setIsVisible] = useState(true);  
       const [isAtTop, setIsAtTop] = useState(true);  
       const prevScrollY = useRef(0);
     
       const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
       };
     
       useEffect(() => {  
         const handleScroll = () => {  
           const currentScrollY = window.scrollY;  
     
           // At the very top  
           if (currentScrollY < 10) {  
             setIsAtTop(true);  
             setIsVisible(true);  
             return;  
           } else {  
             setIsAtTop(false);  
           }  
     
           // Scrolling down → Hide header  
           if (currentScrollY > prevScrollY.current) {  
             setIsVisible(false);  
           }  
           // Scrolling up → Show header  
           else {  
             setIsVisible(true);  
           }  
     
           prevScrollY.current = currentScrollY;  
         };  
     
         window.addEventListener('scroll', handleScroll, { passive: true });  
         return () => window.removeEventListener('scroll', handleScroll);  
       }, []);
     
  const categories = [
    {
      image:'/residential.png',
      title: 'Residential',
      subtitle: 'Active Properties',
      href: '/residential'
    },
    {
      image:'/commercial.png',
      title: 'Commercial',
      subtitle: 'Active Properties',
      href: '/commercial'
    },
    {
      image:'/sold.png',
      title: 'Sold',
      subtitle: 'Properties',
      href: '/sold'
    },
    {
      image:'/rental.png',
      title: 'Rental',
      subtitle: 'Properties',
      href: '/rental'
    },
    {
      image:'/auction.png',
      title: 'Auction',
      subtitle: 'Properties',
      href: '/auction'
    },
    {
      image:'/newdevelopment.png',
      title: 'New',
      subtitle: 'Development',
      href: '/new-development'
    },
    {
      image:'/international.png',
      title: 'International',
      subtitle: 'Properties',
      href: '/international'
    }
  ];

  return (
    <div className="min-h-screen ">
       <header className={`  
        fixed top-0 w-full z-50  
        flex justify-between items-center px-4 sm:px-6 py-2
        transition-all duration-300 ease-in-out  
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}  
        ${isAtTop ? 'bg-gray-950/90 backdrop-blur-sm' : 'bg-gray-950/90 backdrop-blur-sm'}  
      `}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="https://static.wixstatic.com/media/36a881_0cd959d32d904bd7be76303fb23dec0a~mv2.png/v1/fill/w_279,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design.png" 
              alt="KW Saudi Arabia Logo" 
              width={279}
              height={63}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link href="/ourCulture" className="text-[0.6rem]  text-white hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/properties" className="text-[0.6rem] text-white hover:text-gray-300 transition-colors">
            Search
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/franchise" className="text-[0.6rem] text-white hover:text-gray-300 transition-colors">
            Join Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/contactUs" className="text-[0.6rem] text-white hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/contactUs" className="text-[0.6rem] text-white hover:text-gray-300 transition-colors">
            Instant Valuation
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="#" className="text-[0.6rem] text-white hover:text-gray-300 transition-colors">
            عربي
          </Link>
          <Link 
            href="#" 
            className="border border-white px-4 py-1.5 rounded-full text-white hover:bg-white hover:text-black transition-colors text-[0.6rem]"
          >
            Sign In/Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes size={20} className="text-white" />
          ) : (
            <FaBars size={20} className="text-white" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`absolute md:hidden top-full left-0 right-0 py-4 px-6 space-y-4 shadow-lg bg-gray-950/95 backdrop-blur-sm`}>
            <Link href="/ourCulture" className="block py-2 text-white hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/properties" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Search
            </Link>
            <Link href="/franchise" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Join Us
            </Link>
            <Link href="/contactUs" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
            <Link href="/contactUs" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Instant Valuation
            </Link>
            <Link href="#" className="block py-2 text-white hover:text-gray-300 transition-colors">
              عربي
            </Link>
            <Link 
              href="#" 
              className="w-full border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition-colors mt-2 inline-block text-center"
            >
              Sign In/Register
            </Link>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-10 md:mt-23 py-8 md:py-4">
        {/* Icon and Title */}
        <div className="text-center mb-10">
        <div className="mx-auto md:mb-0 mb-2 relative w-15 h-15 md:w-[90px] md:h-[90px]">
  <Image 
    src="/property.jpg" 
    alt="property" 
    fill 
    className="object-cover rounded-full"
  />
</div>

  <h1 className="text-3xl mx-10 md:text-lg font-normal mb-4">Properties In Saudi Arabia</h1>
  <p className="text-[0.7rem] md:text-[0.7rem] text-gray-600 max-w-3xl mx-auto px-4">
    Looking For A New Home And Not Sure Which Neighborhood Suits You? Explore Everything You 
  </p>
  <p className="text-[0.7rem] md:text-[0.7rem] text-gray-600 max-w-3xl mx-auto px-4">
   Need To Know About The Communities In Doha. View Nearby Locations, Landmarks, Reviews, 
  </p>
  <p className="text-[0.7rem] md:text-[0.7rem] text-gray-600 max-w-3xl mx-auto px-4">
  Prices, FAQ&rsquo;s, And More.
</p>

</div>

{/* Search Section */}
<div className="max-w-[750px] mx-auto md:mb-20">
  {/* Laptop View (unchanged) */}
  <div className="hidden md:flex flex-row">
    {/* Search Input */}
    <div className="flex-1 relative">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
      <input
        type="text"
        placeholder="City, Area or Building"
        className="w-full pl-12 pr-4 py-1.5 text-sm border border-r-0 rounded-l-full focus:outline-none focus:ring-0"
      />
    </div>

    {/* Property Type Dropdown with vertical line */}
    <div className="md:w-48 border-l border-gray-500">
      <select className="w-full py-1.5 px-4 text-sm border-t border-b focus:outline-none focus:ring-0">
        <option value="">Property Type</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="office">Office</option>
      </select>
    </div>

    {/* Search Button */}
    <button className="bg-red-700 text-white px-8 py-1.5 text-sm rounded-r-full focus:outline-none focus:ring-0">
      Search
    </button>
  </div>

  {/* Mobile View (search input and dropdown in one group, button below) */}
  <div className="md:hidden flex flex-col gap-2 mx-4">
  <div className="flex w-full max-w-md mx-auto">
  {/* Search Input */}
  <div className="flex-1 relative">
    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
    <input
      type="text"
      placeholder="City, Area or Building"
      className="w-full pl-10 pr-2 py-2 text-[0.8rem] md:text-sm border border-gray-500 rounded-l-lg focus:outline-none focus:ring-0"
    />
  </div>

  {/* Property Type Dropdown */}
  <select className="w-32 py-2 px-2 text-sm border border-gray-500 border-l-0 rounded-r-lg focus:outline-none focus:ring-0">
    <option value="">Type</option>
    <option value="apartment">Apartment</option>
    <option value="villa">Villa</option>
  </select>
</div>

    {/* Search Button (full width below) */}
    <button className="bg-red-700 text-white justify-center items-center w-30 py-2 text-[0.6rem] rounded-full mt-1 focus:outline-none focus:ring-0 block mx-auto">
  Search
</button>
  </div>
</div>


        {/* Property Categories */}
        {/* Mobile: horizontal scroll for first 4, rest centered below */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-2 mx-1 mt-2">
            {categories.slice(0, 4).map((category, index) => (
              <Link href={category.href} key={index} className="flex-shrink-0">
                <div className="flex flex-col items-center p-2 rounded-lg text-center bg-white">
                  <Image 
                    src={category.image} 
                    alt={category.title + ' icon'} 
                    width={48} 
                    height={48} 
                    className="object-contain w-8 h-8" 
                  />
                  <p className="text-[0.5rem] text-gray-700 mt-1">{category.title}</p>
                  <p className="text-[0.5rem] text-gray-700">{category.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {categories.slice(4).map((category, index) => (
              <Link href={category.href} key={index + 4} className="">
                <div className="flex flex-col items-center p-2 rounded-lg text-center bg-white">
                  <Image 
                    src={category.image} 
                    alt={category.title + ' icon'} 
                    width={48} 
                    height={48} 
                    className="object-contain w-8 h-8" 
                  />
                  <p className="text-[0.5rem] text-gray-700 mt-1">{category.title}</p>
                  <p className="text-[0.5rem] text-gray-700">{category.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Desktop: grid layout */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 max-w-7xl mx-12">
          {categories.map((category, index) => (
            <Link href={category.href} key={index} className="group">
              <div className="flex flex-col items-center p-0 rounded-lg text-center ">
                <div className="mb-2">
                  <Image 
                    src={category.image} 
                    alt={category.title + ' icon'} 
                    width={48} 
                    height={48} 
                    className="object-contain w-8 h-8" 
                  />
                </div>
                <p className="text-sm text-gray-500 mb-1">{category.title}</p>
                <p className="text-sm text-gray-500">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center md:my-18 my-4 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
  <hr className="md:w-140 w-50 mx-auto bg-red-500 h-[1.5px]" />
</div>
        {/* New Property Cards Section */}
        <div className="md:mt-10 md:mx-12">
          <p className="flex items-center text-xl font-normal md:mx-6">
            <Image src="/residential.png" alt="Residential" width={32} height={32} className="mr-6" /><span className='text-gray-500'> Residential Active Properties</span>
          </p>
          {/* First Home Block */}
          <div className="mb-4 md:mb-10">
            <Link href="/properties">
              <Image
                src="/marinaView.jpg"
                alt="Modern Home"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-full border-2 border-white rounded-2xl"
              />
            </Link>
           
          </div>
        </div>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
          <p className="flex items-center text-xl font-normal md:mx-6">
            <Image src="/sold.png" alt="Residential" width={32} height={32} className="mr-6" /><span className='text-gray-500'> Sold Properties</span>
          </p>
          {/* First Home Block */}
          <div className=" mb-4 md:mb-10">
            <Link href="/properties">
              <Image
                src="/marinaView.jpg"
                alt="Modern Home"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-full border-2 border-white rounded-2xl"
              />
            </Link>
           
          </div>
        </div>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
          <p className="flex items-center text-xl font-normal md:mx-6">
            <Image src="/rental.png" alt="Residential" width={32} height={32} className="mr-6" /><span className='text-gray-500'> Rental Properties</span>
          </p>
          {/* First Home Block */}
          <div className="mb-4 md:mb-10">
            <Link href="/properties">
              <Image
                src="/marinaView.jpg"
                alt="Modern Home"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-full border-2 border-white rounded-2xl"
              />
            </Link>
           
          </div>
        </div>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4d:mx-12">
          <p className="flex items-center text-xl font-normal md:mx-6">
            <Image src="/auction.png" alt="Residential" width={32} height={32} className="mr-6" /><span className='text-gray-500'> Auction Properties</span>
          </p>
          {/* First Home Block */}
          <div className=" mb-4 md:mb-10">
            <Link href="/properties">
              <Image
                src="/marinaView.jpg"
                alt="Modern Home"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-full border-2 border-white rounded-2xl"
              />
            </Link>
           
          </div>
        </div>
       
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
          <p className="flex items-center text-xl font-normal md:mx-6">
            <Image src="/newdevelopment.png" alt="Residential" width={32} height={32} className="mr-6" /><span className='text-gray-500'> New Development</span>
          </p>
          {/* First Home Block */}
          <div className=" mb-4 md:mb-10">
            <Link href="/properties">
              <Image
                src="/marinaView.jpg"
                alt="Modern Home"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-full border-2 border-white rounded-2xl"
              />
            </Link>
           
          </div>
        </div>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4md:mx-12">
          <p className="flex items-center text-xl font-normal md:mx-6">
            <Image src="/international.png" alt="Residential" width={32} height={32} className="mr-6" /><span className='text-gray-500'> International Properties</span>
          </p>
          {/* First Home Block */}
          <div className=" mb-0">
            <Link href="/properties">
              <Image
                src="/marinaView.jpg"
                alt="Modern Home"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-full border-2 border-white rounded-2xl"
              />
            </Link>
           
          </div>
        </div>
      </main>
      <div className="flex flex-col">
  {/* How Will You Think image */}
  <div className="order-1 md:order-2 flex flex-col items-center justify-center">
    <Image
      src="/howwillyouthink.png"
      alt="How Will You Thrive"
      width={800}
      height={400}
      className="w-70 h-20 md:w-[800px] md:h-[400px] object-contain"
    />
    <button className="bg-red-700 w-40 text-white px-8 py-1.5 text-[0.6rem] rounded-full block mx-auto md:hidden mt-4 mb-4">
      JOIN US
    </button>
  </div>
  {/* Red bar with centered KW logo */}
  <div className="order-2 md:order-1 bg-red-700 flex items-center justify-center h-[25px] md:h-[76px]">
    <Image
      src="/kwline.png"
      alt="KW Logo Center"
      width={80}
      height={80}
      className="object-contain mx-auto w-7 h-7 md:w-20 md:h-20"
    />
  </div>
</div>

{/* Red horizontal line */}
<div className="hidden md:flex justify-center items-center my-10 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
  <hr className="md:w-140 w-60 mx-auto bg-red-500 h-[1.5px]" />
</div>

      <Footer />
    </div>
  );
};

export default Properties;
