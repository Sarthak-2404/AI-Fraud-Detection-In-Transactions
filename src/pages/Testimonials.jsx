import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Small Business Owner',
            company: 'Kumar Electronics Store',
            image: '👨‍💼',
            content: 'FrauDe helped me save over ₹2 lakhs in fraudulent transactions. The real-time alerts are incredible!',
            rating: 5
        },
        {
            name: 'Priya Sharma',
            role: 'Finance Manager',
            company: 'Tech Startup India',
            image: '👩‍💼',
            content: 'We integrated FrauDe into our payment system and fraud losses dropped by 95%. Highly recommended!',
            rating: 5
        },
        {
            name: 'Vikram Patel',
            role: 'CEO',
            company: 'Digital Payments Solutions',
            image: '👨‍💻',
            content: 'The accuracy and speed of fraud detection is unmatched. Our customers feel much safer now.',
            rating: 5
        },
        {
            name: 'Neha Gupta',
            role: 'Operations Head',
            company: 'E-commerce Platform',
            image: '👩‍💻',
            content: 'Best decision we made this year. Customer complaints about fraud dropped significantly.',
            rating: 5
        },
        {
            name: 'Amit Desai',
            role: 'Risk Manager',
            company: 'Financial Services Ltd',
            image: '👨‍🔬',
            content: 'The AI engine catches patterns we humans would miss. Exceptional service and support.',
            rating: 5
        },
        {
            name: 'Deepika Nair',
            role: 'Customer Success Manager',
            company: 'RetailTech Solutions',
            image: '👩‍🎓',
            content: 'Seamless integration, minimal false positives, maximum protection. A game-changer!',
            rating: 5
        }
    ];

    const stats = [
        { number: '99.8%', label: 'Detection Accuracy' },
        { number: '₹500Cr+', label: 'Fraud Prevented' },
        { number: '10K+', label: 'Happy Customers' },
        { number: '24/7', label: 'Support Available' }
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
                        What Our Customers Say
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Join thousands of satisfied customers protecting their transactions with FrauDe.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-accent/20 to-blue-500/20 p-8 rounded-xl border border-white/10 text-center"
                        >
                            <h3 className="text-4xl font-bold text-accent mb-2">{stat.number}</h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Customer Testimonials</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-accent/50 transition-all"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">{testimonial.image}</div>
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    <p className="text-xs text-accent">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
