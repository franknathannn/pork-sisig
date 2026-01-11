import Hero from '@/components/sections/Hero';
import AboutSisig from '@/components/sections/AboutSisig';
import MenuShowcase from '@/components/sections/MenuShowcase';
import Ingredients from '@/components/sections/Ingredients';
import OrderCTA from '@/components/sections/OrderCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <Hero />
      <AboutSisig />
      <MenuShowcase />
      <Ingredients />
      <OrderCTA />
      <Footer />
    </main>
  );
}