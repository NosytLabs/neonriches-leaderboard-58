
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">SpendThrone</h3>
            <p className="text-gray-400">
              A persistent, ranked leaderboard where rank = total $ spent.
              The leaderboard never resets. $1 spent equals 1 unit of rank.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-royal-gold transition-colors">Home</Link></li>
              <li><Link to="/leaderboard" className="text-gray-400 hover:text-royal-gold transition-colors">Leaderboard</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-royal-gold transition-colors">About</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-royal-gold transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-royal-gold transition-colors">Privacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/spendthrone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-royal-gold transition-colors">Twitter</a></li>
              <li><a href="https://discord.gg/spendthrone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-royal-gold transition-colors">Discord</a></li>
              <li><a href="mailto:info@spendthrone.com" className="text-gray-400 hover:text-royal-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <p className="mt-6">SPEND THRONE — A satirical take on pay-to-win mechanics and digital status.</p>
        <p className="mt-2">© {new Date().getFullYear()} SpendThrone.com</p>
      </div>
    </footer>
  );
};

export default Footer;
