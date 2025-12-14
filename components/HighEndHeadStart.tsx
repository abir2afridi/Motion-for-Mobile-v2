import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HighEndHeadStart: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rocketY = useTransform(scrollYProgress, [0.3, 0.7], [100, -100]);

  return (
    <section className="bg-[#304ffe] py-24 md:py-32 relative overflow-hidden flex flex-col items-center">
      
      {/* Decorative Background Shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-20 h-20 bg-transparent border-8 border-yellow-400"
      />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-1/2 left-20 text-cyan-300 text-9xl opacity-10 font-display select-none">⚡</div>

      <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Left Text */}
            <div className="text-center md:text-right overflow-hidden">
                <motion.h2 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-6xl md:text-7xl lg:text-8xl font-display text-white uppercase leading-none"
                >
                    High<br/>End
                </motion.h2>
            </div>

            {/* Center Rocket Graphic */}
            <div className="relative h-[400px] md:h-[500px] flex justify-center items-center">
                {/* Rocket Body - Controlled by scroll */}
                <motion.div 
                    style={{ y: rocketY }}
                    className="relative z-10 w-32 md:w-40"
                >
                     <motion.svg 
                        viewBox="0 0 100 200" 
                        className="w-full drop-shadow-2xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     >
                        <path d="M50 0 C20 0 20 50 20 80 L20 140 L10 160 L10 170 L30 160 L70 160 L90 170 L90 160 L80 140 L80 80 C80 50 80 0 50 0 Z" fill="#ff1744" />
                        <circle cx="50" cy="60" r="15" fill="white" stroke="#1a237e" strokeWidth="3" />
                        <path d="M20 140 L5 180 L30 160 Z" fill="#d50000" />
                        <path d="M80 140 L95 180 L70 160 Z" fill="#d50000" />
                        {/* Animated Flame */}
                        <motion.path 
                            d="M40 160 L50 200 L60 160 Z" 
                            fill="#ff9100" 
                            animate={{ d: ["M40 160 L50 190 L60 160 Z", "M40 160 L50 210 L60 160 Z", "M40 160 L50 190 L60 160 Z"] }}
                            transition={{ duration: 0.2, repeat: Infinity }}
                        />
                     </motion.svg>
                </motion.div>
                
                {/* Smoke Trail */}
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 300 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 bg-gradient-to-t from-white/20 to-transparent blur-2xl rounded-full"
                ></motion.div>

                {/* Floating Caption */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-10 right-0 md:-right-20 bg-blue-900/80 backdrop-blur-md p-4 rounded-lg border border-blue-400/30 max-w-[200px] text-xs text-blue-100 shadow-xl"
                >
                    We've packaged design agency expertise into social media motion graphics that are ready to work.
                </motion.div>
            </div>

            {/* Right Text */}
            <div className="text-center md:text-left overflow-hidden">
                <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-6xl md:text-7xl lg:text-8xl font-display text-white uppercase leading-none"
                >
                    Head<br/>Start
                </motion.h2>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HighEndHeadStart;