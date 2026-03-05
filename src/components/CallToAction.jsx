import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
    return (
        <section className="py-28 px-4 relative overflow-hidden bg-[#0A2540]/50 backdrop-blur-sm border-t border-white/5">
            <div className="absolute inset-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"
                ></motion.div>
            </div>

            <div className="container mx-auto text-center relative z-10 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                    Secure Your Digital Payments
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Join thousands of users who trust our system to keep their UPI transactions safe and fraud-free.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-alert hover:bg-red-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(255,82,82,0.4)] hover:shadow-[0_0_30px_rgba(255,82,82,0.6)] transition-all"
                >
                    Start Fraud Detection
                </motion.button>
            </div>
        </section>
    );
};

export default CallToAction;
