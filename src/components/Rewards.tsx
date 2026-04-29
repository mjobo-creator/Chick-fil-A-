import ScrollReveal from './ScrollReveal';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Rewards() {
  const tiers = [
    {
      name: 'Member',
      points: '0+ Points',
      perks: ['Earn points for rewards', 'Birthday reward', 'Mobile ordering'],
      btnClass: 'border-white text-white hover:bg-white hover:text-primary-red'
    },
    {
      name: 'Red Member',
      points: '5,000+ Points',
      perks: ['12 points per $1', 'Exclusive member gifts', 'Voting rights for charities'],
      featured: true,
      btnClass: 'bg-white text-primary-red hover:bg-accent-gold hover:text-white'
    },
    {
      name: 'Silver Member',
      points: '1,000+ Points',
      perks: ['11 points per $1', 'Gift rewards to others', 'Surprise treats'],
      btnClass: 'border-white text-white hover:bg-white hover:text-primary-red'
    }
  ];

  return (
    <section className="py-24 bg-deep-red text-white" id="rewards">
      <div className="container mx-auto px-5 text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl mb-4">Join Chick-fil-A One®</h2>
          <p className="text-xl opacity-90">Earn points on every purchase. Redeem for free food.</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {tiers.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`p-10 rounded-[40px] border-2 h-full flex flex-col relative ${
                  tier.featured 
                  ? 'border-accent-gold bg-white/5' 
                  : 'border-white/20 bg-transparent'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                <h4 className="text-3xl mb-2">{tier.name}</h4>
                <p className="text-accent-gold font-bold mb-8">{tier.points}</p>
                <ul className="text-left space-y-4 mb-10 flex-grow">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex gap-3 items-center">
                      <Check size={18} className="text-accent-gold shrink-0" />
                      <span className="opacity-90">{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className={`btn w-full font-black ${tier.btnClass} ${tier.featured ? '' : 'border-2'}`}>
                  {tier.featured ? 'Join Today' : 'Get Started'}
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
