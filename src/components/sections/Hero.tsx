'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Flame, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Reduced particles for better performance (10 instead of 20)
  const particlePositions = [
    { left: 23.5, top: 19.2 },
    { left: 48.4, top: 91.1 },
    { left: 81.8, top: 47.1 },
    { left: 96.2, top: 72.6 },
    { left: 56.3, top: 78.0 },
    { left: 4.68, top: 31.1 },
    { left: 86.5, top: 1.94 },
    { left: 50.4, top: 48.8 },
    { left: 78.1, top: 47.0 },
    { left: 87.0, top: 18.3 },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      // Use native smooth scroll with better performance
      window.scrollTo({
        top: menuElement.offsetTop - 80, // 80px offset for better positioning
        behavior: 'smooth'
      });
    }
  };

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
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Animated Background with Texture */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
        
        <Image
          src="/images/hero/sisig-hero.jpg"
          alt="Sizzling Sisig"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Floating particles effect */}
      {mounted && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/30 rounded-full will-change-transform"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.4,
                ease: "linear", // Linear is more performant than easeInOut
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center space-y-8 max-w-5xl"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/30 to-orange-600/30 backdrop-blur-xl border border-red-500/50 rounded-full shadow-2xl shadow-red-900/50 group hover:scale-105 transition-transform"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame className="w-5 h-5 text-red-400" />
            </motion.div>
            <span className="text-red-100 text-sm font-bold tracking-widest">
              AUTHENTIC FILIPINO CUISINE
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading with Glow */}
          <div className="space-y-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative"
            >
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-red-500/30 scale-150" />
              
              <h1 className="relative font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 tracking-tighter leading-none drop-shadow-2xl">
                SISIG
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-2xl sm:text-3xl md:text-4xl text-amber-100/90 font-light tracking-[0.3em] uppercase"
            >
              Sizzling Perfection
            </motion.p>
          </div>

          {/* Description with better typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-zinc-200 text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light"
          >
            Experience the <span className="text-amber-400 font-semibold">legendary Filipino delicacy</span>.
            <br className="hidden sm:block" />
            Crispy pork belly, perfectly seasoned, served on a
            <br className="hidden sm:block" />
            <span className="text-orange-400 font-semibold">sizzling hot plate</span> that awakens every sense.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToMenu}
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-red-600 hover:from-red-700 hover:via-orange-700 hover:to-red-700 text-white px-10 py-7 text-xl font-bold rounded-full shadow-2xl shadow-red-900/60 border-2 border-red-400/50 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Menu
                  <Flame className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToAbout}
                variant="outline"
                size="lg"
                className="border-3 border-amber-500/70 bg-black/30 backdrop-blur-xl text-amber-100 hover:bg-amber-500/20 hover:border-amber-400 px-10 py-7 text-xl font-bold rounded-full shadow-xl shadow-amber-900/30 transition-all"
              >
                Our Story
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator - Hidden on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer group"
            onClick={scrollToMenu}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-amber-400/60 text-sm uppercase tracking-widest font-semibold">Scroll</span>
              <div className="w-6 h-10 border-2 border-amber-400/60 rounded-full p-1 group-hover:border-amber-400 transition-colors">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 bg-amber-400 rounded-full mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-3xl opacity-20 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-3xl opacity-20 z-0" />
    </section>
  );
}