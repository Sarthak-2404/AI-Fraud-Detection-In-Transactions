import React from 'react';
import { Smartphone, Search, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const phases = [
    {
        icon: Smartphone,
        color: "text-blue-400",
        bg: "bg-blue-900/20",
        hover: "group-hover:bg-blue-900/30",
        title: "Transaction Input",
        desc: "When a UPI transaction is initiated, the details are securely captured and sent to our analysis engine instantly."
    },
    {
        icon: Search,
        color: "text-purple-400",
        bg: "bg-purple-900/20",
        hover: "group-hover:bg-purple-900/30",
        title: "Fraud Analysis",
        desc: "Our AI algorithms cross-reference the transaction against millions of patterns to detect anomalies or suspicious behavior."
    },
    {
        icon: AlertTriangle,
        color: "text-red-400",
        bg: "bg-red-900/20",
        hover: "group-hover:bg-red-900/30",
        title: "Risk Alert",
        desc: "If a risk is detected, an instant alert is triggered, flagging the transaction for review or blocking it automatically."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 px-4 container mx-auto">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl md:text-5xl font-bold mb-4"
                >
                    How It Works
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg"
                >
                    Our advanced AI system processes transactions in three simple yet powerful steps.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                {phases.map((phase, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-[#0F172A] p-10 rounded-3xl shadow-lg border border-white/5 hover:shadow-2xl hover:border-accent/30 transition-all text-center group relative z-10"
                    >
                        <div className={`w-20 h-20 ${phase.bg} rounded-2xl flex items-center justify-center mx-auto mb-8 ${phase.hover} transition-colors duration-300 ring-1 ring-white/5`}>
                            <phase.icon className={`h-10 w-10 ${phase.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {phase.desc}
                        </p>
                        {/* Connector line for desktop */}
                        {index < phases.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-800 z-0 transform -translate-y-1/2"></div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
