
import React from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import MedievalFrame from '@/components/ui/medieval-frame';
import { Scroll, Crown, Coins, Users, DollarSign, Banknote, Landmark } from 'lucide-react';
import ParchmentTexture from '@/components/ui/parchment-texture';
import usePageTracking from '@/hooks/usePageTracking';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/icon';

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
          
          {/* Add a link to the historical absurdities page */}
          <div className="text-center mb-10">
            <motion.a
              href="/historical-absurdities"
              className="inline-block bg-royal-gold/20 border border-royal-gold/50 px-5 py-2 rounded text-royal-gold hover:bg-royal-gold/30 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                <Icon name="Sparkles" className="mr-2" size={18} />
                View Gallery of Historical Absurdities
              </span>
            </motion.a>
          </div>
          
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
                    
                    <div className="mt-4 border-t border-royal-navy/20 pt-4">
                      <h4 className="font-medium text-royal-navy">Real Historical Fact:</h4>
                      <p className="text-sm text-royal-navy/80">Marcus Crassus, believed to be the wealthiest Roman of his time (115-53 BCE), amassed a fortune worth an estimated 200 million sesterces—equivalent to the entire annual budget of the Roman Republic. He famously remarked, "No man could consider himself wealthy unless he could maintain a legion from his own resources."</p>
                    </div>
                    
                    <div className="text-sm italic text-royal-navy/70 mt-4">
                      "For a modest 1.5 million sesterces, enjoy exclusive access to the Senate Chambers and Premium Chariot Parking." - Flavius Monetarius, Roman Status Consultant
                    </div>
                  </div>
                </MedievalFrame>
                
                <MedievalFrame variant="parchment">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-royal-crimson">Egyptian Burial Upgrades</h3>
                    <p className="mb-4">Upgrade your sarcophagus to PREMIUM GOLD for just 50 more grain harvests! (Mummification DLC sold separately. Afterlife results may vary.)</p>
                    
                    <div className="mt-4 border-t border-royal-navy/20 pt-4">
                      <h4 className="font-medium text-royal-navy">Real Historical Fact:</h4>
                      <p className="text-sm text-royal-navy/80">The Great Pyramid of Giza, built for Pharaoh Khufu (c. 2560 BCE), cost approximately 7.5-10% of ancient Egypt's GDP. Modern economists estimate the project would cost over $5 billion today. The pyramid contains about 2.3 million stone blocks, each weighing 2.5-15 tons, and took 20 years to complete.</p>
                    </div>
                    
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
                
                <div className="mt-6 border-t border-royal-navy/20 pt-4">
                  <h4 className="font-medium text-royal-navy">Real Historical Fact:</h4>
                  <p className="text-sm text-royal-navy/80">Johann Tetzel, a Dominican friar who sold indulgences in the 16th century, allegedly used the marketing slogan: "As soon as the coin in the coffer rings, the soul from purgatory springs." The sale of indulgences became so egregious that it directly triggered Martin Luther's 95 Theses in 1517, sparking the Protestant Reformation.</p>
                </div>
              </ParchmentTexture>
              
              <div className="grid md:grid-cols-2 gap-8">
                <MedievalFrame>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Letters Patent</h3>
                    <p className="mb-4">Kings sold noble titles to wealthy merchants for quick cash. (The original pay-to-win rank system.)</p>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Real Historical Figure:</h4>
                      <p className="text-sm text-white/80">The Medici family, led by Cosimo de' Medici (1389-1464), rose from bankers to nobility by financing the Papal States. Their financial contributions to the church and state eventually earned them titles: Giovanni de' Medici became Pope Leo X, and in 1532, the family was officially made Dukes of Florence—effectively buying their way into royalty.</p>
                    </div>
                    
                    <p className="text-sm italic text-white/70 mt-4">"Congratulations on your purchase of 'Earl'! Would you like to add the 'Count' expansion pack for just 3 more estates?" - Royal Title Sales Department, 1348</p>
                  </div>
                </MedievalFrame>
                
                <MedievalFrame>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Sumptuary Laws</h3>
                    <p className="mb-4">Laws that restricted luxury clothing to certain classes—the original "premium skins" that were rank-locked.</p>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Real Historical Fact:</h4>
                      <p className="text-sm text-white/80">In 1337, King Edward III of England enacted sumptuary laws so strict that only royalty could wear clothes containing gold or purple silk. The penalty for a commoner wearing fur or certain fabrics could include confiscation of the garments, heavy fines, or even imprisonment. The laws were partly designed to ensure that a person's social status was immediately identifiable by their clothing.</p>
                    </div>
                    
                    <p className="text-sm italic text-white/70 mt-4">"Sorry peasant, purple dye is for Diamond Tier nobility only. Please upgrade your social package to unlock this color." - Royal Fashion Police</p>
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
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Real Historical Figures:</h4>
                      <p className="text-sm text-white/80">The Vanderbilt family exemplified American "new money" seeking status. Cornelius Vanderbilt amassed a $100 million fortune (equivalent to about $2.7 billion today). His grandson married Consuelo Vanderbilt to the 9th Duke of Marlborough in 1895—a clear status-buying arrangement where her dowry of $2.5 million (roughly $80 million today) saved the aristocrat's estate in exchange for a noble title.</p>
                    </div>
                    
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
              
              <MedievalFrame>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Robber Baron Status Symbols</h3>
                  <p className="mb-4">America's industrial titans competed to outdo each other with increasingly extravagant demonstrations of wealth.</p>
                  
                  <div className="mt-4 border-t border-white/20 pt-4">
                    <h4 className="font-medium text-royal-gold">Real Historical Facts:</h4>
                    <p className="text-sm text-white/80">J.P. Morgan's yacht, the Corsair IV, measured 343 feet and required a crew of 39 people. Meanwhile, John D. Rockefeller, America's first billionaire, built a 40-room mansion called Kykuit with gardens featuring over 100,000 plants, underground car tunnels, and a private golf course. When hosting dinner parties, Andrew Carnegie would often plate food on solid gold dishes just to demonstrate his tremendous wealth.</p>
                  </div>
                  
                  <p className="text-sm italic text-white/70 mt-4">"The only difference between me and the people I'm paying to entertain is that I own the railroad they arrived on." - Actual statement attributed to a 19th-century railroad magnate</p>
                </div>
              </MedievalFrame>
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
                    
                    <div className="mt-3 border-t border-white/10 pt-3">
                      <p className="text-xs text-white/70">In 2021, Justin Bieber purchased Bored Ape #3001 for 500 ETH (approximately $1.3 million at the time). By 2023, the value had crashed by more than 94%.</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-royal-gold">University Buildings</h4>
                    <p className="text-sm text-white/70">"For just $50 million, students can hate capitalism inside a building with YOUR name on it!"</p>
                    
                    <div className="mt-3 border-t border-white/10 pt-3">
                      <p className="text-xs text-white/70">Stephen A. Schwarzman donated $150 million to Yale University in 2015 to create the Schwarzman Center. In 2020, a Hong Kong real estate developer, Adrian Cheng, donated $10 million to Harvard and received a house named in his honor.</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-royal-gold">SpendThrone Leaderboard</h4>
                    <p className="text-sm text-white/70">The most honest status system yet—just directly buy your rank with zero pretense about "value" or "contribution"!</p>
                    
                    <div className="mt-3 border-t border-white/10 pt-3">
                      <p className="text-xs text-white/70">Cutting out the middleman: no need to pretend your donation is for charity or your NFT is "art"—just pay to flex.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <MedievalFrame variant="royal">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Crypto Whales & Tech Billionaires</h3>
                    <p className="mb-4">The new aristocracy buys status with ostentatious displays of tech wealth and "disruption."</p>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Real Historical Figure:</h4>
                      <p className="text-sm text-white/80">Elon Musk, the world's richest person (at various points), purchased Twitter for $44 billion in 2023—a price widely considered to be significantly above market value—largely to cement his status as a tech visionary and "free speech absolutist." This purchase represents one of the largest personal status purchases in modern history.</p>
                    </div>
                    
                    <p className="text-sm italic text-white/70 mt-4">"I'm disrupting this industry by buying it entirely and changing nothing of substance." - Silicon Valley status-seeker</p>
                  </div>
                </MedievalFrame>
                
                <MedievalFrame variant="royal">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Social Media Influencers</h3>
                    <p className="mb-4">Modern-day nobility purchases influence through lavish displays of wealth on Instagram and YouTube.</p>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Real Historical Figure:</h4>
                      <p className="text-sm text-white/80">Jimmy Donaldson (MrBeast) has built a YouTube empire with over 200 million subscribers by giving away massive sums of money on camera. He's spent $456,000 recreating "Squid Game" in real life, gave away a private island worth $700,000, and regularly flaunts spending millions on videos. His content embodies the modern cycle of gaining status through visible spending.</p>
                    </div>
                    
                    <p className="text-sm italic text-white/70 mt-4">"Today I'm giving $100,000 to random people just to show you how much EXTRA money I have!" - Modern influencer marketing strategy</p>
                  </div>
                </MedievalFrame>
              </div>
              
              <MedievalFrame variant="royal" seal>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 royal-gradient text-center">Crypto & NFT Status Wars</h3>
                  <p className="mb-5 text-center">The 21st century's most transparent status market—digital assets with no intrinsic value beyond showing what you paid for them.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="glass-morphism p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-royal-gold">Real Historical Transactions:</h4>
                      <ul className="text-sm space-y-3">
                        <li>• <span className="text-royal-gold">CryptoPunk #5822</span> sold for 8,000 ETH ($23.7 million) in 2022</li>
                        <li>• <span className="text-royal-gold">Beeple's "Everydays"</span> NFT sold for $69.3 million at Christie's in 2021</li>
                        <li>• <span className="text-royal-gold">The First Tweet</span> sold as an NFT for $2.9 million in 2021 (and later failed to sell for even $14,000)</li>
                      </ul>
                    </div>
                    <div className="glass-morphism p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-royal-gold">Status Flexing Quotes:</h4>
                      <ul className="text-sm space-y-3">
                        <li>"I spent more on this JPEG than most people spend on their house." - Anonymous NFT whale</li>
                        <li>"When I change my profile picture to a Bored Ape, people know I'm part of the future elite." - Crypto influencer</li>
                        <li>"It's not about the art; it's about being in the club that can afford these prices." - NFT collector</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm italic text-white/70">The more things change, the more they stay the same—we just removed the requirement to pretend we're buying status for any reason other than status itself.</p>
                  </div>
                </div>
              </MedievalFrame>
            </section>
            
            {/* Contemporary Examples */}
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <DollarSign className="mr-3 text-royal-gold" />
                Contemporary Status Royalty (2020s)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <MedievalFrame variant="noble">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">MrBeast's Kingdom</h3>
                    <p className="mb-4">The YouTube emperor who buys status by publicly giving away millions—while filming every moment.</p>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-purple">Recent Historical Facts:</h4>
                      <p className="text-sm text-white/80">In 2023, MrBeast spent $3.5 million recreating Willy Wonka's chocolate factory to film a contest. He gave away $2.7 million in cash prizes in a single video and built a working "Squid Game" set for $3.5 million. His philanthropy includes spending $10 million to remove 30 million pounds of garbage from oceans—all while carefully documenting every dollar spent on camera.</p>
                    </div>
                    
                    <div className="mt-4 glass-morphism p-3 rounded">
                      <p className="text-sm text-white/90">"The formula is simple: the more money I visibly spend, the more views I get, which allows me to spend even more money, creating an endless cycle of status accumulation masked as generosity."</p>
                      <p className="text-right text-xs text-royal-gold mt-1">- MrBeast's Business Model</p>
                    </div>
                  </div>
                </MedievalFrame>
                
                <MedievalFrame variant="noble">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Super Yacht Summer</h3>
                    <p className="mb-4">Tech billionaires compete to own ever-larger floating palaces, the modern equivalent of royal barges.</p>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-purple">Real Historical Transactions:</h4>
                      <p className="text-sm text-white/80">Jeff Bezos commissioned the 417-foot sailing yacht "Koru" for approximately $500 million in 2023. Roman Abramovich's yacht "Eclipse" cost $590 million to build in 2010 and $65 million annually to maintain. It features two helicopter pads, multiple swimming pools, a mini-submarine, and a missile defense system. Sheikh Mansour's "Topaz" cost $527 million, while the Emir of Qatar's "Al Mirqab" cost $300 million.</p>
                    </div>
                    
                    <p className="text-sm italic text-white/70 mt-4">"My yacht has a smaller yacht inside it, and that yacht has jet skis inside it. It's status turtles all the way down." - Tech billionaire overheard at Davos</p>
                  </div>
                </MedievalFrame>
              </div>
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
