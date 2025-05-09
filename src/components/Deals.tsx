
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface DealProps {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  type: 'flight' | 'stay' | 'car';
}

const DealCard = ({ title, location, price, imageUrl, type }: DealProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-0 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {type === 'flight' ? 'Round Trip' : type === 'stay' ? 'Per night' : 'Per day'}
        </span>
        <span className="font-bold text-lg text-purple">{price}</span>
      </CardFooter>
    </Card>
  );
};

const Deals = () => {
  // Sample data - in a real app, this would come from an API
  const deals = [
    {
      id: 1,
      title: 'Fly to Paris',
      location: 'Paris, France',
      price: '$399',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      type: 'flight' as const,
    },
    {
      id: 2,
      title: 'Beach Resort',
      location: 'Cancun, Mexico',
      price: '$120',
      imageUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
      type: 'stay' as const,
    },
    {
      id: 3,
      title: 'City Explorer',
      location: 'New York, USA',
      price: '$45',
      imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
      type: 'car' as const,
    },
    {
      id: 4,
      title: 'Mountain Retreat',
      location: 'Denver, Colorado',
      price: '$89',
      imageUrl: 'https://images.unsplash.com/photo-1545060894-9b53f0356d78',
      type: 'stay' as const,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Travel Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default Deals;
