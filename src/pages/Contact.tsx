
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Mail, MessageCircle, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Contact Support</h1>
            <p className="text-white/70">
              Have questions or need assistance? Our support team is here to help you with any inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-royal-gold mr-2" />
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white/80 text-sm">Your Name</label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white/80 text-sm">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-white/80 text-sm">Subject</label>
                    <Select value={subject} onValueChange={setSubject} required>
                      <SelectTrigger className="bg-white/5 border-white/10">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="payment">Payment Problems</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white/80 text-sm">Your Message</label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      required
                      className="bg-white/5 border-white/10 min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-morphism border-white/10 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Mail className="h-5 w-5 text-royal-gold mr-2" />
                  Contact Information
                </h2>
                
                <div className="space-y-4 text-white/80">
                  <p className="flex flex-col">
                    <span className="text-sm text-white/60">Email</span>
                    <a href="mailto:support@spendthrone.com" className="hover:text-royal-gold">
                      support@spendthrone.com
                    </a>
                  </p>
                  
                  <p className="flex flex-col">
                    <span className="text-sm text-white/60">Business Hours</span>
                    <span>Monday - Friday, 9AM - 5PM EST</span>
                  </p>
                  
                  <p className="flex flex-col">
                    <span className="text-sm text-white/60">Response Time</span>
                    <span>Within 24-48 hours</span>
                  </p>
                </div>
              </div>
              
              <div className="glass-morphism border-royal-gold/20 bg-royal-gold/10 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Crown className="h-5 w-5 text-royal-gold mr-2" />
                  Royal Support
                </h2>
                
                <p className="text-white/80 mb-4">
                  Users with Royal tier or higher receive priority support with guaranteed response within 4 hours.
                </p>
                
                <Button variant="royal" size="sm" asChild>
                  <Link to="/royal-prestige">Upgrade to Royal</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">How do I reset my password?</h3>
                <p className="text-white/70">
                  You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Are all transactions final?</h3>
                <p className="text-white/70">
                  Yes, all transactions on SpendThrone are final and non-refundable. Please spend responsibly.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">How do I join a team?</h3>
                <p className="text-white/70">
                  You can join a team (Red, Green, or Blue) from your dashboard after making your first deposit.
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <Button variant="link" asChild>
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
