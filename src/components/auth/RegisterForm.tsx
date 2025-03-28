
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, User, Mail, Lock, Shield, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { Team, UserGender } from '@/types/user';

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [team, setTeam] = useState<Team>(null);
  const [gender, setGender] = useState<UserGender | ''>('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    if (password !== confirmPassword) {
      setErrorMessage('Royal keys do not match. Please ensure both entries are identical.');
      return;
    }
    
    setIsLoading(true);

    try {
      await register(email, password, username, team, gender as UserGender);
      onSuccess();
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to register. The royal scribe could not record your details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Alert variant="destructive" className="bg-royal-crimson/20 border-royal-crimson/40">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Registration Failed</AlertTitle>
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <div className="space-y-2">
          <Label htmlFor="username" className="flex items-center gap-2">
            <User className="h-4 w-4 text-royal-gold" />
            Noble Name
          </Label>
          <Input
            id="username"
            placeholder="LordGoldspender"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-royal-gold" />
            Royal Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.majesty@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="team" className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-royal-gold" />
              Royal Team
            </Label>
            <Select value={team || ""} onValueChange={(value) => setTeam(value as Team)}>
              <SelectTrigger className="glass-morphism border-white/10">
                <SelectValue placeholder="Select a team" />
              </SelectTrigger>
              <SelectContent className="glass-morphism border-white/10">
                <SelectItem value="red" className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-team-red mr-2"></span>
                  Red Legion
                </SelectItem>
                <SelectItem value="green" className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-team-green mr-2"></span>
                  Green Dynasty
                </SelectItem>
                <SelectItem value="blue" className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-team-blue mr-2"></span>
                  Blue Covenant
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gender" className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-royal-gold" />
              Title
            </Label>
            <Select value={gender} onValueChange={(value) => setGender(value as UserGender)}>
              <SelectTrigger className="glass-morphism border-white/10">
                <SelectValue placeholder="Select title" />
              </SelectTrigger>
              <SelectContent className="glass-morphism border-white/10">
                <SelectItem value="king">King</SelectItem>
                <SelectItem value="queen">Queen</SelectItem>
                <SelectItem value="noble">Noble</SelectItem>
                <SelectItem value="jester">Jester</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-royal-gold" />
            Royal Key
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-royal-gold" />
            Confirm Royal Key
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="glass-morphism border-white/10 focus:border-royal-gold/50 focus:ring-royal-gold/20"
            required
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-royal-gold via-amber-500 to-royal-gold text-black font-bold tracking-wide hover:opacity-90 royal-shadow"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Establishing Nobility...
              </>
            ) : (
              'Claim Your Throne'
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default RegisterForm;
