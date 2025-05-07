import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';

const AppPreview = () => {
  return (
    <section id="app-preview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12 relative">
          Our App
          <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-wrap items-center gap-12 mt-12">
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Everything You Need in One Place</h3>
            <p className="mb-4">Our mobile app makes recycling effortless and rewarding. With just a few taps, you can:</p>
            
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">Schedule waste pickup at your convenience</li>
              <li className="mb-2">Track your recycling history and impact</li>
              <li className="mb-2">Redeem rewards and referral bonuses</li>
              <li className="mb-2">Get real-time updates on collection status</li>
              <li className="mb-2">Learn about proper waste segregation</li>
            </ul>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#" className="flex items-center bg-black text-white px-5 py-3 rounded-lg transition duration-300 hover:-translate-y-1">
                <Apple size={24} className="mr-3" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg transition duration-300 hover:-translate-y-1">
                <PlayCircle size={24} className="mr-3" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="mb-2">Scan to download</p>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://revives.in/download" 
                alt="QR Code" 
                className="inline-block w-32 h-32 border-4 border-white shadow-md"
              />
            </div>
          </div>
          
          <div className="flex-1 min-w-[300px] flex justify-center relative">
            <img 
              src="https://via.placeholder.com/300x600/4CAF50/FFFFFF?text=Upload" 
              alt="App Screen 1" 
              className="w-48 h-auto rounded-3xl shadow-xl transform -rotate-12 z-10"
            />
            <img 
              src="https://via.placeholder.com/300x600/2E7D32/FFFFFF?text=Track" 
              alt="App Screen 2" 
              className="w-48 h-auto rounded-3xl shadow-xl absolute transform -translate-x-12 rotate-3"
            />
            <img 
              src="https://via.placeholder.com/300x600/FBC02D/2E7D32?text=Rewards" 
              alt="App Screen 3" 
              className="w-48 h-auto rounded-3xl shadow-xl absolute transform -translate-x-24 rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;