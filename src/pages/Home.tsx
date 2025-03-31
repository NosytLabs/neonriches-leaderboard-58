
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import RealTimeLeaderboard from '@/components/leaderboard/RealTimeLeaderboard';
import { Crown, Trophy, Gem, ArrowRight, Coins, Sparkles, Users, Bitcoin, AlertTriangle } from 'lucide-react';
import { generateAbsurdCTA } from '@/utils/absurdityGenerator';
import RandomAbsurdFact from '@/components/ui/random-absurd-fact';
import { formatCurrency } from '@/utils/formatters';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [ctaText, setCTAText] = useState<string>(generateAbsurdCTA('medium'));
  const [showFact, setShowFact] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('leaderboard');

  useEffect(() => {
    const interval = setInterval(() => {
      setCTAText(generateAbsurdCTA('medium'));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFact(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>SpendThrone | Where Your Wealth Is Your Worth</title>
        <meta name="description" content="SpendThrone - The ultimate pay-to-win social platform where your rank equals your spending. A satirical throne awaits those willing to part with their coin." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-bg-dark to-bg-dark-lighter">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/80 opacity-80" />

        {/* Floating elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-royal-gold/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 100,
                rotate: Math.random() * 360
              }}
              animate={{
                opacity: [0, 0.3 + Math.random() * 0.4, 0],
                scale: [0.5, 1, 0.5],
                y: [100, -100],
                rotate: [Math.random() * 360, Math.random() * 720]
              }}
              transition={{
                duration: 3 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                repeatDelay: Math.random() * 3
              }}
            >
              {i % 3 === 0 ? <Crown size={24} /> :
                i % 3 === 1 ? <Coins size={24} /> :
                  <Trophy size={24} />}
            </motion.div>
          ))}

          {/* Credit card elements */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`card-${i}`}
              className="absolute h-12 w-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xs font-bold"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 100,
                rotate: Math.random() * 20 - 10
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0.7, 1, 0.7],
                y: [100, -100],
                rotate: [Math.random() * 20 - 10, Math.random() * 20 - 10]
              }}
              transition={{
                duration: 7 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                repeatDelay: Math.random() * 4
              }}
            >
              CREDIT CARD
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Crown className="h-20 w-20 text-royal-gold animate-pulse-slow" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 royal-gradient font-medieval"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              SPEND THRONE
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The ultimate pay-to-win leaderboard where rank equals spending.
              A satirical throne awaits those willing to part with their coin.
            </motion.p>

            <motion.div
              className="mt-6 text-lg md:text-xl text-royal-gold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="font-medium">Total Money Wasted: </span>
              <motion.span
                className="font-bold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {formatCurrency(Math.floor(Math.random() * 1000000) + 500000)}
              </motion.span>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {!isAuthenticated ? (
                <>
                  <Link to="/signup">
                    <Button
                      size="lg"
                      className="bg-royal-gold text-black hover:bg-royal-gold/90 px-8 py-6 text-lg relative group"
                    >
                      <span className="absolute inset-0 w-full h-full rounded-md blur opacity-30 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:opacity-50 transition duration-300"></span>
                      <motion.span
                        className="relative flex items-center"
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Crown className="mr-2 h-5 w-5" />
                        Claim Your Throne
                      </motion.span>
                    </Button>
                  </Link>
                  <Link to="/leaderboard">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-royal-gold/50 hover:bg-royal-gold/10 px-8 py-6 text-lg"
                    >
                      <Trophy className="mr-2 h-5 w-5" />
                      View Leaderboard
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/deposit">
                    <Button
                      size="lg"
                      className="bg-royal-gold text-black hover:bg-royal-gold/90 px-8 py-6 text-lg relative group"
                    >
                      <span className="absolute inset-0 w-full h-full rounded-md blur opacity-30 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:opacity-50 transition duration-300"></span>
                      <motion.span
                        className="relative flex items-center"
                        whileHover={{
                          scale: 1.05
                        }}
                      >
                        <Coins className="mr-2 h-5 w-5" />
                        {ctaText}
                      </motion.span>
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10 hover:text-royal-gold/90 px-8 py-6 text-lg"
                    >
                      <Crown className="mr-2 h-5 w-5" />
                      View Your Status
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-morphism border-white/10 p-8 rounded-lg text-center h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 flex-grow">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {showFact && (
            <div className="mb-16">
              <RandomAbsurdFact variant="banner" refreshInterval={15000} onClose={() => setShowFact(false)} />
            </div>
          )}
        </div>
      </div>

      {/* Main content section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold royal-gradient mb-4">The Royal Court</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Witness the lavish display of wealth as our nobles compete for position in the digital realm.
          </p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/30 border border-white/10">
              <TabsTrigger value="leaderboard" className="data-[state=active]:bg-royal-gold/20">
                <Trophy className="mr-2 h-4 w-4" />
                Leaderboard
              </TabsTrigger>
              <TabsTrigger value="teams" className="data-[state=active]:bg-royal-gold/20">
                <Users className="mr-2 h-4 w-4" />
                Royal Orders
              </TabsTrigger>
              <TabsTrigger value="status" className="data-[state=active]:bg-royal-gold/20">
                <Sparkles className="mr-2 h-4 w-4" />
                Status Mechanics
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="leaderboard" className="focus-visible:outline-none">
            <div className="max-w-4xl mx-auto">
              <RealTimeLeaderboard />
              <div className="text-center mt-8">
                <Link to="/leaderboard">
                  <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10">
                    View Full Leaderboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="teams" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Crimson Order */}
              <Card className="glass-morphism border-red-500/20 hover:border-red-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-500">
                    <Crown className="mr-2 h-5 w-5" />
                    Order of Crimson
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-10 w-10 text-red-500" />
                  </div>
                  <p className="text-white/70 mb-4">
                    The Crimson Order values boldness and ambition. They believe wealth is meant to be flaunted and status should be visible.
                  </p>
                  <p className="italic text-red-400/70 text-sm">"Fortune favors the bold, and our wallets prove it."</p>
                  
                  <div className="mt-6 p-3 bg-black/30 rounded-lg text-center">
                    <p className="text-sm text-white/60">
                      Total Contributions: {formatCurrency(7543220)}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Emerald Order */}
              <Card className="glass-morphism border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-500">
                    <Crown className="mr-2 h-5 w-5" />
                    Order of Emerald
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-10 w-10 text-green-500" />
                  </div>
                  <p className="text-white/70 mb-4">
                    The Emerald Order believes in strategic wealth deployment. They convert currency to influence with calculated precision.
                  </p>
                  <p className="italic text-green-400/70 text-sm">"Our gold buys more than trinkets—it purchases power."</p>
                  
                  <div className="mt-6 p-3 bg-black/30 rounded-lg text-center">
                    <p className="text-sm text-white/60">
                      Total Contributions: {formatCurrency(6892150)}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sapphire Order */}
              <Card className="glass-morphism border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-500">
                    <Crown className="mr-2 h-5 w-5" />
                    Order of Sapphire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-10 w-10 text-blue-500" />
                  </div>
                  <p className="text-white/70 mb-4">
                    The Sapphire Order champions intellectual superiority. They see wealth as the manifestation of their superior decisions.
                  </p>
                  <p className="italic text-blue-400/70 text-sm">"Our wealth reflects our wisdom, not mere luck."</p>
                  
                  <div className="mt-6 p-3 bg-black/30 rounded-lg text-center">
                    <p className="text-sm text-white/60">
                      Total Contributions: {formatCurrency(7124680)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link to="/teams">
                <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10">
                  See Team Competition Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="status" className="focus-visible:outline-none">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-morphism border-white/10 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bitcoin className="mr-2 h-5 w-5 text-royal-gold" />
                    How Our Status Economy Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    SpendThrone's mechanics are refreshingly transparent. Here's exactly how our digital feudal system functions:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-royal-gold/20 p-2 rounded-full mr-3 mt-1">
                        <Coins className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">$1 = 1 Rank Point</h3>
                        <p className="text-white/70">
                          Every dollar you deposit adds exactly one point to your ranking score. This direct correlation ensures complete transparency in our status mechanics.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-royal-gold/20 p-2 rounded-full mr-3 mt-1">
                        <Trophy className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Permanent Leaderboard</h3>
                        <p className="text-white/70">
                          Unlike other platforms with temporary seasons or resets, our leaderboard is eternal. Your investment in digital status is preserved for all time.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-royal-gold/20 p-2 rounded-full mr-3 mt-1">
                        <Crown className="h-5 w-5 text-royal-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Tier Progression</h3>
                        <p className="text-white/70">
                          As you spend more, you unlock higher tiers of nobility, from Basic Peasant to Royal Elite. Each tier grants additional privileges and cosmetic options.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-black/30 rounded-lg border border-royal-gold/20">
                    <div className="flex items-start">
                      <AlertTriangle className="text-yellow-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-white/80 italic">
                        "SpendThrone is satire, but our mechanics mirror what already exists across social media, gaming, and digital platforms—we're just honest about it."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Link to="/status-through-history">
                  <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10">
                    Explore Status Through History
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-20"
        >
          <div className="glass-morphism border-royal-gold/30 p-10 rounded-lg text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 royal-gradient">Ready to Claim Your Throne?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Join our satirical kingdom where money equals status and the concept of "value" is hilariously distorted.
            </p>
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-royal-gold text-black hover:bg-royal-gold/90 group"
              >
                Start Your Ascension
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <p className="mt-6 text-white/50 text-sm italic">
              "But the emperor has nothing on at all!" — Yes, and we're charging admission to see it.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

// Feature card data
const features = [
  {
    title: "Permanent Rank",
    description: "Your rank on the leaderboard is determined solely by how much you've spent. Every dollar counts towards your eternal glory.",
    icon: <Trophy className="h-8 w-8 text-black" />
  },
  {
    title: "Public Recognition",
    description: "Showcase your wealth and commitment to frivolous spending to the world. Let everyone witness your dedication to the throne.",
    icon: <Crown className="h-8 w-8 text-black" />
  },
  {
    title: "Royal Privileges",
    description: "Unlock exclusive cosmetics, titles, and mockery powers as you ascend through the ranks of nobility.",
    icon: <Gem className="h-8 w-8 text-black" />
  }
];

export default Home;
