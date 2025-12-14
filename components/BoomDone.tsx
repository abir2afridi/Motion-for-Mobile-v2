import React from 'react';
import { MessageCircle, MousePointer, PenTool, Tv } from 'lucide-react';
import { motion } from 'framer-motion';

const BoomDone: React.FC = () => {
  const steps = [
    { number: '01', title: 'Chat', desc: "We'll get to know more about your project and you'll get to know more about how we work. This is the briefing step.", icon: MessageCircle },
    { number: '02', title: 'Choose', desc: "Using information gathered, we'll propose a creative solution with script and visual frames. This is the concepting step.", icon: MousePointer },
    { number: '03', title: 'Create', desc: "We'll produce the hero animation with illustration, animation and audio. This is the creating step.", icon: PenTool },
    { number: '04', title: 'Channel', desc: "We'll produce cutdowns and still assets in various formats for delivery. This is the delivery step.", icon: Tv },
  ];

  return (
    <section className="bg-[#fdfbf7] py-24 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Side: Big Graphic Text */}
                <div className="relative">
                    <div className="sticky top-24">
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-8xl sm:text-9xl font-display uppercase leading-[0.8] tracking-tight"
                        >
                            <span className="text-outline text-blue-900 block mb-2">BOOM</span>
                            <span className="text-blue-200 text-outline-thick block">DONE!</span>
                        </motion.h2>
                        {/* Comic Explosion Graphic */}
                        <motion.div 
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 12 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            className="absolute bottom-0 left-10 transform translate-y-1/2 cursor-pointer"
                        >
                            <svg width="180" height="180" viewBox="0 0 100 100" className="text-red-500 fill-current drop-shadow-lg">
                                <path d="M50 0 L60 30 L90 20 L70 50 L100 70 L60 70 L50 100 L40 70 L0 70 L30 50 L10 20 L40 30 Z" />
                                <text x="50" y="60" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">BAM!</text>
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Content and Steps */}
                <div className="pt-8">
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 leading-tight">
                            Leave it to us. Tell us about your brand and who you want to reach, we'll show you how. We've simplified agency strategies into an easy, results driven process.
                        </h3>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#40c4ff] hover:bg-[#00b0ff] text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wider shadow-md transition-colors"
                        >
                            Help my Brand
                        </motion.button>
                    </div>

                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex gap-6 group"
                            >
                                <div className="flex-shrink-0 w-16 pt-2">
                                    <span className="text-blue-300 font-bold text-sm block mb-1">Step</span>
                                    <span className="text-blue-900 font-display text-4xl">{step.number}</span>
                                </div>
                                <div className="border-l-2 border-gray-200 pl-6 pb-2 group-hover:border-blue-400 transition-colors duration-300">
                                    <h4 className="text-2xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default BoomDone;