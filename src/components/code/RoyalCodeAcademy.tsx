
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code, Terminal, Server, Database, BookOpen, Crown, Brain, Sparkles } from 'lucide-react';
import CodeLanguageCard from './CodeLanguageCard';
import CodeChallengePreview from './CodeChallengePreview';
import { codingLanguages } from '@/data/codingLanguages';

const RoyalCodeAcademy = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(codingLanguages[0]);
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Code className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>The Royal Code Academy</CardTitle>
        </div>
        <CardDescription>
          Master the ancient and modern arts of programming in the royal court
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="languages" className="space-y-4">
          <TabsList className="grid grid-cols-3 glass-morphism">
            <TabsTrigger value="languages" className="flex items-center gap-2">
              <Terminal size={16} />
              <span>Languages</span>
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex items-center gap-2">
              <Crown size={16} />
              <span>Challenges</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Sparkles size={16} />
              <span>Champions</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="languages">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Language Selection Column */}
                <div className="md:w-1/3">
                  <h3 className="text-sm font-medium mb-3 text-white/80">Select Your Path of Study</h3>
                  <ScrollArea className="h-[500px] rounded-md">
                    <div className="space-y-3 pr-4">
                      {codingLanguages.map((language) => (
                        <CodeLanguageCard 
                          key={language.id} 
                          language={language} 
                          isSelected={selectedLanguage.id === language.id}
                          onClick={() => setSelectedLanguage(language)}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                
                {/* Language Details Column */}
                <div className="md:w-2/3">
                  <motion.div
                    key={selectedLanguage.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 rounded-full bg-black/30 border border-white/10">
                          {selectedLanguage.icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{selectedLanguage.name}</h2>
                          <p className="text-sm text-white/60">{selectedLanguage.description}</p>
                        </div>
                      </div>
                      <Badge 
                        className={`${selectedLanguage.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' : 
                                     selectedLanguage.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' : 
                                     'bg-red-500/20 text-red-300'} border-none`}
                      >
                        {selectedLanguage.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                      <h3 className="text-sm font-medium mb-2 text-white/80">Royal Decree</h3>
                      <p className="text-sm italic text-white/70">{selectedLanguage.royalDecree}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2 text-white/80">Example Inscription</h3>
                      <pre className="p-4 rounded-lg bg-black/30 text-sm overflow-x-auto border border-white/10 font-mono text-white/80">
                        {selectedLanguage.codeExample}
                      </pre>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                        <h4 className="text-xs font-medium mb-1 text-white/60">Used For</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedLanguage.usedFor.map((use, index) => (
                            <Badge key={index} variant="outline" className="bg-black/30 border-white/10">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                        <h4 className="text-xs font-medium mb-1 text-white/60">Royal Patronage</h4>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-royal-gold" />
                          <span className="text-sm">{selectedLanguage.learningResources} royal texts</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="challenges" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CodeChallengePreview 
                title="The Siege of Array Castle"
                language="JavaScript"
                difficulty="Easy"
                reward={25}
                description="Sort and filter the castle's inventory during a siege"
              />
              <CodeChallengePreview 
                title="Dragon's Database"
                language="SQL"
                difficulty="Medium"
                reward={50}
                description="Query the dragon's hoard of treasure and knowledge"
              />
              <CodeChallengePreview 
                title="The Recursive Knights"
                language="Python"
                difficulty="Hard"
                reward={100}
                description="Solve the ancient puzzle of the recursive knights' tournament"
              />
              
              <CodeChallengePreview 
                title="Royal API Gateway"
                language="Node.js"
                difficulty="Medium"
                reward={75}
                description="Create an API gateway for the kingdom's services"
              />
              <CodeChallengePreview 
                title="Enchanted Object Factory"
                language="Java"
                difficulty="Hard"
                reward={100}
                description="Implement a factory for creating magical objects"
              />
              <CodeChallengePreview 
                title="Potion Optimization"
                language="C#"
                difficulty="Medium"
                reward={50}
                description="Optimize the potion brewing algorithm for the royal alchemist"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <div className="p-6 text-center">
              <div className="mb-8">
                <Brain className="h-12 w-12 text-royal-gold mx-auto mb-3 animate-pulse-slow" />
                <h3 className="text-xl font-medieval">Champions' Leaderboard Coming Soon</h3>
                <p className="text-white/60 mt-2">
                  The royal scribes are preparing the scrolls to record your achievements
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-morphism border-royal-gold/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">JavaScript Jousters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Terminal className="h-12 w-12 text-yellow-400 mx-auto mb-2 opacity-50" />
                    <p className="text-xs text-center text-white/60">Leaderboard forthcoming</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-royal-gold/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Python Paladins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Server className="h-12 w-12 text-blue-400 mx-auto mb-2 opacity-50" />
                    <p className="text-xs text-center text-white/60">Leaderboard forthcoming</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-morphism border-royal-gold/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">SQL Sorcerers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Database className="h-12 w-12 text-green-400 mx-auto mb-2 opacity-50" />
                    <p className="text-xs text-center text-white/60">Leaderboard forthcoming</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RoyalCodeAcademy;
