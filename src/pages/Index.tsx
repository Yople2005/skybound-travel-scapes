
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchTabs from '@/components/SearchTabs';
import Deals from '@/components/Deals';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SearchTabs />
        <Deals />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
