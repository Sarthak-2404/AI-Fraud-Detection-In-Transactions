import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Zap,
            title: 'Transaction Initiated',
            description: 'User initiates a UPI transaction through any supported payment app.'
        },
        {
            icon: Shield,
            title: 'Real-time Analysis',
            description: 'Our AI engine analyzes the transaction in milliseconds using 150+ data points.'
        },
        {
            icon: BarChart3,
            title: 'Risk Assessment',
            description: 'Machine learning models evaluate patterns, amounts, and behavioral anomalies.'
        },
        {
            icon: CheckCircle,
            title: 'Instant Decision',
            description: 'Transaction is approved or flagged for verification within seconds.'
        }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        How FrauDe Works
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Advanced AI-powered detection happening in real-time, protecting your every transaction.
                    </p>
                </motion.div>
            </section>

            {/* Process Steps */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-white/5 p-8 rounded-lg border border-white/10 text-center h-full">
                                <div className="inline-flex items-center justify-center h-16 w-16 bg-accent/20 rounded-full mb-6">
                                    <step.icon className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/3 -right-4 text-accent/30">→</div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Technology Section */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Technology</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">AI-Powered Detection</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-1">Machine Learning Models</h4>
                                    <p className="text-gray-400">Advanced algorithms trained on millions of transactions</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-1">Pattern Recognition</h4>
                                    <p className="text-gray-400">Identifies fraudulent patterns in real-time</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold mb-1">Behavioral Analysis</h4>
                                    <p className="text-gray-400">Learns your unique spending patterns</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-accent/20 to-blue-500/20 p-8 rounded-xl border border-white/10"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Processing Pipeline</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-accent font-bold">1.</span>
                                <span>Data Collection</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-accent font-bold">2.</span>
                                <span>Feature Extraction</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-accent font-bold">3.</span>
                                <span>Model Prediction</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-accent font-bold">4.</span>
                                <span>Decision & Action</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
