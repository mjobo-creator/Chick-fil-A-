import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-cream flex items-center overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute w-[600px] h-[600px] bg-primary-red rounded-full -top-[200px] -right-[100px] opacity-5 z-0" />
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-white px-6 py-4 rounded-2xl shadow-custom rotate-2 mb-6 font-extrabold flex items-center gap-2"
            >
              🏆 America's #1 Fast Food Chain
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-6 text-charcoal"
            >
              Eat More <span className="text-primary-red block">Chicken.</span> Made With Heart.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-9 max-w-lg mx-auto lg:mx-0"
            >
              Fresh ingredients. Handcrafted sandwiches. Unmatched hospitality. Every single day.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <button className="btn btn-red">Order Now</button>
              <button className="btn btn-outline">Explore Menu</button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative w-[450px] h-[450px]"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              {/* CSS Art Sandwich */}
              <div className="absolute top-[50px] left-[50px] w-[300px] h-[120px] bg-[#E8A855] rounded-t-[150px] rounded-b-[20px] z-[5] shadow-[inset_-10px_-10px_0_rgba(0,0,0,0.1)]" />
              <div className="absolute top-[140px] left-[30px] w-[340px] h-[30px] bg-[#76BA1B] rounded-[50%] z-[3]" />
              <div className="absolute top-[150px] left-[40px] w-[320px] h-[80px] bg-[#8B4513] rounded-[40px] z-[4] -rotate-2 shadow-[0_5px_15px_rgba(0,0,0,0.2)]" />
              <div className="absolute top-[220px] left-[50px] w-[300px] h-[60px] bg-[#E8A855] rounded-t-[20px] rounded-b-[80px] z-[2]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
