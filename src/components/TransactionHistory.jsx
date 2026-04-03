import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const TransactionHistory = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
      >
        <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No Transactions Yet</h3>
        <p className="text-gray-400">
          Start analyzing transactions to see fraud detection results here.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-purple-400" />
        Transaction History
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-gray-400">Time</th>
              <th className="text-left py-3 px-4 text-gray-400">Type</th>
              <th className="text-left py-3 px-4 text-gray-400">Amount</th>
              <th className="text-left py-3 px-4 text-gray-400">Result</th>
              <th className="text-left py-3 px-4 text-gray-400">Confidence</th>
              <th className="text-left py-3 px-4 text-gray-400">Risk</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <motion.tr
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-b border-white/5 ${
                  transaction.result.fraud === 1 ? 'bg-red-500/5' : 'bg-green-500/5'
                }`}
              >
                <td className="py-3 px-4 text-gray-300 text-xs">
                  {transaction.timestamp}
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                    {transaction.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-white font-semibold">
                  ${transaction.amount.toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                    transaction.result.fraud === 1 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {transaction.result.fraud === 1 ? (
                      <><AlertTriangle className="w-3 h-3" /> Fraud</>
                    ) : (
                      <><CheckCircle className="w-3 h-3" /> Safe</>
                    )}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-300">
                  {((transaction.result.confidence || 0) * 100).toFixed(1)}%
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold capitalize ${
                    transaction.result.risk_level === 'high' ? 'bg-red-500/20 text-red-400' :
                    transaction.result.risk_level === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {transaction.result.risk_level || 'low'}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {transactions.length}
            </div>
            <div className="text-xs text-gray-400">Total</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {transactions.filter(t => t.result.fraud === 0).length}
            </div>
            <div className="text-xs text-gray-400">Safe</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">
              {transactions.filter(t => t.result.fraud === 1).length}
            </div>
            <div className="text-xs text-gray-400">Fraud</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransactionHistory;
