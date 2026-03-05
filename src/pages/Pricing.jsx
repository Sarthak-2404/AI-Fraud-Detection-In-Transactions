import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: 'Free',
            description: 'Perfect for getting started',
            features: [
                'Up to 100 transactions/month',
                'Basic fraud detection',
                'Email support',
                'Standard security'
            ],
            highlighted: false
        },
        {
            name: 'Professional',
            price: '₹999',
            period: '/month',
            description: 'For regular users',
            features: [
                'Unlimited transactions',
                'Advanced AI detection',
                'Priority support',
                'Real-time alerts',
                'Spending analytics',
                'Multi-device support'
            ],
            highlighted: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For businesses',
            features: [
                'Unlimited transactions',
                'Custom AI models',
                'Dedicated support',
                'API integration',
                'Advanced analytics',
                'SLA guarantee',
                'Custom compliance'
            ],
            highlighted: false
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
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Choose the plan that's right for you. No hidden fees, cancel anytime.
                    </p>
                </motion.div>
            </section>

            {/* Pricing Plans */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative p-8 rounded-xl border transition-all ${
                                plan.highlighted
                                    ? 'bg-gradient-to-br from-accent/20 to-blue-500/20 border-accent shadow-lg shadow-accent/20'
                                    : 'bg-white/5 border-white/10'
                            }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-black text-xs font-bold rounded-full">
                                    POPULAR
                                </div>
                            )}
                            
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                            
                            <div className="mb-8">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
                            </div>
                            
                            <button className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-all ${
                                plan.highlighted
                                    ? 'bg-accent text-black hover:bg-emerald-400'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                            }`}>
                                Get Started
                            </button>
                            
                            <div className="space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {[
                        {
                            q: 'Can I switch plans anytime?',
                            a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
                        },
                        {
                            q: 'Is there a free trial?',
                            a: 'Yes! Our Basic plan is completely free and gives you access to core features with no credit card required.'
                        },
                        {
                            q: 'What payment methods do you accept?',
                            a: 'We accept all major credit cards, debit cards, UPI, and bank transfers for enterprise plans.'
                        },
                        {
                            q: 'Is there a refund policy?',
                            a: 'Yes, we offer a 14-day money-back guarantee for annual plans if you\'re not satisfied.'
                        }
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10"
                        >
                            <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                            <p className="text-gray-400">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Pricing;
