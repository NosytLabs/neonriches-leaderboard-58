
import React from 'react';
import { Crown, Shield, Award, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 royal-gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Crown size={24} className="text-royal-gold mr-2" />
              <h2 className="text-2xl font-royal tracking-tighter royal-gradient">SpendThrone</h2>
            </div>
            <p className="text-white/70 max-w-md mb-6 font-serif">
              The most transparent aristocracy on the web. 
              Where your financial contributions directly translate to noble status.
            </p>
            <div className="text-sm text-white/50">
              © {new Date().getFullYear()} SpendThrone. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="font-royal mb-4 flex items-center">
              <Shield size={16} className="text-royal-purple mr-2" />
              Royal Navigation
            </h3>
            <ul className="space-y-2 text-white/70 font-serif">
              <li><a href="#" className="hover:text-royal-gold transition-colors">Royal Court</a></li>
              <li><a href="#leaderboard" className="hover:text-royal-gold transition-colors">Leaderboard</a></li>
              <li><a href="#teams" className="hover:text-royal-gold transition-colors">Royal Houses</a></li>
              <li><a href="#events" className="hover:text-royal-gold transition-colors">Royal Events</a></li>
              <li><a href="#about" className="hover:text-royal-gold transition-colors">About the Realm</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-royal mb-4 flex items-center">
              <GraduationCap size={16} className="text-royal-blue mr-2" />
              Royal Decrees
            </h3>
            <ul className="space-y-2 text-white/70 font-serif">
              <li><a href="#" className="hover:text-royal-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors">Contact the Crown</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/50 font-serif">
          <p>This is a satirical project exploring the dynamics of digital aristocracy and patronage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
