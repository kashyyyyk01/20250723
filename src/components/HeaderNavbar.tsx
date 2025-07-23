import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">LPL</span>
    </div>
    <span className="text-stone-800 font-semibold text-xl">LetsplayLife</span>
  </div>
);

const HeaderNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#accompagnements', label: 'Accompagnements' },
    { href: '#qui-suis-je', label: 'Qui suis-je' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-white border-b border-stone-200 z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#accueil')}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ y: -2 }}
                className="text-stone-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              Séance découverte
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-stone-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-stone-700 hover:text-amber-600 font-medium text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition-colors w-fit"
              >
                Séance découverte
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default HeaderNavbar;