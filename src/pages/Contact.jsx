import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            details: 'support@fraude.ai',
            description: 'We respond within 24 hours'
        },
        {
            icon: Phone,
            title: 'Phone',
            details: '+91 9876543210',
            description: 'Available Monday to Friday, 9 AM - 6 PM'
        },
        {
            icon: MapPin,
            title: 'Address',
            details: 'Bangalore, India',
            description: 'Tech Park, Electronic City'
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

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
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and our team will respond as soon as possible.
                    </p>
                </motion.div>
            </section>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full bg-[#0B1221] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full bg-[#0B1221] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this about?"
                                    className="w-full bg-[#0B1221] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more..."
                                    rows="5"
                                    className="w-full bg-[#0B1221] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex gap-6 mb-8"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent">
                                            <info.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                                        <p className="text-accent font-semibold">{info.details}</p>
                                        <p className="text-gray-400 text-sm">{info.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Business Hours */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10"
                        >
                            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM IST</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM IST</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-12 rounded-xl border border-white/10 text-center"
                >
                    <h2 className="text-3xl font-bold mb-8">Looking for something else?</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="px-6 py-2 bg-white/10 hover:bg-accent hover:text-black rounded-lg transition-all">
                            FAQ
                        </a>
                        <a href="#" className="px-6 py-2 bg-white/10 hover:bg-accent hover:text-black rounded-lg transition-all">
                            Documentation
                        </a>
                        <a href="#" className="px-6 py-2 bg-white/10 hover:bg-accent hover:text-black rounded-lg transition-all">
                            System Status
                        </a>
                        <a href="#" className="px-6 py-2 bg-white/10 hover:bg-accent hover:text-black rounded-lg transition-all">
                            Community
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
