
import React from 'react';
import { Crown, Shield, Award, GraduationCap, Scroll, Gem, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-16 px-6 border-t border-white/10 royal-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-royal-purple/5 via-royal-gold/5 to-royal-blue/5 opacity-30"></div>
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 rounded-full bg-royal-purple/10 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-royal-blue/10 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-5">
              <div className="relative">
                <Crown size={32} className="text-royal-gold mr-3 animate-crown-glow" />
                <div className="absolute -inset-2 bg-royal-gold/10 rounded-full blur-md"></div>
              </div>
              <h2 className="text-3xl font-royal tracking-tighter royal-gradient">SpendThrone</h2>
            </div>
            <p className="text-white/80 max-w-md mb-8 font-serif leading-relaxed">
              The most transparent aristocracy on the web. 
              Where your financial contributions directly translate to noble status,
              and we make no apologies for the delightful absurdity.
            </p>
            <div className="flex space-x-3 mb-8">
              <Button variant="outline" size="sm" className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full royal-button">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full royal-button">
                <span className="sr-only">Discord</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="glass-morphism border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full royal-button">
                <span className="sr-only">GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </Button>
            </div>
            <div className="text-sm text-white/60 glass-morphism border-white/10 rounded-lg p-3 inline-flex items-center">
              <Sparkles size={16} className="text-royal-gold mr-2 animate-sparkle" />
              © {currentYear} SpendThrone. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="font-royal mb-5 flex items-center">
              <Shield size={18} className="text-royal-purple mr-2" />
              <span className="royal-gradient">Royal Navigation</span>
            </h3>
            <ul className="space-y-3 text-white/80 font-serif">
              <li><a href="#" className="hover:text-royal-gold transition-colors flex items-center group"><Gem size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Royal Court</a></li>
              <li><a href="#leaderboard" className="hover:text-royal-gold transition-colors flex items-center group"><Crown size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Leaderboard</a></li>
              <li><a href="#teams" className="hover:text-royal-gold transition-colors flex items-center group"><Shield size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Royal Houses</a></li>
              <li><a href="#events" className="hover:text-royal-gold transition-colors flex items-center group"><Award size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Royal Events</a></li>
              <li><a href="#about" className="hover:text-royal-gold transition-colors flex items-center group"><Scroll size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> About the Realm</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-royal mb-5 flex items-center">
              <GraduationCap size={18} className="text-royal-blue mr-2" />
              <span className="royal-gradient">Royal Decrees</span>
            </h3>
            <ul className="space-y-3 text-white/80 font-serif">
              <li><a href="#" className="hover:text-royal-gold transition-colors flex items-center group"><Scroll size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Terms of Service</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors flex items-center group"><Scroll size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Privacy Policy</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors flex items-center group"><Scroll size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Refund Policy</a></li>
              <li><a href="#" className="hover:text-royal-gold transition-colors flex items-center group"><Scroll size={14} className="mr-2 opacity-70 group-hover:opacity-100 group-hover:text-royal-gold transition-all" /> Contact the Crown</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="royal-card rounded-lg p-6 max-w-3xl mx-auto mb-8 royal-shimmer">
            <p className="text-white/80 font-serif italic">
              "This is a satirical project exploring the dynamics of digital aristocracy and patronage.
              Where status is purchased rather than earned, and the only merit is measured in currency."
            </p>
          </div>
          <p className="text-xs text-white/50 font-serif">All treasury funds are used to maintain the realm and fund increasingly absurd royal projects.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
