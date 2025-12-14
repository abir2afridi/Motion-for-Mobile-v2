import React from 'react';
import { motion } from 'framer-motion';

const BetterDoneRight: React.FC = () => {
    const benefits = [
        { title: 'Stand out from the noise', desc: 'Dynamic, high-quality creative that will elevate your brand.' },
        { title: 'Capture attention', desc: 'Connect and hold your audience for longer with snackable motion content.' },
        { title: 'Organic Reach', desc: 'Reach audiences through likes and shares with content that adds value rather than sells.' },
        { title: 'Raised brand perception', desc: 'Associate high-end production value with your brand.' },
        { title: 'Engagement with your brand', desc: 'High-quality visuals get more likes, comments, shares and link clicks.' },
    ];

  return (
    <section className="bg-[#fff8e1] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-7xl sm:text-8xl md:text-9xl font-display text-[#ff1744] uppercase text-center mb-16 tracking-tighter transform"
            >
                Better Done Right
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4 lg:col-span-3">
                    <p className="text-[#bf360c] text-lg font-medium leading-relaxed">
                        You'll SCORE with MFM! Our approach gets your brand consistently loved, for longer. With tailored creative across your social media platforms, you'll enjoy a host of benefits:
                    </p>
                </div>
                
                <div className="md:col-span-8 lg:col-span-9">
                    <div className="divide-y divide-red-200 border-t border-b border-red-200">
                        {benefits.map((benefit, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.6)", paddingLeft: "1.5rem", paddingRight: "0.5rem" }}
                                className="grid grid-cols-1 sm:grid-cols-3 py-6 gap-4 transition-all duration-300 px-4 rounded-lg cursor-default"
                            >
                                <h4 className="font-bold text-[#bf360c] sm:col-span-1 text-xl font-display uppercase">{benefit.title}</h4>
                                <p className="text-[#bf360c]/80 text-sm sm:col-span-2">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BetterDoneRight;