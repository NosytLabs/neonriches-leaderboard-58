
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Twitter, 
  Facebook, 
  Instagram, 
  ArrowRight, 
  Crown,
  Shield,
  Trophy,
  CreditCard
} from 'lucide-react';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-dark-lighter border-t border-white/5 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <SpendThroneLogo variant="compact" className="h-10" />
            </Link>
            <p className="text-white/70 mb-6 text-sm">
              Where your wealth determines your worth. The ultimate pay-to-win experience, delivered with royal satire and extravagant flair.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-royal-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-royal-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-royal-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-royal-gold transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medieval text-lg text-white mb-4">Royal Pathways</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/leaderboard" className="text-white/70 hover:text-royal-gold transition-colors text-sm flex items-center">
                  <Trophy className="mr-2 h-4 w-4" />
                  Royal Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-white/70 hover:text-royal-gold transition-colors text-sm flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  Noble Houses
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/70 hover:text-royal-gold transition-colors text-sm flex items-center">
                  <Crown className="mr-2 h-4 w-4" />
                  Royal Events
                </Link>
              </li>
              <li>
                <Link to="/mockery" className="text-white/70 hover:text-royal-gold transition-colors text-sm flex items-center">
                  <Crown className="mr-2 h-4 w-4" />
                  Court of Mockery
                </Link>
              </li>
              <li>
                <Link to="/royal-prestige" className="text-white/70 hover:text-royal-gold transition-colors text-sm flex items-center">
                  <Crown className="mr-2 h-4 w-4" />
                  Royal Prestige
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medieval text-lg text-white mb-4">Legal Scrolls</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                  Royal Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                  Privacy Decree
                </Link>
              </li>
              <li>
                <Link to="/refunds" className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                  Refund Proclamation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                  About Our Kingdom
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                  Contact the Court
                </Link>
              </li>
              <li>
                <Link to="/brand-kit" className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                  Royal Brand Kit
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medieval text-lg text-white mb-4">Join The Realm</h3>
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <p className="text-white/80 text-sm mb-4">
                Be among the elite who receive royal announcements and exclusive offers.
              </p>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Enter thy email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-royal-gold"
                />
                <Button className="rounded-l-none bg-royal-gold hover:bg-royal-gold/90 text-black">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center">
                <Badge className="bg-royal-gold/20 text-royal-gold border border-royal-gold/30 flex items-center">
                  <CreditCard className="h-3 w-3 mr-1" />
                  Secure Payments
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SpendThrone. All rights reserved. A satirical pay-to-win experience.
          </p>
          <div className="flex space-x-4">
            <Link to="/support" className="text-white/60 hover:text-white text-sm">
              Support
            </Link>
            <Link to="/faq" className="text-white/60 hover:text-white text-sm">
              FAQ
            </Link>
            <Link to="/sitemap" className="text-white/60 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
