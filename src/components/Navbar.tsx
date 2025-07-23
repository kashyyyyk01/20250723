import React from 'react';
import { motion } from 'framer-motion';
import { Video, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-24 pb-20 bg-gradient-to-br from-stone-50 to-amber-50/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Three main promises */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-light text-stone-700">
                <span className="text-amber-600 font-medium">Oser</span> être soi
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-light text-stone-700">
                <span className="text-amber-600 font-medium">S'aligner</span> avec son chemin de vie
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-light text-stone-700">
                <span className="text-amber-600 font-medium">Se libérer</span> des conditionnements
              </h3>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light text-stone-600 mb-16 leading-relaxed"
          >
            Accompagnement psycho-spirituel de{' '}
            <span className="font-bold text-stone-800">transformation intérieure</span>{' '}
            et <span className="font-bold text-stone-800">d'éveil à soi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-5xl text-stone-700 mb-12 max-w-xl mx-auto text-center font-light"
          >
            Pour que la vie redevienne{' '}
            <span className="text-amber-600 font-bold">un jeu</span> !
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <Video className="text-amber-600 mr-3" size={24} />
              <span className="text-lg font-medium text-stone-800">
                Séance découverte offerte – 30 min en visio
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-600 transition-colors inline-flex items-center space-x-2"
            >
              <span>Rencontrons-nous</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;