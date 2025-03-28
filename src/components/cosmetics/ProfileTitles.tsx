
import React, { useState } from 'react';
import { UserProfile } from '@/types/user';
import { MedievalTitle, TitleCategory, MEDIEVAL_TITLES, getDiscountedTitlePrice } from '@/types/medievalTitles';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Crown, Shield, Swords, Book, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProfileTitlesProps {
  onPurchase: (name: string, price: number, category: string, itemId: string) => Promise<void>;
  user: UserProfile | null;
  onSelectTitle: (titleId: string) => void;
}

const ProfileTitles: React.FC<ProfileTitlesProps> = ({ onPurchase, user, onSelectTitle }) => {
  const [activeCategory, setActiveCategory] = useState<TitleCategory>('common');
  const { toast } = useToast();
  
  const userTitles = user?.cosmetics?.titles || [];
  const activeTitle = user?.activeTitle || '';

  // Group titles by category for the tabs
  const categories: { id: TitleCategory; label: string; icon: JSX.Element }[] = [
    { id: 'common', label: 'Common', icon: <User size={14} /> },
    { id: 'noble', label: 'Noble', icon: <Shield size={14} /> },
    { id: 'royal', label: 'Royal', icon: <Crown size={14} /> },
    { id: 'military', label: 'Military', icon: <Swords size={14} /> },
    { id: 'scholarly', label: 'Scholarly', icon: <Book size={14} /> }
  ];

  // Filter titles by category
  const filteredTitles = MEDIEVAL_TITLES.filter(title => title.category === activeCategory);

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
      case 'uncommon':
        return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'rare':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'epic':
        return 'bg-purple-400/20 text-purple-400 border-purple-400/40';
      case 'legendary':
        return 'bg-royal-gold/20 text-royal-gold border-royal-gold/40';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
    }
  };

  const handlePurchaseTitle = async (title: MedievalTitle) => {
    if (!user) return;
    const price = getDiscountedTitlePrice(title, user.amountSpent);
    
    try {
      await onPurchase(title.name, price, 'titles', title.id);
      toast({
        title: `Title Acquired: ${title.name}`,
        description: "Your new title has been added to your collection."
      });
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "Could not acquire the title. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSelectTitle = (titleId: string) => {
    onSelectTitle(titleId);
    toast({
      title: "Title Selected",
      description: "Your profile will now display this title."
    });
  };

  // Check if title is available based on requirements
  const isTitleAvailable = (title: MedievalTitle): boolean => {
    if (!title.unlockRequirement) return true;
    
    if (title.id === 'king' || title.id === 'queen') {
      return user?.rank === 1;
    }
    
    if (title.id === 'founder') {
      return user?.cosmetics?.foundersPass === true;
    }
    
    return true;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold royal-gradient font-medieval">Royal Titles</h3>
      <p className="text-white/70">Enhance your profile with prestigious titles to display your status.</p>
      
      <Tabs defaultValue="common" value={activeCategory} onValueChange={(v) => setActiveCategory(v as TitleCategory)}>
        <TabsList className="glass-morphism">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              {category.icon}
              <span className="hidden sm:inline">{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        <ScrollArea className="h-[400px] pr-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTitles.map((title) => {
              const isOwned = userTitles.includes(title.id);
              const isActive = activeTitle === title.id;
              const isAvailable = isTitleAvailable(title);
              const titlePrice = user ? getDiscountedTitlePrice(title, user.amountSpent) : title.price;
              
              return (
                <div key={title.id} className={`glass-morphism border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-royal-gold/30 ${!isAvailable ? 'opacity-70' : ''}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medieval royal-gradient text-lg">{title.name}</h4>
                      <p className="text-xs text-white/60">${titlePrice.toFixed(2)}</p>
                    </div>
                    <div className="flex gap-2">
                      {isOwned && (
                        <Badge variant="outline" className="bg-royal-gold/20 border-royal-gold/40 text-royal-gold">
                          Owned
                        </Badge>
                      )}
                      <Badge className={getRarityClass(title.rarity)}>
                        {title.rarity.charAt(0).toUpperCase() + title.rarity.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/70 mb-4">
                    {title.description}
                  </p>
                  
                  {title.unlockRequirement && (
                    <div className="bg-purple-900/20 border border-purple-900/40 rounded-md p-2 mb-4 text-xs text-white/70">
                      <span className="font-bold text-purple-400">Unlock Requirement:</span> {title.unlockRequirement}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    {isOwned ? (
                      <RoyalButton
                        variant={isActive ? "royalGold" : "outline"}
                        size="sm"
                        className="flex-1"
                        onClick={() => handleSelectTitle(title.id)}
                      >
                        {isActive ? 'Currently Selected' : 'Select Title'}
                      </RoyalButton>
                    ) : (
                      <RoyalButton
                        variant="royalGold"
                        size="sm"
                        className="flex-1"
                        disabled={!isAvailable}
                        onClick={() => handlePurchaseTitle(title)}
                      >
                        {isAvailable ? `Purchase for $${titlePrice.toFixed(2)}` : 'Not Available'}
                      </RoyalButton>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </Tabs>
      
      <div className="glass-morphism border-white/10 rounded-lg p-4 mt-6">
        <h4 className="font-medium mb-2">Currently Selected Title</h4>
        <p className="text-white/70 text-sm">
          {activeTitle ? (
            <>Your profile displays the title: <span className="font-medieval text-royal-gold">{MEDIEVAL_TITLES.find(t => t.id === activeTitle)?.name || ''}</span></>
          ) : (
            "You haven't selected any title to display."
          )}
        </p>
      </div>
    </div>
  );
};

export default ProfileTitles;
