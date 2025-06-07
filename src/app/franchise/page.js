import React from 'react';
import Box from '@/components/box';
import Header from '@/components/header';
import Footer from '@/components/footer';

const franchise = () => {
  return (
    <div className="relative">
      <Header />

      <Box
        h3={"Investment Opportunities"}
        src="franchisebg.jpg"
        image={
          'https://static.wixstatic.com/media/36a881_d93a5085a707440e9b7a3346a80846a1~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7-removebg-preview.png'
        }
      ></Box>

      {/* Intro Text */}
      <main className="px-4 py-6 md:mt-32 mt-10">
        <div className="mx-auto text-center">
         <h1 className="text-xl md:text-3xl font-light text-gray-800">
  WE WANT YOU TO <span className="text-red-800">LIVE A BIG LIFE</span>
</h1>
          <hr className="w-60 md:w-96 mx-auto bg-red-500 h-[1.5px] mt-6 md:mt-14" />
          <div className="mt-10">
            <p className="text-xs md:text-[0.8rem]">
              Our mission is to help you to build careers worth having, businesses worth owning, lives worth living, experiences worth giving and legacies worth leaving. To that end we want
            </p>
            <p className="text-xs md:text-[0.8rem]">
              this to be the most amazing place to be an estate agent in the UK and globally. And we want the best leadership for our market centres.
            </p>
          </div>
        </div>
      </main>

      {/* Black Strip Section */}
      <div className="relative min-h-[40vh] md:min-h-screen bg-black flex items-center justify-center md:mt-35">
        <main className="px-4 py-6">
          <div className="mx-auto text-center md:mt-6">
            <p className="text-white md:text-[0.6rem]">WHERE</p>
            <h1 className="text-xl md:text-3xl font-light text-white mt-4">
              TRUE FINANCIAL FREEDOM BEGINS
            </h1>
            <hr className="w-48 md:w-96 mx-auto bg-red-800 h-[2px] rounded-full mt-6 md:mt-14" />
            <div className="mt-10">
              <p className="text-xs md:text-[0.8rem] text-white">
                As a company founded on proven systems and models, Keller Williams provides the blueprint for building a big business and an even bigger life.
              </p>
              <button className="w-48 md:w-56 bg-red-800 text-white py-2 rounded-full text-sm hover:bg-red-700 transition mt-6 md:mt-10">
                GET STARTED
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Form Section */}
      <div className="min-h-screen">
        {/* Title Banner */}
        <div className="bg-red-700 py-2 flex justify-center relative">
          <div className="relative">
            <img src="kwlinelogo.png" alt="KW Logo" width={100} height={100} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-normal text-2xl whitespace-nowrap">
                FRANCHISE APPLICATION
              </span>
            </div>
          </div>
        </div>

        {/* Form + Sidebar Container */}
        <div className="flex flex-col lg:flex-row bg-gray-200 min-h-screen">
          {/* Left Black Sidebar */}
          <div className="bg-black text-white flex flex-col items-center w-full lg:w-72 border-r-2 rounded-r-2xl relative min-h-full">
            <div className="flex flex-col items-center top-0 left-10 absolute">
              <img src="KellerWilliams_KSA.png" alt="logo" className="h-12 mb-2" />
            </div>

            <div className="pt-24 space-y-12 group">
              <img src="https://static.wixstatic.com/media/36a881_b93011b55c3c4cc5a3fec96a287e4564~mv2.png/v1/crop/x_0,y_37,w_289,h_255/fill/w_171,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-02-18%20135420.png" alt="Target Icon"
                className="h-30 ml-4 mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2" />
            </div>

            {[279, 568, 0, 279, 568].map((x, i) => (
              <div key={i} className="flex flex-col items-center group">
                <img
                  src={`https://static.wixstatic.com/media/36a881_b93011b55c3c4cc5a3fec96a287e4564~mv2.png/v1/crop/x_${x},y_${i < 2 ? 23 : 324},w_289,h_255/fill/w_211,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-02-18%20135420.png`}
                  alt="Rocket Icon"
                  className="h-30 mb-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                />
              </div>
            ))}
          </div>

          {/* Right Form Section */}
          <div className="flex-1 md:py-20 md:p-10 min-h-full py-10">
            <div className="px-6 sm:px-10 lg:px-20">
              <form className="space-y-6">
                {["Your Name", "Your Surname", "Your Email Address", "Your Mobile Phone", "Your Company Name"].map((label, i) => (
                  <div key={i}>
                    <label className="block mb-2 md:text-[0.7rem] font-thin">{label} *</label>
                    <input type="text" required className="w-full p-1 rounded-2xl bg-white" />
                  </div>
                ))}

                {/* Date of Birth */}
                <div className="mb-8">
                  <label className="block mb-2 md:text-[0.7rem] font-extralight">Date of Birth *</label>
                  <div className="flex gap-3">
                    <select className="w-full px-3 py-2 rounded-2xl bg-white md:text-[0.6rem]">
                      <option value="">Month</option>
                      {[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                      ].map((month, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>{month}</option>
                      ))}
                    </select>
                    <input type="number" placeholder="Day"  required className="w-full px-3 py-2 rounded-2xl bg-white md:text-[0.6rem]" />
                    <input type="number" placeholder="Year" required className="w-full px-3 py-2 rounded-2xl bg-white md:text-[0.6rem]" />
                  </div>
                </div>

                {[
                  "Your Education Status", 
                  "Province You Want to Apply", 
                  "How Did You Hear About the Keller Williams Brand ?"
                ].map((label, i) => (
                  <div key={i}>
                    <label className="block mb-2 md:text-[0.7rem] font-extralight">{label} *</label>
                    <input type="text" required className="w-full p-1 rounded-2xl bg-white" />
                  </div>
                ))}

                <label className="md:text-[0.7rem] font-extralight">Promotional Permissions*</label>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" required id="promoConsent" className="mt-1" />
                  <label htmlFor="promoConsent" className="text-base md:text-[0.7rem] font-extralight">
                    I consent to receiving promotional emails, text messages, and calls regarding Keller Williams' services.
                  </label>
                </div>

                <label className="md:text-[0.7rem] font-extralight">Personal Data Protection Declaration *</label>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="dataConsent" required className="mt-4" />
                  <label htmlFor="dataConsent" className="text-base md:text-[0.7rem] font-extralight">
             


As Keller Williams Saudi Arabia, we care about your security. In order to fulfill our obligation to inform arising from Article 10 of the Personal Data Protection Law and to obtain your "Personal Data Protection and Personal Data Sharing Permission" from our valued visitors; we kindly request you to read and approve the text in the link below.

                  </label>
                </div>
                <div className="mt-8 flex justify-end">
  <button
    type="submit"
   className="w-32 md:w-32 bg-red-800 text-white py-2 rounded-full text-sm hover:bg-red-700 transition"
  >
    Submit
  </button>
</div>
{/* 
                <button className="w-32 md:w-32 bg-red-800 text-white py-2 rounded-full text-sm hover:bg-red-700 transition">
                  Submit
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-700 py-4 flex justify-center">
        <img src="kwline.png" alt="KW Logo Center" width={80} height={80} />
      </div>
      <hr className="w-5/12 mx-auto bg-red-500 h-[1.5px] mt-20 mb-10" />
      <Footer />
    </div>
  );
};

export default franchise;
