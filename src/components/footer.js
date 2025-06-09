'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaSearch, FaBars, FaTimes, FaBuilding,
  FaNetworkWired, FaUserTie, FaKey, FaUser,
  FaUsers, FaGlobe, FaHome, FaEnvelope, FaPhone,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
  FaTwitter, FaTiktok, FaSnapchatGhost, FaWhatsapp, FaChevronDown
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Footer Grid */}
      <div className="md:mt-1 px-4 md:px-5">
        {/* Top Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between border border-gray-100 rounded-xl items-start border-b md:p-8 pb-2 md:pb-4 text-xs md:text-sm bg-gray-100 text-gray-700">
          <div className="flex items-center space-x-2 font-semibold">
            <span className="text-red-800 text-lg md:text-lg">CONTACT US</span>
          </div>
          <div className="flex items-start space-x-1 text-[0.7rem]">
            <span>EMAIL</span>
            <span>-</span>
            <span>INFO@KWSAUDIARABIA.COM</span>
          </div>
          <div className="flex items-center space-x-1 text-[0.7rem]">
            <span>TELEPHONE</span>
            <span>-</span>
            <span>9200-15671</span>
          </div>
          <div className="flex space-x-2 md:space-x-3 text-gray-700 text-sm md:text-lg">
            <a href="https://www.linkedin.com/company/kwsaudiarabia/" aria-label="LinkedIn" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaLinkedinIn size={12} />
            </a>
            <a href="#" aria-label="YouTube" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaYoutube size={12} />
            </a>
            <a href="#" aria-label="Twitter" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaTwitter size={12} />
            </a>
            <a href="#" aria-label="Snapchat" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaSnapchatGhost size={12} />
            </a>
            <a href="#" aria-label="Instagram" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaInstagram size={12} />
            </a>
            <a href="#" aria-label="Facebook" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaFacebookF size={12} />
            </a>
            <a href="#" aria-label="TikTok" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <FaTiktok size={12} />
            </a>
          </div>
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-1 w-full">
          {[
            {
              label: "Properties",
              imageUrl: "https://static.wixstatic.com/media/36a881_58e60526563049da91b5a702cb9995ac~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png",
              path: "/properties",
              items: ["Active", "Sold", "Rent", "Auction", "New Development", "International"]
            },
            {
              label: "Market Center",
              imageUrl: "https://static.wixstatic.com/media/36a881_63ae150a87e247f4910718ae270a72c0~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
              path: "/marketCenter",
              items: ["Jasmine", "Jeddah", "All"]
            },
            {
              label: "Agent",
              imageUrl: "https://static.wixstatic.com/media/36a881_e044755275e349d683e96f438b0bb5c2~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png",
              path: "/agent",
              items: ["Name", "Market Center", "LOGIN"]
            },
            {
              label: "Seller",
              imageUrl: "https://static.wixstatic.com/media/36a881_19eaa839fd874fc8981955a4021a4ca8~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png",
              path: "/seller",
              items: ["Book Agent Evaluation", "Seller Guide", "Five Steps To Sell"]
            },
            {
              label: "Buyer",
              imageUrl: "https://static.wixstatic.com/media/36a881_e46ac8d781f74cc4b8398f64c2d63425~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png",
              path: "/buyer",
              items: ["Search Property", "Property Auction", "New Development", "Buyer Guide"]
            },
            {
              label: "Tenant",
              imageUrl: "https://static.wixstatic.com/media/36a881_464aa2c8eefd4c3aab2ff966735952a8~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png",
              path: "/tenant",
              items: ["Rent Search", "Tenant Guide"]
            },
            {
              label: "Franchise",
              imageUrl: "https://static.wixstatic.com/media/36a881_93371d3a91d7440b895906dd5eb1620a~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png",
              path: "/franchise",
              items: ["Overview", "Benefits", "Application"]
            },
            {
              label: "Our Culture",
              imageUrl: "https://static.wixstatic.com/media/36a881_795b387ef3734f7b97a97edd833d71b7~mv2.png/v1/fill/w_230,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8.png",
              path: "/ourCulture",
              items: ["About Us", "Why KW", "KW Training", "KW Technology", "KW University", "Events", "News", "Contact Us"]
            },
          ].map(({ label, imageUrl, path, items }, i) => (
            <div key={i}>
              {/* Image with link */}
              <div className="rounded-xl flex flex-col transition-all cursor-pointer">
                <a href={path}>
                  <Image
                    src={imageUrl}
                    alt={label}
                    width={100}
                    height={100}
                    className="object-contain h-25 w-25 md:h-50 md:w-50"
                  />
                </a>
              </div>
              {/* Items with same path */}
              <div className="md:border-l md:border-gray-300 md:pl-4 pl-4 ml-2">
                <ul className="text-xs space-y-6 text-left">
                  {items.map((item, index) => (
                    <li key={index} className="hover:text-gray-600 transition-colors">
                      <a href={path} className="block w-full">
                        {item === "LOGIN" ? (
                          <span className="text-red-600 font-semibold">{item}</span>
                        ) : (
                          item
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="bg-gray-100 px-2 text-gray-50 mt-4 md:mt-20 text-sm border-t">
        <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/footerlogo.jpg"
              alt="KW Saudi Arabia Logo"
              width={184}
              height={46}
              className="md:h-46 h-30 w-auto object-contain"
            />
          </div>
          {/* Address + Links */}
          <div className="text-right space-y-1 md:px-0 text-sm">
            <a href="#" className='text-gray-500 text-[0.7rem]'>شركة الياسمين لإدارة وتطوير العقارات</a>
            <p className="text-gray-500 text-[0.7rem]">REGA LICENSE NUMBER #1200018764</p>
            <p className="text-gray-500 text-[0.7rem]">KW Saudi Arabia HQ - 2740 King Fahad Branch Rd, Al Sahafah, 6403, Riyadh 13515</p>
            <div className="flex flex-wrap justify-end gap-4 text-gray-600 mt-1 text-[0.7rem]">
              <a href="#" className="hover:underline">© 2026 All Rights Reserved</a>
              <a href="#" className="hover:underline">KW Saudi Arabia</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms Of Use</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
