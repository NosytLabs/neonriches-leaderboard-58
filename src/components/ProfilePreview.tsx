
import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Scroll, Shield, Award, ExternalLink } from 'lucide-react';

const ProfilePreview = () => {
  return (
    <section className="w-full py-20 px-6 throne-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-royal royal-gradient mb-4">Your Royal Presence</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-serif">
            Establish your noble identity with a customizable royal profile.
            The greater your patronage, the more prestigious embellishments you may command.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 royal-card rounded-xl p-6">
            <h3 className="text-xl font-royal mb-4 royal-gradient">Royal Titles & Privileges</h3>
            
            <div className="space-y-4">
              <div className="glass-morphism rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-royal">Common Nobility</h4>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                    $1+
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-white/70 font-serif">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></span>
                    Basic proclamation (200 characters)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></span>
                    One royal portrait
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></span>
                    One diplomatic channel
                  </li>
                </ul>
              </div>
              
              <div className="royal-card rounded-lg p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="flex justify-between items-center mb-3 relative">
                  <h4 className="font-royal">High Nobility</h4>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-white">
                    $25+
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-white/70 relative font-serif">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    Royal decree (1000 characters)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    Gallery of 5 royal portraits
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    5 diplomatic channels
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    Animated royal borders
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    Royal proclamation videos
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    Custom royal gradients
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    Royal animation effects
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mr-2"></span>
                    Royal audience metrics
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue hover:opacity-90 text-white font-royal uppercase tracking-wider">
                <Crown size={16} className="mr-2" />
                Elevate Your Status
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="royal-card rounded-xl overflow-hidden" style={{ boxShadow: '0 0 25px rgba(155, 38, 175, 0.15)' }}>
              <div className="h-40 bg-gradient-to-r from-royal-blue/40 via-royal-gold/30 to-royal-purple/40 relative">
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <Button variant="outline" size="sm" className="absolute top-4 right-4 glass-morphism border-white/20 text-white hover:bg-white/10 font-royal">
                  <Scroll size={14} className="mr-1.5" />
                  Edit Decree
                </Button>
              </div>
              
              <div className="px-8 pb-8 relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background absolute -top-12 left-8">
                  <img src="https://i.pravatar.cc/200?img=12" alt="Profile" className="w-full h-full object-cover" />
                </div>
                
                <div className="pt-16">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-royal">ImperialVision</h3>
                      <div className="flex items-center">
                        <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-royal-blue/10 text-royal-blue border border-royal-blue/30 mr-2">
                          <Shield size={12} className="mr-1" />
                          Azure Order
                        </div>
                        <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                          Earl • Rank #42
                        </span>
                      </div>
                    </div>
                    
                    <div className="font-mono">
                      <div className="text-2xl font-bold">$1,250</div>
                      <div className="text-sm text-white/50 text-right">Royal Treasury</div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6 font-serif">
                    Noble patron of the digital realm and collector of rare artifacts. Exploring the frontiers of the kingdom and expanding influence one contribution at a time. Royal wisdom: True power comes from generous patronage.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="royal-card rounded-lg p-4">
                      <img src="https://picsum.photos/id/237/400/300" alt="Image" className="rounded-lg w-full h-32 object-cover mb-2" />
                      <p className="text-sm text-white/50 text-center font-serif">My latest royal acquisition</p>
                    </div>
                    <div className="royal-card rounded-lg p-4">
                      <img src="https://picsum.photos/id/239/400/300" alt="Image" className="rounded-lg w-full h-32 object-cover mb-2" />
                      <p className="text-sm text-white/50 text-center font-serif">Royal art collection</p>
                    </div>
                    <div className="royal-card rounded-lg p-4">
                      <img src="https://picsum.photos/id/249/400/300" alt="Image" className="rounded-lg w-full h-32 object-cover mb-2" />
                      <p className="text-sm text-white/50 text-center font-serif">Royal Summit 2023</p>
                    </div>
                  </div>
                  
                  <div className="royal-card rounded-lg p-4">
                    <h4 className="font-royal mb-3">Diplomatic Channels</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <ExternalLink size={14} className="mr-2 text-royal-blue" />
                        <span className="text-sm font-serif">Royal Investment Portfolio</span>
                      </a>
                      <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <ExternalLink size={14} className="mr-2 text-royal-gold" />
                        <span className="text-sm font-serif">Royal Art Gallery</span>
                      </a>
                      <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <ExternalLink size={14} className="mr-2 text-royal-purple" />
                        <span className="text-sm font-serif">Royal Embassy</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePreview;
