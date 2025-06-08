'use client'
import React, { useState, useEffect, useRef } from "react";
import { 
  FaSearch, FaBars, FaTimes, FaBuilding,
  FaNetworkWired, FaUserTie, FaKey, FaUser,
  FaUsers, FaGlobe, FaHome, FaEnvelope, FaPhone,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
  FaTwitter, FaTiktok, FaSnapchatGhost, FaWhatsapp, FaChevronDown 
} from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
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

  return (
    <div className="relative">
      {/* Navbar */}
      <header className={`  
        fixed top-0 w-full z-50  
        flex justify-between items-center px-4 sm:px-6 py-2
        transition-all duration-300 ease-in-out  
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}  
        ${isAtTop ? 'bg-transparent' : 'bg-gray-950/90 backdrop-blur-sm'}  
      `}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img 
              src="https://static.wixstatic.com/media/36a881_0cd959d32d904bd7be76303fb23dec0a~mv2.png/v1/fill/w_279,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design.png" 
              alt="KW Saudi Arabia Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link href="/about" className="text-xs font-medium text-white hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/search" className="text-xs text-white hover:text-gray-300 transition-colors">
            Search
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/join" className="text-xs text-white hover:text-gray-300 transition-colors">
            Join Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/contact" className="text-xs text-white hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/valuation" className="text-xs text-white hover:text-gray-300 transition-colors">
            Instant Valuation
          </Link>
          <div className="w-px h-4 bg-gray-300/50"></div>
          <Link href="/ar" className="text-xs text-white hover:text-gray-300 transition-colors">
            عربي
          </Link>
          <Link 
            href="/login" 
            className="border border-white px-4 py-1.5 rounded-full text-white hover:bg-white hover:text-black transition-colors text-xs font-medium"
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
            <Link href="/about" className="block py-2 text-white hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/search" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Search
            </Link>
            <Link href="/join" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Join Us
            </Link>
            <Link href="/contact" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
            <Link href="/valuation" className="block py-2 text-white hover:text-gray-300 transition-colors">
              Instant Valuation
            </Link>
            <Link href="/ar" className="block py-2 text-white hover:text-gray-300 transition-colors">
              عربي
            </Link>
            <Link 
              href="/login" 
              className="w-full border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition-colors mt-2 inline-block text-center"
            >
              Sign In/Register
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;