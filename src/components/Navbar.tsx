import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[1000] transition-all duration-400 ${
          isScrolled ? 'bg-white py-4 border-b border-gray-100' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-2xl font-heading font-black text-primary-red tracking-tight transition-transform hover:scale-105">
            <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-white rounded-full"></div>
            </div>
            Chick-fil-A
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-bold text-sm tracking-wide text-charcoal hover:text-primary-red transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button className="btn btn-red text-sm">Order Now</button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden z-[999]"
            >
              <ul className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block font-bold text-lg text-charcoal hover:text-primary-red"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <button className="btn btn-red w-full">Order Now</button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
