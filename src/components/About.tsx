import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-8">
            Parce que la vie ne peut pas se résumer à :
          </h2>
          <p className="text-xl text-stone-600 mb-8 italic">
            Travailler, plaire, consommer, recommencer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              Parce qu'un jour, on sent qu'on tourne en rond. On se retrouve bloqué dans des schémas qui se répètent. 
              On vit les mêmes déceptions, on retombe dans les mêmes peurs. C'est comme si on avait des œillères.
            </p>
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              Parce que la vie ne fait pas que des cadeaux. Parfois, elle cogne. Et dans le tumulte, on s'égare, on s'oublie.
              Le tout, c'est de retrouver son chemin vers soi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="flex">
              <div className="w-1 bg-amber-500 mr-6 flex-shrink-0"></div>
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200 flex-1">
                <p className="text-lg text-stone-700 leading-relaxed font-medium">
                  Pendant ce temps, d'autres semblent avancer plus facilement.<br/>
                  Pourquoi ?<br/>
                  Pas parce qu'ils sont « meilleurs »,<br/>
                  mais parce qu'ils ont « compris le truc », un mécanisme qui nous échappe encore.<br/>
                  Ils n'ont pas les mêmes lunettes.<br/>
                  Ils voient la vie différemment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-amber-600 leading-tight">
            Il est temps de rentrer à la maison
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
            Vous sentez un brouillard intérieur, un besoin de quitter cette boucle qui se répète 
            ou simplement d'élargir votre royaume intérieur ?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-stone-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-medium text-stone-800 mb-6 text-center">
            Ce que je te propose
          </h3>
          <div className="space-y-4 text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              Je te propose de nous rencontrer et de jouer pour toi le rôle de miroir. 
              Pour t'aider à porter un nouveau regard sur toi et ta situation.
            </p>
            <p>
              Pour explorer ensemble tes souvenirs fondateurs, tes croyances limitantes, tes peurs cachées. 
              Pour t'aider à retirer, ne serait-ce qu'un instant, ces lunettes qui te bloquent.
            </p>
            <p>
              Pas pour te cajoler et te réconforter sur le fait que tu as raison et l'autre a tort. 
              Je te propose d'affronter ce que tu ne veux peut-être pas voir ou entendre (le célèbre déni).
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              On creuse à deux, éclaire les zones d'ombre, on trouve les clés pour rouvrir tes portes intérieures.
            </p>
            <p className="font-medium text-amber-700 text-center">
              On part de là où tu en es, pour clarifier ton chemin, te libérer de ce qui t'enchaîne 
              et te redonner ton pouvoir de créateur conscient.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;