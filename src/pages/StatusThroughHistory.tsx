
import React from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import RoyalDivider from '@/components/ui/royal-divider';
import MedievalFrame from '@/components/ui/medieval-frame';
import { Scroll, Crown, Coins, Users, DollarSign, Banknote, Landmark, TrendingUp, Award, Zap, Star } from 'lucide-react';
import ParchmentTexture from '@/components/ui/parchment-texture';
import usePageTracking from '@/hooks/usePageTracking';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/icon';
import RoyalButton from '@/components/ui/royal-button';
import RoyalDecoration from '@/components/ui/royal-decoration';
import { useNavigate } from 'react-router-dom';
import RegalBadge from '@/components/ui/regal-badge';
import { Money, Treasure, TreasureOpen, VipBadge, DonorBadge, Crown as CrownIcon } from '@/assets/icons';

const StatusThroughHistory = () => {
  usePageTracking();
  const navigate = useNavigate();
  
  return (
    <Shell>
      <PageSEO 
        title="Status Through History - A Satirical Timeline of Wealth & Power" 
        description="Explore the absurd historical parallels between SpendThrone's digital status buying and humanity's long tradition of purchasing power and influence."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <RoyalDecoration variant="corner-flourish" position="top-left" color="gold" />
            <RoyalDecoration variant="corner-flourish" position="top-right" color="gold" />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 royal-gradient text-center">
              The Noble Timeline of Buying Status
            </h1>
            <p className="text-xl text-white/70 text-center mb-8">
              A satirical journey through humanity's long tradition of purchasing power, influence, and social standing
            </p>
            
            <RoyalDecoration variant="corner-flourish" position="bottom-left" color="gold" />
            <RoyalDecoration variant="corner-flourish" position="bottom-right" color="gold" />
          </div>
          
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
              
              {/* New Ancient Absurdity */}
              <div className="mt-8">
                <MedievalFrame variant="parchment">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-royal-crimson">Nero's Golden Palace</h3>
                    <p className="mb-4">Emperor Nero built the Domus Aurea (Golden House) after Rome's fire - a 300-room palace with rotating dining rooms, gold-leaf walls, and indoor waterfalls. The original "extreme home makeover" that bankrupted an empire!</p>
                    
                    <div className="flex items-center justify-center my-4">
                      <div className="px-4 py-2 bg-royal-navy/10 rounded-lg border border-royal-navy/30">
                        <div className="flex gap-2 items-center">
                          <RegalBadge variant="gold">GOLD TIER ABSURDITY</RegalBadge>
                          <span className="text-royal-gold text-sm">Extravagance Level: Imperial</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t border-royal-navy/20 pt-4">
                      <h4 className="font-medium text-royal-navy">Real Historical Fact:</h4>
                      <p className="text-sm text-royal-navy/80">Nero's ceiling panels were constructed with ivory that would slide back to shower guests with perfume and flower petals. The entrance held a 120-foot bronze statue of Nero himself. Its construction required so much money that it necessitated the debasement of Roman currency, causing inflation throughout the empire.</p>
                    </div>
                    
                    <div className="text-sm italic text-royal-navy/70 mt-4">
                      "Finally, a house worthy of me! The statue should be bigger though." - Nero, reviewing architect plans for the fifth time
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
              
              {/* New Medieval Absurdity */}
              <div className="mt-8">
                <MedievalFrame variant="noble">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Cathedral Naming Rights</h3>
                    <p className="mb-4">Medieval merchants competed to fund the largest cathedral windows, chapels, and altars with their family crests prominently displayed—essentially purchasing "salvation advertising space."</p>
                    
                    <div className="glass-morphism p-4 rounded-lg mt-4">
                      <h4 className="font-medium mb-2 text-royal-gold text-center">Medieval Status Packages</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/30 p-3 rounded-lg">
                          <h5 className="text-sm font-semibold mb-1 text-royal-gold">BRONZE TIER (100 Florins)</h5>
                          <ul className="text-xs space-y-1 text-white/80">
                            <li>✓ Small family crest on chapel bench</li>
                            <li>✓ Name in prayer book (small print)</li>
                            <li>✓ 5 years reduced purgatory time</li>
                          </ul>
                        </div>
                        <div className="bg-black/30 p-3 rounded-lg">
                          <h5 className="text-sm font-semibold mb-1 text-royal-gold">SILVER TIER (500 Florins)</h5>
                          <ul className="text-xs space-y-1 text-white/80">
                            <li>✓ Medium stained glass with family scene</li>
                            <li>✓ Monthly mass said in your name</li>
                            <li>✓ 20 years reduced purgatory time</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-3 bg-black/40 p-3 rounded-lg border border-royal-gold/30">
                        <h5 className="text-sm font-semibold mb-1 text-royal-gold">GOLD TIER (2,000 Florins)</h5>
                        <ul className="text-xs space-y-1 text-white/80">
                          <li>✓ Entire chapel named after your family</li>
                          <li>✓ Life-sized statue of you praying (looking thinner)</li>
                          <li>✓ 100% guaranteed salvation* (*terms apply)</li>
                          <li>✓ Bonus: Free bishop attendance at your funeral</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Real Historical Example:</h4>
                      <p className="text-sm text-white/80">The Arnolfini family of wealthy Italian merchants funded an entire chapel in the Church of St. James in Bruges, ensuring that their coat of arms appeared prominently throughout. The Medici family financed so many religious buildings in Florence that their family symbol (six balls) can still be seen throughout the city today.</p>
                    </div>
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
              
              {/* New Colonial Absurdity */}
              <div className="mt-8">
                <MedievalFrame variant="noble">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Colonial "Prestige Collections"</h3>
                    <p className="mb-4">Victorian elites filled their homes with exotic artifacts looted from colonized lands—the original "pay to display" status symbols that showed both wealth and worldliness.</p>
                    
                    <div className="glass-morphism border border-royal-gold/30 p-4 rounded-lg mt-4">
                      <h4 className="font-medium mb-2 text-royal-gold text-center">Victorian Collector's Packages:</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-black/20 p-3 rounded-lg">
                          <h5 className="text-sm font-semibold mb-1 text-royal-gold">AMATEUR PACKAGE</h5>
                          <ul className="text-xs space-y-1 text-white/80">
                            <li>✓ Small Egyptian trinket</li>
                            <li>✓ Colonial tea set (dubious origin)</li>
                            <li>✓ One mediocre tiger skin rug</li>
                          </ul>
                        </div>
                        <div className="bg-black/20 p-3 rounded-lg">
                          <h5 className="text-sm font-semibold mb-1 text-royal-gold">GENTLEMAN EXPLORER</h5>
                          <ul className="text-xs space-y-1 text-white/80">
                            <li>✓ Medium-sized Greek statue fragment</li>
                            <li>✓ A maharaja's "gifted" jewels</li>
                            <li>✓ Rare butterflies you didn't collect</li>
                          </ul>
                        </div>
                        <div className="bg-black/30 p-3 rounded-lg border border-royal-gold/40">
                          <h5 className="text-xs font-semibold mb-1 text-royal-gold">IMPERIAL ELITE</h5>
                          <ul className="text-xs space-y-1 text-white/80">
                            <li>✓ Entire Egyptian mummy</li>
                            <li>✓ Sacred indigenous artifacts (unlabeled)</li>
                            <li>✓ Exclusive "How I Discovered" stories</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Real Historical Example:</h4>
                      <p className="text-sm text-white/80">Sir William Hamilton, British Ambassador to Naples (1764-1800), assembled one of the world's finest collections of Greek vases and other antiquities, later sold to the British Museum. The Pitt-Rivers Museum in Oxford was built to house the 20,000+ exotic items collected by Victorian general Augustus Pitt-Rivers, largely acquired through colonial expeditions.</p>
                    </div>
                    
                    <p className="text-sm italic text-white/70 mt-4">"I don't know what it is, but I know my neighbor doesn't have one." - Victorian collector examining a recent acquisition</p>
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
            
            {/* Contemporary Examples - EXPANDED MRBEAST & MORE INFLUENCERS */}
            <section>
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <DollarSign className="mr-3 text-royal-gold" />
                Contemporary Status Royalty (2020s)
              </h2>
              
              {/* Expanded MrBeast Section */}
              <div className="mb-8">
                <MedievalFrame variant="noble" seal>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-royal-purple">The MrBeast Status Empire</h3>
                      <RegalBadge variant="gold">CASE STUDY</RegalBadge>
                    </div>
                    
                    <p className="mb-6">The ultimate modern status paradox: creating an empire worth billions by ostentatiously giving away millions on camera—where every dollar "donated" returns tenfold in brand value and social capital.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="glass-morphism p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-royal-gold flex items-center">
                          <Award className="mr-2 h-5 w-5" />
                          Monetized Generosity Stats:
                        </h4>
                        <ul className="text-sm space-y-3">
                          <li>• <span className="text-royal-gold">$3.5M</span> to recreate Squid Game (video earned ~$20M)</li>
                          <li>• <span className="text-royal-gold">$2.7M</span> in cash prizes in a single video</li>
                          <li>• <span className="text-royal-gold">$10M</span> to remove ocean trash (while filming)</li>
                          <li>• <span className="text-royal-gold">$3.5M</span> on recreating Willy Wonka's factory</li>
                          <li>• <span className="text-royal-gold">$4.5M</span> for various extreme challenges</li>
                        </ul>
                      </div>
                      <div className="glass-morphism p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-royal-gold flex items-center">
                          <TrendingUp className="mr-2 h-5 w-5" />
                          Return On Conspicuous Spending:
                        </h4>
                        <ul className="text-sm space-y-3">
                          <li>• <span className="text-royal-gold">230M+</span> YouTube subscribers (largest individual channel)</li>
                          <li>• <span className="text-royal-gold">$500M+</span> estimated company valuation</li>
                          <li>• <span className="text-royal-gold">$720M</span> raised for his burger chain at $10B valuation</li>
                          <li>• <span className="text-royal-gold">$82M</span> annual video revenue (2023 estimate)</li>
                          <li>• <span className="text-royal-gold">$250,000+</span> earned per sponsored integration</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-black/30 p-4 rounded-lg border border-royal-gold/30 mb-6">
                      <h4 className="font-medium mb-2 text-royal-gold text-center">The MrBeast Formula for Status Acquisition:</h4>
                      <ol className="text-sm space-y-2">
                        <li className="flex items-start">
                          <span className="bg-royal-gold/20 text-royal-gold rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                          <span>Spend enormous sums of money in highly visible ways (preferably "giving" it away)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-royal-gold/20 text-royal-gold rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                          <span>Meticulously document every dollar spent with multiple camera angles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-royal-gold/20 text-royal-gold rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                          <span>Convert views into vastly greater advertising and sponsorship revenue</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-royal-gold/20 text-royal-gold rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                          <span>Reinvest profits into even more expensive stunts to signal even higher status</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-royal-gold/20 text-royal-gold rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0">5</span>
                          <span>Build businesses based entirely on the personal brand created through conspicuous spending</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-gold">Business Model Analysis:</h4>
                      <p className="text-sm text-white/80">MrBeast has created the perfect status-generating perpetual motion machine: The more money he visibly spends or gives away, the more his status grows, which increases his viewership, which increases his income, allowing him to spend even more money on camera. His 2022 recreation of Willy Wonka's chocolate factory cost $3.5 million but generated an estimated $20 million in revenue.</p>
                    </div>
                    
                    <div className="mt-4 glass-morphism p-3 rounded">
                      <p className="text-sm text-white/90">"I've created a business model where being charitable and giving away money actually makes me more money. It's the perfect status acquisition strategy—everyone thinks I'm generous while I build a billion-dollar empire based on filming myself spending money."</p>
                      <p className="text-right text-xs text-royal-gold mt-1">- The Unstated MrBeast Business Philosophy</p>
                    </div>
                  </div>
                </MedievalFrame>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                
                {/* New Influencer Section */}
                <MedievalFrame variant="noble">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">The Kardashian Konquest</h3>
                    <p className="mb-4">America's royal family transformed mere existence into billions by making status attainment itself into the product.</p>
                    
                    <div className="flex justify-center my-4">
                      <div className="bg-black/30 rounded-lg p-3 border border-royal-gold/20 max-w-sm">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="text-sm font-semibold text-royal-gold">KARDASHIAN STATUS METRICS</h5>
                          <Star className="h-4 w-4 text-royal-gold" />
                        </div>
                        <ul className="text-xs space-y-1.5 text-white/80">
                          <li className="flex justify-between">
                            <span>Kylie Jenner Instagram post fee:</span>
                            <span className="text-royal-gold">$1.2M</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Kim Kardashian net worth:</span>
                            <span className="text-royal-gold">$1.7B</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Total family social followers:</span>
                            <span className="text-royal-gold">1.2B+</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Cost of a Kylie Cosmetics startup:</span>
                            <span className="text-royal-gold">$250K</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Valuation at sale:</span>
                            <span className="text-royal-gold">$1.2B</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t border-white/20 pt-4">
                      <h4 className="font-medium text-royal-purple">Status Innovation:</h4>
                      <p className="text-sm text-white/80">The Kardashian family pioneered a new form of status acquisition where simply being famous for being famous became a self-reinforcing cycle. By creating a reality show about their lives, they manufactured celebrity that they then converted into billion-dollar businesses built entirely on the perception of status and exclusivity.</p>
                    </div>
                    
                    <p className="text-sm italic text-white/70 mt-4">"We're not famous for talent. We're famous for being famous—and we monetized that circular logic better than anyone in history." - Attributed to a Kardashian brand strategist</p>
                  </div>
                </MedievalFrame>
              </div>
              
              {/* New Status Upgrade Packages Section */}
              <MedievalFrame variant="royal" seal>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 royal-gradient text-center">Modern Status Upgrade Packages</h3>
                  <p className="text-center mb-6">Today's status economy offers convenient packages for instantly upgrading your perceived importance.</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="glass-morphism p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-royal-gold flex items-center">
                          <Icon name="Sparkles" className="mr-1 h-4 w-4" />
                          INFLUENCER STARTER
                        </h4>
                        <RegalBadge variant="silver" size="sm">$10,000</RegalBadge>
                      </div>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>10K purchased followers</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Fake brand deal photoshoots</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Basic yacht rental (2 hours)</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Private jet tarmac photos only</span>
                        </li>
                      </ul>
                      <div className="mt-3 text-xs text-white/50 italic">
                        "Perfect for aspiring TikTokers ready to fake it till they make it."
                      </div>
                    </div>
                    
                    <div className="glass-morphism p-4 rounded-lg border-2 border-royal-gold/30">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-royal-gold flex items-center">
                          <Icon name="Sparkles" className="mr-1 h-4 w-4" />
                          CRYPTO WHALE
                        </h4>
                        <RegalBadge variant="gold" size="sm">$250,000</RegalBadge>
                      </div>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Premium Bored Ape NFT</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Crypto Twitter blue check</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Web3 conference speaker slot</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>5 podcast appearances</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>"Early Investor" claims (backdated)</span>
                        </li>
                      </ul>
                      <div className="mt-3 text-xs text-white/50 italic">
                        "HODL your way to perceived crypto genius, regardless of actual returns!"
                      </div>
                    </div>
                    
                    <div className="glass-morphism p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-royal-gold flex items-center">
                          <Icon name="Sparkles" className="mr-1 h-4 w-4" />
                          ELITE PHILANTHROPIST
                        </h4>
                        <RegalBadge variant="crimson" size="sm">$1M+</RegalBadge>
                      </div>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>University building naming rights</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Charity gala "Visionary" award</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Museum wing dedication</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Honorary doctorate</span>
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-3 w-3 text-royal-gold" />
                          <span>Foundation launch PR package</span>
                        </li>
                      </ul>
                      <div className="mt-3 text-xs text-white/50 italic">
                        "Turn tax deductions into everlasting prestige with your name on things you didn't build!"
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <div className="glass-morphism p-4 rounded-lg max-w-xl border border-royal-gold/30">
                      <div className="flex items-center gap-2 mb-2">
                        <CrownIcon size="md" animated color="gold" />
                        <h4 className="font-medieval-title text-lg text-royal-gold">THE MODERN STATUS PARADOX</h4>
                      </div>
                      <p className="text-sm text-white/80">Throughout history, from Roman senators to medieval nobles to robber barons, status buyers at least pretended their purchases had some higher purpose. Today's elite have finally dropped all pretense: we now have direct marketplaces for purchasing social status with no veneer of utility or contribution. At SpendThrone, we simply remove all pretense and let you buy your rank directly.</p>
                    </div>
                  </div>
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
            
            <div className="mt-12 flex justify-center space-x-4">
              <RoyalButton 
                variant="royalGold" 
                shimmer 
                className="px-8 py-3"
                onClick={() => navigate('/')}
              >
                Ascend the Throne
              </RoyalButton>
              <RoyalButton 
                variant="outline" 
                className="px-8 py-3"
                onClick={() => navigate('/historical-absurdities')}
              >
                More Historical Absurdities
              </RoyalButton>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default StatusThroughHistory;
