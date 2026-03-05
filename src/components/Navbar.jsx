import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
                scrolled ? "bg-background/80 backdrop-blur-md shadow-lg py-3 border-b border-white/5" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                        <img src="/logo.png" alt="FrauDe Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="tracking-wide text-white">Frau<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">De</span></span>
                </Link>
                <div className="hidden md:flex space-x-8 text-sm font-medium items-center text-gray-300">
                    <a href="/#how-it-works" className="hover:text-accent transition-colors">How It Works</a>
                    <a href="/#features" className="hover:text-accent transition-colors">Features</a>
                    <a href="/#footer" className="hover:text-accent transition-colors">FAQ's</a>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">
                        Login
                    </Link>
                    <Link to="/signup">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(0,200,83,0.4)] hover:shadow-[0_0_20px_rgba(0,200,83,0.6)] text-sm"
                        >
                            Sign Up
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
