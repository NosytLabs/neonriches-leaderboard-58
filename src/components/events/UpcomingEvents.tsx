
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Bell } from 'lucide-react';
import { upcomingEvents, formatDate } from './data';

const UpcomingEvents = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gradient mb-6">Upcoming Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="glass-morphism border-white/10 overflow-hidden">
            <div className="relative h-40">
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                    UPCOMING
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{event.name}</h3>
              </div>
            </div>
            
            <CardContent className="pt-4">
              <p className="text-white/70 mb-3">
                {event.description}
              </p>
              
              <div className="flex items-center text-sm text-white/50">
                <Calendar size={14} className="mr-1.5" />
                {formatDate(event.startDate)} - {formatDate(event.endDate)}
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
                <Bell size={16} className="mr-2" />
                Get Notified
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
