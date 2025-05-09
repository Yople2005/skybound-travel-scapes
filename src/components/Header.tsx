
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Plane, Bed, Car, TagIcon } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { name: 'Flights', path: '/flights', icon: <Plane className="mr-1 h-4 w-4" /> },
    { name: 'Stays', path: '/stays', icon: <Bed className="mr-1 h-4 w-4" /> },
    { name: 'Cars', path: '/cars', icon: <Car className="mr-1 h-4 w-4" /> },
    { name: 'Deals', path: '/deals', icon: <TagIcon className="mr-1 h-4 w-4" /> }
  ];

  return (
    <header className="w-full px-4 py-3 bg-gradient-travel text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center transition-transform hover:scale-105">
          <h1 className="text-2xl font-bold">SkyWay</h1>
          <span className="ml-2 text-xs bg-white text-purple px-2 py-0.5 rounded-full">Travel</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className={`flex items-center hover:text-purple-light transition-colors ${
                isActive(link.path) ? 'text-purple-light border-b-2 border-purple-light' : ''
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
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
