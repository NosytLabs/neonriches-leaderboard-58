
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useNotificationSounds } from '@/hooks/sounds/use-notification-sounds';

const SuggestionForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('feature');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { playNotificationSound } = useNotificationSounds();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    
    try {
      // Validate inputs
      if (title.trim().length < 5) {
        throw new Error('Title must be at least 5 characters long');
      }
      
      if (description.trim().length < 20) {
        throw new Error('Description must be at least 20 characters long');
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      playNotificationSound('success');
      setStatus('success');
      setTitle('');
      setDescription('');
      setCategory('feature');
    } catch (error: any) {
      playNotificationSound('error');
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit suggestion');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' && (
        <Alert className="bg-green-500/20 border-green-500/40">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <AlertTitle>Suggestion Submitted</AlertTitle>
          <AlertDescription>
            Your suggestion has been successfully submitted for royal consideration.
          </AlertDescription>
        </Alert>
      )}
      
      {status === 'error' && (
        <Alert className="bg-royal-crimson/20 border-royal-crimson/40">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Submission Failed</AlertTitle>
          <AlertDescription>
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="title">Suggestion Title</Label>
        <Input
          id="title"
          placeholder="Enter a concise title for your suggestion"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="glass-morphism border-white/10"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="glass-morphism border-white/10">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="glass-morphism border-white/10">
            <SelectItem value="feature">New Feature</SelectItem>
            <SelectItem value="improvement">Improvement</SelectItem>
            <SelectItem value="cosmetic">Cosmetic Items</SelectItem>
            <SelectItem value="event">Event Ideas</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe your suggestion in detail..."
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="glass-morphism border-white/10 resize-none"
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-royal-gold via-amber-500 to-royal-gold text-black font-bold hover:opacity-90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit for Royal Consideration'
        )}
      </Button>
    </form>
  );
};

export default SuggestionForm;
