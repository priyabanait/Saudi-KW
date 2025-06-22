'use client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Bed, Bath, Square, MapPin } from 'lucide-react';
import Image from 'next/image';
export default function PropertyListing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+974',
    phone: '',
    message: "I'm interested in Astounding 4-BDR Villa in Lusail Entertainment City. Please provide me more details about this property."
  });

  const propertyImages = [
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const thumbnailImages = [
    'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Enquiry submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <span className="font-bold underline">Real Estate</span>
          <span className="mx-1">{'>'}</span>
          <span className="font-bold underline">Properties for Rent</span>
          <span className="mx-1">{'>'}</span>
          <span className="font-bold underline">Lusail</span>
          <span className="mx-1">{'>'}</span>
          <span className="text-gray-900">Outounding 4-BDR Villa in Lusail Entertainment City</span>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-6 lg:px-8 pb-12" style={{padding :7}}>
        <div className="grid lg:grid-cols-[2.2fr,1fr] gap-8">
          {/* Main Content */}
          <div>
            {/* Image Gallery */}
            <div className="relative mb-6">
              <div className="relative aspect-[16/7] rounded-2xl overflow-hidden">
                <Image
                  src={propertyImages[currentImageIndex]}
                  alt="Property"
                  width={1220}
                  height={700}
                  className="w-full h-full object-cover"
                />
                
                {/* 360 Virtual Tour Badge */}
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  360 Virtual Tour
                </div>

                {/* Desktop Arrows */}
                <button
                  onClick={prevImage}
                  className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Mobile Arrows */}
                <div className="flex sm:hidden absolute bottom-4 left-4 space-x-2 z-10">
                  <button
                    onClick={prevImage}
                    className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full border border-white transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Clickable Thumbnail Images */}

            <div className="grid grid-cols-4 gap-3 mb-8">
  {thumbnailImages.map((image, index) => (
    <div 
      key={index} 
      className={`aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ${
        index === currentImageIndex ? 'ring-2 ring-blue-500 ring-offset-2' : 'ring-1 ring-transparent'
      }`}
      onClick={() => handleThumbnailClick(index)}
    >
      <Image
        src={image}
        alt={`Property view ${index + 1}`}
        width={100}
        height={100}
        className="w-full h-full object-cover rounded-lg hover:scale-105"
      />
    </div>
  ))}
</div>



            {/* Property Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Astounding 4-BDR Villa in Lusail Entertainment City
            </h1>

            {/* Property Details Cards */}
       <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 bg-white rounded-lg border overflow-hidden mb-8">
  <div className="p-4">
    <div className="text-sm text-gray-700 mb-1">Reference no.</div>
    <div className="font-semibold text-gray-900">AREDC-20465</div>
  </div>

  <div className="p-4">
    <div className="text-sm text-gray-700 mb-1">Bedroom</div>
    <div className="flex items-center space-x-2 font-semibold text-gray-900">
      <Bed className="w-4 h-4" />
      <span>Four</span>
    </div>
  </div>

  <div className="p-4">
    <div className="text-sm text-gray-700 mb-1">Bathroom</div>
    <div className="flex items-center space-x-2 font-semibold text-gray-900">
      <Bath className="w-4 h-4" />
      <span>Two</span>
    </div>
  </div>

  <div className="p-4">
    <div className="text-sm text-gray-700 mb-1">Area</div>
    <div className="flex items-center space-x-2 font-semibold text-gray-900">
      <Square className="w-4 h-4" />
      <span>259 sqm</span>
    </div>
  </div>
</div>

            {/* Property Description */}
            <div className="bg-white p-6 rounded-lg border mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Property Description</h2>
              <p className="text-gray-600 leading-relaxed">
              <p className="text-sm leading-relaxed">
  This stunning 4-bedroom villa in Lusail Entertainment City offers luxurious living with modern amenities.
  The property features spacious rooms, high-end finishes, and beautiful outdoor spaces perfect for entertaining.
  Located in one of Qatar&apos;s most prestigious developments, this villa provides easy access to shopping, dining,
  and entertainment options while maintaining privacy and tranquility.
</p>

              </p>
            </div>

            {/* Features */}
          
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-[#f3f4f6] rounded-2xl p-6 shadow-sm border sticky top-6">
              {/* Price & Location */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  26,500 <span className="text-lg font-normal text-gray-600">QAR/month</span>
                </div>
                <div className="flex items-center text-gray-600 ">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">Les Maisons Blanches, Lusail</span>
                </div>
              </div>

              {/* Agent Info */}
              <div className="mb-6 pb-6 border-b">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt="Agent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Oumaima Labaoui</h3>
                    <p className="text-sm text-gray-600">Senior Sales Manager</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 ">
                  <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-2xl flex items-center justify-center space-x-2 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                  <button className="border bg-black text-white border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-2xl flex items-center justify-center space-x-2 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
             <input
  type="text"
  placeholder="Your name"
  value={formData.name}
  onChange={(e) => handleInputChange('name', e.target.value)}
  className="w-full px-3 py-2 border border-gray-300 rounded-2xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  required
/>

                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                    className="w-full px-3 py-2 border border-gray-300 rounded-2xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                />
               
               <div className="flex space-x-2">
<select
  value={formData.countryCode}
  onChange={(e) => handleInputChange('countryCode', e.target.value)}
  className="w-28 px-3 pr-6 py-2 border border-gray-300 rounded-2xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>
  <option value="+974">+974</option>
  <option value="+971">+971</option>
  <option value="+1">+1</option>
  <option value="+44">+44</option>
</select>

  <input
    type="tel"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={(e) => handleInputChange('phone', e.target.value)}
    required
    className="flex-1 px-3 py-2 border border-gray-300 rounded-2xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
</div>


           <textarea
  placeholder="Message"
  value={formData.message}
  onChange={(e) => handleInputChange('message', e.target.value)}
  rows={4}
  className="w-full px-3 py-2 border border-gray-300 rounded-2xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent overflow-hidden resize-none"
  required
/>

                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-lg font-medium transition-colors"
                >
                  Submit enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}