'use client';

import { Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bossksisig', label: 'Facebook' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  const links = {
    "Quick Links": [
      { label: 'About Us', href: '#hero' },
      { label: 'Menu Showcase', href: '#menu' },
      { label: 'All Sisig Dishes', href: '#about' },
    ],
    Support: [
      { label: 'Contact', href: 'https://www.facebook.com/bossksisig' },
    ],
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display text-4xl font-bold text-white mb-2">
                SISIG
              </h3>
              <p className="text-amber-500 font-semibold tracking-widest text-sm">
                BOSS K SIZZLING SISIG MEALS
              </p>
            </div>
            
            <p className="text-zinc-400 leading-relaxed max-w-md">
              Experience authentic Filipino sisig crafted with passion, 
              tradition, and the finest ingredients. Every plate tells a story.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-semibold text-white text-lg">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="text-zinc-400 hover:text-amber-400 transition-colors duration-200"
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-zinc-900">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Visit Us</p>
                <p className="text-sm text-zinc-400">
                  Nepomoceno st 1013 Manila,
                  <br />
                  Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Call Us</p>
                <p className="text-sm text-zinc-400">
                  +63 905 846 9424
                  <br />
                  Monday - Sunday 5PM - 3AM Midnight!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email Us</p>
                <p className="text-sm text-zinc-400">
                  Kristiankarllopez10@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>
              © 2026 Sisig. All rights reserved. Made with ❤️ in the Philippines.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}