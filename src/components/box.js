import React from 'react';

const Box = ({ src, image, h3 }) => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative min-h-[40vh] md:min-h-[100vh]"> 
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={src}
                        alt="Background"
                        className="object-cover w-full h-full"
                        width={1920}  
                        height={1080}
                        loading="eager" 
                    />
                    <div className="absolute inset-0" /> 
                </div>

                {/* White Box (Fixed Dimensions) */}
                <div className="relative z-10 flex flex-col items-center justify-end min-h-[40vh] md:min-h-[100vh] px-4">
                    <div className="w-full max-w-xl mx-auto">
                        <div className="bg-white rounded-t-3xl w-full"> 
                            <div className="flex flex-col items-center"> 
                                <img
                                    src={image}
                                    alt="Hero"
                                    className="md:w-40 md:h-40 h-25 w-25 object-cover rounded-full" 
                                    width={160}  // Explicit dimensions
                                    height={160}
                                />
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