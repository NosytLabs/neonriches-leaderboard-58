
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter text-gradient mb-4">P2W.FUN</h2>
            <p className="text-white/70 max-w-md mb-6">
              The most transparent pay-to-win experience on the web. 
              Where your financial contributions directly translate to status.
            </p>
            <div className="text-sm text-white/50">
              © {new Date().getFullYear()} P2W.FUN. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#leaderboard" className="hover:text-white transition-colors">Leaderboard</a></li>
              <li><a href="#teams" className="hover:text-white transition-colors">Teams</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/50">
          <p>This is a satirical project exploring the dynamics of pay-to-win mechanics.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
