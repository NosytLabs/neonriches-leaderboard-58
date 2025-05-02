
// React is already injected by Vite's jsxInject configuration
import { Link } from 'react-router-dom';
import { Crown, GitHub, Twitter } from '@/components/ui/icons';

const Footer = () => {
  return (
    <footer className="py-6 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Crown className="h-6 w-6 text-royal-gold mr-2" />
            <span className="text-lg font-bold">SpendThrone</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/mockery" className="hover:text-white transition-colors">Mockery</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
              <GitHub className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} SpendThrone | All rights reserved</p>
          <p className="mt-1">A satirical social experiment in digital status</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
