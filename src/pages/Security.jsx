import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, Server, Zap, Shield, Webhook } from 'lucide-react';

const Security = () => {
    const features = [
        {
            icon: Lock,
            title: 'End-to-End Encryption',
            description: 'All data is encrypted using military-grade AES-256 encryption standards'
        },
        {
            icon: Eye,
            title: 'Privacy First',
            description: 'Your personal data is never shared or stored beyond transaction processing'
        },
        {
            icon: Server,
            title: 'Secure Infrastructure',
            description: 'Deployed on ISO 27001 certified servers with 99.99% uptime'
        },
        {
            icon: Zap,
            title: 'Real-time Monitoring',
            description: '24/7 security monitoring and threat detection systems'
        },
        {
            icon: Shield,
            title: 'Compliance',
            description: 'Compliant with RBI, NISM, and international security standards'
        },
        {
            icon: Webhook,
            title: 'Zero Trust Security',
            description: 'Every access is verified, every transaction is authenticated'
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
                        Security & Compliance
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Your trust is our responsibility. We employ industry-leading security practices and compliance standards.
                    </p>
                </motion.div>
            </section>

            {/* Security Features */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Security Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-accent/50 transition-all"
                        >
                            <feature.icon className="h-12 w-12 text-accent mb-4" />
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Certifications Section */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Industry Certifications</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'RBI Certified'].map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-accent/20 to-blue-500/20 p-8 rounded-lg border border-white/10 text-center"
                        >
                            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                            <h3 className="font-semibold text-lg">{cert}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Protection Guarantee */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-12 rounded-xl border border-white/10"
                >
                    <h2 className="text-3xl font-bold mb-6">FrauDe Security Guarantee</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-2">99.8%</h3>
                            <p className="text-gray-400">Fraud Detection Accuracy</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-2">24/7</h3>
                            <p className="text-gray-400">Security Monitoring & Support</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-2">Zero</h3>
                            <p className="text-gray-400">Data Breach History</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Security;
