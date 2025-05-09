
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FlightSearch from './search/FlightSearch';
import StaySearch from './search/StaySearch';
import CarSearch from './search/CarSearch';
import { useNavigate } from 'react-router-dom';
import { Plane, Bed, Car } from 'lucide-react';

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleSearch = (tabValue: string) => {
    // Redirect to the appropriate page based on the active tab
    if (tabValue === 'flights') {
      navigate('/flights');
    } else if (tabValue === 'stays') {
      navigate('/stays');
    } else if (tabValue === 'cars') {
      navigate('/cars');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto -mt-8 px-4 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in text-center">
        <Tabs defaultValue="flights" onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 bg-gradient-to-r from-purple via-purple-light to-skyblue p-0 overflow-hidden rounded-md">
            <TabsTrigger value="flights" className="py-4 text-base flex items-center justify-center h-full text-white border border-white/20 data-[state=active]:bg-white data-[state=active]:text-purple-dark data-[state=active]:font-medium data-[state=active]:shadow-none data-[state=active]:border-b-0 rounded-none">
              <Plane className="mr-3 h-4 w-4 -mt-0.5" />
              Flights
            </TabsTrigger>
            <TabsTrigger value="stays" className="py-4 text-base flex items-center justify-center h-full text-white border border-white/20 data-[state=active]:bg-white data-[state=active]:text-purple-dark data-[state=active]:font-medium data-[state=active]:shadow-none data-[state=active]:border-b-0 rounded-none">
              <Bed className="mr-2 h-4 w-4 -mt-0.5" />
              Stays
            </TabsTrigger>
            <TabsTrigger value="cars" className="py-4 text-base flex items-center justify-center h-full text-white border border-white/20 data-[state=active]:bg-white data-[state=active]:text-purple-dark data-[state=active]:font-medium data-[state=active]:shadow-none data-[state=active]:border-b-0 rounded-none">
              <Car className="mr-2 h-4 w-4 -mt-0.5" />
              Cars
            </TabsTrigger>
          </TabsList>
          <TabsContent value="flights" className="mt-2 text-center">
            <FlightSearch onSubmit={() => handleSearch('flights')} />
          </TabsContent>
          <TabsContent value="stays" className="mt-2 text-center">
            <StaySearch onSubmit={() => handleSearch('stays')} />
          </TabsContent>
          <TabsContent value="cars" className="mt-2 text-center">
            <CarSearch onSubmit={() => handleSearch('cars')} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTabs;
