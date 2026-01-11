'use client';

import { motion } from 'framer-motion';
import { Leaf, Sparkles, ThumbsUp, Zap } from 'lucide-react';

const ingredients = [
  {
    icon: Sparkles,
    name: 'Premium Pork',
    description: 'Hand-selected pork belly and cheeks, sourced from local farms for maximum flavor and tenderness.',
    color: 'from-pink-600 to-red-600'
  },
  {
    icon: Zap,
    name: 'Fresh Chilis',
    description: 'A perfect blend of bird\'s eye chilis and jalapeños, bringing authentic Filipino heat to every bite.',
    color: 'from-red-600 to-orange-600'
  },
  {
    icon: Leaf,
    name: 'Local Calamansi',
    description: 'Freshly squeezed citrus that adds the signature tangy brightness that makes sisig unforgettable.',
    color: 'from-lime-600 to-green-600'
  },
  {
    icon: ThumbsUp,
    name: 'Secret Blend',
    description: 'Our proprietary mix of spices and seasonings, perfected over decades of culinary tradition.',
    color: 'from-amber-600 to-yellow-600'
  },
];

export default function Ingredients() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white">
            Quality Ingredients
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            The secret to exceptional sisig starts with exceptional ingredients. 
            We never compromise on quality.
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${ingredient.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <ingredient.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {ingredient.name}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-red-600/20 border border-amber-500/30 backdrop-blur-sm">
            <div className="space-y-4">
              <p className="text-amber-400 font-semibold text-lg">
                Made Fresh Daily!
              </p>
              <p className="text-white text-2xl font-bold max-w-2xl">
                Every plate is prepared to order, ensuring you get the freshest, 
                most flavorful sisig experience possible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}