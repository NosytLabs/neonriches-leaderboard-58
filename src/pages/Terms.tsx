
import React from 'react';
import { Shell } from '@/components/ui/shell';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import PageSEO from '@/components/common/PageSEO';
import { Link } from 'react-router-dom';
import { ScrollText, ArrowLeft, Crown, Shield } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <PageSEO 
        title="Royal Decree (Terms of Service) | SpendThrone" 
        description="The official royal decree (terms and conditions) for using the SpendThrone kingdom."
        canonicalUrl="/terms"
      />
      
      <Shell>
        <Container className="py-12">
          <div className="mb-8">
            <Link to="/features" className="text-royal-gold hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Royal Features
            </Link>
          </div>
          
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-royal-gold/10 mb-4">
              <ScrollText className="h-8 w-8 text-royal-gold" />
            </div>
            <h1 className="text-4xl font-bold royal-gradient mb-4">Royal Decree</h1>
            <p className="text-white/70 max-w-3xl mx-auto">
              (Terms of Service) - By royal proclamation, last updated in the Year of Our Lord 2024
            </p>
          </div>
          
          <Card className="glass-morphism border-white/10 p-6 mb-8">
            <div className="prose prose-invert max-w-none">
              <h2>Hear Ye, Hear Ye! Welcome to the Digital Kingdom of SpendThrone</h2>
              <p>
                By royal decree, these Terms of Service shall govern your conduct within our digital realm. 
                All who enter our gates do hereby swear fealty to these terms. Should you find them disagreeable, 
                you are banished forthwith from our kingdom (please close your browser tab).
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Peasant Registration & Royal Authentication</h2>
              <p>
                When creating your royal account, you must provide information as true as a knight's oath and as current as the town crier's news. 
                Failure to do so shall be deemed treasonous and may result in immediate banishment from the realm.
              </p>
              <p>
                You are responsible for safeguarding your secret password scroll. Should your scroll fall into the hands of brigands, we cannot be held responsible for the plundering of your digital coffers.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>The Royal Treasury & Taxation System</h2>
              <p>
                SpendThrone operates by a simple feudal principle: the more gold coins you contribute to the royal coffers, the higher your standing in our court. 
                All purchases are as final as a royal execution - no refunds shall be granted, even if you beg most pitifully.
              </p>
              <p>
                For subscription services, your coin purse shall be lightened on a recurring schedule, much like the royal tax collector's regular visits to the village. 
                You may dismiss your subscription at any time, but like taxes already paid to the crown, no refunds shall be issued for the current period.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Royal Code of Conduct</h2>
              <p>
                All subjects within our digital kingdom are forbidden from:
              </p>
              <ul>
                <li>Violating any kingdom laws (our satire has limits, unlike our pricing structure)</li>
                <li>Impersonating nobility or clergy (be your authentic peasant self)</li>
                <li>Harassing other subjects (our stocks and pillories are for decorative purposes only)</li>
                <li>Submitting false information (our court jesters are the only ones permitted to tell lies)</li>
                <li>Interfering with royal services (our digital serfs work hard to maintain the realm)</li>
                <li>Using our kingdom for unauthorized commercial ventures (the King's merchants have exclusive rights)</li>
              </ul>
              <p>
                Break these sacred rules and you shall be banished faster than a plague-carrier from a medieval village.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Royal Mockery Festival Regulations</h2>
              <p>
                The "Royal Mockery Festival" is our kingdom's grand tradition of good-natured ribbing. However, harassment, 
                bullying, or targeted abuse is considered an affront to the crown and may result in being thrown in the 
                royal dungeon (account termination).
              </p>
              <p>
                Remember, a good jester knows the difference between making the court laugh with someone and at someone. 
                Don't be a bad jester - they were often beheaded.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Royal Intellectual Property Rights</h2>
              <p>
                The SpendThrone service and its original content are the exclusive property of the crown, much like all land 
                technically belongs to the sovereign. Our royal scribes have documented our ownership with the proper authorities 
                in multiple realms.
              </p>
              <p>
                Attempt to copy our royal assets without permission, and we shall dispatch our finest digital knights to your IP address.
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Banishment Procedures</h2>
              <p>
                We reserve the royal right to banish any subject from our digital kingdom immediately, without prior notice or 
                trial by your peers, for any reason whatsoever - much like the capricious monarchs of old.
              </p>
              <p>
                Upon banishment, your right to use our service ends as swiftly as a headsman's axe. If you wish to banish yourself, 
                you may simply ride your digital horse away from our kingdom (stop using the service).
              </p>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>The King's Disclaimers</h2>
              <p>
                In no event shall SpendThrone, nor its royal advisors, knights, squires, or affiliated guilds, be liable for any:
              </p>
              <ul>
                <li>Content errors (sometimes our court historians embellish)</li>
                <li>Personal injury (unless you pulled a muscle while bowing too enthusiastically to your screen)</li>
                <li>Unauthorized access (we cannot help if your password is "dragon123")</li>
                <li>Service interruptions (even royal servers need to feast and rest)</li>
                <li>Digital plagues (viruses lurking in the digital moat are beyond our control)</li>
                <li>Loss of dignity from spending real money on digital status (that's actually the point)</li>
              </ul>
              
              <RoyalDivider variant="simple" color="default" className="my-6" />
              
              <h2>Royal Messengers</h2>
              <p>
                Should you wish to petition the crown regarding these terms, dispatch a royal messenger (email) to 
                royal-decrees@spendthrone.com. Our court scribes shall respond within 2-3 business days, provided they're not 
                preoccupied with illuminating other manuscripts.
              </p>
              <p>
                For faster response, consider attaching gold coins to your message (premium subscription users receive priority 
                in the message queue).
              </p>
            </div>
          </Card>
          
          <div className="text-center text-white/50 text-sm">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-royal-gold" />
              <span>Security is no jest - your data is protected by our finest digital knights</span>
              <Shield className="h-4 w-4 text-royal-gold" />
            </div>
            These terms of service are intended for entertainment as part of our satirical platform. While they reflect actual terms structures with a medieval twist, please remember that SpendThrone is a fictional service.
          </div>
        </Container>
      </Shell>
    </>
  );
};

export default Terms;
