
import React from 'react';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StaySearch from '@/components/search/StaySearch';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Bed } from 'lucide-react';

const StaysPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-gradient-travel text-white pt-16 pb-24">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                  <Bed className="h-16 w-16" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Perfect Stay</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Find the best hotels, apartments, and vacation rentals for your trip.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-6xl mx-auto -mt-8 px-4 relative z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
              <StaySearch />
            </div>
          </div>
          
          <div className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Accommodations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Oceanview Resort', location: 'Maldives', price: '$280/night', rating: 4.9 },
                  { name: 'City Center Hotel', location: 'New York', price: '$195/night', rating: 4.7 },
                  { name: 'Mountain Lodge', location: 'Swiss Alps', price: '$210/night', rating: 4.8 },
                  { name: 'Historic Boutique', location: 'Rome', price: '$230/night', rating: 4.6 },
                  { name: 'Beach Bungalows', location: 'Bali', price: '$175/night', rating: 4.8 },
                  { name: 'Luxury Apartments', location: 'Dubai', price: '$320/night', rating: 4.9 }
                ].map((stay, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg">{stay.name}</h3>
                      <div className="flex items-center mt-1">
                        <Bed className="h-4 w-4 text-gray-500 mr-1" />
                        <p className="text-gray-600 text-sm">{stay.location}</p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <span className="text-lg font-bold text-purple">{stay.price}</span>
                          <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm ml-1">{stay.rating}</span>
                          </div>
                        </div>
                        <button className="px-3 py-1 bg-purple text-white rounded-md text-sm">View Deal</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default StaysPage;
