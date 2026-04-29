import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = [
  {
    stars: 5,
    quote: "The Original Chicken Sandwich is perfection. Nothing compares to that first bite.",
    author: "Sarah M., Atlanta GA"
  },
  {
    stars: 5,
    quote: "I've never had a bad experience. The staff always makes my day with their kindness.",
    author: "James T., Dallas TX"
  },
  {
    stars: 5,
    quote: "The waffle fries alone are worth the trip. And the lemonade? Unbeatable.",
    author: "Maria L., Charlotte NC"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-5">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl">What Our Guests Say</h2>
        </ScrollReveal>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-cream p-12 md:p-20 rounded-[50px] text-center"
            >
              <div className="flex justify-center gap-1 text-accent-gold mb-8">
                {[...Array(reviews[index].stars)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl italic font-heading mb-10 text-charcoal">
                "{reviews[index].quote}"
              </p>
              <p className="text-primary-red font-black tracking-widest uppercase">
                — {reviews[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === index ? 'w-10 bg-primary-red' : 'w-3 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
