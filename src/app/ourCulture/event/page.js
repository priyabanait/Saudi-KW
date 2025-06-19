import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
const Page = () => {
    return (
        <div>
          <Header></Header>  
           <section className="relative w-full min-h-[40vh] md:min-h-screen text-white flex items-center justify-center">
                  <Image src="/buildexperties.jpg" alt="experties" fill className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 w-full max-w-4xl px-6 text-center">
                    <h1 className="text-xl md:text-3xl font-bold">EVENTS</h1> 
                    <hr className="w-8/12 md:w-5/12 mx-auto bg-white my-4" />
                   
                    <p className="text-xs leading-relaxed font-normal">FIND OUT THE LATEST KELLER WILLIAMS EVENTS</p>
                    
                  </div>
                </section>
                     <div className="flex justify-between items-center my-10">
       <h1 className="md:text-sm text-sm text-gray-500 md:mx-18">All Posts</h1>
        <button className="text-gray-500 hover:text-black mr-12">
          <FiSearch className="w-4 h-4" />
        </button>
      </div>
                  <div className="md:mx-20 mx-auto px-4 py-4 font-sans">
      {/* Page Title */}
      <h1 className="md:text-3xl text-xl my-10 mx-4">All Posts</h1>
      
      {/* Post Card with Image Above Text */}
      <div className="mb-8 w-60 h-80">
        {/* Image Container - adjust width/height as needed */}
         <div className="w-60 h-60 bg-gray-200 mr-4 flex-shrink-0">
          {/* Replace with your actual image */}
          <img 
            src="/event.png" 
            alt="Family Reunion" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content Below Image */}
        <div>
          {/* Post Title */}
          <p className="text-xl mb-2">Family Reunion 2025</p>
          
          {/* Post Excerpt */}
          <p className="text-black text-sm">
            Learn from Industry Pioneers, Experts, and Thought-Leaders With inspiring keynote speaker...
          </p>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Page;
