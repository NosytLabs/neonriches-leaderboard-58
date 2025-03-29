
import { ReactNode } from 'react';

export const featuresContent = {
  sections: [
    {
      title: 'Core Features',
      content: [
        'SpendThrone is a satirical exploration of digital status economies. Here are our core features:',
        `<ul className="list-disc pl-6 my-4 space-y-2 text-white/80">
          <li><strong>Dollar-Driven Rank:</strong> Your position on our leaderboard is determined solely by your financial contributions. $1 = 1 unit of rank.</li>
          <li><strong>Persistent Leaderboard:</strong> Unlike traditional games, our leaderboard never resets. Your status is permanent (or at least as permanent as our servers).</li>
          <li><strong>Team Competition:</strong> Join one of three teams (Red, Green, or Blue) and compete collectively for team glory and recognition.</li>
          <li><strong>Profile Customization:</strong> Create and customize your profile with different tiers of enhancement based on your spending.</li>
          <li><strong>Mockery System:</strong> Our revolutionary mockery system allows you to pay to apply cosmetic mockery effects to other users.</li>
        </ul>`
      ]
    },
    {
      title: 'Two-Tiered Profile System',
      content: [
        'Our profile systems allows for different levels of customization:',
        `<div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="glass-morphism border-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Free Tier ($1+)</h3>
            <ul className="list-disc pl-6 space-y-1 text-white/80">
              <li>Basic text editor (200 characters)</li>
              <li>One image upload (max 500KB)</li>
              <li>One external link</li>
              <li>Basic profile statistics</li>
            </ul>
          </div>
          <div className="glass-morphism border-royal-gold/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-royal-gold">Pro Tier ($25+)</h3>
            <ul className="list-disc pl-6 space-y-1 text-white/80">
              <li>Enhanced text editor (1000 characters)</li>
              <li>Up to 5 images (max 2MB each)</li>
              <li>Up to 5 external links</li>
              <li>Animated RGB borders</li>
              <li>Video embeds (YouTube, Vimeo)</li>
              <li>Custom RGB gradients</li>
              <li>Hover effects</li>
              <li>Click statistics</li>
            </ul>
          </div>
        </div>`
      ]
    },
    {
      title: 'RGB Teams',
      content: [
        'Choose from one of three distinctive teams:',
        `<div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-gradient-to-b from-red-900/50 to-red-800/20 border border-red-700/30 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Red Team</h3>
            <p className="text-white/70">The team of neon fire and passion. Known for their aggressive spending strategies.</p>
          </div>
          <div className="bg-gradient-to-b from-green-900/50 to-green-800/20 border border-green-700/30 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-400">Green Team</h3>
            <p className="text-white/70">The team of lime zap and precision. Strategic spenders with a focus on efficiency.</p>
          </div>
          <div className="bg-gradient-to-b from-blue-900/50 to-blue-800/20 border border-blue-700/30 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Blue Team</h3>
            <p className="text-white/70">The team of cool pulse and calculation. Known for their methodical approach to climbing the ranks.</p>
          </div>
        </div>`,
        'Team rankings are based on the total spent by all team members, and special team challenges occur weekly for bonus rewards.'
      ]
    },
    {
      title: 'Mockery Festival',
      content: [
        "Our Royal Mockery Festival is a satirical take on social status systems. For a small fee, users can apply cosmetic mockery effects to other users' profiles. These effects are purely visual and have no functional impact on the platform.",
        `<div className="my-6 glass-morphism border-royal-crimson/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-royal-crimson">Available Mockery Types</h3>
          <ul className="list-disc pl-6 space-y-1 text-white/80">
            <li><strong>Tomatoes ($10):</strong> Pelt the user with virtual tomatoes</li>
            <li><strong>Eggs ($15):</strong> Bombard with digital eggs</li>
            <li><strong>Stocks ($20):</strong> Place in virtual stocks for public ridicule</li>
            <li><strong>Silence ($25):</strong> Temporarily silence in public forums</li>
            <li><strong>Court Jester ($30):</strong> Appoint as the court jester</li>
          </ul>
          <p className="mt-4 text-white/70 italic">
            "In our castle, mockery is just another commodity to be bought and sold."
          </p>
        </div>`,
        "Users can purchase Mockery Protection for $10 per day to shield themselves from these effects."
      ]
    },
    {
      title: 'Payment Options',
      content: [
        'SpendThrone offers multiple payment options:',
        `<ul className="list-disc pl-6 my-4 space-y-2 text-white/80">
          <li><strong>Fiat Currency:</strong> Traditional payment methods including credit/debit cards and PayPal</li>
          <li><strong>Cryptocurrency:</strong> Solana wallet integration for crypto payments</li>
          <li><strong>In-Platform Wallet:</strong> Load your on-platform wallet and spend from there</li>
        </ul>`
      ]
    }
  ]
};
