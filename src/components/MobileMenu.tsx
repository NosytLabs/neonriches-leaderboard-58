
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, ChevronDown, ChevronUp, Crown, Users, Shield, Sparkles } from 'lucide-react';
import useAuth from '@/hooks/useAuth';

export interface MobileMenuProps {
  transparent?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setExpandedSection(null);
    }
  };

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className={`p-2 rounded-md ${transparent ? 'text-white' : 'text-gray-400'} hover:text-white hover:bg-gray-800`}
        aria-label="Open mobile menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-gray-900 to-black border-l border-white/10 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-1">
              <Link 
                to="/" 
                onClick={toggleMenu}
                className="block py-2.5 px-4 rounded-md hover:bg-white/5 transition-colors text-white"
              >
                Home
              </Link>

              <div className="border-t border-white/10 my-2"></div>

              {/* Features section */}
              <div>
                <button 
                  onClick={() => toggleSection('features')}
                  className="flex justify-between items-center w-full py-2.5 px-4 rounded-md hover:bg-white/5 transition-colors text-white"
                >
                  <span className="flex items-center">
                    <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                    Features
                  </span>
                  {expandedSection === 'features' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>

                {expandedSection === 'features' && (
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      to="/leaderboard" 
                      onClick={toggleMenu}
                      className="block py-2 px-4 rounded-md hover:bg-white/5 transition-colors text-white/80"
                    >
                      Leaderboard
                    </Link>
                    <Link 
                      to="/teams" 
                      onClick={toggleMenu}
                      className="block py-2 px-4 rounded-md hover:bg-white/5 transition-colors text-white/80"
                    >
                      Teams
                    </Link>
                    <Link 
                      to="/royal-mockery" 
                      onClick={toggleMenu}
                      className="block py-2 px-4 rounded-md hover:bg-white/5 transition-colors text-white/80"
                    >
                      Royal Mockery
                    </Link>
                  </div>
                )}
              </div>

              {/* About section */}
              <div>
                <button 
                  onClick={() => toggleSection('about')}
                  className="flex justify-between items-center w-full py-2.5 px-4 rounded-md hover:bg-white/5 transition-colors text-white"
                >
                  <span className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-white/80" />
                    About
                  </span>
                  {expandedSection === 'about' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>

                {expandedSection === 'about' && (
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      to="/about" 
                      onClick={toggleMenu}
                      className="block py-2 px-4 rounded-md hover:bg-white/5 transition-colors text-white/80"
                    >
                      Our Mission
                    </Link>
                    <Link 
                      to="/features" 
                      onClick={toggleMenu}
                      className="block py-2 px-4 rounded-md hover:bg-white/5 transition-colors text-white/80"
                    >
                      Features
                    </Link>
                    <Link 
                      to="/faq" 
                      onClick={toggleMenu}
                      className="block py-2 px-4 rounded-md hover:bg-white/5 transition-colors text-white/80"
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              {user ? (
                <>
                  <div className="border-t border-white/10 my-2"></div>
                  
                  <Link 
                    to="/profile" 
                    onClick={toggleMenu}
                    className="flex items-center py-2.5 px-4 rounded-md hover:bg-white/5 transition-colors text-white"
                  >
                    <Shield className="h-5 w-5 mr-2 text-royal-gold" />
                    Profile
                  </Link>
                  
                  <Link 
                    to="/deposit" 
                    onClick={toggleMenu}
                    className="flex items-center py-2.5 px-4 rounded-md hover:bg-white/5 transition-colors text-white"
                  >
                    <Sparkles className="h-5 w-5 mr-2 text-royal-gold" />
                    Deposit
                  </Link>
                </>
              ) : (
                <>
                  <div className="border-t border-white/10 my-2"></div>
                  
                  <Link 
                    to="/login" 
                    onClick={toggleMenu}
                    className="block py-2.5 px-4 rounded-md hover:bg-white/5 transition-colors text-white"
                  >
                    Sign In
                  </Link>
                  
                  <Link 
                    to="/signup" 
                    onClick={toggleMenu}
                    className="block py-2.5 px-4 rounded-md bg-royal-gold text-black font-medium text-center mt-2 py-2.5 px-4 rounded-md hover:bg-royal-gold/90 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
