import React from 'react';
import { Users, BarChart2, Share2, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkTheSystem: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const textStackVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <section className="bg-[#283593] py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a237e] to-[#283593]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            
            {/* Typographic Art */}
            <div className="flex flex-col items-center justify-center font-display text-7xl sm:text-8xl md:text-9xl tracking-tight leading-[0.85] select-none opacity-90 mb-10">
                <motion.div custom={0} variants={textStackVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-outline text-blue-300">WORK THE SYSTEM</motion.div>
                <motion.div custom={1} variants={textStackVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                    <span className="text-outline text-blue-300">WORK </span>
                    <span className="text-[#00e5ff]">THE</span>
                    <span className="text-outline text-blue-300"> SYSTEM</span>
                </motion.div>
                <motion.div custom={2} variants={textStackVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                     <span className="text-outline text-blue-300">WORK THE </span>
                     <span className="text-[#ffd740]">SYSTEM</span>
                </motion.div>
                <motion.div custom={3} variants={textStackVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                    <span className="text-white">WORK</span>
                    <span className="text-outline text-blue-300"> THE SYSTEM</span>
                </motion.div>
            </div>

            {/* Central "Computer" Image Placeholder */}
            <div className="relative -mt-20 mb-16 mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 z-20">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 3 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ rotate: 0 }}
                    className="w-full h-full bg-[#f0e6d2] rounded-3xl shadow-2xl border-b-[12px] border-[#d7cbb5] flex flex-col p-6 transform transition-all duration-500 cursor-pointer"
                >
                    <div className="flex-1 bg-black rounded-xl border-4 border-gray-400 overflow-hidden relative shadow-inner group">
                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-blue-900/40 z-10 grid grid-cols-6 grid-rows-6 gap-px opacity-30">
                            {[...Array(36)].map((_, i) => <div key={i} className="bg-white/10 group-hover:bg-cyan-400/20 transition-colors"></div>)}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                                animate={{ height: ["10%", "50%", "30%", "80%", "40%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-4 bg-yellow-400 mx-1 rounded-sm"
                            ></motion.div>
                             <motion.div 
                                animate={{ height: ["30%", "70%", "20%", "60%", "20%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                className="w-4 bg-red-400 mx-1 rounded-sm"
                            ></motion.div>
                             <motion.div 
                                animate={{ height: ["60%", "20%", "90%", "30%", "50%"] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                className="w-4 bg-cyan-400 mx-1 rounded-sm"
                            ></motion.div>
                        </div>
                    </div>
                    <div className="h-8 mt-4 flex items-center gap-2">
                        <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                             <motion.div 
                                initial={{ width: 0 }} 
                                whileInView={{ width: "100%" }} 
                                transition={{ duration: 2, delay: 0.5 }} 
                                className="h-full bg-green-400" 
                             />
                        </div>
                        <div className="h-4 w-4 bg-red-500 rounded-full shadow-sm animate-pulse"></div>
                    </div>
                </motion.div>
                
                {/* Floating Elements near computer */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -right-10 top-1/2 text-yellow-300 text-6xl font-bold hidden md:block"
                >
                    ?
                </motion.div>
            </div>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light"
            >
                Social media rewards organic engagement. The more people like it, the more it's shared and seen. <span className="font-bold text-[#00e5ff]">Work it.</span>
            </motion.p>

            {/* Stats Row */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-blue-400/30 pt-10"
            >
                {[
                    { Icon: Share2, title: "Over 50%", sub: "of the world now uses social media" },
                    { Icon: Users, title: "1 in 3", sub: "customers turn to social media for advice" },
                    { Icon: BarChart2, title: "Viral Reach", sub: "Maximize your organic footprint" },
                    { Icon: DollarSign, title: "$20 Billion", sub: "spent on social media video advertising" }
                ].map((stat, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center group">
                        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-4 rounded-full bg-blue-800/50 mb-3 group-hover:bg-[#00e5ff]/20 transition-colors">
                            <stat.Icon className="text-[#00e5ff]" size={32} />
                        </motion.div>
                        <span className="text-white font-bold text-lg block">{stat.title}</span>
                        <span className="text-blue-200 text-xs uppercase max-w-[150px]">{stat.sub}</span>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    </section>
  );
};

export default WorkTheSystem;