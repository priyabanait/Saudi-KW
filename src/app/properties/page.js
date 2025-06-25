'use client'
import React from 'react';
import Image from 'next/image';

import Footer from '@/components/footer';

import { ArrowRight } from 'lucide-react';
import { useState,useRef,useEffect,useMemo } from 'react';
import { FaChevronUp,FaChevronDown } from 'react-icons/fa';
import { FaSearch, FaCheckCircle,FaBars, FaGavel, FaTimes,FaStar, FaGlobeAmericas, FaHome } from 'react-icons/fa';
import Link from 'next/link';

const Properties = () => {
  const scrollRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const properties = useMemo(() =>[
    {
      title: "Marina View Tower",
      location: "Mecca, KSA",
      price: "SAR 6,500",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    {
      title: "Al Noor Villas",
      location: "Medina, KSA",
      price: "SAR 6,500",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    },
    {
      title: "The Haven Residences",
      location: "Dammam, KSA",
      price: "SAR 6,500",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    {
      title: "Pearl Gardens",
      location: "Khobar, KSA",
      price: "SAR 6,500",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    },
  ], []);

  useEffect(() => {
    const el = scrollRef.current;

    const checkOverflow = () => {
      if (el && el.scrollWidth > el.clientWidth) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    checkOverflow(); // Initial check
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [properties]);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
       const [isVisible, setIsVisible] = useState(true);  
       const [isAtTop, setIsAtTop] = useState(true);  
       const prevScrollY = useRef(0);
      
   
 
 
       const [openSubmenu, setOpenSubmenu] = useState(null);
     
       const toggleSubmenu = (key) => {
         setOpenSubmenu(prev => (prev === key ? null : key));
       };
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
       const menuItems = [
         { label: 'PROPERTIES', key: 'properties',  submenu: [
           { label: 'ACTIVE', href: '/properties/active' },
           { label: 'SOLD', href: '/properties/sold' },
           { label: 'RENT', href: '/properties/rent' },
           { label: 'AUCTION', href: '/properties/auction' },
           { label: 'INTERNATIONAL', href: 'https://www.kw.com/search/sale?viewport=56.41671222773751%2C120.63362495324327%2C-14.684966046563696%2C-6.807781296756721' }
         ]},
         { label: 'MARKET CENTER', key: 'market', submenu: [
           { label: 'ALL MC', href: '/marketCenter' },
           { label: 'JASMINE', href: '/riyadh' },
           { label: 'JEDDAH', href: '/jeddah' }
         ] },
         { label: 'BUYER', key: 'buyer', submenu: [
           { label: 'SEARCH PROPERTY', href: '/properties' },
           { label: 'AUCTION', href: '/properties/auction' },
           { label: 'NEW DEVELOPMENT', href: '/properties/newdevelopment' },
           { label: 'BUYING GUIDE', href: '/buyer/buyerguid' }
         ]},
         { label: 'TENANT', key: 'tenant', submenu: [
           { label: 'RENT SEARCH', href: '/properties/rent' },
           { label: 'TENANT GUIDE', href: '/tenant' }
         ] },
         { label: 'SELLER', key: 'seller',  submenu: [
           { label: 'SEARCH AGENT', href: '/agent' },
           { label: 'FIVE STEPS TO SELL', href: '/seller' },
           { label: 'SELLER GUIDE', href: 'seller/sellerguid' }
         ]},
         { label: 'OUR CULTURE', key: 'culture', submenu: [
           { label: 'OUR PROMISE', href: '/ourpromise' },
           { label: 'ABOUT US', href: '/ourCulture' },
           { label: 'WHY KW', href: '/ourCulture/whyKW' },
           { label: 'KW TRAINING', href: '/culture/training' },
           { label: 'KW TECHNOLOGY', href: '/ourCulture/kwuniversity"' }
         ] },
         { label: 'FRANCHISE', key: 'franchise',href: '/franchise'   },
         { label: 'LOGIN', key: 'login',href: '/franchise' },
         { label: 'CONTACT US', key: 'contact',href: '/franchise' },
         { label: 'JOIN US', key: 'join' ,href: '/franchise'},
         { label: 'INSTANT VALUATION', key: 'valuation',href: '/franchise' },
         { label: 'TERMS & POLICY', key: 'terms',href: '/franchise' },
       ];
      
     
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
      image:'/sold3.png',
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
          <Link href="/ourCulture" className="text-[0.8rem]  text-white hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/properties" className="text-[0.8rem] text-white hover:text-gray-300 transition-colors">
            Search
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/franchise" className="text-[0.8rem] text-white hover:text-gray-300 transition-colors">
            Join Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/contactUs" className="text-[0.8rem] text-white hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/contactUs" className="text-[0.8rem] text-white hover:text-gray-300 transition-colors">
            Instant Valuation
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="#" className="text-[0.8rem] text-white hover:text-gray-300 transition-colors">
            عربي
          </Link>
          <Link 
            href="#" 
            className="border border-white px-4 py-1.5 rounded-full text-white hover:bg-white hover:text-black transition-colors text-[0.8rem]"
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
          
          <div className="absolute md:hidden top-full ml-10 left-0 right-0 py-4  px-6 space-y-4 shadow-lg bg-gray-950/90 backdrop-blur-sm z-50">
            {menuItems.map(item => (
              <div key={item.key}>
                <div
                  onClick={() => item.submenu && toggleSubmenu(item.key)}
                  className="flex justify-between items-center text-white hover:text-gray-300 transition-colors cursor-pointer py-1"
                >
            <span
  className={`${
    openSubmenu === item.key
      ? 'text-[rgba(202,3,32,255)] font-semibold underline'
      : ["JOIN US", "CONTACT US"].includes(item.label)
      ? 'text-[rgba(202,3,32,255)] font-semibold'
      : 'text-white'
  }`}
>
  {item.label}
</span>
  
  
  
                  {item.submenu && (
    openSubmenu === item.key ? (
      <FaChevronUp size={14} className="text-white" />
    ) : (
      <FaChevronDown size={14} className="text-[rgba(202,3,32,255)]" />
    )
  )}
  
                </div>
  
                {/* Submenu */}
                {item.submenu && openSubmenu === item.key && (
    <div className="mt-1 space-y-3 text-base text-gray-300">
      {item.submenu.map(sub => (
        <Link href={sub.href} key={sub.href} className="block hover:text-white">
          {sub.label}
        </Link>
      ))}
    </div>
  )}
  
              </div>
            ))}
          </div>
        )}
        </header>

      <main className="max-w-full mx-auto px-4 mt-10 md:mt-35 py-8 md:py-4">
        {/* Icon and Title */}
        <div className="text-center mb-10">
        <div className="mx-auto md:mb-4 mb-2 relative w-15 h-15 md:w-[90px] md:h-[90px]">
  <Image 
    src="/property.jpg" 
    alt="property" 
    fill 
    className="object-cover rounded-full"
  />
</div>

  <h1 className="text-3xl mx-10 md:text-2xl md:tracking-[0.2em] tracking-[0.1em]font-normal mb-4">Properties In Saudi Arabia</h1>
  <p className="text-[0.8rem] md:text-[0.9rem] md:tracking-[0.1em] text-gray-600 max-w-full mx-auto px-4">
    Looking For A New Home And Not Sure Which Neighborhood Suits You? Explore Everything You 
  </p>
  <p className="text-[0.8rem] md:text-[0.9rem] md:tracking-[0.1em] text-gray-600 max-w-full mx-auto px-4">
   Need To Know About The Communities In Doha. View Nearby Locations, Landmarks, Reviews, 
  </p>
  <p className="text-[0.8rem] md:text-[0.9rem] md:tracking-[0.1em] text-gray-600 max-w-full mx-auto px-4">
  Prices, FAQ&rsquo;s, And More.
</p>

</div>

{/* Search Section */}
<div className="max-w-[920px] mx-auto md:mb-20">
  {/* Laptop View (unchanged) */}
  <div className="hidden md:flex flex-row w-full shadow-md overflow-hidden rounded-full border">
    {/* Search Input */}
    <div className="flex-1 relative">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
      <input
        type="text"
        placeholder="City, Area or Building"
        className="w-full pl-12 pr-4 py-3 text-sm md:text-base text-gray-800 focus:outline-none focus:ring-0"
      />
    </div>

    <div className="md:w-48 w-20 border-l border-gray-400 flex items-center">
  <select className="w-full py-3 px-4 text-sm md:text-base bg-white text-gray-700 focus:outline-none focus:ring-0">
    <option value="">Property Type</option>
    <option value="apartment">Apartment</option>
    <option value="villa">Villa</option>
    <option value="office">Office</option>
  </select>
</div>


    {/* Search Button */}
    <button className="bg-[rgba(202,3,32,255)] text-white px-12 py-3 text-sm md:text-base font-medium border-none outline-none">
  Search
</button>

  </div>



  {/* Mobile View (search input and dropdown in one group, button below) */}
  <div className="md:hidden flex flex-col gap-2 mx-4">
  <div className="flex w-full max-w-md mx-auto">
  {/* Search Input */}
  <div className="flex-1 relative">
    <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
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
    <button className="bg-[rgba(202,3,32,255)] text-white justify-center items-center w-30 py-2 text-[0.6rem] rounded-full mt-1 focus:outline-none focus:ring-0 block mx-auto">
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
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 max-w-full mx-12">
          {categories.map((category, index) => (
            <Link href={category.href} key={index} className="group">
              <div className="flex flex-col items-center p-0 rounded-lg text-center ">
                <div className="mb-2">
                  <Image 
                    src={category.image} 
                    alt={category.title + ' icon'} 
                    width={48} 
                    height={48} 
                    className="object-contain w-12 h-12" 
                  />
                </div>
                <p className="text-base text-gray-500 mb-1">{category.title}</p>
                <p className="text-base text-gray-500">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center md:my-22 my-4 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
  <hr className="md:w-140 w-50 mx-auto bg-[rgba(202,3,32,255)] border-0 h-[1.5px]" />
</div>
        {/* New Property Cards Section */}
        <div className="md:mt-10 mt-10 md:mx-12">
  <div className="flex items-center justify-between md:mx-6 flex-wrap gap-4">
    {/* Left: Icon + Heading */}
    <p className="flex items-center text-xl md:text-3xl font-normal">
      <Image
        src="/residential.png"
        alt="Residential"
        width={40}
        height={40}
        className="w-8 h-8 md:w-16 md:h-16 mr-5"></Image>
    
      <span className="text-gray-500 ">Residential Active Properties</span>
    </p>

    {/* Right: Button */}
    <Link href="/properties/active">
    <button className="hidden md:flex text-sm md:text-base  bg-[rgba(202,3,32,255)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
      Click Here To View All Residential Properties
    </button>
    </Link>
    </div>
    


          {/* First Home Block */}
          <div className="mb-2 md:mb-10">
           {/* First Home Block */}
      <div className="relative w-full px-6 md:py-10 py-5 bg-white">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
  >
    {properties.map((property, index) => (
    <div
    key={index}
    className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 max-w-[80%] sm:max-w-[50%] md:max-w-[30%] md:h-[330px] h-[200px] rounded-xl overflow-hidden shadow-md bg-white relative"
  >
    <Image
      src={property.image}
      alt={property.title}
     fill
      className="w-full h-full object-cover"
    />
 
        <div className="absolute bottom-4 left-4 text-white drop-shadow">
          <h3 className="text-md font-semibold">{property.title}</h3>
          <p className="text-sm">{property.location}</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
    ))}
  </div>

  {showScrollButton && (
    <button
      onClick={scrollRight}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md z-10"
    >
      <ArrowRight size={20} />
    </button>
  )}
</div>
           
          </div>
        </div>
        <Link href="/properties/active">
    <button className="block md:hidden mx-auto text-sm mb-10 md:text-base bg-[rgba(202,3,32,255)] text-white px-4 py-1 rounded-lg hover:bg-red-700 transition">
      Click Here
    </button>
    </Link>
  
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
  <div className="flex items-center justify-between md:mx-6">
    {/* Left: Icon + Text */}
    <p className="flex items-center text-xl md:text-3xl font-normal">
    <Image
  src="/sold3.png"
  alt="Residential"
  width={40} 
  height={40}
  className="w-8 h-8 md:w-16 md:h-16 mr-5"
/>


      <span className="text-gray-500">Sold Properties</span>
    </p>

    {/* Right: Button */}
    <Link href="/properties/sold"> 
    <button className="hidden md:flex text-sm md:text-base  bg-[rgba(202,3,32,255)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
      Click Here To View All Sold Properties
    </button>
    </Link>
    </div>
   
  

  {/* First Home Block */}
  <div className="mb-2 md:mb-10">
   {/* First Home Block */}
   <div className="relative w-full px-6 md:py-10 py-5 bg-white">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
  >
    {properties.map((property, index) => (
    <div
    key={index}
    className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 max-w-[80%] sm:max-w-[50%] md:max-w-[30%] md:h-[330px] h-[200px] rounded-xl overflow-hidden shadow-md bg-white relative"
  >
    <Image
      src={property.image}
      alt={property.title}
      fill
      className="w-full h-full object-cover"
    />
 
        <div className="absolute bottom-4 left-4 text-white drop-shadow">
          <h3 className="text-md font-semibold">{property.title}</h3>
          <p className="text-sm">{property.location}</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
    ))}
  </div>

  {showScrollButton && (
    <button
      onClick={scrollRight}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md z-10"
    >
      <ArrowRight size={20} />
    </button>
  )}
</div>
  </div>


        </div>
        <Link href="/properties/sold">
    <button className="block md:hidden text-sm mb-10 md:text-base mx-auto bg-[rgba(202,3,32,255)] text-white px-4 py-1 rounded-lg hover:bg-red-700 transition">
      Click Here
    </button>
    </Link>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
  {/* Flex container for text and button */}
  <div className="flex items-center justify-between md:mx-6 flex-wrap gap-4">
    {/* Left: Text with icon */}
    <p className="flex items-center text-xl md:text-3xl font-normal">
      <Image src="/rental.png" alt="Residential" width={40} 
  height={40}
  className="w-8 h-8 md:w-16 md:h-16 mr-5"></Image>
      <span className="text-gray-500">Rental Properties</span>
    </p>

    {/* Right: Button */}
    <Link href="/properties/rent">
    <button className="hidden md:flex text-sm md:text-base  bg-[rgba(202,3,32,255)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
      Click Here To View All Rental Properties
    </button>
    </Link>
    </div>
   



          {/* First Home Block */}
          <div className="mb-2 md:mb-10">
            {/* First Home Block */}
      <div className="relative w-full px-6 md:py-10 py-5 bg-white">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
  >
    {properties.map((property, index) => (
    <div
    key={index}
    className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 max-w-[80%] sm:max-w-[50%] md:max-w-[30%] md:h-[330px] h-[200px] rounded-xl overflow-hidden shadow-md bg-white relative"
  >
    <Image
      src={property.image}
      alt={property.title}
      fill
      className="w-full h-full object-cover"
    />
 
        <div className="absolute bottom-4 left-4 text-white drop-shadow">
          <h3 className="text-md font-semibold">{property.title}</h3>
          <p className="text-sm">{property.location}</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
    ))}
  </div>

  {showScrollButton && (
    <button
      onClick={scrollRight}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md z-10"
    >
      <ArrowRight size={20} />
    </button>
  )}
</div>
           
          </div>
        </div>
        <Link href="/properties/rent">
    <button className="block md:hidden mx-auto text-sm mb-10 md:text-base bg-[rgba(202,3,32,255)] text-white px-4 py-1 rounded-lg hover:bg-red-700 transition">
      Click Here
    </button>
    </Link>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
  <div className="flex items-center justify-between md:mx-6 flex-wrap gap-4">
    {/* Left: Text with icon */}
    <p className="flex items-center text-xl md:text-3xl font-normal">
      <Image src="/auction.png" alt="Residential"width={40} 
  height={40}
  className="w-8 h-8 md:w-16 md:h-16 mr-5"></Image>
      <span className="text-gray-500">Auction Properties</span>
    </p>

    {/* Right: Button */}
    <Link href="/properties/auction">
    <button className="hidden md:flex text-sm md:text-base  bg-[rgba(202,3,32,255)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
      Click Here To View All Auction Properties
    </button>
    </Link>
    
  </div>

 
          {/* First Home Block */}
          <div className=" mb-2 md:mb-10">
           {/* First Home Block */}
      <div className="relative w-full px-6 md:py-10 py-5 bg-white">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
  >
    {properties.map((property, index) => (
    <div
    key={index}
    className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 max-w-[80%] sm:max-w-[50%] md:max-w-[30%] md:h-[330px] h-[200px] rounded-xl overflow-hidden shadow-md bg-white relative"
  >
    <Image
      src={property.image}
      alt={property.title}
      fill
      className="w-full h-full object-cover"
    />
 
        <div className="absolute bottom-4 left-4 text-white drop-shadow">
          <h3 className="text-md font-semibold">{property.title}</h3>
          <p className="text-sm">{property.location}</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
    ))}
  </div>

  {showScrollButton && (
    <button
      onClick={scrollRight}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md z-10"
    >
      <ArrowRight size={20} />
    </button>
  )}
</div>
           
          </div>
        </div>
        <Link href="/properties/auction">
    <button className="block md:hidden mx-auto mb-10 text-sm md:text-base bg-[rgba(202,3,32,255)] text-white px-4 py-1 rounded-lg hover:bg-red-700 transition">
      Click Here
    </button>
    </Link>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
  <div className="flex items-center justify-between md:mx-6 flex-wrap gap-4">
    {/* Left: Icon + Heading */}
    <p className="flex items-center text-xl md:text-3xl font-normal">
      <Image
        src="/newdevelopment.png"
        alt="Residential"
        width={40} 
        height={40}
        className="w-8 h-8 md:w-16 md:h-16 mr-5"></Image>
      <span className="text-gray-500">New Development</span>
    </p>

    {/* Right: Button */}
    <Link href="/properties/newdevelopment">
    <button className="hidden md:flex text-sm md:text-base bg-[rgba(202,3,32,255)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
      Click Here To View All New Development Properties
    </button>
    </Link>
    

  </div>
 

          {/* First Home Block */}
          <div className=" mb-2 md:mb-10">
         {/* First Home Block */}
      <div className="relative w-full px-6 md:py-10 py-5 bg-white">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
  >
    {properties.map((property, index) => (
    <div
    key={index}
    className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 max-w-[80%] sm:max-w-[50%] md:max-w-[30%] md:h-[330px] h-[200px] rounded-xl overflow-hidden shadow-md bg-white relative"
  >
    <Image
      src={property.image}
      alt={property.title}
      fill
      className="w-full h-full object-cover"
    />
 
        <div className="absolute bottom-4 left-4 text-white drop-shadow">
          <h3 className="text-md font-semibold">{property.title}</h3>
          <p className="text-sm">{property.location}</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
    ))}
  </div>

  {showScrollButton && (
    <button
      onClick={scrollRight}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md z-10"
    >
      <ArrowRight size={20} />
    </button>
  )}
</div>
           
          </div>
        </div>
        <Link href="/properties/newdevelopment">
  <button className="block md:hidden mx-auto text-sm mb-10 md:text-base bg-[rgba(202,3,32,255)] text-white px-4 py-1 rounded-lg hover:bg-red-700 transition">
    Click Here
  </button>
</Link>
         {/* sold Property Cards Section */}
         <div className="md:mt-10 mt-4 md:mx-12">
  <div className="flex items-center justify-between md:mx-6 flex-wrap gap-4">
    {/* Left: Icon + Heading */}
    <p className="flex items-center text-xl md:text-3xl font-normal">
      <Image
        src="/international.png"
        alt="Residential"
        width={40} 
        height={40}
        className="w-8 h-8 md:w-16 md:h-16 mr-5"></Image>
      <span className="text-gray-500">International Properties</span>
    </p>

    {/* Right: Button */}
    <Link href="https://www.kw.com/search/sale?viewport=56.41671222773751%2C120.63362495324327%2C-14.684966046563696%2C-6.807781296756721">
    <button className="hidden md:flex text-sm md:text-base  bg-[rgba(202,3,32,255)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
      Click Here To View All International Properties
    </button>
    </Link>
    </div>
    
 


          {/* First Home Block */}
          <div className=" mb-2">
            {/* First Home Block */}
      <div className="relative w-full px-6 md:py-10 py-5 bg-white">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
  >
    {properties.map((property, index) => (
    <div
    key={index}
    className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 max-w-[80%] sm:max-w-[50%] md:max-w-[30%] md:h-[330px] h-[200px] rounded-xl overflow-hidden shadow-md bg-white relative"
  >
    <Image
      src={property.image}
      alt={property.title}
      fill
      className="w-full h-full object-cover"
    />
 
        <div className="absolute bottom-4 left-4 text-white drop-shadow">
          <h3 className="text-md font-semibold">{property.title}</h3>
          <p className="text-sm">{property.location}</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>
    ))}
  </div>

  {showScrollButton && (
    <button
      onClick={scrollRight}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow-md z-10"
    >
      <ArrowRight size={20} />
    </button>
  )}
</div>
           
          </div>
        </div>
        <Link href="https://www.kw.com/search/sale?viewport=56.41671222773751%2C120.63362495324327%2C-14.684966046563696%2C-6.807781296756721">
    <button className="block md:hidden mx-auto mb-10 text-sm md:text-base bg-[rgba(202,3,32,255)] text-white px-4 py-1 rounded-lg hover:bg-red-700 transition">
      Click Here
    </button>
    </Link>
      </main>
      {/* How Will You Think image and KW logo bar */}
      <div className="flex flex-col">
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
        {/* Red bar with centered KW logo */}
        <div className="order-2 md:order-1 bg-[rgba(202,3,32,255)] flex items-center justify-center h-[25px] md:h-[80px]">
          <Image
            src="/kwline1.png"
            alt="KW Logo Center"
            width={80}
            height={80}
            className="object-contain mx-auto w-7 h-7 md:w-20 md:h-20"
          />
        </div>
      </div>
      {/* Red horizontal line */}
      <div className="hidden md:flex justify-center items-center my-20 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
        <hr className="md:w-160 w-60 mx-auto bg-[rgba(202,3,32,255)] border-0  h-[1.5px]" />
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
