
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 text-white py-8 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SpendThrone</h3>
            <p className="text-sm text-white/70">The ultimate pay-to-win social experiment. Spend your way to royal status and watch as your rank rises with every dollar spent.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-royal-gold transition-colors">Home</Link></li>
              <li><Link to="/leaderboard" className="hover:text-royal-gold transition-colors">Leaderboard</Link></li>
              <li><Link to="/features" className="hover:text-royal-gold transition-colors">Features</Link></li>
              <li><Link to="/teams" className="hover:text-royal-gold transition-colors">Teams</Link></li>
              <li><Link to="/status-through-history" className="hover:text-royal-gold transition-colors">Status Through History</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/terms" className="hover:text-royal-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-royal-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-royal-gold transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-royal-gold transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} SpendThrone. All rights reserved.</p>
          <p className="mt-2">A satirical social experiment exploring how wealth affects status in digital spaces.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
