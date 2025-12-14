import React from 'react';
import { motion } from 'framer-motion';

const AnyPlatform: React.FC = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
        {/* Collage Background Elements */}
        <div className="absolute inset-0 z-0">
             {/* Creating a grid of patterns */}
             <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2.5px)', backgroundSize: '10px 10px' }}></div>
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-0 w-64 h-64 bg-yellow-400 opacity-30 mix-blend-multiply"
             ></motion.div>
             <div className="absolute bottom-0 left-20 w-48 h-48 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
             <div className="absolute bottom-10 right-10 flex gap-2">
                 {[...Array(5)].map((_, i) => (
                    <motion.div 
                        key={i} 
                        animate={{ height: [80, 120, 80] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                        className="w-4 bg-red-400/30 transform skew-x-12"
                    ></motion.div>
                 ))}
             </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
            
            {/* Monitor Showcase */}
            <div className="relative w-full max-w-4xl mx-auto mb-12">
                 {/* Monitor Frame */}
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900 rounded-t-xl p-4 pb-0 shadow-2xl border-4 border-gray-800"
                >
                    <div className="bg-white rounded-t-lg overflow-hidden aspect-video relative group">
                        <img 
                            src="https://picsum.photos/1200/800?random=3" 
                            alt="Portfolio Showcase" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <motion.button 
                                whileHover={{ scale: 1.1 }}
                                className="bg-white text-black px-6 py-2 font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0_black]"
                             >
                                View Project
                             </motion.button>
                        </div>
                        
                        {/* Overlay Text "ANY PLATFORM" */}
                        <div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
                            <motion.span 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="bg-white px-4 py-1 text-black font-display text-2xl uppercase tracking-tighter transform -skew-x-12 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            >
                                Any Platform
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
                {/* Monitor Stand */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="h-12 w-1/3 bg-gray-800 mx-auto rounded-b-lg shadow-xl mb-4 relative"
                >
                     <div className="absolute bottom-0 w-full h-4 bg-gray-700 rounded-b-lg"></div>
                </motion.div>
                
                {/* 3D Elements scattered around monitor */}
                <motion.div 
                    animate={{ y: [-10, 10, -10], rotate: [-12, -15, -12] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-10 bottom-20 w-24 h-24 bg-blue-600 rounded-xl transform shadow-xl border-4 border-white hidden md:block"
                >
                    <div className="w-full h-full rounded-full border-8 border-yellow-400 bg-gray-800 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                    </div>
                </motion.div>
                
                <div className="absolute -right-16 bottom-32 hidden md:block">
                     <motion.div 
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[10rem] leading-none text-gray-200 font-display select-none pointer-events-none"
                     >
                        ✌️
                     </motion.div>
                </div>

            </div>

            <div className="text-center mt-10">
                 <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(64, 196, 255, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#40c4ff] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider shadow-lg"
                >
                    Help my Brand
                </motion.button>
            </div>
            
        </div>
        
        {/* Pink Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 120" className="w-full h-auto text-[#f06292] fill-current">
                <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    </section>
  );
};

export default AnyPlatform;