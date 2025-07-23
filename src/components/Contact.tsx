import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Rencontrons-nous
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à explorer votre chemin intérieur ? Commençons par une séance découverte gratuite 
            pour voir si nous sommes faits pour travailler ensemble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200"
          >
            <div className="flex items-center mb-6">
              <Video className="text-amber-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-stone-800">
                Séance découverte offerte
              </h3>
            </div>
            
            <p className="text-stone-600 mb-8">
              30 minutes en visioconférence pour faire connaissance et explorer vos besoins.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Prénom et nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-2">
                  Parlez-moi de votre situation
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Qu'est-ce qui vous amène ? Quels sont vos défis actuels ?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-500 text-white py-4 rounded-xl text-lg font-medium hover:bg-amber-600 transition-colors"
              >
                Réserver ma séance découverte
              </motion.button>
            </form>
          </motion.div>

          {/* Right side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">
                Informations pratiques
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Video className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-stone-800">Séances en ligne</h4>
                    <p className="text-stone-600">Via Google Meet ou Zoom selon votre préférence</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-stone-800">Email</h4>
                    <p className="text-stone-600">michael.matsos@example.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-stone-800">Téléphone</h4>
                    <p className="text-stone-600">+33 (0)6 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-stone-800">Disponibilité</h4>
                    <p className="text-stone-600">Lundi au vendredi, 9h-19h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">
                Pourquoi commencer par une séance découverte ?
              </h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Faire connaissance dans un cadre détendu
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprendre vos besoins spécifiques
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Voir si notre approche vous convient
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Aucun engagement, juste une rencontre authentique
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;