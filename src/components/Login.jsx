import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="bg-[#0F172A] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative z-10 border border-white/10">
                <div className="p-8">
                    <div className="flex justify-center mb-6">
                        <Link to="/" className="flex items-center gap-3 text-white font-bold text-2xl">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="tracking-wide text-white">Frau<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">De</span></span>
                        </Link>
                    </div>

                    <h2 className="text-2xl font-bold text-center text-white mb-2">Welcome Back</h2>
                    <p className="text-center text-gray-400 mb-8">Sign in to access your fraud detection dashboard</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="email"
                                    className="block w-full pl-10 pr-3 py-3 bg-gray-900 border border-white/10 rounded-lg focus:ring-accent focus:border-accent transition-colors text-white placeholder-gray-600 focus:bg-gray-800"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-gray-300">Password</label>
                                <a href="#" className="text-sm text-accent hover:text-green-500 font-medium">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    className="block w-full pl-10 pr-3 py-3 bg-gray-900 border border-white/10 rounded-lg focus:ring-accent focus:border-accent transition-colors text-white placeholder-gray-600 focus:bg-gray-800"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-[#153a5e] text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-white/10">
                            Sign In <ArrowRight className="h-5 w-5" />
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-gray-400">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-accent font-bold hover:text-green-500 transition-colors">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
