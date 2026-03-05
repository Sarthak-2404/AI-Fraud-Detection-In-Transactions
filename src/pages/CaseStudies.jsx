import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3, Shield } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            company: 'TechPay Solutions',
            industry: 'Digital Payments',
            challenge: 'Losing ₹50 lakhs monthly to organized fraud rings',
            solution: 'Implemented FrauDe AI with real-time transaction analysis',
            results: {
                fraud_reduction: '94%',
                cost_saved: '₹5.6 Cr annually',
                false_positives: '0.2%'
            },
            quote: 'FrauDe transformed our fraud prevention strategy. We went from reactive to proactive overnight.',
            author: 'Rohit Sharma, CTO'
        },
        {
            company: 'RetailHub India',
            industry: 'E-commerce',
            challenge: 'High dispute rates affecting merchant relationships',
            solution: 'Integrated FrauDe for customer transaction verification',
            results: {
                fraud_reduction: '89%',
                cost_saved: '₹3.2 Cr annually',
                false_positives: '0.15%'
            },
            quote: 'Customer satisfaction improved dramatically after reducing false fraud flags.',
            author: 'Priya Verma, Head of Operations'
        },
        {
            company: 'FinServe Bank',
            industry: 'Banking',
            challenge: 'Compliance issues with RBI fraud detection standards',
            solution: 'Deployed FrauDe across 50,000+ merchants',
            results: {
                fraud_reduction: '97%',
                cost_saved: '₹12.8 Cr annually',
                false_positives: '0.1%'
            },
            quote: 'Exceeded all regulatory requirements with flying colors. Best investment we made.',
            author: 'Amit Kapoor, Risk Director'
        },
        {
            company: 'GroceryNow App',
            industry: 'Online Grocery',
            challenge: 'Rapid growth leading to uncontrolled fraud losses',
            solution: 'Real-time FrauDe integration for seamless transactions',
            results: {
                fraud_reduction: '92%',
                cost_saved: '₹1.8 Cr annually',
                false_positives: '0.18%'
            },
            quote: 'We could scale confidently knowing fraud was under control with FrauDe.',
            author: 'Kavya Singh, Growth Manager'
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
                        Success Stories
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        See how leading companies transformed their fraud prevention with FrauDe.
                    </p>
                </motion.div>
            </section>

            {/* Case Studies */}
            <section className="container mx-auto px-4">
                <div className="space-y-12">
                    {cases.map((caseStudy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Left Side - Case Info */}
                                <div className="p-8 md:p-12">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold mb-2 text-white">{caseStudy.company}</h3>
                                        <p className="text-accent font-semibold">{caseStudy.industry}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Challenge</h4>
                                            <p className="text-gray-300">{caseStudy.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase">Solution</h4>
                                            <p className="text-gray-300">{caseStudy.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Results */}
                                <div className="bg-gradient-to-br from-accent/20 to-blue-500/20 p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center">
                                    <h4 className="text-2xl font-bold mb-8 text-accent">Results Achieved</h4>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-gray-400 text-sm mb-2">Fraud Reduction</p>
                                            <p className="text-4xl font-bold text-accent">{caseStudy.results.fraud_reduction}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-2">Annual Savings</p>
                                            <p className="text-3xl font-bold text-emerald-400">{caseStudy.results.cost_saved}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm mb-2">False Positives</p>
                                            <p className="text-2xl font-bold text-blue-400">{caseStudy.results.false_positives}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <p className="text-gray-300 italic mb-3">"{caseStudy.quote}"</p>
                                        <p className="text-accent font-semibold text-sm">— {caseStudy.author}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 mt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-12 rounded-xl border border-white/10 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fraud Protection?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join hundreds of companies saving millions with FrauDe. Schedule a demo today.
                    </p>
                    <button className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors">
                        Schedule Demo
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

export default CaseStudies;
