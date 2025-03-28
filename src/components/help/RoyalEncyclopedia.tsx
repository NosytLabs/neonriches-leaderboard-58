
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollText, Crown, Shield, Coins, Target, Users, Info, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import RoyalDivider from '@/components/ui/royal-divider';
import { MockeryTier } from '@/components/mockery/hooks/useMockery';
import { getMockeryTierColor, getMockeryTierLabel } from '@/components/mockery/utils/mockeryUtils';
import { cn } from '@/lib/utils';

// Article interfaces
interface ArticleTag {
  id: string;
  name: string;
  color?: string;
}

interface Article {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  tags: ArticleTag[];
  category: 'mockery' | 'leaderboard' | 'general' | 'teams' | 'events';
  lastUpdated?: string;
}

// Mock tags
const tags: ArticleTag[] = [
  { id: 'mockery', name: 'Mockery', color: 'text-royal-crimson' },
  { id: 'cosmetic', name: 'Cosmetic', color: 'text-emerald-500' },
  { id: 'leaderboard', name: 'Leaderboard', color: 'text-royal-gold' },
  { id: 'spending', name: 'Spending', color: 'text-royal-navy' },
  { id: 'teams', name: 'Teams', color: 'text-royal-purple' },
  { id: 'events', name: 'Events', color: 'text-amber-500' },
];

