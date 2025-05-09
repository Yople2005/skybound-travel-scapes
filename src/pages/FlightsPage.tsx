
import React from 'react';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import FlightSearch from '@/components/search/FlightSearch';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Plane } from 'lucide-react';

const FlightsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-gradient-travel text-white pt-16 pb-24">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                  <Plane className="h-16 w-16" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Flight</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Compare hundreds of airlines and book the best deal for your next trip.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-6xl mx-auto -mt-8 px-4 relative z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
              <FlightSearch />
            </div>
          </div>
          
          <div className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Popular Flight Routes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { from: 'New York', to: 'London', price: '$320' },
                  { from: 'Los Angeles', to: 'Tokyo', price: '$650' },
                  { from: 'Chicago', to: 'Paris', price: '$450' },
                  { from: 'San Francisco', to: 'Sydney', price: '$850' },
                  { from: 'Miami', to: 'Rome', price: '$520' },
                  { from: 'Dallas', to: 'Berlin', price: '$540' }
                ].map((route, index) => (
                  <div key={index} className="border rounded-lg p-5 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-600 text-sm">From</p>
                        <h3 className="font-bold">{route.from}</h3>
                      </div>
                      <Plane className="h-5 w-5 text-purple mx-2" />
                      <div>
                        <p className="text-gray-600 text-sm">To</p>
                        <h3 className="font-bold">{route.to}</h3>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-bold text-purple">{route.price}</span>
                      <button className="px-3 py-1 bg-purple text-white rounded-md text-sm">View Deal</button>
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

export default FlightsPage;
