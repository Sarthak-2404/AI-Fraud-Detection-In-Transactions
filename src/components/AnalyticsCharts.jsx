import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const COLORS = {
  safe: '#10b981',
  fraud: '#ef4444',
  primary: '#3b82f6',
  secondary: '#8b5cf6'
};

const AnalyticsCharts = ({ transactions }) => {
  // Calculate chart data
  const getChartData = () => {
    const fraudCount = transactions.filter(t => t.result.fraud === 1).length;
    const safeCount = transactions.filter(t => t.result.fraud === 0).length;

    return [
      { name: 'Safe', value: safeCount, color: COLORS.safe },
      { name: 'Fraud', value: fraudCount, color: COLORS.fraud }
    ];
  };

  const getAmountChartData = () => {
    return transactions.slice(0, 10).map(t => ({
      name: `T${t.id.toString().slice(-4)}`,
      amount: t.amount,
      fraud: t.result.fraud
    }));
  };

  const getRiskDistribution = () => {
    const riskLevels = { low: 0, medium: 0, high: 0 };
    
    transactions.forEach(t => {
      const risk = t.result.risk_level || 'low';
      riskLevels[risk] = (riskLevels[risk] || 0) + 1;
    });

    return [
      { name: 'Low Risk', value: riskLevels.low, color: COLORS.safe },
      { name: 'Medium Risk', value: riskLevels.medium, color: '#f59e0b' },
      { name: 'High Risk', value: riskLevels.high, color: COLORS.fraud }
    ];
  };

  if (transactions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center col-span-2"
      >
        <div className="text-6xl mb-4">📊</div>
        <h3 className="text-xl font-semibold text-white mb-2">No Data Available</h3>
        <p className="text-gray-400">
          Start analyzing transactions to see analytics and charts here.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      {/* Pie Chart - Fraud Distribution */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-lg font-bold text-white mb-4">Fraud Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={getChartData()}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {getChartData().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                border: '1px solid rgba(255,255,255,0.2)' 
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bar Chart - Transaction Amounts */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-lg font-bold text-white mb-4">Recent Transaction Amounts</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={getAmountChartData()}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                border: '1px solid rgba(255,255,255,0.2)' 
              }} 
            />
            <Bar dataKey="amount" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Risk Distribution Chart */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-lg font-bold text-white mb-4">Risk Level Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={getRiskDistribution()}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {getRiskDistribution().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                border: '1px solid rgba(255,255,255,0.2)' 
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </>
  );
};

export default AnalyticsCharts;
