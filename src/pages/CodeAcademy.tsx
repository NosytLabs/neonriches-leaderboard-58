
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import RoyalCodeAcademy from '@/components/code/RoyalCodeAcademy';

const CodeAcademy = () => {
  return (
    <>
      <Helmet>
        <title>Royal Code Academy | SpendThrone</title>
      </Helmet>
      
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold font-medieval mb-2">Royal Code Academy</h1>
          <p className="text-white/70">
            Master the arcane arts of programming in the royal court
          </p>
        </motion.div>
        
        <div className="space-y-8">
          <RoyalCodeAcademy />
          
          {/* Future sections could be added here:
              - Interactive code playground
              - Coding challenges
              - Royal code library
              - Educational content
          */}
        </div>
      </div>
    </>
  );
};

export default CodeAcademy;
