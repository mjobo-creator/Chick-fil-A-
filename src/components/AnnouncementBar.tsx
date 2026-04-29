import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative bg-primary-red text-white py-2.5 px-4 text-center text-[10px] uppercase font-black tracking-[0.25em] z-[1001]"
        >
          <div className="container mx-auto pr-10">
            🔥 New: Peach Milkshake is back for summer!{' '}
            <a href="#" className="underline flex-inline items-center gap-1 hover:text-accent-gold transition-colors">
              Order Now <ExternalLink size={14} className="inline mb-0.5" />
            </a>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
