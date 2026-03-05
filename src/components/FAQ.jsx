import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "How does FrauDe detect UPI fraud?",
        answer: "We use advanced machine learning algorithms to analyze transaction patterns, device fingerprints, and behavioral biometrics in real-time to identify anomalies that indicate fraudulent activity."
    },
    {
        question: "Is my transaction data secure?",
        answer: "Absolutely. We use military-grade end-to-end encryption for all data transmission and storage. Your financial details are never shared with third parties."
    },
    {
        question: "Does it work with Google Pay, PhonePe, and Paytm?",
        answer: "Yes, FrauDe is designed to work as an overlay security layer compatible with all major UPI applications including Google Pay, PhonePe, Paytm, and BHIM."
    },
    {
        question: "What happens if a transaction is flagged?",
        answer: "If a transaction is flagged as high-risk, we instantly block the transfer and send you an immediate alert. You can then review the details and verify if it was authorized by you."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 px-4 bg-transparent relative">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-xl mb-4 ring-1 ring-white/10">
                        <HelpCircle className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know about our security measures.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl bg-[#0F172A] overflow-hidden hover:border-white/20 transition-colors"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="h-5 w-5 text-accent flex-shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
