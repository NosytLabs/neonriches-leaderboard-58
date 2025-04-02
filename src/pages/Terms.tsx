
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';

const TermsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          ← Back
        </Button>
      
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>
            These Terms of Service ("Terms") govern your access to and use of our services, including our various websites, APIs, email notifications, applications, and our other covered services.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">1. Terms of Use</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">2. Privacy Policy</h2>
          <p>
            Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Services is subject to our Privacy Policy.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">3. Account Responsibilities</h2>
          <p>
            You are responsible for safeguarding your account, so use a strong password and limit its use to this account. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">4. Virtual Currency</h2>
          <p>
            Any virtual currency or points system within the Service has no real-world value and cannot be exchanged for real money, goods, or services. We reserve the right to manage, regulate, control, modify, or eliminate virtual currency at any time.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">5. Content Ownership</h2>
          <p>
            You retain your rights to any content you submit, post, or display on or through the Service. By submitting, posting or displaying content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">6. Termination</h2>
          <p>
            We may suspend or terminate your account or cease providing you with all or part of the Services at any time for any or no reason, including, but not limited to, if we reasonably believe: (i) you have violated these Terms, (ii) you create risk or possible legal exposure for us; or (iii) our provision of the Services to you is no longer commercially viable.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">7. Disclaimers and Limitations of Liability</h2>
          <p>
            Your use of the service is at your own risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">8. Changes to Terms</h2>
          <p>
            We may revise these Terms from time to time. The most current version will always be on this page. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms.
          </p>
        </div>
      </div>
    </Shell>
  );
};

export default TermsPage;
