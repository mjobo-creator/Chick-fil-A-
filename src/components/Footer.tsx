import { Facebook, Instagram, Twitter, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-red text-white py-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-3xl font-heading font-black mb-6">Chick-fil-A</div>
            <p className="font-bold tracking-widest uppercase mb-8">Eat Mor Chikin®</p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 rounded-full px-5 py-2.5 outline-none border border-white/20 w-full text-sm"
              />
              <button className="bg-white text-primary-red px-5 py-2.5 rounded-full font-bold text-sm hover:bg-accent-gold hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-black mb-6">Quick Links</h5>
            <ul className="space-y-4 opacity-80 text-sm">
              <li><a href="#" className="hover:underline hover:opacity-100">Our Menu</a></li>
              <li><a href="#" className="hover:underline hover:opacity-100">Locations</a></li>
              <li><a href="#" className="hover:underline hover:opacity-100">Catering</a></li>
              <li><a href="#" className="hover:underline hover:opacity-100">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-black mb-6">Legal</h5>
            <ul className="space-y-4 opacity-80 text-sm">
              <li><a href="#" className="hover:underline hover:opacity-100">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline hover:opacity-100">Terms of Use</a></li>
              <li><a href="#" className="hover:underline hover:opacity-100">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-black mb-6">Follow Us</h5>
            <div className="flex gap-6">
              <a href="#" className="hover:scale-110 transition-transform"><Facebook /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Instagram /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Twitter /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Music2 /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
          <p>© 2025 CFA Properties, Inc. All rights reserved.</p>
          <p className="font-bold uppercase tracking-widest">Closed Sundays for Family & Rest.</p>
        </div>
      </div>
    </footer>
  );
}
