import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Shield } from 'lucide-react';

const TRANSACTION_TYPES = ['CASH_IN', 'CASH_OUT', 'DEBIT', 'PAYMENT', 'TRANSFER'];

const TransactionForm = ({ 
  formData, 
  onInputChange, 
  onSubmit, 
  loading, 
  error, 
  disabled = false 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
    >
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Shield className="w-5 h-5 text-purple-400" />
        Transaction Details
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Transaction Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Transaction Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={onInputChange}
            disabled={disabled}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-400 focus:outline-none disabled:opacity-50"
          >
            {TRANSACTION_TYPES.map(type => (
              <option key={type} value={type} className="bg-slate-800">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Fields */}
        {[
          { name: 'amount', label: 'Amount', placeholder: '0.00' },
          { name: 'oldbalanceOrg', label: 'Old Balance (Origin)', placeholder: '0.00' },
          { name: 'newbalanceOrig', label: 'New Balance (Origin)', placeholder: '0.00' },
          { name: 'oldbalanceDest', label: 'Old Balance (Destination)', placeholder: '0.00' },
          { name: 'newbalanceDest', label: 'New Balance (Destination)', placeholder: '0.00' }
        ].map(field => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {field.label}
            </label>
            <input
              type="number"
              step="0.01"
              name={field.name}
              value={formData[field.name]}
              onChange={onInputChange}
              placeholder={field.placeholder}
              disabled={disabled}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none disabled:opacity-50"
            />
          </div>
        ))}

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || disabled}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Shield className="w-4 h-4" />
              Predict Fraud
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default TransactionForm;
