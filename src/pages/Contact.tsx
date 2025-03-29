
import React, { useState } from 'react';
import { ArrowLeft, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ThroneChair from '@/components/logos/ThroneChair';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond as soon as possible.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/">
        <Button variant="outline" className="mb-6 glass-morphism border-white/10">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      
      <div className="text-center mb-8">
        <ThroneChair size={80} className="mx-auto mb-4" animate={true} />
        <h1 className="text-4xl font-bold font-royal mb-2">Contact Us</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Have questions or need assistance? Send us a message and we'll get back to you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below to get in touch with our team.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="glass-morphism border-white/10"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass-morphism border-white/10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="glass-morphism border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="glass-morphism border-white/10 min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 mr-2 border-2 border-b-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-white/70">Email</h3>
                <p className="text-royal-gold">support@spendthrone.com</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-white/70">Response Time</h3>
                <p>Typically within 24 hours</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-white/70">Hours</h3>
                <p>Monday - Friday, 9am - 5pm EST</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-white/70">
                Before contacting us, you might find the answer to your question in our FAQ section.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/faq">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Visit FAQ
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Legal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/terms-of-service" className="block text-royal-gold hover:underline">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="block text-royal-gold hover:underline">
                Privacy Policy
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
