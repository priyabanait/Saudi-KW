import React from 'react';

import Header from '@/components/header';
import Box from '@/components/box';
import Footer from '@/components/footer';
import Image from 'next/image';
export default function Training() {
  return (
    <div>
      <Header />
      <Box
        h3={"Kw Training"}
        src="/training.jpg"
        image={
          'https://static.wixstatic.com/media/36a881_a82aacde83a9442dae07d99a846cadf4~mv2.png/v1/fill/w_271,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8-removebg-preview%20(1).png'
        }
      />

      <section className="bg-white mt-4 md:mt-10 md:pb-16 mb-4 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          
          <Image src="/keller.png" alt="Gary Keller" width={1800} height={600} className="mx-auto w-full h-auto" />
        </div>
      </section>

      <section className="bg-white py-0 md:py-10 px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-16 gap-y-10 max-w-5xl mx-auto">
          <div>
            <p className="text-xl md:text-4xl font-normal mb-2">1200+</p>
            <hr className="max-w-[200px] mx-auto border-t border-gray-400 my-2" />
            <p className="text-sm text-gray-600">Hours of On Demand<br />Learning</p>
          </div>

          <div>
            <p className="text-xl md:text-4xl font-normal mb-2">68+</p>
            <hr className="max-w-[200px] mx-auto border-t border-gray-400 my-2" />
            <p className="text-sm text-gray-600">Unique Courses<br />Available</p>
          </div>

          <div>
            <p className="text-xl md:text-4xl font-normal mb-2">100+</p>
            <hr className="max-w-[200px] mx-auto border-t border-gray-400 my-2" />
            <p className="text-sm text-gray-600">Live Training Events<br />Worldwide</p>
          </div>
        </div>
      </section>

      <section className="relative mt-4 w-full min-h-[40vh] md:min-h-screen text-white flex items-center justify-center">
        <Image src="/coaching.png" alt="Training Stage Background"  fill className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-6">TRAINING & COACHING</h1>
          <p className="text-xs leading-relaxed font-normal">Named the #1 Training Organization in the world by Training Magazine in 2015, we’re often described as a training and coaching company cleverly</p>
          <p className="text-xs leading-relaxed font-normal">disguised as a real estate franchise.</p>
        </div>
      </section>

      <section className="md:py-16 py-4">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div className="text-center md:text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-6">In Person & Online Sessions</h2>
            <p className="text-base text-gray-700 mb-8">At KW Saudi Arabia, we provide flexible training to suit your needs. 
              Join in-person events to connect and learn from top talent,
               or access online sessions for world-class training anytime. Elevate your career—explore our sessions today!</p>
            <div className="flex justify-center md:justify-center">
              <button className="w-56 bg-red-700 text-white py-3 rounded-full text-sm">CONTACT US</button>
            </div>
          </div>
          <div className="text-center md:text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-6">Events</h2>
            <p className="text-base text-gray-700 mb-8">Network and learn with top real estate talent at Keller Williams events. 
              From Family Reunion to Mega Agent Camp and Masterminds, connect with top producers, bold thinkers, 
              and market makers. No other event compares.</p>
            <div className="flex justify-center md:justify-center">
              <button className="w-56 bg-red-700 text-white py-3 rounded-full text-sm">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[40vh] md:min-h-screen text-white flex items-center justify-center">
        <Image src="/buildexperties.jpg" alt="experties" fill className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-6">BUILD EXPERTISE</h1>
          <p className="text-xs leading-relaxed font-normal">Keller Williams University Provides The Most Advanced And Comprehensive Learning
             Opportunities In Real 
            Estate And Empowers You To Become The</p>
          <p className="text-xs leading-relaxed font-normal">Expert In Your Local Market.</p>
        </div>
      </section>

     
<section className='md:py-8 py-2 mx-auto'>
  <div className="container">
    <div className="flex flex-col md:flex-row items-center justify-center">
      
      {/* Book Stack Section */}
      <div className="relative w-[150px] md:w-[800px] h-[200px] md:h-[350px] md:mx-4 md:ml-15">
        
        {/* Book 1 */}
        <Image
          src="/bookblue.png"
          alt="The Millionaire Real Estate Investor"
          width={200}
          height={150}
          className="absolute bottom-0 md:left-[0%] -translate-x-[20%] md:-translate-x-[20%] md:w-[450px] md:h-[300px] w-[200px] h-[140px] rotate-[-8deg] z-30"
        />

        {/* Book 2 */}
        <Image
          src="/book.png"
          alt="Your First Home"
          width={200}
          height={150}
          className="absolute bottom-0 left-[30%] md:left-[30%] -translate-x-[7%] md:-translate-x-[20%] md:w-[450px] md:h-[300px] w-[170px] h-[140px] rotate-[-6deg] z-40"
        />

        {/* Book 3 */}
        <Image
          src="/bookred.png"
          alt="The Millionaire Real Estate Agent"
          width={200}
          height={150}
          className="absolute bottom-0 left-[60%] md:left-[66%] -translate-x-[0%] md:-translate-x-[20%] md:w-[450px] md:h-[300px] w-[180px] h-[140px] rotate-[-6deg] z-50"
        />

        {/* Book 4 */}
        <Image
          src="/bookwhite.png"
          alt="The ONE Thing"
          width={200}
          height={150}
          className="absolute bottom-0 left-[10%] md:left-[82%] -translate-x-[70%] md:translate-x-0 md:w-[450px] md:h-[300px] w-[300px] h-[140px] rotate-[-5deg] z-20"
        />
      </div>

      {/* Text Section */}
      <div className="w-full mt-4 md:mt-0 md:ml-20 text-center md:text-right">
        <h2 className="text-red-700 text-xl md:text-3xl font-light">
          BEST SELLING<br />BOOKS
        </h2>
      </div>
    </div>
  </div>
</section>



<hr />

<section className="py-16 bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-full flex justify-center mb-8 md:mb-0 ">
        <div className="relative w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ha3HOtIQEKQ?rel=0"
            title="Unlock Exceptional Results With This Real Estate Farming Model"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 flex items-center justify-center md:justify-end">
        <h2 className="text-xl md:text-3xl font-light text-red-700 text-center md:text-right">
          Ongoing Training Development
        </h2>
      </div>
    </div>
  </div>
</section>

      <section className="relative w-full min-h-[40vh] md:min-h-screen text-white flex items-center justify-center">
        <Image src="/removelimits.jpg" alt="limits" fill className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-6">REMOVE LIMITS</h1>
          <p className="text-xs leading-relaxed font-normal">Your business grows to the extent that you do! Award-winning KW MAPS Coaching...</p>
          <p className="text-xs leading-relaxed font-normal">turn your biggest goals into realty...</p>
          <p className="text-xs leading-relaxed font-normal">guide you to the next level.</p>
        </div>
      </section>

      <main className="px-4 py-6 md:mt-24 mt-4">
        <div className="mx-auto text-center">
          <span className="text-2xl md:text-3xl font-medium tracking-wide">CONNECT WITH US</span>
          <hr className="w-48 md:w-72 mx-auto bg-red-500 h-[1.5px] mt-6" />
          <div className="mt-10">
            <p className="text-sm leading-relaxed">The best information always comes from a face-to-face conversation with a local market expert – that’s your KW team leader.</p>
            <p className="text-xs md:text-sm">Discuss the market of the moment with a team leader today.</p>
          </div>
        </div>
      </main>

      <div className="flex justify-center">
        <button className="w-48 md:w-7/12 bg-red-700 text-white py-3 rounded-full text-sm hover:bg-red-950 transition mt-6 mx-auto">
          Join a KellerWilliams Market Center Near You
        </button>
      </div>

      <hr className="w-48 md:w-6/12 mx-auto bg-red-500 h-[1.5px] md:mt-55 mt-10 mb-12" />

      <Footer />
    </div>
  );
}
