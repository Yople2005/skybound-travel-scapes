
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
      <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
        <Tabs defaultValue="flights" onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="flights" className="py-3 text-base flex items-center justify-center">
              <Plane className="mr-2 h-4 w-4" />
              Flights
            </TabsTrigger>
            <TabsTrigger value="stays" className="py-3 text-base flex items-center justify-center">
              <Bed className="mr-2 h-4 w-4" />
              Stays
            </TabsTrigger>
            <TabsTrigger value="cars" className="py-3 text-base flex items-center justify-center">
              <Car className="mr-2 h-4 w-4" />
              Cars
            </TabsTrigger>
          </TabsList>
          <TabsContent value="flights" className="mt-2">
            <FlightSearch onSubmit={() => handleSearch('flights')} />
          </TabsContent>
          <TabsContent value="stays" className="mt-2">
            <StaySearch onSubmit={() => handleSearch('stays')} />
          </TabsContent>
          <TabsContent value="cars" className="mt-2">
            <CarSearch onSubmit={() => handleSearch('cars')} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTabs;
