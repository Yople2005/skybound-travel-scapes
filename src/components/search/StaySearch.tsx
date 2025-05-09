
import React, { useState } from 'react';
import { format } from "date-fns";
import { CalendarIcon, Bed } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StaySearchProps {
  onSubmit?: () => void;
}

const StaySearch: React.FC<StaySearchProps> = ({ onSubmit }) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const handleSearch = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="destination">Destination</Label>
          <div className="relative">
            <Bed className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input 
              id="destination" 
              placeholder="Where are you going?" 
              className="pl-10" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkin">Check-in Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="checkin"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkout">Check-out Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="checkout"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(date) => !checkIn || date < checkIn}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="rooms">Rooms</Label>
          <Select defaultValue="1">
            <SelectTrigger id="rooms">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Room</SelectItem>
              <SelectItem value="2">2 Rooms</SelectItem>
              <SelectItem value="3">3 Rooms</SelectItem>
              <SelectItem value="4+">4+ Rooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="adults">Adults</Label>
          <Select defaultValue="2">
            <SelectTrigger id="adults">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Adult</SelectItem>
              <SelectItem value="2">2 Adults</SelectItem>
              <SelectItem value="3">3 Adults</SelectItem>
              <SelectItem value="4+">4+ Adults</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="children">Children</Label>
          <Select defaultValue="0">
            <SelectTrigger id="children">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">No Children</SelectItem>
              <SelectItem value="1">1 Child</SelectItem>
              <SelectItem value="2">2 Children</SelectItem>
              <SelectItem value="3+">3+ Children</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        className="w-full py-6 text-lg bg-purple hover:bg-purple-dark transition-all transform hover:scale-[1.01]"
        onClick={handleSearch}
      >
        <Bed className="mr-2 h-5 w-5" />
        Search Hotels
      </Button>
    </div>
  );
};

export default StaySearch;
