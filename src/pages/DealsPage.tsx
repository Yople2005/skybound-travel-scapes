
import React from 'react';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { TagIcon } from 'lucide-react';

const DealsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-gradient-travel text-white pt-16 pb-24">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                  <TagIcon className="h-16 w-16" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Travel Deals</h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Discover the best offers on flights, hotels, and car rentals all in one place.
                </p>
              </div>
            </div>
          </div>
          
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Hot Deals This Week</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Flight Deals */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple rounded-full flex items-center justify-center text-white mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </span>
                    Flight Deals
                  </h3>
                  
                  <ul className="space-y-4">
                    {[
                      { route: 'New York to Paris', discount: '25% OFF', price: '$340', until: 'May 15' },
                      { route: 'Los Angeles to Tokyo', discount: '30% OFF', price: '$570', until: 'May 20' },
                      { route: 'Chicago to London', discount: '20% OFF', price: '$410', until: 'May 25' }
                    ].map((deal, index) => (
                      <li key={index} className="border-b pb-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{deal.route}</p>
                            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                              {deal.discount}
                            </span>
                            <p className="text-sm text-gray-500 mt-1">Book by {deal.until}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-purple">{deal.price}</span>
                            <p className="text-xs text-gray-500">Roundtrip</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-4 py-2 bg-purple hover:bg-purple-dark text-white rounded-md transition-colors">
                    View All Flight Deals
                  </button>
                </div>
                
                {/* Hotel Deals */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-skyblue rounded-full flex items-center justify-center text-white mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Hotel Deals
                  </h3>
                  
                  <ul className="space-y-4">
                    {[
                      { hotel: 'Luxury Resort, Bali', discount: '40% OFF', price: '$120', until: 'May 30' },
                      { hotel: 'City View Hotel, New York', discount: '35% OFF', price: '$165', until: 'June 5' },
                      { hotel: 'Beach Front Villa, Cancun', discount: '25% OFF', price: '$195', until: 'June 10' }
                    ].map((deal, index) => (
                      <li key={index} className="border-b pb-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{deal.hotel}</p>
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                              {deal.discount}
                            </span>
                            <p className="text-sm text-gray-500 mt-1">Book by {deal.until}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-skyblue">{deal.price}</span>
                            <p className="text-xs text-gray-500">Per night</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-4 py-2 bg-skyblue hover:bg-blue-500 text-white rounded-md transition-colors">
                    View All Hotel Deals
                  </button>
                </div>
                
                {/* Car Rental Deals */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-light rounded-full flex items-center justify-center text-white mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Car Rental Deals
                  </h3>
                  
                  <ul className="space-y-4">
                    {[
                      { car: 'Economy Car, Los Angeles', discount: '15% OFF', price: '$25', until: 'May 18' },
                      { car: 'SUV, Orlando', discount: '20% OFF', price: '$45', until: 'June 2' },
                      { car: 'Luxury Sedan, Las Vegas', discount: '25% OFF', price: '$70', until: 'June 15' }
                    ].map((deal, index) => (
                      <li key={index} className="border-b pb-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{deal.car}</p>
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                              {deal.discount}
                            </span>
                            <p className="text-sm text-gray-500 mt-1">Book by {deal.until}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-purple-dark">{deal.price}</span>
                            <p className="text-xs text-gray-500">Per day</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-4 py-2 bg-purple-dark hover:bg-purple text-white rounded-md transition-colors">
                    View All Car Deals
                  </button>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4">Travel Package Deals</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">Save big when you book flights, hotels, and car rentals together with our exclusive package deals.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { destination: 'Paris Getaway', description: 'Flight + 4 Nights + Car', price: '$799', discount: '30% OFF', image: 'paris' },
                    { destination: 'Bali Paradise', description: 'Flight + 7 Nights + Activities', price: '$1,299', discount: '25% OFF', image: 'bali' },
                    { destination: 'New York City Break', description: 'Flight + 3 Nights + Broadway Show', price: '$699', discount: '20% OFF', image: 'nyc' }
                  ].map((pkg, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-48 bg-gray-300"></div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold">{pkg.destination}</h4>
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">
                            {pkg.discount}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{pkg.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-purple">{pkg.price}</span>
                          <button className="px-4 py-2 bg-purple hover:bg-purple-dark text-white rounded-md transition-colors text-sm">
                            View Package
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

export default DealsPage;
