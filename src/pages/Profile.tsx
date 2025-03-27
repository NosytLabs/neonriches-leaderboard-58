
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useAuth, UserProfile } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UserCircle, CreditCard, Settings, LogOut, Image, Link as LinkIcon, Trash2, Plus, Eye } from 'lucide-react';

// Mock profile data - in a real app, this would come from a database
const mockProfileData = {
  bio: "Blockchain enthusiast and digital art collector. Exploring the frontiers of web3 and building the metaverse one transaction at a time.",
  images: [
    { id: 1, url: "https://picsum.photos/id/237/400/300", caption: "My latest NFT acquisition" },
    { id: 2, url: "https://picsum.photos/id/239/400/300", caption: "Digital art collection" },
    { id: 3, url: "https://picsum.photos/id/249/400/300", caption: "Web3 Summit 2023" },
  ],
  links: [
    { id: 1, url: "#", label: "My Crypto Portfolio" },
    { id: 2, url: "#", label: "NFT Gallery" },
    { id: 3, url: "#", label: "Personal Website" },
  ]
};

const Profile = () => {
  const navigate = useNavigate();
  const { user, signOut, updateProfile } = useAuth();
  const { toast } = useToast();
  
  const [profileData, setProfileData] = useState(mockProfileData);
  const [editMode, setEditMode] = useState(false);
  
  // Form states
  const [bio, setBio] = useState(profileData.bio);
  const [images, setImages] = useState(profileData.images);
  const [links, setLinks] = useState(profileData.links);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageCaption, setNewImageCaption] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [newLinkLabel, setNewLinkLabel] = useState("");

  if (!user) {
    // Redirect to login if not authenticated
    navigate('/auth');
    return null;
  }

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const handleSaveProfile = () => {
    // Update profile data
    const updatedProfileData = {
      bio,
      images,
      links
    };
    
    setProfileData(updatedProfileData);
    setEditMode(false);
    
    toast({
      title: "Success",
      description: "Profile updated successfully!",
    });
  };

  const handleAddImage = () => {
    if (!newImageUrl) {
      toast({
        title: "Error",
        description: "Please provide an image URL",
        variant: "destructive"
      });
      return;
    }

    // Check if we've reached the limit based on tier
    if (user.tier === 'free' && images.length >= 1) {
      toast({
        title: "Limit Reached",
        description: "Free tier users can only add 1 image. Upgrade to Pro for more!",
        variant: "destructive"
      });
      return;
    }

    if (user.tier === 'pro' && images.length >= 5) {
      toast({
        title: "Limit Reached",
        description: "You've reached the maximum of 5 images.",
        variant: "destructive"
      });
      return;
    }

    setImages([
      ...images,
      {
        id: Date.now(),
        url: newImageUrl,
        caption: newImageCaption || "My image"
      }
    ]);
    
    setNewImageUrl("");
    setNewImageCaption("");
  };

  const handleRemoveImage = (id: number) => {
    setImages(images.filter(image => image.id !== id));
  };

  const handleAddLink = () => {
    if (!newLinkUrl || !newLinkLabel) {
      toast({
        title: "Error",
        description: "Please provide both URL and label for the link",
        variant: "destructive"
      });
      return;
    }

    // Check if we've reached the limit based on tier
    if (user.tier === 'free' && links.length >= 1) {
      toast({
        title: "Limit Reached",
        description: "Free tier users can only add 1 link. Upgrade to Pro for more!",
        variant: "destructive"
      });
      return;
    }

    if (user.tier === 'pro' && links.length >= 5) {
      toast({
        title: "Limit Reached",
        description: "You've reached the maximum of 5 links.",
        variant: "destructive"
      });
      return;
    }

    setLinks([
      ...links,
      {
        id: Date.now(),
        url: newLinkUrl,
        label: newLinkLabel
      }
    ]);
    
    setNewLinkUrl("");
    setNewLinkLabel("");
  };

  const handleRemoveLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-morphism rounded-xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-background mb-4">
                    <img 
                      src={user.profileImage || "https://i.pravatar.cc/150?img=1"} 
                      alt={user.username} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{user.username}</h2>
                  <div className="mt-1 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70 inline-block">
                    {user.tier === 'pro' ? 'Pro Tier' : 'Free Tier'}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Rank</span>
                    <span className="font-mono font-bold">#{user.rank}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Total Spent</span>
                    <span className="font-mono font-bold">${user.amountSpent}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Team</span>
                    <span className={`font-bold text-team-${user.team || 'red'}`}>
                      {user.team ? `${user.team.charAt(0).toUpperCase()}${user.team.slice(1)}` : 'None'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Spend Streak</span>
                    <span className="font-mono font-bold">{user.spendStreak} weeks</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
                    <UserCircle size={14} className="mr-2" />
                    Your Profile
                  </Button>
                  <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
                    <CreditCard size={14} className="mr-2" />
                    Payment Methods
                  </Button>
                  <Button variant="outline" size="sm" className="w-full glass-morphism border-white/10 text-white hover:bg-white/10">
                    <Settings size={14} className="mr-2" />
                    Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full glass-morphism border-white/10 text-white hover:bg-white/10"
                    onClick={handleLogout}
                  >
                    <LogOut size={14} className="mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gradient">Your Profile</h1>
                
                {editMode ? (
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="glass-morphism border-white/10 text-white hover:bg-white/10"
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
                      onClick={handleSaveProfile}
                    >
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="bg-white/10 hover:bg-white/20 text-white"
                    onClick={() => setEditMode(true)}
                  >
                    <Edit size={16} className="mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
              
              {editMode ? (
                <Card className="glass-morphism border-white/10">
                  <CardContent className="pt-6">
                    <Tabs defaultValue="info">
                      <TabsList className="glass-morphism border-white/10 mb-6">
                        <TabsTrigger value="info">Basic Info</TabsTrigger>
                        <TabsTrigger value="images">Images</TabsTrigger>
                        <TabsTrigger value="links">Links</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="info" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea 
                            id="bio" 
                            placeholder="Tell us about yourself..." 
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="glass-morphism border-white/10 min-h-[120px]"
                            maxLength={user.tier === 'pro' ? 1000 : 200}
                          />
                          <p className="text-xs text-white/50 text-right">
                            {bio.length}/{user.tier === 'pro' ? 1000 : 200} characters
                          </p>
                        </div>
                        
                        <div className="mt-4">
                          <Button 
                            className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
                            onClick={handleSaveProfile}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="images" className="space-y-6">
                        <div className="space-y-4">
                          <Label className="text-base font-medium">Current Images</Label>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {images.map(image => (
                              <div key={image.id} className="glass-morphism rounded-lg p-3 border border-white/10 relative group">
                                <div className="relative aspect-video mb-2 overflow-hidden rounded-md">
                                  <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
                                  <Button 
                                    size="sm"
                                    variant="destructive"
                                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => handleRemoveImage(image.id)}
                                  >
                                    <Trash2 size={14} />
                                  </Button>
                                </div>
                                <p className="text-sm text-white/70 truncate">{image.caption}</p>
                              </div>
                            ))}
                          </div>
                          
                          {((user.tier === 'free' && images.length < 1) || (user.tier === 'pro' && images.length < 5)) && (
                            <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
                              <h3 className="text-base font-medium mb-2">Add New Image</h3>
                              <div className="space-y-2">
                                <div>
                                  <Label htmlFor="imageUrl">Image URL</Label>
                                  <Input 
                                    id="imageUrl" 
                                    type="text" 
                                    placeholder="https://example.com/image.jpg" 
                                    value={newImageUrl}
                                    onChange={(e) => setNewImageUrl(e.target.value)}
                                    className="glass-morphism border-white/10"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="imageCaption">Caption</Label>
                                  <Input 
                                    id="imageCaption" 
                                    type="text" 
                                    placeholder="Image description" 
                                    value={newImageCaption}
                                    onChange={(e) => setNewImageCaption(e.target.value)}
                                    className="glass-morphism border-white/10"
                                  />
                                </div>
                                <Button 
                                  className="w-full mt-2 glass-morphism border-white/10 hover:bg-white/10"
                                  onClick={handleAddImage}
                                >
                                  <Plus size={14} className="mr-2" />
                                  Add Image
                                </Button>
                              </div>
                            </div>
                          )}
                          
                          <div className="text-sm text-white/50">
                            {user.tier === 'free' 
                              ? `Free tier: ${images.length}/1 images used. Upgrade to Pro for up to 5 images!` 
                              : `Pro tier: ${images.length}/5 images used.`}
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="links" className="space-y-6">
                        <div className="space-y-4">
                          <Label className="text-base font-medium">Current Links</Label>
                          
                          <div className="space-y-2">
                            {links.map(link => (
                              <div key={link.id} className="glass-morphism rounded-lg p-3 border border-white/10 flex justify-between items-center">
                                <div className="flex items-center">
                                  <LinkIcon size={14} className="mr-2 text-white/50" />
                                  <div>
                                    <p className="text-sm font-medium">{link.label}</p>
                                    <p className="text-xs text-white/50 truncate max-w-[200px]">{link.url}</p>
                                  </div>
                                </div>
                                <Button 
                                  size="sm"
                                  variant="ghost"
                                  className="text-white/50 hover:text-white hover:bg-white/10"
                                  onClick={() => handleRemoveLink(link.id)}
                                >
                                  <Trash2 size={14} />
                                </Button>
                              </div>
                            ))}
                          </div>
                          
                          {((user.tier === 'free' && links.length < 1) || (user.tier === 'pro' && links.length < 5)) && (
                            <div className="glass-morphism rounded-lg p-4 border border-white/10 mt-4">
                              <h3 className="text-base font-medium mb-2">Add New Link</h3>
                              <div className="space-y-2">
                                <div>
                                  <Label htmlFor="linkUrl">URL</Label>
                                  <Input 
                                    id="linkUrl" 
                                    type="text" 
                                    placeholder="https://example.com" 
                                    value={newLinkUrl}
                                    onChange={(e) => setNewLinkUrl(e.target.value)}
                                    className="glass-morphism border-white/10"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="linkLabel">Label</Label>
                                  <Input 
                                    id="linkLabel" 
                                    type="text" 
                                    placeholder="My Website" 
                                    value={newLinkLabel}
                                    onChange={(e) => setNewLinkLabel(e.target.value)}
                                    className="glass-morphism border-white/10"
                                  />
                                </div>
                                <Button 
                                  className="w-full mt-2 glass-morphism border-white/10 hover:bg-white/10"
                                  onClick={handleAddLink}
                                >
                                  <Plus size={14} className="mr-2" />
                                  Add Link
                                </Button>
                              </div>
                            </div>
                          )}
                          
                          <div className="text-sm text-white/50">
                            {user.tier === 'free' 
                              ? `Free tier: ${links.length}/1 links used. Upgrade to Pro for up to 5 links!` 
                              : `Pro tier: ${links.length}/5 links used.`}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ) : (
                <div className="glass-morphism rounded-xl overflow-hidden" style={{ boxShadow: '0 0 25px rgba(0, 191, 255, 0.15)' }}>
                  <div className="h-40 bg-gradient-to-r from-team-blue/40 via-team-green/30 to-team-red/40 relative">
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                    <Button variant="outline" size="sm" className="absolute top-4 right-4 glass-morphism border-white/20 text-white hover:bg-white/10">
                      <Eye size={14} className="mr-1.5" />
                      Public View
                    </Button>
                  </div>
                  
                  <div className="px-8 pb-8 relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background absolute -top-12 left-8">
                      <img 
                        src={user.profileImage || "https://i.pravatar.cc/200?img=12"} 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="pt-16">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{user.username}</h3>
                          <div className="flex items-center">
                            {user.team && (
                              <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-team-${user.team}/10 text-team-${user.team} border border-team-${user.team}/30 mr-2`}>
                                Team {user.team.charAt(0).toUpperCase() + user.team.slice(1)}
                              </div>
                            )}
                            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                              Rank #{user.rank}
                            </span>
                          </div>
                        </div>
                        
                        <div className="font-mono">
                          <div className="text-2xl font-bold">${user.amountSpent}</div>
                          <div className="text-sm text-white/50 text-right">Total Spent</div>
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-6">
                        {profileData.bio}
                      </p>
                      
                      {profileData.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {profileData.images.map(image => (
                            <div key={image.id} className="glass-morphism rounded-lg p-4 border border-white/10">
                              <img src={image.url} alt={image.caption} className="rounded-lg w-full h-32 object-cover mb-2" />
                              <p className="text-sm text-white/50 text-center">{image.caption}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {profileData.links.length > 0 && (
                        <div className="glass-morphism rounded-lg p-4 border border-white/10">
                          <h4 className="font-medium mb-3">Links</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {profileData.links.map(link => (
                              <a 
                                key={link.id} 
                                href={link.url} 
                                className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <LinkIcon size={14} className="mr-2 text-team-blue" />
                                <span className="text-sm">{link.label}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {user.tier === 'free' && (
                <div className="mt-8 glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-team-red/10 via-team-green/10 to-team-blue/10">
                  <h2 className="text-xl font-bold mb-2">Upgrade to Pro Tier</h2>
                  <p className="text-white/70 mb-4">
                    Unlock premium features and enhance your profile with Pro Tier for just $25.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Extended text (1000 characters)</p>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Up to 5 images</p>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Up to 5 links</p>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Animated RGB borders</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Video embeds</p>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Custom RGB gradients</p>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Hover effects</p>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-white/10 p-1 mr-2">
                          <Plus size={14} className="text-team-green" />
                        </div>
                        <p className="text-sm">Click stats</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white">
                      <CreditCard size={16} className="mr-2" />
                      Upgrade Now - $25
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
