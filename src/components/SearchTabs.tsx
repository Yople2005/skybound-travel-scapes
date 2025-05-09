
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FlightSearch from './search/FlightSearch';
import StaySearch from './search/StaySearch';
import CarSearch from './search/CarSearch';

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="w-full max-w-6xl mx-auto -mt-8 px-4 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
        <Tabs defaultValue="flights" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="flights" className="py-3 text-base">
              Flights
            </TabsTrigger>
            <TabsTrigger value="stays" className="py-3 text-base">
              Stays
            </TabsTrigger>
            <TabsTrigger value="cars" className="py-3 text-base">
              Cars
            </TabsTrigger>
          </TabsList>
          <TabsContent value="flights" className="mt-2">
            <FlightSearch />
          </TabsContent>
          <TabsContent value="stays" className="mt-2">
            <StaySearch />
          </TabsContent>
          <TabsContent value="cars" className="mt-2">
            <CarSearch />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTabs;
