import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a237e]/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer group">
          <span className="text-white font-bold italic text-2xl tracking-tighter group-hover:text-cyan-400 transition-colors">mot/on</span>
          <span className="text-blue-300 text-xs uppercase tracking-widest mt-1 group-hover:text-white transition-colors">for mobile</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {['Work', 'Services', 'About', 'Contact'].map((item, index) => (
            <motion.button 
              key={item}
              whileHover={{ scale: 1.1, color: '#22d3ee' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="text-white transition-colors uppercase text-sm font-semibold tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a237e] overflow-hidden absolute top-full left-0 w-full shadow-xl border-t border-blue-800"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <motion.button 
                  key={item}
                  whileTap={{ scale: 0.95, x: 10 }}
                  className="text-white hover:text-cyan-400 text-left uppercase font-bold text-xl py-2 border-b border-blue-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;