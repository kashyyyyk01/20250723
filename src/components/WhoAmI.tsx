import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Compass } from 'lucide-react';

const WhoAmI = () => {
  return (
    <section id="qui-suis-je" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Qui suis-je ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl w-64 h-64 mx-auto flex items-center justify-center">
              <User className="text-white" size={120} />
            </div>
            
            <div className="bg-stone-50 rounded-xl p-6">
              <p className="text-lg text-stone-700 leading-relaxed italic">
                "Je n'ai pas la prétention d'avoir « réussi ma vie » ni de pouvoir te dire comment gérer la tienne. 
                J'ai trébuché, souvent, et je trébucherai encore."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-stone-700 leading-relaxed">
              Je suis <strong>Michael Matsos</strong>, conseiller psycho-spirituel, spécialisé dans la libération 
              des croyances limitantes et des blocages émotionnels.
            </p>
            
            <p className="text-lg text-stone-700 leading-relaxed">
              Depuis toujours, je suis passionné par l'être humain et sa place dans l'univers — de la psychologie 
              aux traditions spirituelles anciennes (bouddhisme, alchimie, yoga, traditions toltèques…) en passant 
              par la philosophie (stoïcisme, sens de la vie…).
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              J'ai connu mon lot de défis à relever et plusieurs phases de transformation intérieures. 
              Tout le monde a ses faiblesses et défauts, mais cela ne tient qu'à nous de les transformer en force.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              Longtemps, j'ai cru qu'il fallait mériter sa place pour se sentir légitime. Être drôle, intelligent, utile… 
              comme si la confiance en soi se gagnait à coups de performances, d'approbations ou de diplômes invisibles.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed font-medium text-amber-700">
              J'ai fini par comprendre que ce n'est pas en "devenant quelqu'un" qu'on se libère, mais en osant être soi, 
              tout simplement.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-stone-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Heart className="text-amber-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-stone-800">Ma philosophie</h3>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Le plus facile pour se libérer est de comprendre pourquoi on peut se l'autoriser soi-même, 
              plutôt que de chercher une approbation extérieure.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Compass className="text-amber-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-stone-800">Ma conviction</h3>
            </div>
            <p className="text-stone-700 leading-relaxed">
              La richesse, ce sont les autres. C'est en rencontrant l'autre, en s'intéressant à son vécu 
              avec authenticité qu'on apprend à se connaître.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAmI;