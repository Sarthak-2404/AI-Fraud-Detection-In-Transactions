import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardButton = () => {
  return (
    <Link to="/dashboard">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-sm flex items-center gap-2"
      >
        <Shield className="w-4 h-4" />
        Dashboard
      </motion.button>
    </Link>
  );
};

export default DashboardButton;
