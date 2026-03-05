import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HelpCenter = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const categories = [
        {
            title: 'Getting Started',
            faqs: [
                {
                    q: 'How do I sign up for FrauDe?',
                    a: 'Visit our website, click "Get Started", and follow the registration process. You can start with our free Basic plan and upgrade anytime.'
                },
                {
                    q: 'Is there a free trial?',
                    a: 'Yes, our Basic plan is completely free and gives you access to core fraud detection features.'
                },
                {
                    q: 'What payment methods do you accept?',
                    a: 'We accept all major payment methods including credit cards, debit cards, UPI, and net banking.'
                }
            ]
        },
        {
            title: 'Security & Privacy',
            faqs: [
                {
                    q: 'Is my data safe with FrauDe?',
                    a: 'Yes, we use military-grade encryption (AES-256) and comply with all international security standards including ISO 27001 and SOC 2.'
                },
                {
                    q: 'Do you share my data with third parties?',
                    a: 'No, we never share your personal data with third parties. Data is used only for fraud detection purposes.'
                },
                {
                    q: 'What is your data retention policy?',
                    a: 'Transaction data is retained for 7 years for compliance purposes, and you can request deletion anytime.'
                }
            ]
        },
        {
            title: 'Billing & Plans',
            faqs: [
                {
                    q: 'Can I change my plan?',
                    a: 'Yes, you can upgrade or downgrade your plan anytime. Changes take effect immediately.'
                },
                {
                    q: 'What happens if I cancel?',
                    a: 'Your account will be downgraded to the free plan. Paid plan features will be disabled but your data remains safe.'
                },
                {
                    q: 'Is there a refund policy?',
                    a: 'Yes, we offer a 14-day money-back guarantee for annual plans if you\'re not satisfied.'
                }
            ]
        },
        {
            title: 'Technical Support',
            faqs: [
                {
                    q: 'How do I integrate the API?',
                    a: 'Check our API documentation with code examples. We also provide SDKs for popular languages.'
                },
                {
                    q: 'What is your API uptime?',
                    a: 'We guarantee 99.99% API uptime with redundant systems and 24/7 monitoring.'
                },
                {
                    q: 'How can I get technical support?',
                    a: 'Contact us via email, phone, or live chat. Premium plans get priority support.'
                }
            ]
        }
    ];

    const FAQItem = ({ item, isExpanded, onToggle }) => (
        <motion.div
            initial={false}
            animate={{ backgroundColor: isExpanded ? 'rgba(255,255,255,0.05)' : 'transparent' }}
            className={`border border-white/10 rounded-lg transition-all ${isExpanded ? 'bg-white/5' : ''}`}
        >
            <button
                onClick={onToggle}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
                <span className="font-semibold text-left">{item.q}</span>
                <ChevronDown
                    className={`h-5 w-5 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                />
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-6 text-gray-400">{item.a}</div>
            </motion.div>
        </motion.div>
    );

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
                        Help Center
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Find answers to common questions or get in touch with our support team.
                    </p>
                    <input
                        type="text"
                        placeholder="Search for help..."
                        className="max-w-md w-full bg-[#0B1221] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-accent transition-colors"
                    />
                </motion.div>
            </section>

            {/* FAQ Sections */}
            <section className="container mx-auto px-4 mb-20">
                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={categoryIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                        <div className="space-y-4">
                            {category.faqs.map((faq, faqIndex) => {
                                const id = `${categoryIndex}-${faqIndex}`;
                                return (
                                    <FAQItem
                                        key={id}
                                        item={faq}
                                        isExpanded={expandedFaq === id}
                                        onToggle={() => setExpandedFaq(expandedFaq === id ? null : id)}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Contact Support */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-12 rounded-xl border border-white/10 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Didn't find what you were looking for?</h2>
                    <p className="text-gray-400 mb-8">
                        Our support team is here to help 24/7. Reach out to us for any questions or issues.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors">
                            Contact Support
                        </button>
                        <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                            Schedule Call
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default HelpCenter;
