
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-royal-navy to-black py-28 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-royal-heading bg-clip-text text-transparent bg-gradient-to-r from-royal-gold via-yellow-200 to-royal-gold">
            SPEND THRONE
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-royal-script text-royal-gold">
            Where Your Wallet Determines Your Worth
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
            A satirical pay-to-win social experiment where your rank is determined by how much you spend. Mock others. Rise above. Reign supreme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-royal-gold to-yellow-600 hover:from-yellow-600 hover:to-royal-gold text-black font-bold">
              Start Spending Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-royal-gold text-royal-gold hover:bg-royal-gold/10">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Coin animations */}
      <motion.div 
        className="absolute left-1/4 top-1/4"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, 360], 
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          times: [0, 0.5, 1] 
        }}
      >
        <div className="w-16 h-16 rounded-full bg-royal-gold/70 backdrop-blur-lg shadow-lg shadow-royal-gold/30" />
      </motion.div>
      
      <motion.div 
        className="absolute right-1/4 top-1/3"
        animate={{ 
          y: [0, -30, 0], 
          rotate: [0, -360], 
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          times: [0, 0.5, 1],
          delay: 1
        }}
      >
        <div className="w-20 h-20 rounded-full bg-royal-gold/60 backdrop-blur-lg shadow-lg shadow-royal-gold/20" />
      </motion.div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <CreditCard className="h-12 w-12 text-royal-gold" />,
      title: "Pay-to-Win Leaderboard",
      description: "Your rank is determined by how much you spend. It's that simple."
    },
    {
      icon: <Shield className="h-12 w-12 text-royal-gold" />,
      title: "Join RGB Teams",
      description: "Align with Red, Green, or Blue teams and compete for team supremacy."
    },
    {
      icon: <Star className="h-12 w-12 text-royal-gold" />,
      title: "Royal Mockery",
      description: "Pay to visually mock other users with tomatoes, eggs, and more."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A simple concept executed with satirical brilliance. Spend money, rise through the ranks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border",
                "transform transition-transform hover:scale-105",
                "shadow-xl hover:shadow-2xl hover:shadow-royal-gold/10"
              )}
            >
              <div className="mb-6 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white text-center">{feature.title}</h3>
              <p className="text-white/70 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const teams = [
    {
      name: "Team Red",
      color: "from-red-600 to-red-900",
      textColor: "text-red-500",
      borderColor: "border-red-700/30",
      description: "The fierce warriors who blaze through competition with determination and fire."
    },
    {
      name: "Team Green",
      color: "from-green-600 to-green-900",
      textColor: "text-green-500",
      borderColor: "border-green-700/30",
      description: "The strategic masterminds who grow their wealth and influence with precision."
    },
    {
      name: "Team Blue",
      color: "from-blue-600 to-blue-900",
      textColor: "text-blue-500",
      borderColor: "border-blue-700/30",
      description: "The calm and collected intellects who flow with the currents of victory."
    }
  ];
  
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Choose Your Team</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Select your allegiance and compete for team dominance on the global leaderboard.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                `bg-gradient-to-b ${team.color} rounded-xl p-8`,
                `border ${team.borderColor}`,
                "transform transition-transform hover:scale-105"
              )}
            >
              <h3 className={`text-2xl font-bold mb-4 ${team.textColor}`}>{team.name}</h3>
              <p className="text-white/80">{team.description}</p>
              <div className="mt-6">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Join {team.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Finally, a platform that lets me rise above the peasants through the power of my wallet!",
      author: "Lord Moneybags, Rank #3",
      spent: "$1,500"
    },
    {
      quote: "The joy I felt watching my rank rise after dropping $500 was almost as satisfying as the mockery I unleashed.",
      author: "GoldenSpender, Rank #7",
      spent: "$980"
    },
    {
      quote: "I've never felt more alive than when I'm spending money to climb a meaningless leaderboard.",
      author: "WealthyJester, Rank #12",
      spent: "$750"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Nobles Say</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Hear from the elite who have risen through the ranks with their wallets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-royal-gold/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="text-2xl text-royal-gold mb-2">❝</div>
                    <p className="text-white/90 mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-royal-gold text-sm">Total Spent: {testimonial.spent}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Assert Your Dominance?</h2>
          
          <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
            Your throne awaits, and the path to greatness is paved with dollars. Join now and experience the ultimate pay-to-win social experiment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-royal-gold to-yellow-600 hover:from-yellow-600 hover:to-royal-gold text-black font-bold">
              Claim Your Throne
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-royal-gold text-royal-gold hover:bg-royal-gold/10">
              View Leaderboard
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default IndexPage;
