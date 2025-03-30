
import React from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import MedievalFrame from '@/components/ui/medieval-frame';
import { Scroll, Crown, Coins, Users } from 'lucide-react';
import ParchmentTexture from '@/components/ui/parchment-texture';
import usePageTracking from '@/hooks/usePageTracking';

const StatusThroughHistory = () => {
  usePageTracking();
  
  return (
    <Shell>
      <PageSEO 
        title="Status Through History - A Satirical Timeline of Wealth & Power" 
        description="Explore the absurd historical parallels between SpendThrone's digital status buying and humanity's long tradition of purchasing power and influence."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 royal-gradient text-center">
            The Noble Timeline of Buying Status
          </h1>
          <p className="text-xl text-white/70 text-center mb-8">
            A satirical journey through humanity's long tradition of purchasing power, influence, and social standing
          </p>
          
          <RoyalDivider variant="scroll" label="HISTORICAL PARALLELS" color="gold" />
          
          <div className="space-y-12 mt-12">
            {/* Ancient Era */}
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Crown className="mr-3 text-royal-gold" />
                Ancient Status Merchants (3000 BCE - 500 CE)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <MedievalFrame variant="parchment">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-royal-crimson">Roman Equestrians</h3>
                    <p className="mb-4">The Roman "Equestrian Order" required a minimum net worth of 400,000 sesterces. Simply buy your way into the second-highest social rank! (Knights were just the original Silver Tier subscribers.)</p>
                    <div className="text-sm italic text-royal-navy/70 mt-4">
                      "For a modest 1.5 million sesterces, enjoy exclusive access to the Senate Chambers and Premium Chariot Parking." - Flavius Monetarius, Roman Status Consultant
                    </div>
                  </div>
                </MedievalFrame>
                
                <MedievalFrame variant="parchment">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-royal-crimson">Egyptian Burial Upgrades</h3>
                    <p className="mb-4">Upgrade your sarcophagus to PREMIUM GOLD for just 50 more grain harvests! (Mummification DLC sold separately. Afterlife results may vary.)</p>
                    <div className="text-sm italic text-royal-navy/70 mt-4">
                      "Would you like to add Pyramid Protection to your Eternal Package? Only 10,000 additional slaves required!" - Ancient Egyptian Afterlife Sales Specialist
                    </div>
                  </div>
                </MedievalFrame>
              </div>
            </section>
            
            {/* Medieval Era */}
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Scroll className="mr-3 text-royal-gold" />
                Medieval Rank Purchasers (500 - 1500 CE)
              </h2>
              
              <ParchmentTexture className="p-6 mb-8" seal>
                <h3 className="text-2xl font-medieval-title text-center mb-4 text-royal-crimson">ROYAL INDULGENCES</h3>
                <p className="text-center mb-6">The Catholic Church's revolutionary "Pay-to-Heaven" model allowed sinners to purchase forgiveness with Indulgence Certificates.</p>
                
                <div className="border-2 border-dashed border-royal-crimson/50 p-4 text-center font-medieval-script">
                  <p className="text-lg">⚜️ PREMIUM SALVATION CERTIFICATE ⚜️</p>
                  <p className="my-2">This document certifies that Lord Moneybags has purchased DIVINE FORGIVENESS (Platinum Tier) for the sin of:</p>
                  <p className="font-bold my-2 text-royal-crimson">EXCESSIVE PRIDE & CONSPICUOUS CONSUMPTION</p>
                  <p className="mt-4 text-sm">*Terms and conditions apply. Salvation not guaranteed. Offer not valid in Protestant territories.</p>
                </div>
              </ParchmentTexture>
              
              <div className="grid md:grid-cols-2 gap-8">
                <MedievalFrame>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Letters Patent</h3>
                    <p className="mb-4">Kings sold noble titles to wealthy merchants for quick cash. (The original pay-to-win rank system.)</p>
                    <p className="text-sm italic text-white/70">"Congratulations on your purchase of 'Earl'! Would you like to add the 'Count' expansion pack for just 3 more estates?" - Royal Title Sales Department, 1348</p>
                  </div>
                </MedievalFrame>
                
                <MedievalFrame>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Sumptuary Laws</h3>
                    <p className="mb-4">Laws that restricted luxury clothing to certain classes—the original "premium skins" that were rank-locked.</p>
                    <p className="text-sm italic text-white/70">"Sorry peasant, purple dye is for Diamond Tier nobility only. Please upgrade your social package to unlock this color." - Royal Fashion Police</p>
                  </div>
                </MedievalFrame>
              </div>
            </section>
            
            {/* Renaissance & Industrial Era */}
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Coins className="mr-3 text-royal-gold" />
                Industrial Status Climbers (1500 - 1900 CE)
              </h2>
              
              <div className="mb-8">
                <MedievalFrame variant="noble">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">American "Dollar Nobility"</h3>
                    <p className="mb-4">New Money industrialists built gaudy mansions on Fifth Avenue and married their daughters to cash-poor European nobility.</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="glass-morphism p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-royal-gold">The Platinum Package (1890)</h4>
                        <ul className="text-sm space-y-2">
                          <li>✓ One impoverished but authentic European title</li>
                          <li>✓ Entry to exactly 3 exclusive social clubs</li>
                          <li>✓ Your name in the newspaper society pages</li>
                          <li>✓ A daughter who will be thoroughly miserable abroad</li>
                        </ul>
                      </div>
                      <div className="glass-morphism p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-royal-gold">Nouveau Riche Bundle (1880)</h4>
                        <ul className="text-sm space-y-2">
                          <li>✓ Obscenely large mansion with gold everything</li>
                          <li>✓ Increasingly uncomfortable old-money neighbors</li>
                          <li>✓ Art collection you don't understand</li>
                          <li>✓ Constant reminders you don't "really" belong</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </MedievalFrame>
              </div>
            </section>
            
            {/* Modern Era */}
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Users className="mr-3 text-royal-gold" />
                Modern Prestige Purchasers (1900 - Present)
              </h2>
              
              <div className="glass-morphism border-royal-gold/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3 text-center">The Digital Status Marketplace</h3>
                <p className="text-center mb-6">From university donations to blue checkmarks to virtual goods—we've perfected the art of purchasing status without even the pretense of actual nobility.</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-royal-gold">NFT Profile Pictures</h4>
                    <p className="text-sm text-white/70">Spend $250,000 on a badly drawn monkey to show the internet you have more money than sense.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-royal-gold">University Buildings</h4>
                    <p className="text-sm text-white/70">"For just $50 million, students can hate capitalism inside a building with YOUR name on it!"</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-royal-gold">SpendThrone Leaderboard</h4>
                    <p className="text-sm text-white/70">The most honest status system yet—just directly buy your rank with zero pretense about "value" or "contribution"!</p>
                  </div>
                </div>
              </div>
              
              <MedievalFrame variant="royal" seal>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4 royal-gradient">The Circle of Status Continues</h3>
                  <p className="mb-4">From Roman senators to NFT collectors, the tradition of spending vast sums to appear important has remained humanity's most consistent endeavor.</p>
                  <p className="text-sm italic text-white/70">SpendThrone: At least we're honest about it.</p>
                </div>
              </MedievalFrame>
            </section>
          </div>
          
          <RoyalDivider variant="quill" label="SPEND & ASCEND" color="gold" className="my-12" />
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join The Illustrious Ranks</h2>
            <p className="text-white/70 mb-8">Why follow centuries of tradition when you can simply purchase your importance now?</p>
            <div className="glass-morphism border-royal-gold/30 p-8 rounded-lg inline-block">
              <p className="text-xl mb-4 font-medieval-title">Current Royal Exchange Rate:</p>
              <p className="text-3xl font-bold royal-gradient">1 DOLLAR = 1 STATUS POINT</p>
              <p className="text-sm mt-2 text-white/50">Simplicity befitting our absurd times.</p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default StatusThroughHistory;
