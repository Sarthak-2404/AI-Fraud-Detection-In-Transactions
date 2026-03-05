import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, TrendingUp } from 'lucide-react';

const Careers = () => {
    const openPositions = [
        {
            title: 'Senior ML Engineer',
            department: 'Engineering',
            location: 'Bangalore',
            type: 'Full-time'
        },
        {
            title: 'Cybersecurity Specialist',
            department: 'Security',
            location: 'Hyderabad',
            type: 'Full-time'
        },
        {
            title: 'Product Manager',
            department: 'Product',
            location: 'Delhi',
            type: 'Full-time'
        },
        {
            title: 'Data Scientist',
            department: 'Engineering',
            location: 'Bangalore',
            type: 'Full-time'
        },
        {
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Remote',
            type: 'Full-time'
        },
        {
            title: 'Business Development Executive',
            department: 'Sales',
            location: 'Mumbai',
            type: 'Full-time'
        }
    ];

    const benefits = [
        { icon: Award, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
        { icon: Users, title: 'Great Team', description: 'Work with talented professionals' },
        { icon: TrendingUp, title: 'Growth', description: 'Continuous learning and development' },
        { icon: Briefcase, title: 'Flexibility', description: 'Work from anywhere, flexible hours' }
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
                        Join Our Team
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Help us build the future of fraud detection and make digital India safer.
                    </p>
                </motion.div>
            </section>

            {/* Why Join Us */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Why Join FrauDe?</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10 text-center"
                        >
                            <benefit.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Open Positions */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Open Positions</h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {openPositions.map((position, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-accent/50 transition-all group cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{position.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <span>{position.department}</span>
                                        <span>•</span>
                                        <span>{position.location}</span>
                                        <span>•</span>
                                        <span>{position.type}</span>
                                    </div>
                                </div>
                                <button className="mt-4 md:mt-0 px-6 py-2 bg-accent text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-12 rounded-xl border border-white/10 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Don't see the right position?</h2>
                    <p className="text-gray-400 mb-8">
                        We're always looking for talented individuals. Send us your resume and we'll keep it on file for future opportunities.
                    </p>
                    <button className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors">
                        Send Your Resume
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

export default Careers;
