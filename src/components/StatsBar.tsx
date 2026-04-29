import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => {
    if (value % 1 === 0) return Math.floor(latest);
    return latest.toFixed(1);
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    { label: 'Locations Nationwide', value: 2800, suffix: '+' },
    { label: 'Average Rating', value: 4.7, suffix: '★' },
    { label: 'Years Serving America', value: 50 },
    { label: 'Customer Satisfaction', value: 1, prefix: '#' },
  ];

  return (
    <section className="bg-primary-red text-white py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h3 className="text-4xl md:text-5xl lg:text-6xl text-accent-gold font-bold">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </h3>
              <p className="font-bold text-sm uppercase tracking-wider opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
