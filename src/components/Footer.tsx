
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';
import { Shell } from './ui/shell';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-8">
      <Shell>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About Section */}
            <div>
              <h4 className="text-lg font-semibold mb-3">About SpendThrone</h4>
              <p className="text-white/70 text-sm">
                A satirical platform exploring the absurdity of status in the digital age. $1 spent = 1 unit of rank.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="text-white/70 space-y-1.5 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/leaderboard" className="hover:text-white transition-colors">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link to="/status-through-history" className="hover:text-white transition-colors">
                    History of Status
                  </Link>
                </li>
                <li>
                  <Link to="/mockery" className="hover:text-white transition-colors">
                    Royal Mockery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social Section */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect</h4>
              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="mailto:contact@spendthrone.com" className="text-white/70 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-4 border-t border-white/5 text-center">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} SpendThrone. All rights reserved.
            </p>
          </div>
        </div>
      </Shell>
    </footer>
  );
};

export default Footer;
