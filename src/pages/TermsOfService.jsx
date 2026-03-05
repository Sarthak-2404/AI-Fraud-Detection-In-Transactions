import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    const sections = [
        {
            title: 'Acceptance of Terms',
            content: `By accessing and using FrauDe, you accept and agree to be bound by the terms and provision of this agreement.

If you do not agree to abide by the above, please do not use this service.`
        },
        {
            title: 'Use License',
            content: `Permission is granted to temporarily download one copy of the materials (information or software) on FrauDe's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

1. Modify or copy the materials
2. Use the materials for any commercial purpose or for any public display
3. Attempt to decompile or reverse engineer any software contained on the website
4. Remove any copyright or other proprietary notations from the materials
5. Transfer the materials to another person or "mirror" the materials on any other server
6. Use automated means to access the service without permission`
        },
        {
            title: 'Disclaimer',
            content: `The materials on FrauDe's website are provided on an 'as is' basis. FrauDe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

While FrauDe strives to provide accurate information and fraud detection, we do not warrant the completeness, accuracy, or reliability of the Service.`
        },
        {
            title: 'Limitations',
            content: `In no event shall FrauDe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FrauDe's website, even if FrauDe or an authorized representative has been notified orally or in writing of the possibility of such damage.

The limitations of liability in this section shall apply to claims of personal injury to the extent permitted by applicable law.`
        },
        {
            title: 'Accuracy of Materials',
            content: `The materials appearing on FrauDe's website could include technical, typographical, or photographic errors. FrauDe does not warrant that any of the materials on its website are accurate, complete, or current.

FrauDe may make changes to the materials contained on its website at any time without notice.`
        },
        {
            title: 'Links',
            content: `FrauDe has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by FrauDe of the site. Use of any such linked website is at the user's own risk.

If you believe a link on our website is inappropriate, please contact us immediately.`
        },
        {
            title: 'Modifications',
            content: `FrauDe may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.`
        },
        {
            title: 'Governing Law',
            content: `These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`
        },
        {
            title: 'User Responsibilities',
            content: `As a user of FrauDe, you are responsible for:

1. Maintaining the confidentiality of your account and password
2. Restricting access to your computer
3. Accepting responsibility for all activities that occur under your account
4. Not using the Service for any unlawful purpose
5. Not transmitting viruses, malware, or malicious code
6. Not attempting to gain unauthorized access to any portion of the Service
7. Complying with all applicable laws and regulations`
        },
        {
            title: 'Limitation Period',
            content: `Any claim or cause of action arising out of or relating to use of the Service must be commenced within one (1) year after the claim or cause of action arises, or such claim or cause of action is barred by law.`
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
                        Terms of Service
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
                        <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
                        <p className="text-gray-300 mb-4">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="space-y-2 text-gray-400">
                            <p>Email: legal@fraude.ai</p>
                            <p>Address: Tech Park, Electronic City, Bangalore, India</p>
                            <p>Phone: +91 9876543210</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