// Article content components
const MockeryTiersContent = () => {
  const tiers: MockeryTier[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  
  return (
    <div className="space-y-6">
      <p>
        The Royal Mockery system features five tiers of mockery effects, each with increasing
        visual impact, duration, and pricing. These tiers represent the hierarchy of mockery in the kingdom.
      </p>
      
      <div className="space-y-4">
        {tiers.map(tier => {
          const colors = getMockeryTierColor(tier);
          return (
            <div key={tier} className={cn(
              "p-4 rounded-lg border",
              colors.border,
              colors.bg
            )}>
              <h4 className={cn("text-lg font-bold mb-1", colors.text)}>
                {getMockeryTierLabel(tier)} Tier
              </h4>
              <p className="text-white/80 text-sm">
                {tier === 'common' && "Basic visual effects with a 24-hour duration. Affordable options for everyday mockery."}
                {tier === 'uncommon' && "Enhanced visual effects with a 48-hour duration. Better value for those seeking extended mockery."}
                {tier === 'rare' && "Premium visual effects with a 72-hour duration. These are notable mockeries that stand out."}
                {tier === 'epic' && "Site-wide announcement effects with a 5-day duration. Makes a significant statement."}
                {tier === 'legendary' && "Transformative effects with a full week duration. The ultimate mockery experience."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CosmeticEffectsContent = () => (
  <div className="space-y-4">
    <p>
      All mockery effects in P2W.FUN are purely cosmetic and visual. These effects do not impact
      a user's actual rank, spending total, or standing in any way. They are designed purely for
      entertainment and satirical purposes.
    </p>
    
    <div className="glass-morphism border-white/10 p-4 rounded-lg">
      <h4 className="text-lg font-bold mb-2 text-royal-gold">What Mockery Effects Do:</h4>
      <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li>Add visual embellishments to a user's profile or card</li>
        <li>Display special animations and particle effects</li>
        <li>Show special indicators in leaderboards and user lists</li>
        <li>Create humorous scenarios in a medieval/royal theme</li>
        <li>Last for a specific duration before automatically expiring</li>
      </ul>
    </div>
    
    <div className="glass-morphism border-royal-crimson/20 p-4 rounded-lg bg-royal-crimson/5">
      <h4 className="text-lg font-bold mb-2 text-royal-crimson">What Mockery Effects DON'T Do:</h4>
      <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li>Affect a user's position in the leaderboard</li>
        <li>Reduce a user's spending total or contribution</li>
        <li>Prevent users from any site functionality</li>
        <li>Harass users in any meaningful way</li>
        <li>Extend beyond their stated duration</li>
      </ul>
    </div>
  </div>
);

const LeaderboardPrinciplesContent = () => (
  <div className="space-y-4">
    <p>
      The P2W.FUN leaderboard operates on a simple principle: rank is determined solely by your total spending.
      Each dollar spent equals one unit of rank. This system is transparent, persistent, and never resets.
    </p>
    
    <div className="glass-morphism border-white/10 p-4 rounded-lg">
      <h4 className="text-lg font-bold mb-2 text-royal-gold">Key Leaderboard Features:</h4>
      <ul className="list-disc pl-5 space-y-2 text-white/80">
        <li>Your rank is directly proportional to your spending ($1 = 1 rank unit)</li>
        <li>The leaderboard is persistent and never resets</li>
        <li>Ranks update in real-time as users spend</li>
        <li>Top-ranking users receive special visual indicators</li>
        <li>Team contributions affect the team leaderboard separately</li>
      </ul>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="glass-morphism border-royal-gold/30 p-3 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-royal-gold flex items-center justify-center text-black font-bold">1</div>
          <h5 className="font-bold text-royal-gold">First Place</h5>
        </div>
        <p className="text-sm text-white/70">
          The #1 ranked user receives a golden crown and special visual effects.
        </p>
      </div>
      
      <div className="glass-morphism border-white/20 p-3 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold">2</div>
          <h5 className="font-bold text-gray-300">Second Place</h5>
        </div>
        <p className="text-sm text-white/70">
          The #2 ranked user receives a silver crown and distinguished effects.
        </p>
      </div>
      
      <div className="glass-morphism border-amber-600/30 p-3 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">3</div>
          <h5 className="font-bold text-amber-600">Third Place</h5>
        </div>
        <p className="text-sm text-white/70">
          The #3 ranked user receives a bronze crown and notable effects.
        </p>
      </div>
    </div>
  </div>
);

// Mock articles
const articles: Article[] = [
  {
    id: 'mockery-tiers',
    title: 'Mockery Tiers Explained',
    description: 'Learn about the five tiers of mockery effects and their impact',
    content: <MockeryTiersContent />,
    tags: [
      tags.find(t => t.id === 'mockery')!,
      tags.find(t => t.id === 'cosmetic')!
    ],
    category: 'mockery',
    lastUpdated: '2023-06-15'
  },
  {
    id: 'cosmetic-effects',
    title: 'Understanding Cosmetic Effects',
    description: 'How mockery effects work and what they mean',
    content: <CosmeticEffectsContent />,
    tags: [
      tags.find(t => t.id === 'mockery')!,
      tags.find(t => t.id === 'cosmetic')!
    ],
    category: 'mockery',
    lastUpdated: '2023-06-18'
  },
  {
    id: 'leaderboard-principles',
    title: 'Leaderboard Principles',
    description: 'How the P2W.FUN leaderboard system works',
    content: <LeaderboardPrinciplesContent />,
    tags: [
      tags.find(t => t.id === 'leaderboard')!,
      tags.find(t => t.id === 'spending')!
    ],
    category: 'leaderboard',
    lastUpdated: '2023-06-20'
  }
];

interface RoyalEncyclopediaProps {
  className?: string;
}

const RoyalEncyclopedia: React.FC<RoyalEncyclopediaProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Filter articles based on search query and active category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ScrollText className="h-5 w-5 text-royal-gold" />
          Royal Encyclopedia
        </CardTitle>
        <CardDescription>
          The definitive guide to all things P2W.FUN
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="browse" className="flex items-center gap-2">
              <Crown className="h-4 w-4" /> Browse
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" /> Search
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="space-y-4">
            <div className="flex overflow-x-auto pb-2 gap-2">
              <button
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm whitespace-nowrap",
                  activeCategory === 'all'
                    ? "bg-royal-purple text-white"
                    : "glass-morphism border-white/10 text-white/70 hover:text-white/90"
                )}
                onClick={() => setActiveCategory('all')}
              >
                All Topics
              </button>
              
              {['mockery', 'leaderboard', 'general', 'teams', 'events'].map(category => (
                <button
                  key={category}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm whitespace-nowrap",
                    activeCategory === category
                      ? "bg-royal-purple text-white"
                      : "glass-morphism border-white/10 text-white/70 hover:text-white/90"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredArticles.map(article => (
                <div
                  key={article.id}
                  className="glass-morphism border-white/10 p-4 rounded-lg cursor-pointer hover:border-white/20 transition-all"
                  onClick={() => setSelectedArticle(article)}
                >
                  <h3 className="font-bold mb-1">{article.title}</h3>
                  <p className="text-sm text-white/70 mb-3">{article.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {article.tags.map(tag => (
                        <span 
                          key={tag.id} 
                          className={cn(
                            "text-xs px-2 py-0.5 rounded-full bg-white/10", 
                            tag.color
                          )}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    
                    {article.lastUpdated && (
                      <span className="text-xs text-white/50">
                        Updated: {article.lastUpdated}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="search">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
                <Input
                  type="text"
                  placeholder="Search the Royal Encyclopedia..."
                  className="w-full pl-9 bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {searchQuery && (
                <div className="text-sm text-white/70 p-2">
                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-8">
                      <Info className="h-12 w-12 mx-auto text-white/30 mb-2" />
                      <p>No articles found for "{searchQuery}"</p>
                    </div>
                  ) : (
                    <p>Found {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} for "{searchQuery}"</p>
                  )}
                </div>
              )}
              
              <div className="space-y-2">
                {searchQuery && filteredArticles.map(article => (
                  <div
                    key={article.id}
                    className="glass-morphism border-white/10 p-3 rounded-lg cursor-pointer hover:border-white/20 transition-all"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <h3 className="font-bold">{article.title}</h3>
                    <p className="text-sm text-white/70">{article.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {selectedArticle && (
          <>
            <RoyalDivider variant="line" className="my-6" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-royal-gold">{selectedArticle.title}</h2>
                <button 
                  className="text-sm text-white/60 hover:text-white/90 transition-colors"
                  onClick={() => setSelectedArticle(null)}
                >
                  ← Back
                </button>
              </div>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {selectedArticle.tags.map(tag => (
                  <span 
                    key={tag.id} 
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full bg-white/10", 
                      tag.color
                    )}
                  >
                    {tag.name}
                  </span>
                ))}
                
                {selectedArticle.lastUpdated && (
                  <span className="text-xs text-white/50 ml-auto">
                    Updated: {selectedArticle.lastUpdated}
                  </span>
                )}
              </div>
              
              <div className="prose prose-invert max-w-none prose-p:text-white/80 prose-headings:text-white">
                {selectedArticle.content}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RoyalEncyclopedia;
