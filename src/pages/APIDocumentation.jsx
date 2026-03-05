import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Lock, BookOpen, Github, ExternalLink } from 'lucide-react';

const APIDocumentation = () => {
    const endpoints = [
        {
            method: 'POST',
            endpoint: '/api/v1/transactions/validate',
            description: 'Validate a transaction for fraud risk',
            params: ['user_id', 'amount', 'merchant', 'location'],
            status: 200
        },
        {
            method: 'GET',
            endpoint: '/api/v1/transactions/history',
            description: 'Get transaction history for a user',
            params: ['user_id', 'limit', 'offset'],
            status: 200
        },
        {
            method: 'POST',
            endpoint: '/api/v1/alerts/subscribe',
            description: 'Subscribe to fraud alerts',
            params: ['user_id', 'alert_type', 'channel'],
            status: 201
        },
        {
            method: 'GET',
            endpoint: '/api/v1/fraud-score',
            description: 'Get real-time fraud risk score',
            params: ['transaction_id'],
            status: 200
        }
    ];

    const features = [
        { icon: Zap, title: 'Real-time API', description: 'Sub-millisecond response times for transaction validation' },
        { icon: Lock, title: 'Secure', description: 'OAuth 2.0 authentication and AES-256 encryption' },
        { icon: Code, title: 'Easy Integration', description: 'REST API with SDKs for popular languages' },
        { icon: BookOpen, title: 'Comprehensive Docs', description: 'Complete documentation with code examples' }
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
                        API Documentation
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Integrate FrauDe's fraud detection into your applications with our powerful REST API.
                    </p>
                </motion.div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10 text-center"
                        >
                            <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* API Endpoints */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold mb-12">API Endpoints</h2>
                <div className="space-y-6">
                    {endpoints.map((endpoint, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-lg border border-white/10"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <span className={`px-3 py-1 rounded font-semibold text-sm ${
                                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                                    }`}>
                                        {endpoint.method}
                                    </span>
                                    <code className="text-accent font-mono">{endpoint.endpoint}</code>
                                </div>
                                <span className="text-xs font-mono text-gray-400">Status: {endpoint.status}</span>
                            </div>
                            <p className="text-gray-300 mb-4">{endpoint.description}</p>
                            <div>
                                <p className="text-sm text-gray-400 mb-2">Parameters:</p>
                                <div className="flex flex-wrap gap-2">
                                    {endpoint.params.map((param, i) => (
                                        <span key={i} className="bg-white/10 px-2 py-1 rounded text-xs text-gray-300">
                                            {param}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quick Start */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 p-8 rounded-lg border border-white/10"
                >
                    <h3 className="text-2xl font-bold mb-6">Quick Start Example</h3>
                    <pre className="bg-[#0B1221] p-4 rounded overflow-x-auto text-sm text-gray-300">
{`curl -X POST https://api.fraude.ai/v1/transactions/validate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user_123",
    "amount": 5000,
    "merchant": "Amazon India",
    "location": "Delhi",
    "device_id": "dev_456"
  }'`}
                    </pre>
                </motion.div>
            </section>

            {/* Resources */}
            <section className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Resources & Support</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: BookOpen, title: 'Complete Documentation', description: 'Detailed API reference with examples' },
                        { icon: Github, title: 'SDK Libraries', description: 'Pre-built SDKs for Python, Node.js, Java' },
                        { icon: ExternalLink, title: 'Developer Community', description: 'Get help from our dev community' }
                    ].map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-accent/20 to-blue-500/20 p-6 rounded-lg border border-white/10 text-center cursor-pointer hover:border-accent/50 transition-all"
                        >
                            <resource.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                            <p className="text-gray-400 text-sm">{resource.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default APIDocumentation;
