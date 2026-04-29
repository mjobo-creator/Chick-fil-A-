import ScrollReveal from './ScrollReveal';
import { motion } from 'motion/react';

const menuItems = [
  {
    id: 1,
    name: 'Original Sandwich',
    desc: 'The one that started it all.',
    price: '$5.45',
    art: (
      <div className="relative w-full h-full flex items-center justify-center scale-[0.4]">
        <div className="absolute top-[50px] w-[300px] h-[100px] bg-[#E8A855] rounded-t-[150px] rounded-b-[20px] z-[5]" />
        <div className="absolute top-[130px] w-[320px] h-[70px] bg-[#8B4513] rounded-[40px] z-[4]" />
        <div className="absolute top-[180px] w-[300px] h-[50px] bg-[#E8A855] rounded-b-[80px] z-[2]" />
      </div>
    )
  },
  {
    id: 2,
    name: 'Spicy Deluxe',
    desc: 'A little heat, a lot of flavor.',
    price: '$6.75',
    art: (
      <div className="relative w-full h-full flex items-center justify-center scale-[0.4]">
        <div className="absolute top-[50px] w-[300px] h-[100px] bg-[#C28233] rounded-t-[150px] rounded-b-[20px] z-[5]" />
        <div className="absolute top-[120px] w-[340px] h-[30px] bg-[#76BA1B] rounded-[50%] z-[3]" />
        <div className="absolute top-[130px] w-[320px] h-[70px] bg-[#8B4513] rounded-[40px] z-[4]" />
        <div className="absolute top-[180px] w-[300px] h-[50px] bg-[#C28233] rounded-b-[80px] z-[2]" />
      </div>
    )
  },
  {
    id: 3,
    name: 'Waffle Fries',
    desc: 'Crispy outside, tender inside.',
    price: '$3.05',
    art: (
      <div className="w-20 h-24 bg-[#FFD700] rounded-md relative flex flex-wrap gap-1 p-2 overflow-hidden shadow-inner translate-y-4">
         {[...Array(6)].map((_, i) => (
           <div key={i} className="w-full h-2 bg-[#F5A623] rounded-full" />
         ))}
      </div>
    )
  },
  {
    id: 4,
    name: 'Nuggets (8pc)',
    desc: 'Bite-sized perfection.',
    price: '$6.29',
    art: (
      <div className="flex gap-2 translate-y-4">
        <div className="w-8 h-8 bg-[#8B4513] rounded-lg shadow-md rotate-12" />
        <div className="w-8 h-8 bg-[#8B4513] rounded-lg shadow-md -rotate-6" />
        <div className="w-8 h-8 bg-[#8B4513] rounded-lg shadow-md rotate-45" />
      </div>
    )
  },
  {
    id: 5,
    name: 'Peach Milkshake',
    desc: 'A seasonal summer classic.',
    price: '$4.95',
    art: (
      <div className="w-16 h-28 bg-[#FFD1DC] rounded-t-lg rounded-b-[40px] relative translate-y-4 shadow-inner border-2 border-white/20">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-white rounded-t-full" />
      </div>
    )
  },
  {
    id: 6,
    name: 'Lemonade',
    desc: 'Squeezed fresh daily.',
    price: '$3.25',
    art: (
      <div className="w-14 h-24 bg-white/80 border-2 border-gray-200 rounded-b-3xl relative translate-y-4">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-8 bg-primary-red" />
      </div>
    )
  }
];

export default function Menu() {
  return (
    <section className="py-24 bg-white" id="menu">
      <div className="container mx-auto px-5">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Fan Favorites</h2>
          <p className="text-lg text-gray-500">Crafted fresh. Served with love.</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group bg-cream p-10 rounded-[40px] text-center transition-all hover:bg-white hover:shadow-2xl h-full flex flex-col items-center border border-transparent hover:border-cream"
              >
                <div className="h-40 mb-8 flex items-center justify-center">
                  {item.art}
                </div>
                <h4 className="text-2xl mb-2">{item.name}</h4>
                <p className="text-gray-500 mb-4 flex-grow">{item.desc}</p>
                <span className="block text-xl font-black text-primary-red mb-6">{item.price}</span>
                <button className="btn btn-red w-full group-hover:bg-accent-gold translate-y-0 active:scale-95">
                  Add to Order
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="text-center mt-16">
          <button className="btn btn-outline">View Full Menu</button>
        </ScrollReveal>
      </div>
    </section>
  );
}
