'use client';

import { motion, useInView } from 'framer-motion';
import { Flame, Star, TrendingUp, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  prepTime: string;
  spiceLevel: number;
  tags: string[];
  image: string;
  imageClassName?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Sisig With Lechon Kawali Toppings',
    description: 'Traditional sizzling pork sisig with Lechon and additional toppings of onions, green chili peppers, calamansi and mayonnaise.',
    price: '₱139',
    prepTime: '5 min',
    spiceLevel: 5,
    tags: ['Popular', 'Traditional'],
    image: '/images/menu/sisig-with-lechon-kawali-toppings.jpg'
  },
  {
    id: 2,
    name: 'Sisig With Chicharon Toppings',
    description: 'Sisig with Egg, Extra chili peppers, onions and mayonnaise, and our secret spicy sauce that brings the heat.',
    price: '₱119',
    prepTime: '10 min',
    spiceLevel: 5,
    tags: ['Spicy', 'New'],
    image: '/images/menu/sisig-with-chicharon-toppings.jpg',
    imageClassName: '-rotate(180) !group-hover:scale-[1.35]'
  },
  {
    id: 3,
    name: 'Porkchop With Rice',
    description: 'Coated porchop with Inside seasonings of the coatings, Mostly better with sauce.',
    price: '₱320',
    prepTime: '5 min',
    spiceLevel: 0,
    tags: ['Premium', 'Chef\'s Choice'],
    image: '/images/menu/breaded-porkchop.jpg',
    imageClassName: 'object-[50%_30%]'
  },
  {
    id: 4,
    name: 'Dinakdakan',
    description: 'traditional Ilocano dish from the Philippines made with pork head, ears, neck and tongue with toppings.',
    price: '₱129',
    prepTime: '12 min',
    spiceLevel: 5,
    tags: ['Fusion', 'Trending'],
    image: '/images/menu/sizzling-with-lechon-kawali.jpg',
    imageClassName: 'object-[30%_70%]'
  },
  {
  id: 5,
  name: 'Buttered Chicken',
  description: 'Chicken parts coated with butter, garlic, onions, and a little bit of green chili peppers.',
  price: '₱115',
  prepTime: '12 min',
  spiceLevel: 2,
  tags: ['Fusion', 'Trending'],
  image: '/images/menu/buttered-chicken.jpg',
  imageClassName: 'object-[40%_60%]'
},
{
  id: 6,
  name: 'Lechon Kawali',
  description: 'Pork with a little seasonings of carrot, monggo beans and mayonnaise as a sauce.',
  price: '₱115',
  prepTime: '12 min',
  spiceLevel: 1,
  tags: ['Fusion', 'Trending'],
  image: '/images/menu/lechon-kawali.jpg',
  imageClassName: 'object-[40%_60%]'
},
];

const SpiceIndicator = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <Flame
          className={`w-3.5 h-3.5 transition-colors ${
            i < level ? 'text-red-500 fill-red-500' : 'text-zinc-700'
          }`}
        />
      </motion.div>
    ))}
  </div>
);

export default function MenuShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      window.scrollTo({
        top: aboutElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.08),transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-xl border border-amber-500/30 rounded-full mb-6 group hover:scale-105 transition-transform"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </motion.div>
            <span className="text-amber-100 text-sm font-bold tracking-widest">
              SIGNATURE DISHES
            </span>
          </motion.div>

          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 blur-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20"
            />
            <h2 className="relative font-display text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-amber-100 to-orange-200">
              Our Best Sellers Menu.
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-zinc-300 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Each dish is a <span className="text-amber-400 font-semibold">celebration of authentic Filipino flavors</span>,
            crafted with passion and served with pride.
          </motion.p>
        </motion.div>

        {/* Menu Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.15 }}
            >
              <Card className="group relative overflow-hidden bg-zinc-900/80 backdrop-blur-xl border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/20 hover:-translate-y-1">
                {/* Image/Gradient Background */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${item.imageClassName || ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-700" />
                  
                  {/* Steam effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bottom-0 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-lg will-change-transform"
                        animate={{
                          y: [0, -100],
                          x: [-20 + i * 20, 20 - i * 20],
                          scale: [0.5, 1.5],
                          opacity: [0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    {item.tags.map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-black/70 backdrop-blur-md text-white border-amber-500/40 hover:bg-black/90 hover:border-amber-400 transition-all shadow-lg"
                        >
                          {tag === 'Trending' && <TrendingUp className="w-3 h-3 mr-1.5" />}
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price Tag with Animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="absolute top-6 right-6 px-5 py-3 bg-gradient-to-br from-amber-600 to-orange-600 text-white font-black text-xl rounded-xl shadow-2xl shadow-amber-900/50 border border-amber-400/30"
                  >
                    {item.price}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5 relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5" />
                  </div>

                  <div className="flex items-start justify-between gap-4 relative">
                    <h3 className="font-display text-3xl font-bold text-white group-hover:text-amber-400 transition-colors duration-500">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-zinc-400 leading-relaxed text-lg relative">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-zinc-800 relative">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-zinc-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.prepTime}</span>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                          Spice Level
                        </p>
                        <SpiceIndicator level={item.spiceLevel} />
                      </div>
                    </div>

                    <motion.a
                      href="https://maps.app.goo.gl/UmpckqDGNPQgrykAA"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-full shadow-xl shadow-red-900/40 transition-all duration-300 group/btn"
                    >
                      <span className="relative z-10">Location</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover/btn:opacity-30"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center mt-20"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group px-12 py-5 bg-zinc-900/80 hover:bg-zinc-800 backdrop-blur-xl border-2 border-amber-500/40 hover:border-amber-500/70 text-amber-100 font-bold text-xl rounded-full transition-all duration-500 shadow-2xl shadow-amber-900/20 hover:shadow-amber-900/40"
          >
            <span className="flex items-center gap-3">
              View Complete Menu
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}