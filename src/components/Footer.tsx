import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';
import Shell from './Shell';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <Shell>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About SpendThrone</h4>
              <p className="text-white/70">
                SpendThrone is a satirical platform exploring the absurdity of status in the digital age.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="text-white/70 space-y-2">
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
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="mailto:contact@example.com" className="text-white/70 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} SpendThrone. All rights reserved.
            </p>
          </div>
        </div>
      </Shell>
    </footer>
  );
};

export default Footer;
