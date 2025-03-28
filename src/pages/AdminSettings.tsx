
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Crown, Settings, Globe, Palette } from 'lucide-react';
import SeoSettings from '@/components/admin/SeoSettings';
import { useToastContext } from '@/contexts/ToastContext';
import { SecurityLevel, useProtectedRoute } from '@/lib/security';

const AdminSettings = () => {
  const { user } = useAuth();
  const { addToast } = useToastContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("seo");
  const { isAuthorized, isLoading } = useProtectedRoute(SecurityLevel.HIGH);
  
  if (isLoading) {
    return (
      <DashboardLayout showHeader={false}>
        <div className="flex justify-center items-center h-64">
          <div className="h-12 w-12 border-4 border-t-transparent border-royal-gold rounded-full animate-spin"></div>
        </div>
      </DashboardLayout>
    );
  }
  
  if (!isAuthorized) {
    return (
      <DashboardLayout showHeader={false}>
        <div className="text-center py-12">
          <Shield className="h-16 w-16 text-royal-crimson mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
          <p className="text-white/70 max-w-md mx-auto mb-6">
            Only the highest-ranking nobles may access the royal administrative chambers.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-royal-gold hover:bg-royal-gold/90 text-black px-4 py-2 rounded-md"
          >
            Return to your chambers
          </button>
        </div>
      </DashboardLayout>
    );
  }
  
  const handleSeoSave = (seoData: any) => {
    console.log('Saving SEO data:', seoData);
    
    // In a real application, you would save this to a database
    addToast({
      title: "Settings Saved",
      description: "Your royal branding settings have been updated successfully.",
      duration: 3000,
    });
  };
  
  return (
    <DashboardLayout
      title="Royal Administrative Chamber"
      subtitle="Maintain your kingdom's appearance and functionality with these powerful tools."
      icon={<Crown size={32} className="text-royal-gold" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="glass-morphism border-white/10 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h3 className="font-medium flex items-center">
                <Settings className="h-4 w-4 mr-2 text-royal-gold" />
                Settings Menu
              </h3>
            </div>
            
            <div className="p-2">
              <TabsList className="flex flex-col w-full bg-transparent space-y-1">
                <TabsTrigger 
                  value="seo" 
                  className="justify-start w-full data-[state=active]:bg-royal-gold/10 rounded-md"
                  onClick={() => setActiveTab("seo")}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  SEO & Branding
                </TabsTrigger>
                <TabsTrigger 
                  value="appearance" 
                  className="justify-start w-full data-[state=active]:bg-royal-gold/10 rounded-md"
                  onClick={() => setActiveTab("appearance")}
                >
                  <Palette className="h-4 w-4 mr-2" />
                  Site Appearance
                </TabsTrigger>
                <TabsTrigger 
                  value="access" 
                  className="justify-start w-full data-[state=active]:bg-royal-gold/10 rounded-md"
                  onClick={() => setActiveTab("access")}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Access Control
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <div className="mt-6 p-4 glass-morphism border-royal-gold/10 rounded-lg">
            <h4 className="text-sm font-medium flex items-center mb-2">
              <Crown className="h-4 w-4 mr-2 text-royal-gold" />
              Administrative Status
            </h4>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-white/70">Royal privileges active</span>
            </div>
            <p className="text-xs text-white/50 mt-3 italic">
              With great power comes great responsibility. Use your administrative powers wisely, noble ruler.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <Tabs value={activeTab} className="w-full">
            <TabsContent value="seo" className="mt-0">
              <SeoSettings onSave={handleSeoSave} />
            </TabsContent>
            <TabsContent value="appearance" className="mt-0">
              <div className="glass-morphism border-white/10 p-8 rounded-lg flex items-center justify-center">
                <p className="text-white/70 text-center italic">
                  Appearance settings coming soon to SpendThrone...
                </p>
              </div>
            </TabsContent>
            <TabsContent value="access" className="mt-0">
              <div className="glass-morphism border-white/10 p-8 rounded-lg flex items-center justify-center">
                <p className="text-white/70 text-center italic">
                  Access control settings coming soon to SpendThrone...
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminSettings;
