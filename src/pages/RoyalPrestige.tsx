
import React from 'react';

const RoyalPrestige = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Royal Prestige</h1>
      <p className="mb-6">
        Welcome to the exclusive Royal Prestige section, where the elite spenders enjoy special privileges and recognition.
      </p>
      
      <div className="bg-card p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">Benefits of Royalty</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Exclusive royal insignia displayed on your profile</li>
          <li>Ability to issue Royal Decrees</li>
          <li>Access to the Royal Court private chat</li>
          <li>Priority customer support</li>
          <li>Custom profile customization options</li>
        </ul>
      </div>
      
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">How to Attain Royalty</h2>
        <p>
          Continue spending to climb the ranks. The top 10 spenders automatically receive Royal status.
          Alternatively, purchase a Royal Pass for immediate access to Royal Prestige features.
        </p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80">
          Purchase Royal Pass
        </button>
      </div>
    </div>
  );
};

export default RoyalPrestige;
