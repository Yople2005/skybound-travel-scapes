
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-4 py-3 bg-gradient-travel text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">SkyWay</h1>
          <span className="ml-2 text-xs bg-white text-purple px-2 py-0.5 rounded-full">Travel</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-light transition-colors">Flights</a>
          <a href="#" className="hover:text-purple-light transition-colors">Stays</a>
          <a href="#" className="hover:text-purple-light transition-colors">Cars</a>
          <a href="#" className="hover:text-purple-light transition-colors">Deals</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-purple-dark">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
