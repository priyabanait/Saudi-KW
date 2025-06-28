// pages/index.js
import {
    FaChevronDown,
    FaHome,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaBuilding,FaWarehouse ,FaShoppingBag  
  } from "react-icons/fa";
  import { BsListUl, BsMap } from "react-icons/bs";
  import { FiFilter } from "react-icons/fi";
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import Image from "next/image";
  import Link from "next/link";
  import { useState, useRef, useEffect } from "react";

  export default function Home(props) {
    const [viewMode, setViewMode] = useState("list");
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 6;
    const filterPanelRef = useRef(null);

    useEffect(() => {
      if (!showMobileFilters) return;
      function handleClickOutside(event) {
        if (filterPanelRef.current && !filterPanelRef.current.contains(event.target)) {
          setShowMobileFilters(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showMobileFilters]);

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

    // Pagination logic
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
    const totalPages = Math.ceil(properties.length / propertiesPerPage);

    const handlePrevPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
      <div className="min-h-screen bg-gray-50  mx-4 ">
        {/* Header */}
        <header className="w-full bg-gray-200 shadow-sm py-4 rounded-xl">
  <div className="container mx-auto px-4 md:px-4">
    <div className="flex flex-wrap md:flex-row w-full gap-1 md:items-center">
      {/* Mobile Header (List/Map + Filters button in one line) */}
      <div className="md:hidden w-full flex items-center justify-between py-2">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium ${viewMode === "list" ? "text-white bg-black" : "text-gray-800 bg-white"}`}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium ${viewMode === "map" ? "text-white bg-black" : "text-gray-800 bg-white"}`}
            onClick={() => setViewMode("map")}
          >
            Map
          </button>
        </div>

        <button
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold bg-white text-gray-800 hover:bg-gray-100"
          onClick={() => setShowMobileFilters((prev) => !prev)}
        >
          <FiFilter />
          All Filters
        </button>
      </div>

      {/* Desktop Header (Original Layout) */}
      <div className="hidden md:block w-full">
        <div className="flex flex-row items-center w-full">
          {/* List/Map Toggle */}
          <div className="flex items-center border rounded-lg overflow-hidden md:mr-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium ${viewMode === "list" ? "text-white bg-black" : "text-gray-800 bg-white"}`}
              onClick={() => setViewMode("list")}
            >
              List
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium ${viewMode === "map" ? "text-white bg-black" : "text-gray-800 bg-white"}`}
              onClick={() => setViewMode("map")}
            >
              Map
            </button>
          </div>

          {/* Filter Panel */}
          <div className="flex-1 md:flex md:flex-row md:gap-4">
            {/* Property Type Dropdown */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaHome className="text-orange-500" />
              </div>
              <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                <option>Properties For Rent</option>
                <option>For Rent</option>
                <option>For Sale</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Property Category Dropdown */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaBuilding className="text-blue-400" />
              </div>
              <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                <option>Property Type</option>
                <option>All</option>
                <option>Commercial</option>
                <option>Farm and Agriculture</option>
                <option>Lots and Land</option>
                <option>Residential</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Property Subtype Dropdown */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaWarehouse  className="text-green-700" />
              </div>
              <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                <option>Property Subtype</option>
                <option>All</option>
                <option>Apartment</option>
                <option>Condominium</option>
                <option>Duplex</option>
                <option>Hotel-Motel</option>
                <option>Industrial</option>
                <option>Mobile Home</option>
                <option>Multi-Family</option>
                <option>Other</option>
                <option>Quadruplex</option>
                <option>Ranch</option>
                <option>Single Family Attach</option>
                <option>Single Family detached</option>
                <option>Townhouse</option>
                <option>Unimproved land</option>
                <option>Warehouse</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Market Center Dropdown */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaShoppingBag   className="text-yellow-400" />
              </div>
              <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                <option>Market Center</option>
                <option>All</option>
                <option>Jasmin</option>
                <option>Jeddah</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaMapMarkerAlt className="text-red-500" />
              </div>
              <select className="w-full appearance-none min-w-[180px] pl-10 pr-3 py-2 rounded-lg bg-white text-sm text-gray-500 border border-gray-300">
                <option>Select Location</option>
               
      <option>All</option>
      <option>ALRIYADH</option>
      <option>JED</option>
      <option>JEDDAH</option>
      <option>Jeddah</option>
      <option>Jeddah city</option>
      <option>KSA</option>
      <option>Khobar</option>
      <option>Riyadh</option>
      <option>Saudi Arabia</option>
      <option>alriyadh</option>
      <option>jeddah</option>
      <option>jedah</option>
      <option>riyad</option>
      <option>riyadh</option>
      <option>الرياض</option>
      <option>جدة</option>
      <option>جده</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Price Range Dropdown */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaMoneyBillWave className="text-green-500" />
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
          </div>
        </div>
      </div>

      {/* Mobile Filter Panel (Hidden on Desktop) */}
      <div
        ref={filterPanelRef}
        className={`${showMobileFilters ? 'flex flex-col gap-2 absolute top-full left-0 w-full z-20 p-4 bg-gray-500/50 backdrop-blur-sm  rounded-lg shadow-lg' : 'hidden'} md:hidden`}
      >
        {/* Property Type Dropdown */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaHome className="text-gray-400" />
          </div>
          <select className="w-full appearance-none pl-10 pr-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-500 border border-gray-300">
            <option>Properties For Rent</option>
            <option>For Rent</option>
            <option>For Sale</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>

        {/* Property Category Dropdown */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaBuilding className="text-gray-400" />
          </div>
          <select className="w-full appearance-none pl-10 pr-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-500 border border-gray-300">
            <option>Property Type</option>
            <option>All</option>
            <option>Commercial</option>
            <option>Farm and Agriculture</option>
            <option>Lots and Land</option>
            <option>Residential</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>

        {/* Property Subtype Dropdown */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaMapMarkerAlt className="text-gray-400" />
          </div>
          <select className="w-full appearance-none pl-10 pr-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-500 border border-gray-300">
            <option>Property Subtype</option>
            <option>All</option>
            <option>Apartment</option>
            <option>Condominium</option>
            <option>Duplex</option>
            <option>Hotel-Motel</option>
            <option>Industrial</option>
            <option>Mobile Home</option>
            <option>Multi-Family</option>
            <option>Other</option>
            <option>Quadruplex</option>
            <option>Ranch</option>
            <option>Single Family Attach</option>
            <option>Single Family detached</option>
            <option>Townhouse</option>
            <option>Unimproved land</option>
            <option>Warehouse</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>

        {/* Market Center Dropdown */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaShoppingBag  className="text-gray-400" />
          </div>
          <select className="w-full appearance-none pl-10 pr-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-500 border border-gray-300">
            <option>Market Center</option>
            <option>All</option>
            <option>Jasmin</option>
            <option>Jeddah</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaMapMarkerAlt className="text-gray-400" />
          </div>
          <select className="w-full appearance-none pl-10 pr-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-500 border border-gray-300">
            <option>Select Location</option>
          
      <option>All</option>
      <option>ALRIYADH</option>
      <option>JED</option>
      <option>JEDDAH</option>
      <option>Jeddah</option>
      <option>Jeddah city</option>
      <option>KSA</option>
      <option>Khobar</option>
      <option>Riyadh</option>
      <option>Saudi Arabia</option>
      <option>alriyadh</option>
      <option>jeddah</option>
      <option>jedah</option>
      <option>riyad</option>
      <option>riyadh</option>
      <option>الرياض</option>
      <option>جدة</option>
      <option>جده</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaMoneyBillWave className="text-gray-400" />
          </div>
          <select className="w-full appearance-none pl-10 pr-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-500 border border-gray-300">
            <option>Select Price Range</option>
            <option>Below QAR 5,000</option>
            <option>QAR 5,000 – 10,000</option>
            <option>Above QAR 10,000</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>
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
            Properties for {props.type} 
          </h2>
          <span>Showing {properties.length} results</span>
        </div>

        {/* Content: 2 Columns Split (Cards + Map) */}
        <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 pb-8 overflow-y-auto">
          {/* Mobile: Toggle between list and map */}
          {/* List view for mobile */}
          {viewMode === "list" && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
              {currentProperties.map((property, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Link href="/propertydetails" className="block relative">
                    <div className="relative">
                      <Image
                        src={property.image}
                        alt={property.title}
                        width={500}
                        height={300}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 sm:top-2 sm:left-2 bg-black/80 text-white px-2 sm:px-2 py-1 rounded-full text-xs sm:text-sm font-medium z-10">
                        360 Virtual Tour
                      </div>
                    </div>
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
                      <button className="text-sm text-white p-2 rounded-lg bg-[rgba(202,3,32,255)]">Enquire now</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-span-full flex justify-center items-center gap-2 mt-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Prev
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {/* Map view for mobile */}
          {viewMode === "map" && (
            <div className="w-full h-100 md:h-64 md:hidden bg-blue-100 rounded-lg overflow-hidden sticky top-0">
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
          )}
          {/* Desktop: Always show both */}
         
          <div className="hidden md:flex w-full h-screen">
  {/* Left - Properties List */}
  <div className="w-1/2 h-full overflow-y-auto pr-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {currentProperties.map((property, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Link href="/propertydetails">
            <div className="relative">
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/80 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-10">
                360 Virtual Tour
              </div>
            </div>
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
              <button className="text-sm text-white p-2 rounded-lg bg-[rgba(202,3,32,255)]">
                Enquire now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="col-span-full flex justify-center items-center gap-2 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>

  {/* Right - Sticky Full-Height Map */}
  <div className="w-1/2 h-full sticky top-0">
    <div className="w-full h-full bg-blue-100 rounded-lg overflow-hidden">
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
      </div>
    );
  }
  