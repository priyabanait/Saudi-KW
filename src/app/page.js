'use client'

import { FaSearch, FaBars, FaTimes, FaBuilding, FaChevronDown } from "react-icons/fa";
import Link from 'next/link';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from 'next/image';
import React, { useRef,useState,useEffect,useMemo  } from 'react';
import { ArrowRight } from 'lucide-react';
const Home = () => {
 
  const scrollRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const properties =useMemo(() => [
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
  return (
    <div className="relative w-full">
  <Header />

  {/* Hero Section */}
{/* Hero Section with Background Image */}
<div className="relative min-h-[74vh] md:min-h-screen">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/kwbg-image.jpg"
      alt="hero"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Content Over Background */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] md:min-h-screen px-4">
    {/* Heading */}
    <h1 className="text-xl md:text-5xl md:mx-0 mx-10 font-bold text-center text-white mb-6 md:mb-12 mt-65 md:mt-100">
      ONE MOVE COULD SHAPE YOUR FUTURE
    </h1>

    <div className="w-full max-w-[920px] bg-gray-500/50 backdrop-blur-sm md:rounded-[40px] rounded-xl shadow-xl px-2.5 md:px-4 py-3 md:py-5  mx-auto">
  {/* Tabs - with reduced width */}
  <div className="flex justify-between items-center bg-white rounded-full  overflow-hidden text-xs md:text-base font-semibold w-3/4 mx-auto">
  {["Buy", "Rent", "Commercial"].map((tab, i, arr) => (
    <React.Fragment key={tab}>
      <div
        className={`flex-1 text-center py-0 md:py-2 mx-4 cursor-pointer ${
          i === 0 
            ? "text-[rgba(202,3,32,255)] bg-white font-bold" 
            : "text-gray-600 font-normal"
        }`}
      >
        {tab}
      </div>
     {/* Divider with responsive spacing */}
{i < arr.length - 1 && (
  <div className="w-px h-7 md:h-10 bg-gray-400 mx-1 md:mx-2"></div>
)}
    </React.Fragment>
  ))}
</div>

   


  {/* Connected Search Bar - remains full width */}
  <div className="mt-4 bg-white rounded-full hidden md:flex items-center w-full overflow-hidden shadow-md">
    {/* Search Input */}
    <div className="flex items-center flex-1 px-8 py-2">
      <FaSearch className="text-gray-500 mr-2 text-sm" />
      <input
        type="text"
        placeholder="City , Area or Building"
        className="w-full text-xs md:text-base text-gray-800 bg-transparent outline-none"
      />
    </div>

    {/* Divider */}
    <div className="w-px h-12 bg-gray-400 mx-1"></div>

    {/* Property Type */}
    <div className="flex items-center md:px-8 py-2 cursor-pointer text-xs md:text-base text-gray-700">
      Property Type
      <FaChevronDown className="ml-2 text-[10px]" />
    </div>

    {/* Search Button */}
    <button className="bg-[rgba(202,3,32,255)] text-white px-12 py-3 rounded-r-full text-xs md:text-base font-semibold">
      Search
    </button>
  </div>
  
   {/* Mobile View (search input and dropdown in one group, button below) */}
   <div className="md:hidden flex flex-col gap-2 mt-4 mx-4">
   <div className="flex w-full max-w-md mx-auto">
  {/* Search Input - kept your original styling */}
  <div className="flex-1 relative">
    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
    <input
      type="text"
      placeholder="City, Area or Building"
      className="w-full pl-10 pr-2 py-3 text-[0.7rem] border bg-white border-gray-500 rounded-l-full focus:outline-none focus:ring-0"
    />
  </div>

  {/* Vertical Divider - added this new element */}
  <div className="h-[42px] w-px bg-gray-300 self-center -mx-[1px]"></div>

  {/* Property Type Dropdown - kept your original styling */}
  <select className="md:w-32 w-28 py-2 px-2 text-[0.7rem] border border-gray-500 border-l-0 rounded-r-full bg-white focus:outline-none focus:ring-0">
    <option value=""> Property Type</option>
    <option value="apartment">Apartment</option>
    <option value="villa">Villa</option>
  </select>
</div>

    {/* Search Button (full width below) */}
    <button className="bg-[rgba(202,3,32,255)] text-white justify-center  items-center w-30 py-2 text-[0.6rem] rounded-full mt-1 focus:outline-none focus:ring-0 block mx-auto">
  Search
</button>
  </div>
</div>


</div>
</div>

<hr className="w-44 mx-auto bg-[rgba(202,3,32,255)] h-[1.5px] border-0 my-12 md:hidden" />

      {/* Image Grid Section */}
      <div className="md:mx-4 mx-14 md:py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-0 md:gap-2">
  {[
    { label: "Properties", path: 'properties', imageUrl: "/properties.jpg" },
    { label: "Market Center", path: 'marketCenter', imageUrl: "/marketcenter.jpg" },
    { label: "Agent", path: 'agent', imageUrl: "/agent.jpg" },
    { label: "Seller", path: 'seller', imageUrl: "/seller.jpg" },
    { label: "Buyer", path: 'buyer', imageUrl: "/buyer.jpg" },
    { label: "Tenant", path: 'tenant', imageUrl: "/tenant.jpg" },
    { label: "Franchise", path: 'franchise', imageUrl: "/franchise.jpg" },
    { label: "Our Culture", path: 'ourCulture', imageUrl: "/ourculture.jpg" },
  ].map(({ label, imageUrl, path }, i) => (
    <Link href={path} key={i} className="group">
      <div className="rounded-xl md:py-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <Image
          src={imageUrl}
          alt={label}
          width={230}
          height={189}
          className="h-26 w-26 md:h-50 md:w-50 object-contain"
        />
      </div>
    </Link>
  ))}
</div>

      <div className="flex justify-center items-center md:my-0 my-12 mt-20 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
        <hr className="md:w-140 w-44 mx-auto bg-[rgba(202,3,32,255)] border-0 h-[1.5px]" />
      </div>

      <div className="w-full mx-auto px-4 md:px-12 lg:px-18 md:py-14 py-4 md:mt-11">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          {/* First Image Block */}
          <div className="lg:w-1/2">
  <Link href="/riyadh">
    <Image
      src="/riyaddh.jpg"
      alt="Real Estate Property"
      width={800}
      height={500}
      className="w-full h-auto max-h-[500px] object-contain cursor-pointer"
    />
  </Link>
</div>

{/* Second Image Block */}
<div className="lg:w-1/2">
  <Link href="/jeddah">
    <Image
      src="/jeddhah.jpg"
      alt="Real Estate Agent"
      width={800}
      height={500}
      className="w-full h-auto max-h-[500px] object-contain cursor-pointer"
    />
  </Link>
</div>
        </div>
      </div>

      <div className="flex justify-center my-12 md:my-0 md:mt-11">
        <h1 className="text-center text-[1rem] md:text-[2.2rem] font-bold">TOOLS FOR YOUR NEEDS</h1>
      </div>

      <div className=" md:flex justify-center items-center md:my-2 my-0">
      <div className="md:mx-4 mx-14 md:py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 md:gap-2">
    {[
      {
        label: "Seller",
        path: "seller/sellerguid",
        imageUrl:
          "/sellerguid.jpg",
      },
      {
        label: "Buyer",
        path: "buyer/buyerguid",
        imageUrl:
          "/buyerguid.jpg",
      },
      {
        label: "Tenant",
        path: "tenant",
        imageUrl:
          "/tenantguid.jpg",
      },
      {
        label: "KW Training",
        path: "training",
        imageUrl:
          "/kwtraining.jpg"
      },
    ].map(({ imageUrl, path }, i) => (
      <Link href={path} key={i} className="group">
        <div className="rounded-xl md:py-6 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <Image
            src={imageUrl}
            alt="image"
            width={230}
            height={189}
            className="h-25 w-25 md:h-38 md:w-38 object-contain"
          />
        </div>
      </Link>
    ))}
  </div>
</div>

      <div className="flex justify-center items-center mt-4 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8  md:mb-0">
        <hr className="md:w-140 w-44 mx-auto bg-[rgba(202,3,32,255)] border-0 h-[1.5px]" />
      </div>

      {/* First Home Block */}
      <div className="relative w-full px-6 md:py-30 py-15 bg-white">
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

      <main className="w-full">
        <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
          {/* Left Side - Image (Full Height on Laptops) */}
          <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-full relative">
            <Image
              src="/formimage.jpg"
              alt="Property"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Form (Full Height & Centered Content) */}
          <div className="w-full lg:w-1/2 bg-[rgba(202,3,32,255)] flex items-center justify-center min-h-[50vh] lg:min-h-full">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl p-6 sm:p-8 md:p-2">
              <h2 className="text-2xl sm:text-4xl font-normal text-white mb-6 sm:mb-8">
                YOUR FUTURE MARKET CENTER STARTS WITH ONE BOLD STEP
              </h2>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-white md:text-base text-sm ml-2 font-normal mb-2 sm:mb-4" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-2 sm:py-4 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm md:text-base font-normal ml-2 mb-2 sm:mb-4" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-2 sm:py-4 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm md:text-base font-normal ml-2 mb-2" htmlFor="purpose">
                  I Want To
                </label>
                <input
                  className="w-80 px-4 py-2 sm:py-4 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  id="purpose"
                  type="text"
                  placeholder="Buy Property, Find agent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm md:text-base font-normal ml-2 mb-2" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  className="w-full px-4 py-1 sm:py-4 border text-white text-[0.8rem] border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  id="notes"
                  rows="4"
                ></textarea>
              </div>

              <button className="w-full md:w-2/5 bg-white md:text-base hover:bg-gray-100 text-[rgba(202,3,32,255)] font-bold text-sm py-4 sm:py-4 border px-6 rounded-3xl transition duration-200">
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <div className="relative ">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/mapbg.jpg"
            alt="Company showcase"
            fill
            className="  w-full h-auto object-contain"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 px-4 sm:px-8 md:py-16 my-4 text-black text-center bg-white/50 ">
          {/* Heading */}
          <div className="mb-10 md:mb-28 md:mt-34 my-20 md:my-0">
          <h1 className=" text-xs md:text-2xl font-bold mb-2 text-[rgba(202,3,32,255)]">
              OUR STATS
            </h1>
            <h1 className="text-xs md:text-4xl font-bold mb-2">
              WHY WORK WITH US
            </h1>
            <hr className="md:w-1/2 w-44 mx-auto border-gray-400 h-[2px]" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 items-center justify-center md:grid-cols-4 gap-8 mt-15 md:mt-0 max-w-full mx-12 mb-12 md:mb-60">
            {/* Stat 1 */}
            <div className="text-center">
  <p className="text-lg md:text-5xl font-bold mb-4">$532B</p>
  <div className="flex items-center justify-center  md:max-w-[200px] max-w-[100px] mx-auto my-4">
    <div className="flex-1 h-px bg-[rgba(202,3,32,255)]"></div>
   
    <div className="flex-1 h-px bg-gray-500"></div>
  </div>


              <p className="md:text-[1rem] text-[0.8rem]">Total Sales Volume</p>
              <p className="md:text-[1rem] text-[0.8rem]">Worldwide</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <p className="text-lg md:text-5xl font-bold mb-4">$1.4B</p>
              <div className="flex items-center justify-center md:max-w-[200px] max-w-[100px] mx-auto my-4">
  <div className="flex-1 h-px bg-[rgba(202,3,32,255)]"></div>
  <div className="flex-1 h-px bg-gray-500"></div>
</div>

              <p className="md:text-[1rem] text-[0.8rem]">Closed Transactions</p>
              <p className="md:text-[1rem] text-[0.8rem]">Worldwide</p>
            </div>

            <div className="text-center">
              <p className="text-lg md:text-5xl font-bold mb-4">1002</p>
              <div className="flex items-center justify-center md:max-w-[200px] max-w-[100px] mx-auto my-4">
  <div className="flex-1 h-px bg-[rgba(202,3,32,255)]"></div>
  <div className="flex-1 h-px bg-gray-500"></div>
</div>

              <p className="md:text-[1rem] text-[0.8rem]">Market Centers</p>
              
              
              <p className="md:text-[1rem] text-[0.8rem]">Worldwide</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <p className="text-lg md:text-4xl font-bold mb-4">191K</p>
              <div className="flex items-center justify-center md:max-w-[200px] max-w-[100px] mx-auto my-4">
  <div className="flex-1 h-px bg-[rgba(202,3,32,255)]"></div>
  <div className="flex-1 h-px bg-gray-500"></div>
</div>

              <p className="md:text-[1rem] text-[0.8rem]">Real Estate Agents</p>
              <p className="md:text-[1rem] text-[0.8rem]">Worldwide</p>
            </div>
          </div>

          {/* Bottom Red Line */}
          <div className="flex justify-center items-center md:mt-14 my-2 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-8">
            <hr className="md:w-6/12 w-44 mx-auto bg-[rgba(202,3,32,255)] border-0 h-[1.5px]" />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
export default Home;