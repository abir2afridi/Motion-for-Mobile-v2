import React, { useRef } from 'react';
import { ArrowRight, Zap, Circle, Star, MousePointer2 } from 'lucide-react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse parallax setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
      const yPct = (mouseY / height - 0.5) * 2;
      x.set(xPct);
      y.set(yPct);
    }
  };

  // Parallax transforms
  const textX = useTransform(mouseXSpring, [-1, 1], [-20, 20]);
  const textY = useTransform(mouseYSpring, [-1, 1], [-20, 20]);
  
  const phoneX = useTransform(mouseXSpring, [-1, 1], [30, -30]); // Opposite direction for depth
  const phoneY = useTransform(mouseYSpring, [-1, 1], [30, -30]);
  
  const bgX = useTransform(mouseXSpring, [-1, 1], [-50, 50]);
  const bgY = useTransform(mouseYSpring, [-1, 1], [-50, 50]);

  return (
    <section 
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-[110vh] bg-[#1a237e] overflow-hidden flex flex-col justify-center items-center pt-32 pb-20 [perspective:1000px]"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-lines.png")' }}></div>

      {/* Dynamic Background Elements */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] text-[#304ffe] opacity-20"
          >
             <Zap size={400} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[-5%] text-[#ff0055] opacity-10"
          >
            <Circle size={300} strokeWidth={2} />
          </motion.div>
          
          {/* Floating shapes */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-cyan-400 transform rotate-45 animate-bounce"></div>
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full px-4 relative z-10 flex flex-col items-center">
        
        {/* Giant Text Layer & Phone */}
        <div className="relative text-center w-full max-w-6xl mx-auto leading-[0.8] [perspective:1000px] mb-12">
            
            {/* Phone Mockup - Moving opposite to text */}
            <motion.div 
              style={{ x: phoneX, y: phoneY, translateX: "-50%", translateY: "-45%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-[45%] left-1/2 z-0 w-64 sm:w-80 md:w-96"
            >
                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[10px] rounded-[2.5rem] h-[500px] sm:h-[600px] w-full shadow-[0_50px_100px_-12px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-gray-700">
                    {/* Buttons */}
                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] top-[72px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[13px] top-[142px] rounded-r-lg"></div>
                    
                    {/* Screen - Animated Feed */}
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                         {/* Header */}
                         <div className="absolute top-0 left-0 w-full h-16 bg-white/90 backdrop-blur z-20 flex items-end pb-3 justify-center border-b border-gray-100">
                             <div className="font-bold text-black text-sm tracking-wide">MOT/ON Feed</div>
                         </div>
                         
                         {/* Scrolling Content */}
                         <motion.div 
                            animate={{ y: [-20, -500] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="w-full flex flex-col gap-4 p-3 pt-20"
                         >
                            {[1,2,3,4].map((i) => (
                                <div key={i} className="w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                    <div className="h-10 flex items-center px-3 gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500"></div>
                                        <div className="space-y-1">
                                            <div className="w-20 h-2 bg-gray-200 rounded"></div>
                                            <div className="w-12 h-1.5 bg-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                    <div className={`w-full aspect-[4/5] ${i % 2 === 0 ? 'bg-blue-50' : 'bg-pink-50'} relative overflow-hidden group`}>
                                        <img src={`https://picsum.photos/400/500?random=${10+i}`} className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100" alt="" />
                                        {/* Like heart animation */}
                                        <motion.div 
                                            animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i }}
                                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                        >
                                            <div className="text-white text-6xl drop-shadow-xl shadow-black">♥</div>
                                        </motion.div>
                                    </div>
                                    <div className="p-3 space-y-2">
                                        <div className="flex gap-3">
                                            <div className="w-5 h-5 rounded-full bg-red-500"></div>
                                            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                                            <div className="w-5 h-5 rounded-full bg-gray-200 ml-auto"></div>
                                        </div>
                                        <div className="w-full h-2 bg-gray-200 rounded mt-2"></div>
                                        <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            ))}
                         </motion.div>
                         
                         {/* Bottom fade */}
                         <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
                    </div>
                </div>
            </motion.div>

            {/* Giant Text */}
            <motion.div style={{ x: textX, y: textY }} className="relative z-10 pointer-events-none">
                <motion.h1 
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[15vw] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] font-display text-white uppercase tracking-tighter leading-[0.75] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                    MAKE A
                </motion.h1>
                <motion.h1 
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-[15vw] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] font-display text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-600 uppercase tracking-tighter leading-[0.75] drop-shadow-lg"
                >
                    SPLASH
                </motion.h1>
            </motion.div>

        </div>

        {/* Bottom Content Grid */}
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-end max-w-6xl mx-auto z-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-normal leading-[1.1]">
                        <span className="font-bold text-cyan-400">Tailored Creative</span><br/>
                        for Social Media
                    </h2>
                    <p className="text-blue-200 text-lg max-w-md font-light leading-relaxed">
                        Motion graphics make up social media. Get your brand seen and shared with slick creative that's tailored to you.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                    <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "#ff0044" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#ff1744] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-3 shadow-[0_0_30px_rgba(255,23,68,0.5)] border border-red-400/50"
                    >
                        Start the Conversation
                        <ArrowRight size={20} />
                    </motion.button>
                    
                    <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center gap-3 border border-white/30 hover:border-white text-white transition-colors"
                    >
                        View Showreel
                    </motion.button>
                </div>
            </motion.div>

            {/* Floating Stats / Elements */}
            <div className="hidden md:flex flex-col items-end space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-xs shadow-2xl"
                >
                   <div className="flex items-center gap-4 mb-4">
                       <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                           <Star size={24} fill="currentColor" />
                       </div>
                       <div>
                           <div className="text-2xl font-bold text-white">4.8/5</div>
                           <div className="text-xs text-blue-200 uppercase tracking-wider">Client Satisfaction</div>
                       </div>
                   </div>
                   <div className="text-sm text-gray-300 italic">
                       "The motion assets completely transformed our engagement rates."
                   </div>
                </motion.div>
                
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="bg-[#2962ff] p-4 rounded-xl shadow-lg rotate-6 border border-white/10"
                >
                    <div className="flex items-center gap-2 text-white font-bold">
                        <MousePointer2 size={20} />
                        <span>+145% Click Rate</span>
                    </div>
                </motion.div>
            </div>
        </div>

      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full text-[#283593] fill-current transform scale-150 origin-bottom">
              <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;