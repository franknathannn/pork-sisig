'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutSisig() {
  const stats = [
    { icon: Award, label: 'Years of Tradition', value: '50+' },
    { icon: Heart, label: 'Happy Customers', value: '100K+' },
    { icon: Users, label: 'Daily Servings', value: '500+' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative will-change-transform"
          >
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-amber-700 via-orange-600 to-red-700 overflow-hidden shadow-2xl">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/hero/sisig-hero.jpg"
                  alt="Sizzling Sisig Masterpiece" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-amber-500 font-semibold text-lg tracking-wider uppercase"
              >
                The Legend
              </motion.p>
              
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                A Filipino
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Masterpiece
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
              Boss K Sizzling is a local food business located at 2030 F. Varona Street, 
              Barangay 97, Zone 8, Tondo, Manila
              </p>
              
              <p>
              It’s a favorite spot for residents because it serves affordable and flavorful sisig meals. 
              Boss K Sizzling is known for being open late, usually from 5:00 PM until 2:00 or even 3:00 AM, 
              making it perfect for late-night cravings
              </p>

              <p>
                Our recipe honors tradition while embracing perfection. We source 
                the finest pork, season with generations-old techniques, and serve 
                it the way it was meant to be enjoyed—hot, loud, and unforgettable.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-600/20 border border-amber-600/30">
                    <stat.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}