import React from 'react';
import { Zap, Activity, Lock, Server } from 'lucide-react';
import { motion } from 'framer-motion';

function FeatureCard({ icon, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay }}
            whileHover={{ y: -5 }}
            className="bg-[#0F172A] p-8 rounded-2xl hover:bg-[#1E293B] hover:shadow-xl transition-all border border-white/5 hover:border-accent/30 group"
        >
            <div className="mb-6 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ring-1 ring-white/10">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
}

const Features = () => {
    return (
        <section id="features" className="py-24 px-4 bg-transparent relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl md:text-5xl font-bold mb-4"
                    >
                        Powerful Features
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Built with cutting-edge technology to provide military-grade security for every transaction.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        delay={0.1}
                        icon={<Zap className="h-7 w-7 text-yellow-400" />}
                        title="Real-Time Detection"
                        desc="Analysis happens in milliseconds, ensuring no delay in your payments."
                    />
                    <FeatureCard
                        delay={0.2}
                        icon={<Activity className="h-7 w-7 text-accent" />}
                        title="Instant Alerts"
                        desc="Receive notifications immediately via SMS or App when suspicious activity is found."
                    />
                    <FeatureCard
                        delay={0.3}
                        icon={<Lock className="h-7 w-7 text-blue-400" />}
                        title="Secure Transactions"
                        desc="End-to-end encryption ensures your data never falls into the wrong hands."
                    />
                    <FeatureCard
                        delay={0.4}
                        icon={<Server className="h-7 w-7 text-purple-400" />}
                        title="Intelligent Monitoring"
                        desc="Machine learning models that get smarter with every transaction processed."
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
