import ScrollReveal from './ScrollReveal';
import { Heart, Sprout, Users, Sun, Utensils } from 'lucide-react';

export default function Why() {
  const features = [
    { icon: <Heart />, title: 'Real Hospitality', desc: 'Our team is trained to go above and beyond, every visit.' },
    { icon: <Sprout />, title: 'Fresh Ingredients', desc: 'Never frozen chicken breast. Always fresh, always quality.' },
    { icon: <Users />, title: 'Community First', desc: 'We invest in local scholarships and causes that matter.' },
    { icon: <Sun />, title: 'Closed Sundays', desc: 'Because rest and family matter more than profit.' },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="about">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl mb-8">More Than Just Chicken</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-primary-red mt-1 shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-1">{f.title}</h5>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal className="flex-1 w-full" delay={0.2}>
            <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-primary-red rounded-[40px] flex items-center justify-center text-white -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Utensils size={120} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
