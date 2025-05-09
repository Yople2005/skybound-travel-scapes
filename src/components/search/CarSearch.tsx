
import React, { useState } from 'react';
import { format } from "date-fns";
import { CalendarIcon, Car, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CarSearch = () => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="space-y-2">
          <Label htmlFor="pickup-location">Pickup Location</Label>
          <div className="relative">
            <Car className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input 
              id="pickup-location" 
              placeholder="City, airport, or address" 
              className="pl-10" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dropoff-location">Dropoff Location</Label>
          <div className="relative">
            <Car className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input 
              id="dropoff-location" 
              placeholder="Same as pickup" 
              className="pl-10" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pickup-date">Pickup Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="pickup-date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !pickupDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={pickupDate}
                onSelect={setPickupDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dropoff-date">Dropoff Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="dropoff-date"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !dropoffDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dropoffDate ? format(dropoffDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dropoffDate}
                onSelect={setDropoffDate}
                disabled={(date) => !pickupDate || date < pickupDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="pickup-time">Pickup Time</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Select defaultValue="12:00">
              <SelectTrigger id="pickup-time" className="pl-10">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }).map((_, i) => {
                  const hour = i < 10 ? `0${i}` : `${i}`;
                  return (
                    <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                      {`${hour}:00`}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dropoff-time">Dropoff Time</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Select defaultValue="12:00">
              <SelectTrigger id="dropoff-time" className="pl-10">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }).map((_, i) => {
                  const hour = i < 10 ? `0${i}` : `${i}`;
                  return (
                    <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                      {`${hour}:00`}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="car-type">Car Type</Label>
          <Select defaultValue="any">
            <SelectTrigger id="car-type">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
              <SelectItem value="midsize">Midsize</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="driver-age">Driver Age</Label>
          <Select defaultValue="25+">
            <SelectTrigger id="driver-age">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="18-24">18-24</SelectItem>
              <SelectItem value="25+">25+</SelectItem>
              <SelectItem value="65+">65+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full py-6 text-lg bg-purple hover:bg-purple-dark">Search Cars</Button>
    </div>
  );
};

export default CarSearch;
