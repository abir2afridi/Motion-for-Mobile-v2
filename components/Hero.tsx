import React, { useRef, useState } from 'react';
import { ArrowRight, Zap, Circle, Star, MousePointer2, Play, Heart, Share2, MessageCircle } from 'lucide-react';
import { motion, useSpring, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse parallax state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = (mouseX / width - 0.5) * 2; // Range: -1 to 1
      const yPct = (mouseY / height - 0.5) * 2;
      x.set(xPct);
      y.set(yPct);
    }
  };

  // Parallax layers
  const textX = useTransform(mouseXSpring, [-1, 1], [-40, 40]);
  const textY = useTransform(mouseYSpring, [-1, 1], [-40, 40]);
  
  const phoneX = useTransform(mouseXSpring, [-1, 1], [60, -60]); 
  const phoneY = useTransform(mouseYSpring, [-1, 1], [30, -30]);
  const phoneRotateX = useTransform(mouseYSpring, [-1, 1], [15, -15]);
  const phoneRotateY = useTransform(mouseXSpring, [-1, 1], [-15, 15]);

  const bgX = useTransform(mouseXSpring, [-1, 1], [-80, 80]);
  const bgY = useTransform(mouseYSpring, [-1, 1], [-80, 80]);

  const floatCardX = useTransform(mouseXSpring, [-1, 1], [100, -100]);
  const floatCardY = useTransform(mouseYSpring, [-1, 1], [100, -100]);

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-full min-h-screen bg-[#1a237e] overflow-hidden flex flex-col justify-center items-center pt-24 pb-12"
        style={{ perspective: '2000px' }}
    >
      {/* 1. Deep Background Layer */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-lines.png")' }}></div>
          
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full blur-[100px]"></div>

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-[5%] left-[5%] text-blue-400/10"
          >
             <Zap size={500} strokeWidth={0.2} />
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], y: [0, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[5%] right-[5%] text-pink-500/10"
          >
            <Circle size={400} strokeWidth={1} />
          </motion.div>
      </motion.div>

      {/* 2. Middle Layer: Smartphone Mockup */}
      <motion.div 
        style={{ 
            x: phoneX, 
            y: phoneY, 
            rotateX: phoneRotateX, 
            rotateY: phoneRotateY,
            translateX: "-50%", 
            translateY: "-40%",
            transformStyle: "preserve-3d"
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 z-0 w-64 sm:w-80 md:w-[340px]"
      >
          <div className="relative mx-auto border-gray-950 bg-gray-950 border-[12px] rounded-[3rem] h-[580px] sm:h-[680px] w-full shadow-[0_60px_120px_-20px_rgba(0,0,0,0.7)] overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-around px-4">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              </div>

              <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden flex flex-col">
                  <div className="h-16 flex items-end px-6 pb-2 justify-between border-b border-white/5 bg-black/40 backdrop-blur-md z-30">
                      <div className="text-white text-xs font-bold tracking-widest uppercase opacity-80">Live Feedback</div>
                      <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-green-500/40 rounded-full"></div>
                      </div>
                  </div>

                  <motion.div 
                    animate={{ y: [0, -1200] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex flex-col gap-6 p-4 pt-4"
                  >
                      {[1,2,3,4,5,6].map((idx) => (
                          <div key={idx} className="w-full bg-white/5 rounded-2xl border border-white/10 p-3 space-y-3">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-inner"></div>
                                  <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                              </div>
                              <div className="aspect-square rounded-xl overflow-hidden bg-white/5 relative group">
                                  <img 
                                    src={`https://picsum.photos/400/400?random=${20+idx}`} 
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                                    alt="" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                  <div className="absolute bottom-3 left-3 flex gap-4 text-white/80 scale-75 origin-left">
                                      <Heart size={20} />
                                      <MessageCircle size={20} />
                                      <Share2 size={20} />
                                  </div>
                              </div>
                          </div>
                      ))}
                  </motion.div>
                  
                  <AnimatePresence>
                      {isHovering && [1,2,3,4,5].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ bottom: 20, left: '50%', opacity: 0 }}
                            animate={{ 
                                bottom: [20, 300], 
                                left: ['40%', '60%', '45%', '55%'],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.2, 0.8]
                            }}
                            transition={{ 
                                duration: 3 + Math.random() * 2, 
                                repeat: Infinity, 
                                delay: i * 0.4 
                            }}
                            className="absolute z-30 pointer-events-none"
                        >
                            <span className="text-2xl">🔥</span>
                        </motion.div>
                      ))}
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
              </div>
          </div>
      </motion.div>

      {/* 3. Foreground Layer: Typography (Above Phone) */}
      <motion.div 
        style={{ x: textX, y: textY }} 
        className="relative z-10 pointer-events-none flex flex-col items-center select-none"
      >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
              <h1 className="text-[18vw] sm:text-[12rem] md:text-[14rem] lg:text-[18rem] font-display text-white uppercase tracking-tighter leading-[0.7] drop-shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
                MAKE A
              </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
              <h1 className="text-[18vw] sm:text-[12rem] md:text-[14rem] lg:text-[18rem] font-display uppercase tracking-tighter leading-[0.7] text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-700 drop-shadow-2xl">
                SPLASH
              </h1>
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] mix-blend-overlay pointer-events-none"
              ></motion.div>
          </motion.div>
      </motion.div>

      {/* 4. Floating Glass Cards (Depth elements) */}
      <motion.div 
        style={{ x: floatCardX, y: floatCardY }}
        className="absolute inset-0 z-20 pointer-events-none hidden lg:block"
      >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-[20%] right-[10%] bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl max-w-[220px]"
          >
             <div className="flex items-center gap-3 mb-3">
                 <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                     <Star size={20} fill="currentColor" />
                 </div>
                 <span className="text-white font-bold">TOP RATED</span>
             </div>
             <p className="text-blue-100/70 text-xs leading-relaxed">
                Premium motion assets for agencies who demand more.
             </p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-[25%] left-[8%] bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl"
          >
             <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white">
                     <Play size={20} fill="white" />
                 </div>
                 <div>
                     <div className="text-white font-bold">1.2M+ Views</div>
                     <div className="text-pink-300 text-[10px] uppercase tracking-widest font-bold">Average Reach</div>
                 </div>
             </div>
          </motion.div>
      </motion.div>

      {/* 5. Bottom Info & CTA */}
      <div className="max-w-7xl w-full px-6 relative z-30 mt-auto pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-6"
              >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest">
                      <Zap size={14} /> New for 2024
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-normal text-white leading-[1.1]">
                    Tailored <span className="font-bold text-cyan-400 italic">Creative</span><br/>
                    Built for the Thumb-Scroll.
                  </h2>
                  <p className="text-blue-200/80 text-lg max-w-md font-light leading-relaxed">
                    We stop the scroll with motion graphics that don't just look pretty—they convert. Get your brand the attention it deserves.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 23, 68, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#ff1744] text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider flex items-center gap-3 shadow-[0_10px_40px_rgba(255,23,68,0.3)] border border-white/10"
                      >
                        Start Your Project
                        <ArrowRight size={20} />
                      </motion.button>
                      
                      <motion.button 
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "white" }}
                        className="px-10 py-5 rounded-full font-bold uppercase tracking-wider text-white border border-white/20 transition-all backdrop-blur-sm"
                      >
                        Our Showreel
                      </motion.button>
                  </div>
              </motion.div>

              <div className="hidden md:flex flex-col items-end gap-6">
                   <div className="flex -space-x-3">
                       {[1,2,3,4].map(i => (
                           <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1a237e] overflow-hidden bg-gray-800">
                               <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                           </div>
                       ))}
                       <div className="w-12 h-12 rounded-full border-2 border-[#1a237e] bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                           +500
                       </div>
                   </div>
                   <div className="text-right">
                       <div className="text-white font-bold text-lg">Trusted by Brands Worldwide</div>
                       <div className="text-blue-300 text-sm">Join the top 1% of creators today.</div>
                   </div>
              </div>
          </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full text-[#283593] fill-current transform scale-y-110 origin-bottom">
              <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;