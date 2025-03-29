
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Crown, DollarSign, Users, User, Shield, Sparkles, Award, Gift, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThroneChair from '@/components/logos/ThroneChair';

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link to="/">
        <Button variant="outline" className="mb-6 glass-morphism border-white/10">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      
      <div className="text-center mb-12">
        <ThroneChair size={80} className="mx-auto mb-4" animate={true} />
        <h1 className="text-4xl font-bold font-royal mb-2">Features</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Explore the extravagant features that make SpendThrone the ultimate pay-to-win social platform.
        </p>
      </div>
      
      <div className="space-y-16">
        {/* Persistent Leaderboard */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <DollarSign className="h-7 w-7 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">Persistent Leaderboard</h2>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              SpendThrone features a perpetual leaderboard that never resets. Your rank is determined by one simple metric: how much you've spent. Every dollar equals one rank point, making this the most transparent ranking system in existence.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Real-time updates as users spend and climb the ranks</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Historical tracking of spending patterns and rank changes</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Special recognition for milestone achievements and top spenders</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Filter and sort options to view rankings by various criteria</span>
              </li>
            </ul>
          </div>
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-royal-gold/10 rounded-lg">
                <div className="flex items-center">
                  <Crown className="h-5 w-5 text-royal-gold mr-2" />
                  <span className="font-medium">RoyalTycoon</span>
                </div>
                <span className="text-royal-gold font-mono">$9,850.25</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-white/80 mr-2" />
                  <span className="font-medium">WealthFlex</span>
                </div>
                <span className="font-mono">$7,342.18</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-white/80 mr-2" />
                  <span className="font-medium">MoneyMaker</span>
                </div>
                <span className="font-mono">$5,678.90</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg opacity-60">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-white/80 mr-2" />
                  <span className="font-medium">CashKing</span>
                </div>
                <span className="font-mono">$4,321.55</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg opacity-40">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-white/80 mr-2" />
                  <span className="font-medium">StatusSeeker</span>
                </div>
                <span className="font-mono">$3,145.72</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Competition */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:order-2 md:col-span-2">
            <div className="flex items-center mb-4">
              <Users className="h-7 w-7 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">RGB Team Competition</h2>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Join one of three prestigious teams - Red, Green, or Blue - and contribute to their collective standing. Team rankings are determined by the total spending of all members, creating a social dimension to your conspicuous consumption.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Team-specific visual effects and profile enhancements</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Weekly team challenges with exclusive rewards for winning teams</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Team chat channels to coordinate spending strategies</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Ability to switch teams (for a fee, of course)</span>
              </li>
            </ul>
          </div>
          <div className="md:order-1 glass-morphism border-white/10 p-6 rounded-lg">
            <div className="space-y-6">
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-red-400">Red Team</span>
                  <span className="text-sm text-white/70">84 members</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-gradient-to-r from-red-600 to-red-400 h-4 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <div className="mt-2 text-right text-red-300 font-mono">$45,621.50</div>
              </div>
              
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-green-400">Green Team</span>
                  <span className="text-sm text-white/70">92 members</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-gradient-to-r from-green-600 to-green-400 h-4 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="mt-2 text-right text-green-300 font-mono">$52,348.75</div>
              </div>
              
              <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-blue-400">Blue Team</span>
                  <span className="text-sm text-white/70">78 members</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-4 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <div className="mt-2 text-right text-blue-300 font-mono">$38,972.25</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Profile Customization */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Sparkles className="h-7 w-7 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">Luxurious Profile Customization</h2>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Elevate your digital presence with our extensive profile customization options. The higher your spending tier, the more extravagant the available customizations. From glowing borders to animated backgrounds, flaunt your status in style.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-black/20 p-3 rounded-lg">
                <h3 className="font-semibold text-royal-gold mb-2">Free Tier ($1+)</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Basic text (200 characters)</li>
                  <li>• One image (max 500KB)</li>
                  <li>• One external link</li>
                  <li>• Standard profile layout</li>
                </ul>
              </div>
              
              <div className="bg-royal-gold/10 border border-royal-gold/30 p-3 rounded-lg">
                <h3 className="font-semibold text-royal-gold mb-2">Pro Tier ($25+)</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Rich text (1000 characters)</li>
                  <li>• Up to 5 images (max 2MB each)</li>
                  <li>• Up to 5 external links</li>
                  <li>• Animated borders and backgrounds</li>
                  <li>• Custom color schemes</li>
                  <li>• Video embeds</li>
                  <li>• Visit statistics</li>
                </ul>
              </div>
            </div>
            <p className="text-white/70">
              Premium cosmetic items are also available for purchase in our Royal Boutique, or can be earned through special events and the Wishing Well.
            </p>
          </div>
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/30 to-royal-purple/30 rounded-lg animate-pulse-slow opacity-70"></div>
              <div className="relative p-4 space-y-4">
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full bg-royal-navy border-4 border-royal-gold overflow-hidden mr-4">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      <span className="text-royal-gold">★</span> RoyalTycoon
                    </h3>
                    <p className="text-sm text-white/70">Money Monarch</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Rank</span>
                    <span className="font-medium">#1</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Team</span>
                    <span className="text-red-400 font-medium">Red</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Total Spent</span>
                    <span className="text-royal-gold font-medium">$9,850.25</span>
                  </div>
                </div>
                
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-white/90 italic">
                    "The throne is mine by right of spending. All shall acknowledge my financial supremacy!"
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <div className="h-20 w-20 bg-black/20 rounded-md"></div>
                  <div className="h-20 w-20 bg-black/20 rounded-md"></div>
                  <div className="h-20 w-20 bg-black/20 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Royal Mockery */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:order-2 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-7 w-7 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">Royal Mockery</h2>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              With great spending comes great power to ridicule. Our Royal Mockery system lets you spend money to apply temporary effects to other users' profiles. From minor annoyances to major embarrassments, assert your dominance over the lesser spenders.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-royal-gold mb-2">Offensive Actions</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Pelt with tomatoes ($0.25)</li>
                  <li>• Hurl eggs ($0.50)</li>
                  <li>• Place in stocks ($1.00)</li>
                  <li>• Appoint as court jester ($2.00)</li>
                  <li>• Royal silencing ($1.50)</li>
                  <li>• Public roasting ($1.25)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-royal-gold mb-2">Defensive Actions</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Royal protection ($5.00) - 24 hour immunity</li>
                  <li>• Royal immunity ($10.00) - 72 hour immunity</li>
                  <li>• Retaliation boosts (various prices)</li>
                  <li>• Status restoration (price varies)</li>
                </ul>
              </div>
            </div>
            <p className="text-white/70">
              Effects last for various durations based on the action's cost. Special weekly discounts are available on select mockery actions, and Public Shaming Festivals offer limited-time reduced pricing.
            </p>
          </div>
          <div className="md:order-1 glass-morphism border-white/10 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="p-3 bg-amber-500/20 border border-amber-500/30 rounded-lg">
                <div className="flex items-center mb-2">
                  <Crown className="h-5 w-5 text-amber-400 mr-2" />
                  <h4 className="font-medium">Court Jester</h4>
                </div>
                <p className="text-sm text-white/80">
                  Appoint another user as the royal court jester for 48 hours, adding jester icons and animations to their profile.
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-white/60">48 hour effect</span>
                  <span className="text-amber-300 font-medium">$2.00</span>
                </div>
              </div>
              
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-5 w-5 text-red-400 mr-2" />
                  <h4 className="font-medium">Rotten Tomatoes</h4>
                </div>
                <p className="text-sm text-white/80">
                  Pelt a user with rotten tomatoes, adding splatter effects to their profile for 24 hours.
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-white/60">24 hour effect</span>
                  <span className="text-red-300 font-medium">$0.25</span>
                </div>
              </div>
              
              <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-blue-400 mr-2" />
                  <h4 className="font-medium">Royal Protection</h4>
                </div>
                <p className="text-sm text-white/80">
                  Grant yourself divine protection from basic mockery actions for 24 hours.
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-white/60">24 hour effect</span>
                  <span className="text-blue-300 font-medium">$5.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Wishing Well */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Gift className="h-7 w-7 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">Royal Wishing Well</h2>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Make a wish by casting coins into our mystical well for a chance to receive exclusive cosmetic rewards. The higher your wish amount, the better your chances of receiving rare and legendary items to enhance your profile.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Make wishes from $0.25 to $10 with increasing odds of rarer rewards</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Receive cosmetic items across various categories: borders, colors, fonts, and more</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Option to target specific categories for your wishes</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Some items are exclusively available through the Wishing Well</span>
              </li>
            </ul>
          </div>
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="text-center mb-2">
                <Gift className="h-16 w-16 text-royal-gold mx-auto mb-2" />
                <h3 className="font-bold text-lg">Royal Wishing Well</h3>
                <p className="text-sm text-white/70">Try your luck with a generous wish!</p>
              </div>
              
              <div className="w-full bg-black/20 h-10 rounded-full flex items-center p-2">
                <div className="bg-royal-gold h-6 rounded-full" style={{ width: "60%" }}></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-white/70">$0.25</span>
                <span className="text-royal-gold">$6.00</span>
                <span className="text-white/70">$10.00</span>
              </div>
              
              <div className="grid grid-cols-5 gap-x-1 gap-y-2 my-3">
                <div className="text-center">
                  <div className="text-xs font-semibold text-gray-300">Common</div>
                  <div className="text-xs text-white/50">25%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-green-400">Uncommon</div>
                  <div className="text-xs text-white/50">30%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-blue-400">Rare</div>
                  <div className="text-xs text-white/50">25%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-purple-400">Epic</div>
                  <div className="text-xs text-white/50">15%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold text-royal-gold">Legendary</div>
                  <div className="text-xs text-white/50">5%</div>
                </div>
              </div>
              
              <Button className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black">
                <Sparkles className="mr-2 h-4 w-4" />
                Make a Wish
              </Button>
            </div>
          </div>
        </section>
        
        {/* Special Events */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:order-2 md:col-span-2">
            <div className="flex items-center mb-4">
              <Award className="h-7 w-7 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">Special Events</h2>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              SpendThrone regularly hosts special events that offer unique opportunities and limited-time features. From seasonal celebrations to promotional extravaganzas, these events provide fresh ways to spend your money and enhance your status.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-black/20 p-3 rounded-lg">
                <h3 className="font-semibold text-royal-gold mb-2">Regular Events</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Fire Sales - discounted cosmetic items</li>
                  <li>• Public Shaming Festivals - reduced mockery costs</li>
                  <li>• Weekly Team Challenges</li>
                  <li>• Double Rank Days</li>
                </ul>
              </div>
              
              <div className="bg-royal-gold/10 border border-royal-gold/30 p-3 rounded-lg">
                <h3 className="font-semibold text-royal-gold mb-2">Seasonal Events</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Royal Coronation Ceremony</li>
                  <li>• Summer Spending Spree</li>
                  <li>• Winter Wealth Showcase</li>
                  <li>• Anniversary Auctions</li>
                </ul>
              </div>
            </div>
            <p className="text-white/70">
              Events are announced on the platform and via email notifications. Premium users receive advance access to certain event features.
            </p>
          </div>
          <div className="md:order-1 glass-morphism border-white/10 p-6 rounded-lg">
            <div className="relative p-4 border-2 border-royal-gold/50 rounded-lg bg-gradient-to-br from-royal-gold/10 to-royal-navy/10">
              <div className="absolute top-0 right-0 bg-royal-gold text-black px-3 py-1 text-sm font-bold rounded-bl-lg">ACTIVE</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold text-center mb-4">Fire Sale</h3>
                <p className="text-sm text-white/80 mb-4 text-center">
                  Limited time discounts on premium cosmetic items!
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded-lg">
                    <span className="text-sm">Royal Border</span>
                    <div className="flex items-center">
                      <span className="text-xs line-through mr-2 text-white/50">$25.00</span>
                      <span className="text-royal-gold font-medium">$17.50</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded-lg">
                    <span className="text-sm">Diamond Effect</span>
                    <div className="flex items-center">
                      <span className="text-xs line-through mr-2 text-white/50">$15.00</span>
                      <span className="text-royal-gold font-medium">$10.50</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded-lg">
                    <span className="text-sm">Elite Title</span>
                    <div className="flex items-center">
                      <span className="text-xs line-through mr-2 text-white/50">$10.00</span>
                      <span className="text-royal-gold font-medium">$7.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-white/60 mb-2">Ends in:</p>
                  <div className="flex justify-center gap-2 text-sm">
                    <div className="bg-black/50 px-2 py-1 rounded">2</div>
                    <div>:</div>
                    <div className="bg-black/50 px-2 py-1 rounded">14</div>
                    <div>:</div>
                    <div className="bg-black/50 px-2 py-1 rounded">35</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Analytics & Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <BarChart className="h-7 w-7 text-royal-gold mr-2" />
              <h2 className="text-2xl font-bold">Analytics & Stats</h2>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Track your spending, monitor your rank progression, and analyze your impact on the platform with our comprehensive analytics tools. Premium users get access to advanced statistics and visualizations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Detailed spending history with visualizations</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Rank progression over time</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Profile view statistics and visitor demographics</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Impact of your spending on team rankings</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-royal-gold mr-2 flex-shrink-0">•</span>
                <span className="text-white/80">Mockery effectiveness tracking</span>
              </li>
            </ul>
          </div>
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-center">Spending Overview</h3>
              
              <div className="h-40 bg-black/20 rounded-lg flex items-end p-4 gap-2">
                <div className="bg-royal-gold/50 w-1/6 h-[20%]" style={{ height: "20%" }}></div>
                <div className="bg-royal-gold/50 w-1/6 h-[35%]" style={{ height: "35%" }}></div>
                <div className="bg-royal-gold/50 w-1/6 h-[25%]" style={{ height: "25%" }}></div>
                <div className="bg-royal-gold/50 w-1/6 h-[50%]" style={{ height: "50%" }}></div>
                <div className="bg-royal-gold/50 w-1/6 h-[80%]" style={{ height: "80%" }}></div>
                <div className="bg-royal-gold/50 w-1/6 h-[60%]" style={{ height: "60%" }}></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-3 rounded-lg text-center">
                  <div className="text-sm text-white/60">Current Rank</div>
                  <div className="text-xl font-bold">#42</div>
                </div>
                
                <div className="bg-black/20 p-3 rounded-lg text-center">
                  <div className="text-sm text-white/60">Total Spent</div>
                  <div className="text-xl font-bold text-royal-gold">$528.50</div>
                </div>
              </div>
              
              <div className="bg-black/20 p-3 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Rank Projection</div>
                <div className="flex items-center">
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-royal-gold h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <span className="ml-2 text-xs">75%</span>
                </div>
                <div className="text-xs text-white/60 mt-1">$171.50 more to reach rank #25</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div className="mt-16 glass-morphism border-white/10 p-8 rounded-lg text-center">
        <ThroneChair size={80} className="mx-auto mb-4" animate={true} />
        <h2 className="text-3xl font-bold mb-4 font-royal">Ready to Ascend the Hierarchy?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join SpendThrone today and start your journey to digital nobility. Remember, on SpendThrone, your wallet is your worth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-royal-gold hover:bg-royal-gold/90 text-black">
            <Link to="/signup">
              <span>Sign Up Now</span>
              <Crown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
            <Link to="/login">
              <span>Sign In</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
