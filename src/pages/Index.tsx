
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchTabs from '@/components/SearchTabs';
import Deals from '@/components/Deals';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 text-center">
          <Hero />
          <SearchTabs />
          <Deals />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
