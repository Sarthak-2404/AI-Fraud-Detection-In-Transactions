import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const articles = [
        {
            id: 1,
            title: 'The Rise of UPI Fraud: What You Need to Know',
            excerpt: 'Understanding the latest fraud trends and how to protect yourself in the digital payment era.',
            author: 'Priya Kumar',
            date: 'February 15, 2026',
            readTime: '5 min read',
            category: 'Security'
        },
        {
            id: 2,
            title: 'How AI is Revolutionizing Fraud Detection',
            excerpt: 'Exploring the cutting-edge AI algorithms that power next-generation fraud detection systems.',
            author: 'Amit Singh',
            date: 'February 10, 2026',
            readTime: '7 min read',
            category: 'Technology'
        },
        {
            id: 3,
            title: 'Banking Security Best Practices for 2026',
            excerpt: 'Essential tips and strategies to keep your digital assets safe in an increasingly connected world.',
            author: 'Neha Sharma',
            date: 'February 5, 2026',
            readTime: '6 min read',
            category: 'Tips'
        },
        {
            id: 4,
            title: 'Case Study: How FrauDe Saved Rs. 5 Crores',
            excerpt: 'A real-world example of how our AI engine detected and prevented a massive fraud ring.',
            author: 'Rajesh Patel',
            date: 'January 28, 2026',
            readTime: '8 min read',
            category: 'Case Study'
        },
        {
            id: 5,
            title: 'The Future of Digital Payments in India',
            excerpt: 'Industry insights on where UPI and digital payments are headed in the next 5 years.',
            author: 'Vikram Das',
            date: 'January 20, 2026',
            readTime: '6 min read',
            category: 'Market Analysis'
        },
        {
            id: 6,
            title: 'Understanding Machine Learning Models',
            excerpt: 'A beginner\'s guide to how machine learning models work in fraud detection.',
            author: 'Divya Nair',
            date: 'January 15, 2026',
            readTime: '9 min read',
            category: 'Education'
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
                        Blog & Resources
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Stay informed with the latest insights on fraud detection, security, and digital payments.
                    </p>
                </motion.div>
            </section>

            {/* Featured Article */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-accent/20 to-blue-500/20 p-8 md:p-12 rounded-xl border border-white/10"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-accent/30 text-accent text-sm font-semibold rounded-full">Featured</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Rise of UPI Fraud: What You Need to Know
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg">
                        Understanding the latest fraud trends and how to protect yourself in the digital payment era.
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>Priya Kumar</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>February 15, 2026</span>
                        </div>
                        <span>5 min read</span>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors">
                        Read Article <ArrowRight className="h-4 w-4" />
                    </button>
                </motion.div>
            </section>

            {/* Articles Grid */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.slice(1).map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-accent/50 transition-all group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">
                                    {article.category}
                                </span>
                                <span className="text-xs text-gray-500">{article.readTime}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">{article.excerpt}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <User className="h-3 w-3" />
                                    <span>{article.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-3 w-3" />
                                    <span>{article.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-12 rounded-xl border border-white/10 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
                    <p className="text-gray-400 mb-8">
                        Subscribe to our newsletter for weekly insights on fraud detection and digital security.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-[#0B1221] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-accent transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
};

export default Blog;
