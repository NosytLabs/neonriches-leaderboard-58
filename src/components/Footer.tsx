
import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, ExternalLink, Github, Shield, Twitter, Gem } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 backdrop-blur-md text-foreground/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <Crown className="h-6 w-6 text-royal-gold mr-2" />
              <span className="text-xl font-bold royal-gradient">SpendThrone</span>
            </Link>
            <p className="text-sm mt-2 max-w-xs text-foreground/60 italic">
              "Where your wallet determines your worth and status is just a transaction away."
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medieval text-royal-gold mb-3 text-sm">Nobility</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/dashboard" className="hover:text-royal-gold transition-colors">Dashboard</Link>
                </li>
                <li>
                  <Link to="/leaderboard" className="hover:text-royal-gold transition-colors">Leaderboard</Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-royal-gold transition-colors">Events</Link>
                </li>
                <li>
                  <Link to="/features" className="hover:text-royal-gold transition-colors">Features</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medieval text-royal-gold mb-3 text-sm">Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-royal-gold transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-royal-gold transition-colors">FAQ</Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-royal-gold transition-colors">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-royal-gold transition-colors">Privacy</Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-medieval text-royal-gold mb-3 text-sm">Connect</h3>
              <div className="flex space-x-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-royal-gold transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-royal-gold transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-royal-gold transition-colors" aria-label="Discord">
                  <Shield size={18} />
                </a>
              </div>
              <p className="text-xs mt-3 text-foreground/60">
                Join our community to discuss strategy, form alliances, and plot the downfall of rival nobles.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-foreground/60">
            &copy; {currentYear} SpendThrone — A satirical social experiment by <a href="https://www.nosytlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-royal-gold transition-colors inline-flex items-center">Nosyt Labs <ExternalLink size={10} className="ml-1" /></a>
          </p>
          <p className="text-xs text-foreground/60 flex items-center mt-3 md:mt-0">
            Built with <span className="px-1">❤️</span> and <span className="px-1">💰</span>
            <a href="https://lovable.dev" className="ml-1 flex items-center hover:text-royal-gold transition-colors">
              lovable.dev <ExternalLink size={10} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
