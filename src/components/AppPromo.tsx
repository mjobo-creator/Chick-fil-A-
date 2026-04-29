import ScrollReveal from './ScrollReveal';
import { Tablet, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function AppPromo() {
  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl mb-8">Order Ahead. Skip the Line.</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-lg">
                Download the Chick-fil-A app to earn rewards, customize your favorites, and get your chicken faster than ever.
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="btn btn-white flex items-center gap-3">
                  <Smartphone size={24} /> App Store
                </button>
                <button className="btn btn-white flex items-center gap-3">
                  <Tablet size={24} /> Google Play
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <ScrollReveal delay={0.2}>
              <motion.div 
                whileHover={{ y: -20 }}
                className="w-[300px] h-[600px] bg-zinc-800 rounded-[50px] p-4 shadow-2xl relative border-8 border-zinc-700"
              >
                <div className="w-full h-full bg-primary-red rounded-[36px] flex flex-col items-center justify-center p-8 text-center">
                  <Smartphone size={100} className="mb-10 opacity-80" />
                  <h3 className="text-3xl font-heading mb-4">Ready to Order?</h3>
                  <p className="opacity-80">Your favorite meal is 2 taps away.</p>
                  <div className="mt-16 w-full h-12 bg-white/20 rounded-full" />
                  <div className="mt-4 w-full h-12 bg-white/20 rounded-full" />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
