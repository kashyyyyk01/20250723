import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-stone-300"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
            <img 
              src="/Images/20250711_LPL_White_ccard_Recto.png" 
              alt="Michael Matsos - Coach Psycho-Spirituel" 
              className="h-16 w-auto object-contain"
            />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-stone-700 hover:text-amber-600 transition-colors">Accueil</a>
            <a href="#accompagnements" className="text-stone-700 hover:text-amber-600 transition-colors">Accompagnements</a>
            <a href="#qui-suis-je" className="text-stone-700 hover:text-amber-600 transition-colors">Qui suis-je</a>
            <a href="#contact" className="text-stone-700 hover:text-amber-600 transition-colors">Contact</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition-colors"
          >
            Séance découverte
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;