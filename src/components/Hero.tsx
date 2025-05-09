
import React from 'react';
import { Plane, Bed, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-gradient-travel text-white pt-16 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
      
      {/* Animated elements in the background */}
      <div className="absolute inset-0 overflow-hidden">
        <Plane className="absolute h-20 w-20 text-white/10 -top-4 left-[10%] transform rotate-12 animate-[float_15s_ease-in-out_infinite]" />
        <Car className="absolute h-16 w-16 text-white/10 bottom-10 right-[15%] transform animate-[float_18s_ease-in-out_infinite]" />
        <Bed className="absolute h-24 w-24 text-white/10 top-20 right-[5%] transform -rotate-12 animate-[float_20s_ease-in-out_infinite_reverse]" />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Travel The World With Ease</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 text-center">
            Search hundreds of travel sites at once to find the best deals on flights, hotels, and car rentals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div 
              onClick={() => handleNavigate('/flights')}
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg transition-all hover:scale-110 hover:bg-white/20 cursor-pointer"
            >
              <Plane className="h-8 w-8 mb-2" />
              <span className="font-medium">Flights</span>
            </div>
            <div 
              onClick={() => handleNavigate('/stays')}
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg transition-all hover:scale-110 hover:bg-white/20 cursor-pointer"
            >
              <Bed className="h-8 w-8 mb-2" />
              <span className="font-medium">Stays</span>
            </div>
            <div 
              onClick={() => handleNavigate('/cars')}
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg transition-all hover:scale-110 hover:bg-white/20 cursor-pointer"
            >
              <Car className="h-8 w-8 mb-2" />
              <span className="font-medium">Cars</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
