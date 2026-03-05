import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Transactions Secured", value: "10M+", color: "text-blue-400" },
    { label: "Fraud Attempts Blocked", value: "50k+", color: "text-red-400" },
    { label: "Active Users", value: "100k+", color: "text-emerald-400" },
    { label: "Detection Accuracy", value: "99.9%", color: "text-purple-400" },
];

const Stats = () => {
    return (
        <section className="py-10 bg-[#0F172A]/50 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
                            <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
