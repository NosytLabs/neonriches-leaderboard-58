
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/auth';

interface SuggestionFormProps {
  onSubmit: (suggestion: any) => void;
  onCancel: () => void;
}

const SuggestionForm: React.FC<SuggestionFormProps> = ({ onSubmit, onCancel }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('feature');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    
    setIsSubmitting(true);
    
    // Create a new suggestion object
    const newSuggestion = {
      id: Date.now(), // This would be handled by the backend in a real app
      title,
      description,
      category,
      status: 'idea',
      votes: 0,
      comments: 0,
      author: user?.username || 'Anonymous',
      date: new Date().toISOString().split('T')[0],
      isVotedUp: false,
      isVotedDown: false
    };
    
    // Simulate API call delay
    setTimeout(() => {
      onSubmit(newSuggestion);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">Suggest a New Feature</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter a concise title for your suggestion"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="glass-morphism border-white/10"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="glass-morphism border-white/10">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feature">Feature</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="profile">Profile</SelectItem>
                <SelectItem value="crypto">Crypto</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of your suggestion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="glass-morphism border-white/10 min-h-[120px]"
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end space-x-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            className="glass-morphism border-white/10"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting || !title || !description}
            className="royal-button"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SuggestionForm;
