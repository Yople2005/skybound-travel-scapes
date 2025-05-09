
import React, { useState } from 'react';
import { format } from "date-fns";
import { CalendarIcon, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FlightSearch = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input 
              type="radio" 
              id="roundtrip" 
              name="tripType" 
              value="roundtrip"
              checked={tripType === 'roundtrip'}
              onChange={() => setTripType('roundtrip')}
              className="form-radio text-purple h-4 w-4" 
            />
            <Label htmlFor="roundtrip">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input 
              type="radio" 
              id="oneway" 
              name="tripType" 
              value="oneway"
              checked={tripType === 'oneway'}
              onChange={() => setTripType('oneway')}
              className="form-radio text-purple h-4 w-4" 
            />
            <Label htmlFor="oneway">One Way</Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="space-y-2">
          <Label htmlFor="from">From</Label>
          <div className="relative">
            <Plane className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input 
              id="from" 
              placeholder="Departure City" 
              className="pl-10" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <div className="relative">
            <Plane className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 rotate-90" />
            <Input 
              id="to" 
              placeholder="Arrival City" 
              className="pl-10" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="departure">Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="departure"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !departureDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="return">Return Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="return"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !returnDate && "text-muted-foreground"
                )}
                disabled={tripType === 'oneway'}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                disabled={(date) => !departureDate || date < departureDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="passengers">Passengers</Label>
          <Select defaultValue="1">
            <SelectTrigger id="passengers">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Adult</SelectItem>
              <SelectItem value="2">2 Adults</SelectItem>
              <SelectItem value="3">3 Adults</SelectItem>
              <SelectItem value="4">4 Adults</SelectItem>
              <SelectItem value="5+">5+ Adults</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cabin">Cabin Class</Label>
          <Select defaultValue="economy">
            <SelectTrigger id="cabin">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="premium">Premium Economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bags">Checked Bags</Label>
          <Select defaultValue="0">
            <SelectTrigger id="bags">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">No bags</SelectItem>
              <SelectItem value="1">1 bag</SelectItem>
              <SelectItem value="2">2 bags</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full py-6 text-lg bg-purple hover:bg-purple-dark">Search Flights</Button>
    </div>
  );
};

export default FlightSearch;
