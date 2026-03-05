import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: 'Introduction',
            content: `FrauDe ("we", "us", "our" or "Company") operates the fraude.ai website and mobile application (the "Service").

This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.`
        },
        {
            title: 'Information Collection and Use',
            content: `We collect several different types of information for various purposes to provide and improve our Service to you.

Types of Data Collected:
• Personal Data: When you create an account, we collect information like your name, email address, phone number, and payment information.
• Device Information: We collect information about your device, including IP address, browser type, and device identifiers.
• Transaction Data: We collect information about UPI transactions you initiate on our Service.
• Usage Data: We automatically collect information about how you interact with our Service.

Legal Basis for Processing:
We process your personal data based on your consent, contract fulfillment, legal obligation, vital interests, or legitimate interests.`
        },
        {
            title: 'Use of Data',
            content: `FrauDe uses the collected data for various purposes:

• To provide and maintain our Service
• To notify you about changes to our Service
• To allow you to participate in interactive features of our Service
• To provide customer support and respond to your inquiries
• To gather analysis or valuable information to improve our Service
• To monitor the usage of our Service
• To detect and prevent fraudulent transactions
• To comply with legal obligations`
        },
        {
            title: 'Security of Data',
            content: `The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.

We implement security measures including:
• AES-256 encryption for data in transit and at rest
• Regular security audits and penetration testing
• Access controls and authentication mechanisms
• Employee training on data security
• Compliance with ISO 27001 standards`
        },
        {
            title: 'Data Retention',
            content: `FrauDe will retain your personal data only for as long as necessary for the purposes set out in this Privacy Policy:

• Account information: Retained while you maintain an active account
• Transaction data: Retained for 7 years for regulatory compliance
• Device and usage data: Retained for 12 months
• You have the right to request deletion of your data at any time, except where retention is required by law.`
        },
        {
            title: 'Your Rights',
            content: `Depending on your location, you have the following rights regarding your personal data:

• Right to Access: You have the right to request a copy of the personal data we hold about you.
• Right to Rectification: You can request correction of inaccurate data.
• Right to Erasure: You can request deletion of your data.
• Right to Restrict Processing: You can request that we limit how we use your data.
• Right to Data Portability: You can request to receive your data in a portable format.
• Right to Object: You can object to our processing of your data.

To exercise any of these rights, please contact us at privacy@fraude.ai`
        }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-20">
            {/* Header */}
            <section className="container mx-auto px-4 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Last updated: February 16, 2026
                    </p>
                </motion.div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-4">
                <div className="space-y-12 max-w-4xl mx-auto">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 p-8 rounded-lg border border-white/10"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-accent">{section.title}</h2>
                            <div className="text-gray-300 space-y-4 whitespace-pre-wrap">
                                {section.content}
                            </div>
                        </motion.div>
                    ))}

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-accent/10 to-blue-500/10 p-8 rounded-lg border border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-300 mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="space-y-2 text-gray-400">
                            <p>Email: privacy@fraude.ai</p>
                            <p>Address: Tech Park, Electronic City, Bangalore, India</p>
                            <p>Phone: +91 9876543210</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
