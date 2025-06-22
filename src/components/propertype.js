// pages/index.js
import {
    FaChevronDown,
    FaHome,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaBuilding,
  } from "react-icons/fa";
  import { BsListUl, BsMap } from "react-icons/bs";
  import { FiFilter } from "react-icons/fi";
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import Image from "next/image";
  import Link from "next/link";
  export default function Home(props) {
    const properties = [
      {
        title: "Semi-Furnished 4 BDR Villa",
        location: "Beverly Hills Gardens, Al Waab",
        price: " 15,000 QAR/month",
        beds: 2,
      baths: 1,
      area: 230,
        image:
          "https://c.pxhere.com/photos/2b/c0/architecture_render_external_design_photoshop_3d_3dsmax_crown_render-599832.jpg!d",
      },
      {
        title: "Outstanding 4 BDR Villa",
        location: "Lusail Entertainment City",
        price: "13,000 QAR/month",
        beds: 2,
      baths: 1,
      area: 230,
        image:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Fully Furnished 3 BHK",
        location: "Joaan | 4 BHK + Maids",
        price: " 12,000 QAR/month",
        beds: 2,
      baths: 1,
      area: 230,
        image:
          "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Spacious 2 BHK Apartment",
        location: "The Pearl, Qatar",
        price: " 9,500 QAR/month",
        beds: 2,
      baths: 1,
      area: 230,
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      
    ];
    const bedIconUrl = "/bed.png";
    const bathIconUrl = "/bath.png";
    const areaIconUrl = "/area.png";
    return (
      <div className="min-h-screen bg-gray-50  mx-4 ">
        {/* Header */}
        <header className="w-full bg-gray-200 shadow-sm  py-4 rounded-xl ">
          <div className="container mx-auto px-4 md:px-8  ">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <div className="flex flex-wrap md:flex-row w-full gap-2 md:items-center">
                {/* List / Map Toggle */}
                <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden md:mr-4">
                  <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-800 bg-white">
                
                    List
                  </button>
                  <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-black">
              
                    Map
                  </button>
                </div>
  
                {/* Select dropdowns */}
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaHome className="text-gray-400" />
                  </div>
                  <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-800 border border-gray-300">
                    <option>Properties For Rent</option>
                    <option>For Rent</option>
                    <option>For Sale</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FaChevronDown className="h-4 w-4" />
                  </div>
                </div>
  
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaBuilding className="text-gray-400" />
                  </div>
                  <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                    <option>Select Property Type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FaChevronDown className="h-4 w-4" />
                  </div>
                </div>
  
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                    <option>Select Location</option>
                    <option>Doha</option>
                    <option>Lusail</option>
                    <option>The Pearl</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FaChevronDown className="h-4 w-4" />
                  </div>
                </div>
                
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaMoneyBillWave className="text-gray-400" />
                  </div>
                  <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                    <option>Select Price Range</option>
                    <option>Below QAR 5,000</option>
                    <option>QAR 5,000 – 10,000</option>
                    <option>Above QAR 10,000</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FaChevronDown className="h-4 w-4" />
                  </div>
                </div>
  
                {/* All Filters Button */}
                <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold bg-white text-gray-800 hover:bg-gray-100">
                  <FiFilter />
                  All Filters
                </button>
              </div>
            </div>
          </div>
        </header>
  
        {/* Title & Filters */}
        <div className="p-4 md:p-8">
        <div className="flex items-center gap-3">
 
  <p className="text-base font-medium underline">Real Estate </p>
  <FaChevronRight className="text-gray-400 h-3 cursor-pointer" />
  <p className="text-base font-medium underline">Properties for Rent</p>
</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 mt-10">
            Properties for {props.type} in Qatar
          </h2>
          <p>Showing {properties.length} results</p>
        </div>

        {/* Content: 2 Columns Split (Cards + Map) */}
        <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 pb-8 overflow-y-auto">
          {/* Left: 2x2 Cards Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                
                <Link href="/propertydetails">
                <Image
                  src={property.image}
                  alt={property.title}
                 width={500}
                 height={300}
                  className="w-full h-40 object-cover"
                />
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-sm md:text-xl">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500">{property.location}</p>
                  <div className="flex w-full items-center gap-2 text-sm my-2">
                  <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gray-200 p-2">
                      <span className="relative h-4 w-4">
                        <Image
                          src={bedIconUrl}
                          alt="bed"
                          fill
                          className="object-contain"
                        />
                      </span>
                      {property.beds}
                    </span>
                    <span className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gray-200 p-2">
                      <span className="relative h-4 w-4">
                        <Image
                          src={bathIconUrl}
                          alt="bath"
                          fill
                          className="object-contain"
                        />
                      </span>
                      {property.baths}
                    </span>
                    
                    <span className="inline-flex items-center gap-1 rounded-lg bg-gray-200 px-3 py-2 whitespace-nowrap">
  <span className="relative h-4 w-4">
    <Image
      src={areaIconUrl}
      alt="area"
      fill
      className="object-contain"
    />
  </span>
  {property.area} sqm
</span>

                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-lg font-bold">{property.price}</p>
                    <button className="text-sm text-white p-2 rounded-lg bg-black">Enquire now</button>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
  
          {/* Right: Map Section */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-64 md:h-[700px] bg-blue-100 rounded-lg overflow-hidden sticky top-0">
              <iframe
                src="https://www.google.com/maps?q=2740+King+Fahd+Branch+Rd,+Riyadh,+Saudi+Arabia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
  