
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="bg-gradient-purple py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Travel Deals & Updates</h2>
          <p className="text-lg opacity-90 mb-6">
            Subscribe to receive exclusive deals, travel inspiration, and tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/20 text-white placeholder:text-white/70 border-white/30 focus:border-white sm:min-w-[300px]" 
            />
            <Button className="bg-white text-purple-dark hover:bg-white/90 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
