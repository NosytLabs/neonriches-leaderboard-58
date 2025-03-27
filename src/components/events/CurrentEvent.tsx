
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock } from 'lucide-react';
import { currentEvent, formatDate } from './data';

const CurrentEvent = () => {
  return (
    <Card className="glass-morphism border-white/10 mb-12 overflow-hidden">
      <div className="relative h-48 md:h-64">
        <img 
          src={currentEvent.image} 
          alt={currentEvent.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-team-red text-white text-xs px-2 py-1 rounded-full">
              ACTIVE EVENT
            </span>
            <span className="text-xs text-white/80">
              {formatDate(currentEvent.startDate)} - {formatDate(currentEvent.endDate)}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white">{currentEvent.name}</h2>
        </div>
      </div>
      
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-white/70 mb-4 max-w-2xl">
              {currentEvent.description}
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1.5 text-white/50" />
                <span className="text-sm text-white/70">
                  {formatDate(currentEvent.startDate)} - {formatDate(currentEvent.endDate)}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1.5 text-white/50" />
                <span className="text-sm text-white/70">
                  {Math.floor((currentEvent.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-64">
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm text-white/70">Event Progress</span>
              <span className="text-sm font-medium">{currentEvent.progress}%</span>
            </div>
            <Progress value={currentEvent.progress} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-team-red via-team-green to-team-blue" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentEvent;
