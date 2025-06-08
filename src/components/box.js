'use client'
import React from 'react';
import Image from 'next/image';

const Box = ({ src, image, h3 }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[40vh] md:min-h-[100vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={src}
            alt="Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0" />
        </div>

        {/* White Box (Fixed Dimensions) */}
        <div className="relative z-10 flex flex-col items-center justify-end min-h-[40vh] md:min-h-[100vh] px-4">
          <div className="w-full max-w-xl mx-auto">
            <div className="bg-white rounded-t-3xl w-full">
              <div className="flex flex-col items-center">
                <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px]">
                  <Image
                    src={image}
                    alt="Hero"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="w-32 h-0.5 bg-red-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title (Stable Spacing) */}
      <h3 className="text-lg md:text-xl font-normal text-center tracking-wider leading-relaxed py-6">
        {h3}
      </h3>
    </div>
  );
};

export default Box;
