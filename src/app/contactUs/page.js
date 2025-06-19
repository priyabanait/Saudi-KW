'use client'
import React from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
const Contact = ({ src, image, h3 }) => {
  return (
    <div className="">
      {/* Hero Section */}
      <Header></Header>
      <div className="relative min-h-[40vh] md:min-h-[100vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src='/contact.jpg'
            alt="Background"
            fill
            className="object-cover "
            priority
          />
          <div className="absolute inset-0" />
        </div>

        {/* White Box (Fixed Dimensions) */}
        <div className="relative z-10 flex flex-col items-center justify-end min-h-[40vh] md:min-h-[100vh] px-4">
          <div className="w-full max-w-xl mx-auto">
            <div className="bg-white rounded-t-3xl md:pb-20 w-full">
              <div className="flex flex-col items-center">
                <div className="relative w-[100px] h-[100px] md:w-[100px] md:h-[100px]">
                  <Image
                    src='/contactdown.png'
                    alt="Hero"
                    fill
                    className="object-cover rounded-full"
                  />
                 
                </div>
               <p className='text-gray-500'>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* Intro Text */}
      <main className="px-4 py-6 md:mt-10 mt-10">
        <div className="mx-auto text-center">
            <p className='text-xs mb-4' >  Partner With A Winning Team </p>
          <h1 className="text-xl md:text-3xl font-medium text-gray-800">
           KW SAUDI ARABIA
          </h1>
          <hr className="w-60 md:w-60 mx-auto bg-red-500 h-[1.5px] mt-6 md:mt-14" />
          <div className="mt-10">
            <p className="text-xs md:text-[0.8rem]">
            You Join A Winning Team Of Real Estate Professionals Who Are Leading The  Industry To Greater Heights
            </p>
            
          </div>
        </div>
      </main>
     {/* Form Section */}
           <div className="min-h-screen md:py-26">
             {/* Title Banner */}
             <div className="bg-red-700 py-2 flex justify-center relative">
               <div className="relative">
                 {/* KW Logo */}
                 <Image
                   src="/kwlinelogo.png"
                   alt="KW Logo"
                   width={100}
                   height={100}
                   className="object-contain"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-white font-normal text-2xl whitespace-nowrap">
                  GET IN TOUCH WITH US !
                   </span>
                 </div>
               </div>
             </div>
     
             {/* Form + Sidebar Container */}
             <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
               {/* Left Black Sidebar */}
               <div className="bg-black text-white flex flex-col items-center w-full lg:w-80 border-r-2 rounded-r-2xl relative min-h-full">
                 <div className="flex flex-col items-center top-0 left-10 absolute">
                   {/* Logo in sidebar */}
                   <Image
                     src="/KellerWilliams_KSA.png"
                     alt="logo"
                     width={200}
                     height={200}
                     className="mb-2"
                   />
                 </div>
     
                 <div className="pt-24 space-y-12 group">
                   {/* Target Icon */}
                   
                 </div>
     
             <div className="flex flex-wrap justify-center gap-6">
  {/* Image 1 */}
  <div className="flex flex-col items-center group">
    <div className="relative h-[160px] w-[200px] mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
      <Image
        src="https://static.wixstatic.com/media/36a881_b93011b55c3c4cc5a3fec96a287e4564~mv2.png/v1/crop/x_279,y_23,w_289,h_255/fill/w_211,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-02-18%20135420.png"
        alt="Rocket Icon"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  </div>

  {/* Image 3 */}
  <div className="flex flex-col items-center group">
    <div className="relative h-[160px] w-[200px] mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
      <Image
        src="https://static.wixstatic.com/media/36a881_b93011b55c3c4cc5a3fec96a287e4564~mv2.png/v1/crop/x_0,y_324,w_289,h_255/fill/w_211,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-02-18%20135420.png"
        alt="Rocket Icon"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  </div>

  {/* Image 4 */}
  <div className="flex flex-col items-center group">
    <div className="relative h-[160px] w-[200px] mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
      <Image
        src="https://static.wixstatic.com/media/36a881_b93011b55c3c4cc5a3fec96a287e4564~mv2.png/v1/crop/x_568,y_324,w_289,h_255/fill/w_211,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-02-18%20135420.png"
        alt="Rocket Icon"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  </div>
 </div>
  </div>

               {/* Right Form Section */}
               <div className="flex-1 md:py-20 md:p-10 min-h-full py-10">
                <div className="px-6 sm:px-10 lg:px-20">
  <form className="space-y-6">
    {/* Text Inputs */}
    {["First Name", "Last Name", "Email", "Address To"].map((label, i) => (
      <div key={i}>
        <label className="block mb-2 md:text-sm font-thin">
          {label} *
        </label>
        <input
          type="text"
          required
          className="w-full p-1 rounded-lg bg-white"
        />
      </div>
    ))}

    {/* Message Textarea */}
    <div>
      <label className="block mb-2 md:text-sm font-thin">
        Message *
      </label>
      <textarea
        required
        rows={3}
        className="w-full p-2 rounded-lg bg-white resize-none"
        placeholder="Type your message here..."
      ></textarea>
    </div>
  

     
                    
     
                   
                     <div className="mt-8 flex justify-end">
                       <button
                         type="submit"
                         className="w-32 md:w-32 bg-red-700 text-white py-2 rounded-full text-sm hover:bg-red-700 transition"
                       >
                         Submit
                       </button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
     
          
          <div className="flex justify-center py-2 md:py-0">
                   <Image
                     src="/howwillyouthink.png"
                     alt="How Will You Thrive"
                     width={800}
                     height={400}
                   
                   />
                 </div>
           
                 <hr className="w-8/12 md:w-5/12 mx-auto bg-red-500 h-[1.5px] mt-2 md:mt-14 mb-10" />
      
      <Footer></Footer>
    </div>
  );
};

export default Contact;
