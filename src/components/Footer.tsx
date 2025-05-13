
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SpendThrone</h3>
            <p className="text-white/60 text-sm">
              The ultimate pay-to-win leaderboard where your money defines your status.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/leaderboard" className="text-white/70 hover:text-yellow-500 transition-colors">Leaderboard</Link></li>
              <li><Link to="/features" className="text-white/70 hover:text-yellow-500 transition-colors">Features</Link></li>
              <li><Link to="/teams" className="text-white/70 hover:text-yellow-500 transition-colors">Teams</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-yellow-500 transition-colors">About</Link></li>
              <li><Link to="/status-through-history" className="text-white/70 hover:text-yellow-500 transition-colors">History of Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-yellow-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-500 transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} SpendThrone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
