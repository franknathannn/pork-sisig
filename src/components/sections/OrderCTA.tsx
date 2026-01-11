'use client';

import { motion } from 'framer-motion';
import { Phone, ShoppingBag, MapPin } from 'lucide-react';

export default function OrderCTA() {
  const orderOptions = [
    {
      icon: ShoppingBag,
      title: 'Food Delivery',
      description: 'Facebook Page',
      action: 'View on Apps',
      color: 'from-red-600 to-orange-600',
      link: 'https://www.facebook.com/bossksisig',
    },
    {
      icon: Phone,
      title: 'Call to Order',
      description: 'Speak with our team',
      action: 'Call Now',
      color: 'from-blue-600 to-cyan-600',
      link: 'tel:09058469424',
    },
    {
      icon: MapPin,
      title: 'Dine In',
      description: 'Visit our restaurant',
      action: 'Get Directions',
      color: 'from-purple-600 to-pink-600',
      link: 'https://maps.app.goo.gl/UmpckqDGNPQgrykAA',
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white">
            Order Your Sisig
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Choose your preferred way to enjoy our sizzling perfection
          </p>
        </motion.div>

        {/* Order Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative block"
            >
              <div className="h-full p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/20">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {option.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-4 transition-all">
                  {option.action}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>

                {/* Hover gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-amber-600/10 to-orange-600/10 border border-amber-500/20 backdrop-blur-sm">
            <p className="text-zinc-300 text-lg">
              💬 <span className="text-amber-400 font-semibold">Pro Tip:</span> Order via WhatsApp for faster service and exclusive deals!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}