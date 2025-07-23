import React from 'react';
import { motion } from 'framer-motion';
import { Unlock, MessageCircle, Target } from 'lucide-react';

const services = [
  {
    icon: Unlock,
    title: 'Transformer son royaume intérieur',
    description: [
      { text: 'Débloquer', bold: true, rest: ' ce nœud qui se répète encore et encore' },
      { text: 'Remettre à sa place', bold: true, rest: ' ce juge intérieur infatigable qui nous fait vivre un véritable enfer' },
      { text: 'Libérer et purifier', bold: true, rest: ' notre ego, sans le rejeter' },
      { text: 'Assainir', bold: true, rest: ' ce mental qui alourdit notre quotidien inutilement' }
    ],
    finalText: 'Pour se sentir bien chez soi !',
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: MessageCircle,
    title: 'Affirmation de soi',
    description: 'Trouvons ensemble les clés dont vous avez besoin pour:',
    bulletPoints: [
      'vous libérer du regard des autres',
      'ne plus être dans la retenue',
      'vous sentir pleinement à votre place'
    ],
    additionalText: 'Marchez librement sur votre chemin !',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: Target,
    title: 'Aligner sa vie',
    description: 'Formulons ensemble les *bonnes questions*. Celles qui vous aideront à clarifier d\'où vous venez, où vous souhaitez aller, et surtout ce qui vous appelle vraiment.',
    additionalLines: [
      'Trouvons ensemble les *mots justes* pour nommer vos désirs et vos ressentis profonds.',
      'Puis avançons, *pas à pas*, vers une vie plus alignée.'
    ],
    color: 'from-green-400 to-emerald-500'
  }
];

const Services = () => {
  return (
    <section id="accompagnements" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Trois accompagnements pour{' '}
            <span className="text-amber-600 font-medium">rejouer la vie</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-stone-800 mb-4">
                {service.title}
              </h3>
              
             {service.title === 'Libération des boucles inconscientes' ? (
                <div className="space-y-3">
                 {service.description.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-amber-600 mt-1">→</span>
                     <p className="text-stone-600 leading-relaxed">
                       {item.bold && <strong>{item.text}</strong>}
                       {!item.bold && item.text}
                       {item.boldRest && <strong>{item.rest}</strong>}
                       {!item.boldRest && item.rest}
                       {item.end}
                     </p>
                    </div>
                  ))}
                </div>
             ) : service.title === 'Transformer son royaume intérieur' ? (
                <div className="space-y-3">
                 {service.description.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-amber-600 mt-1">→</span>
                     <p className="text-stone-600 leading-relaxed">
                       {item.bold && <strong>{item.text}</strong>}
                       {!item.bold && item.text}
                       {item.boldRest && <strong>{item.rest}</strong>}
                       {!item.boldRest && item.rest}
                       {item.end}
                     </p>
                    </div>
                  ))}
                  <p className="text-amber-700 font-medium mt-4 italic text-center">
                    {service.finalText}
                  </p>
                </div>
             ) : service.title === 'Affirmation de soi' ? (
               <div className="space-y-4">
                 <p className="text-stone-600 leading-relaxed">
                   {service.description}
                 </p>
                 <div className="space-y-2">
                   {service.bulletPoints.map((point, idx) => (
                     <div key={idx} className="flex items-start space-x-2">
                       <span className="text-amber-600 mt-1">→</span>
                       <p className="text-stone-600 leading-relaxed">{point}</p>
                     </div>
                   ))}
                 </div>
                 <p className="text-amber-700 font-medium mt-4 italic">
                   {service.additionalText}
                 </p>
               </div>
             ) : service.title === 'Aligner sa vie' ? (
               <div className="space-y-4">
                 <p className="text-stone-600 leading-relaxed">
                   Formulons les bonnes questions. Celles dont vous avez besoin pour clarifier d'où vous venez et où vous souhaitez aller.
                 </p>
                 <p className="text-stone-600 leading-relaxed">
                   Trouvons ensemble les mots justes pour exprimer vos désirs et ressentis profonds, et vous aider à poser le prochain pas sur une voie qui vous ressemble.
                 </p>
               </div>
              ) : (
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-600 transition-colors"
          >
            Découvrir l'accompagnement qui vous correspond
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;