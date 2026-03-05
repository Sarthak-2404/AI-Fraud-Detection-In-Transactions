import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, Shield } from 'lucide-react';

const AboutUs = () => {
    const values = [
        { icon: Shield, title: 'Security First', description: 'Protecting every transaction with advanced AI algorithms' },
        { icon: Target, title: 'Customer Focused', description: 'Your safety and satisfaction is our priority' },
        { icon: Lightbulb, title: 'Innovation', description: 'Continuously evolving fraud detection technology' },
        { icon: Award, title: 'Excellence', description: 'Trusted by millions for reliable protection' },
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
                        About FrauDe
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Securing digital India with next-generation AI-powered fraud detection for UPI transactions.
                    </p>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-4">
                            At FrauDe, we're committed to building a secure digital ecosystem for India. With cyber fraud losses exceeding billions annually, we've made it our mission to provide real-time, intelligent fraud detection that protects every UPI transaction.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our team of AI experts and security professionals work tirelessly to stay ahead of emerging threats, ensuring your digital wealth remains protected.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-accent/20 to-blue-500/20 p-8 rounded-xl border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-4">Why Choose FrauDe?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span>99.8% fraud detection accuracy</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span>Real-time transaction analysis</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span>Zero-false-positive guarantee</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span>Industry-leading customer support</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-accent/50 transition-all"
                        >
                            <value.icon className="h-12 w-12 text-accent mb-4" />
                            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                            <p className="text-gray-400">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-12 rounded-xl border border-white/10 text-center"
                >
                    <p className="text-xl text-gray-400 mb-4">
                        We're a team of talented engineers, data scientists, and security experts united by one goal: making digital India safer.
                    </p>
                    <p className="text-gray-500">
                        With combined experience of 200+ years in cybersecurity and AI, we bring expertise and passion to every challenge.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUs;
