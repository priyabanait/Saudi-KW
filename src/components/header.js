
'use client'
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes , FaBuilding,
  FaNetworkWired,
  FaUserTie,
  FaKey,
  FaUser,
  FaUsers,
  FaGlobe,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter ,
  FaTiktok,
  FaSnapchatGhost,
  FaWhatsapp,FaChevronDown} from "react-icons/fa";
  import Link from 'next/link';
  import Footer from "@/components/footer";
import { MdHomeWork, MdPersonSearch, MdSell, MdPeople, MdKey, MdBusiness, MdGroup } from "react-icons/md";
import { useEffect,useRef  } from 'react';

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isVisible, setIsVisible] = useState(true);  
     const [isAtTop, setIsAtTop] = useState(true);  
        const [hasScrolled, setHasScrolled] = useState(false);
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
       const prevScrollY = useRef(0);
    useEffect(() => {  
        const handleScroll = () => {  
            const currentScrollY = window.scrollY;  
    
            // At the very top?  
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
    return (
        <div>
              <div className="relative">
                  {/* Navbar */}
                  <header className={`  
                fixed top-0 w-full z-50  
                flex justify-between items-center px-4 sm:px-6  
                transition-all duration-300 ease-in-out  
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}  
                ${isAtTop ? 'bg-transparent' : 'bg-gray-950/80'}  
            `}>
            
                    {/* Logo */}
                    <div className="flex-shrink-0 pt-6">
                      <img 
                        src="https://static.wixstatic.com/media/36a881_0cd959d32d904bd7be76303fb23dec0a~mv2.png/v1/fill/w_279,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design.png" 
                        alt="Company Logo" 
                        className="h-13 w-auto object-contain"
                      />
                    </div>
            
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                      <a href="#" className="text-[10px] font-medium text-white transition-colors">About Us</a>
                       <div className="w-px h-4 bg-gray-300/50 mt-1"></div>
                   <a href="#" className="text-[10px] text-white transition-colors">Search</a>
                  <div className="w-px h-4 bg-gray-300/50 mt-1"></div>
                      <a href="#" className="text-[10px] text-white transition-colors">Join Us</a>
                 <div className="w-px h-4 bg-gray-300/50 mt-1"></div>
                      <a href="#" className="text-[10px] text-white transition-colors">Contact Us</a>
                     <div className="w-px h-4 bg-gray-300/50 mt-1"></div>
                      <a href="#" className="text-[10px] text-white transition-colors">Instant Valuation</a>
                      
                      <a href="#" className="text-[10px] text-white transition-colors">عربي</a>
                      <button className="border border-white px-4 py-1.5 rounded-full text-white transition-colors text-[10px] font-medium">
                        Sign In/Register
                      </button>
                    </nav>
            
                    {/* Mobile Menu Button */}
                    <button 
                      className="md:hidden text-white focus:outline-none p-1" 
                      onClick={toggleMenu}
                      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                      {isMenuOpen ? (
                        <FaTimes size={24} className="text-white" />
                      ) : (
                        <FaBars size={24} className="text-white" />
                      )}
                    </button>
            
                    {/* Mobile Menu Dropdown */}
                   {isMenuOpen && (
              <div className={`absolute md:hidden top-full left-0 right-0 py-4 px-6 space-y-4 shadow-lg ${
                hasScrolled ? 'bg-gray-950/90' : 'bg-black/90'
              }`}>
                <a href="#" className="block py-2 text-white hover:text-gray-300">About Us</a>
              
                <a href="#" className="block py-2 text-white hover:text-gray-300">Search</a>
               
                <a href="#" className="block py-2 text-white hover:text-gray-300">Join Us</a>
                <a href="#" className="block py-2 text-white hover:text-gray-300">Contact Us</a>
                <a href="#" className="block py-2 text-white hover:text-gray-300">Instant Valuation</a>
                <a href="#" className="block py-2 text-white hover:text-gray-300">عربي</a>
                <button className="w-full border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition-colors mt-2">
                  Sign In/Register
                </button>
              </div>
            )}
                  
                  </header>
        </div>
           </div>
    );
}

export default Header;
