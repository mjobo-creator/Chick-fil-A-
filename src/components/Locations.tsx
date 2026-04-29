import ScrollReveal from './ScrollReveal';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Locations() {
  const stores = [
    { name: 'Peach Street CFA', addr: '123 Chicken Lane, Atlanta, GA', hours: '6:30 AM - 10:00 PM' },
    { name: 'Downtown Hub', addr: '456 Waffle Way, Dallas, TX', hours: '6:30 AM - 10:00 PM' },
    { name: 'University Plaza', addr: '789 Lemonade Blvd, Charlotte, NC', hours: '6:30 AM - 11:00 PM' },
  ];

  return (
    <section className="py-24 bg-cream" id="locations">
      <div className="container mx-auto px-5">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl mb-10">Find Your Nearest Location</h2>
          <div className="flex gap-2 bg-white p-2 rounded-full shadow-lg border border-gray-100">
            <input 
              type="text" 
              placeholder="Enter Zip Code or City..." 
              className="flex-grow px-6 py-3 outline-none text-charcoal bg-transparent"
            />
            <button className="btn btn-red whitespace-nowrap">Find Stores</button>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-3xl shadow-custom h-full flex flex-col">
                <h5 className="text-2xl mb-2">{store.name}</h5>
                <p className="text-gray-500 mb-6 flex-grow">{store.addr}</p>
                <div className="space-y-1 mb-8 text-sm">
                  <p><strong>Open:</strong> {store.hours}</p>
                  <p><strong>Sun:</strong> Closed</p>
                </div>
                <button className="btn btn-red w-full">Order Here</button>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="mt-16" delay={0.4}>
          <div className="h-[400px] bg-gray-200 rounded-[40px] relative overflow-hidden bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[size:20px_20px]">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-red"
            >
              <MapPin size={60} fill="currentColor" fillOpacity={0.2} />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
