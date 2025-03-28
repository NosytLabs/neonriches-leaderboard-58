
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { Crown, Send } from 'lucide-react';

const SuggestionForm: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('feature');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to submit suggestions.",
        variant: "destructive"
      });
      return;
    }
    
    if (!title || !description) {
      toast({
        title: "Incomplete Submission",
        description: "Please provide both a title and description for your suggestion.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Suggestion Submitted",
        description: "Your royal suggestion has been received and will be reviewed by the council.",
      });
      
      // Reset form
      setTitle('');
      setCategory('feature');
      setDescription('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Suggestion Title</Label>
        <Input 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="glass-morphism border-white/10"
          placeholder="Enter a concise title for your suggestion"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select 
          value={category} 
          onValueChange={setCategory}
          disabled={isSubmitting}
        >
          <SelectTrigger id="category" className="glass-morphism border-white/10">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="glass-morphism border-white/10">
            <SelectItem value="feature">New Feature</SelectItem>
            <SelectItem value="improvement">Improvement</SelectItem>
            <SelectItem value="event">Event Idea</SelectItem>
            <SelectItem value="cosmetic">Cosmetic Item</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="glass-morphism border-white/10 min-h-[120px]"
          placeholder="Describe your suggestion in detail..."
          disabled={isSubmitting}
        />
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full glass-morphism bg-gradient-to-r from-royal-gold via-royal-gold/80 to-royal-gold text-black hover:opacity-90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Suggestion
            </>
          )}
        </Button>
      </div>
      
      {!user && (
        <div className="glass-morphism border-white/10 p-3 rounded-lg flex items-center text-sm text-white/70">
          <Crown className="h-4 w-4 text-royal-gold mr-2" />
          <span>Please sign in to submit your royal suggestion.</span>
        </div>
      )}
    </form>
  );
};

export default SuggestionForm;
