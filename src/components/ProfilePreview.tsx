
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, DollarSign, Edit, Link, Image } from 'lucide-react';

const ProfilePreview = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Your Premium Profile</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Showcase your status with a customizable profile page.
            More spend equals more personalization options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 glass-morphism rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Profile Tiers</h3>
            
            <div className="space-y-4">
              <div className="glass-morphism rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Free Tier</h4>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                    $1+
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></span>
                    Basic text (200 characters)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></span>
                    One image
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-2"></span>
                    One link
                  </li>
                </ul>
              </div>
              
              <div className="glass-morphism rounded-lg p-4 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-team-red via-team-green to-team-blue opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="flex justify-between items-center mb-3 relative">
                  <h4 className="font-medium">Pro Tier</h4>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-white">
                    $25+
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-white/70 relative">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Extended text (1000 characters)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Up to 5 images
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Up to 5 links
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Animated RGB borders
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Video embeds
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Custom RGB gradients
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Hover effects
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-team-green mr-2"></span>
                    Click stats
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white">
                <DollarSign size={16} className="mr-2" />
                Upgrade Your Profile
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-morphism rounded-xl overflow-hidden" style={{ boxShadow: '0 0 25px rgba(0, 191, 255, 0.15)' }}>
              <div className="h-40 bg-gradient-to-r from-team-blue/40 via-team-green/30 to-team-red/40 relative">
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <Button variant="outline" size="sm" className="absolute top-4 right-4 glass-morphism border-white/20 text-white hover:bg-white/10">
                  <Edit size={14} className="mr-1.5" />
                  Edit Profile
                </Button>
              </div>
              
              <div className="px-8 pb-8 relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background absolute -top-12 left-8">
                  <img src="https://i.pravatar.cc/200?img=12" alt="Profile" className="w-full h-full object-cover" />
                </div>
                
                <div className="pt-16">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">CryptoVisionary</h3>
                      <div className="flex items-center">
                        <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-team-blue/10 text-team-blue border border-team-blue/30 mr-2">
                          Team Blue
                        </div>
                        <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                          Rank #42
                        </span>
                      </div>
                    </div>
                    
                    <div className="font-mono">
                      <div className="text-2xl font-bold">$1,250</div>
                      <div className="text-sm text-white/50 text-right">Total Spent</div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6">
                    Blockchain enthusiast and digital art collector. Exploring the frontiers of web3 and building the metaverse one transaction at a time. Pro tip: The future belongs to those who create it.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="glass-morphism rounded-lg p-4 border border-white/10">
                      <img src="https://picsum.photos/id/237/400/300" alt="Image" className="rounded-lg w-full h-32 object-cover mb-2" />
                      <p className="text-sm text-white/50 text-center">My latest NFT acquisition</p>
                    </div>
                    <div className="glass-morphism rounded-lg p-4 border border-white/10">
                      <img src="https://picsum.photos/id/239/400/300" alt="Image" className="rounded-lg w-full h-32 object-cover mb-2" />
                      <p className="text-sm text-white/50 text-center">Digital art collection</p>
                    </div>
                    <div className="glass-morphism rounded-lg p-4 border border-white/10">
                      <img src="https://picsum.photos/id/249/400/300" alt="Image" className="rounded-lg w-full h-32 object-cover mb-2" />
                      <p className="text-sm text-white/50 text-center">Web3 Summit 2023</p>
                    </div>
                  </div>
                  
                  <div className="glass-morphism rounded-lg p-4 border border-white/10">
                    <h4 className="font-medium mb-3">Links</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <Link size={14} className="mr-2 text-team-blue" />
                        <span className="text-sm">My Crypto Portfolio</span>
                      </a>
                      <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <Link size={14} className="mr-2 text-team-green" />
                        <span className="text-sm">NFT Gallery</span>
                      </a>
                      <a href="#" className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <Link size={14} className="mr-2 text-team-red" />
                        <span className="text-sm">Personal Website</span>
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
