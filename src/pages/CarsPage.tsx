
import React from 'react';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import CarSearch from '@/components/search/CarSearch';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Car } from 'lucide-react';

const CarsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-gradient-travel text-white pt-16 pb-24">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                  <Car className="h-16 w-16" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Rent the Perfect Car</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Find the best car rental deals from top providers worldwide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-6xl mx-auto -mt-8 px-4 relative z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
              <CarSearch />
            </div>
          </div>
          
          <div className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Popular Car Rentals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { type: 'Economy', brand: 'Toyota Corolla', price: '$35/day', features: 'Fuel efficient' },
                  { type: 'SUV', brand: 'Jeep Cherokee', price: '$65/day', features: '4WD' },
                  { type: 'Luxury', brand: 'Mercedes E-Class', price: '$120/day', features: 'Leather seats' },
                  { type: 'Compact', brand: 'Honda Civic', price: '$40/day', features: 'Great for cities' },
                  { type: 'Convertible', brand: 'Ford Mustang', price: '$90/day', features: 'Retractable roof' },
                  { type: 'Minivan', brand: 'Chrysler Pacifica', price: '$75/day', features: '7 seats' }
                ].map((car, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <div className="h-40 bg-gray-200"></div>
                    <div className="p-5">
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded mb-2">
                        {car.type}
                      </span>
                      <h3 className="font-bold text-lg">{car.brand}</h3>
                      <div className="flex items-center mt-1">
                        <Car className="h-4 w-4 text-gray-500 mr-1" />
                        <p className="text-gray-600 text-sm">{car.features}</p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-bold text-purple">{car.price}</span>
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

export default CarsPage;
