import React from 'react';
import { Shield, Twitter, Linkedin, Github, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-[#020617] text-gray-400 py-16 px-4 border-t border-white/5 relative z-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto">
                <div className="grid md:grid-cols-12 gap-10 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-3">
                        <div className="flex items-center gap-3 mb-6 text-white">
                            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-bold tracking-wide text-white">Frau<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">De</span></span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 mb-8 max-w-sm">
                            Securing digital India with next-generation AI. We provide real-time fraud detection for UPI transactions, ensuring your money stays safe.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-2 md:col-start-5">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Platform</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/how-it-works" className="hover:text-accent transition-colors block">How it Works</Link></li>
                            <li><Link to="/" className="hover:text-accent transition-colors block">Features</Link></li>
                            <li><Link to="/security" className="hover:text-accent transition-colors block">Security</Link></li>
                            <li><Link to="/pricing" className="hover:text-accent transition-colors block">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="hover:text-accent transition-colors block">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-accent transition-colors block">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-accent transition-colors block">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 3 - Resources */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/testimonials" className="hover:text-accent transition-colors block">Testimonials</Link></li>
                            <li><Link to="/case-studies" className="hover:text-accent transition-colors block">Case Studies</Link></li>
                            <li><Link to="/api-documentation" className="hover:text-accent transition-colors block">API Docs</Link></li>
                            <li><Link to="/help" className="hover:text-accent transition-colors block">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Stay Updated</h4>
                        <p className="text-sm text-gray-500 mb-4">
                            Subscribe to our newsletter for the latest security alerts and updates.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#0B1221] border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-600"
                            />
                            <button
                                type="button"
                                className="absolute right-1.5 top-1.5 p-1.5 bg-accent hover:bg-green-600 text-white rounded-md transition-colors"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div>
                        &copy; {new Date().getFullYear()} FrauDe - UPI Fraud Detection System. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/help" className="hover:text-white transition-colors">Help Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
