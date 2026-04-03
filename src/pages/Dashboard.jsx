import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Activity, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useApiStatus } from '../hooks/useApiStatus';
import TransactionForm from '../components/TransactionForm';
import FraudAlert from '../components/FraudAlert';
import TransactionHistory from '../components/TransactionHistory';
import AnalyticsCharts from '../components/AnalyticsCharts';

// API Configuration
const API_BASE_URL = 'http://localhost:5000';

// Transaction types for dropdown
const TRANSACTION_TYPES = ['CASH_IN', 'CASH_OUT', 'DEBIT', 'PAYMENT', 'TRANSFER'];

const Dashboard = () => {
  // Form state
  const [formData, setFormData] = useState({
    type: 'CASH_OUT',
    amount: '',
    oldbalanceOrg: '',
    newbalanceOrig: '',
    oldbalanceDest: '',
    newbalanceDest: ''
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [transactions, setTransactions] = useState([]);

  // API status hook
  const { status: apiStatus, checkStatus } = useApiStatus();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Validate form inputs
  const validateForm = () => {
    const required = ['amount', 'oldbalanceOrg', 'newbalanceOrig', 'oldbalanceDest', 'newbalanceDest'];
    
    for (const field of required) {
      if (!formData[field] || formData[field] === '') {
        setError(`${field} is required`);
        return false;
      }
      if (isNaN(formData[field]) || parseFloat(formData[field]) < 0) {
        setError(`${field} must be a positive number`);
        return false;
      }
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (apiStatus === 'offline') {
      setError('Cannot connect to backend API. Please ensure the server is running.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const payload = {
        type: formData.type,
        amount: parseFloat(formData.amount),
        oldbalanceOrg: parseFloat(formData.oldbalanceOrg),
        newbalanceOrig: parseFloat(formData.newbalanceOrig),
        oldbalanceDest: parseFloat(formData.oldbalanceDest),
        newbalanceDest: parseFloat(formData.newbalanceDest)
      };

      const response = await axios.post(`${API_BASE_URL}/predict`, payload, {
        timeout: 10000
      });
      const prediction = response.data;

      // Create transaction record
      const transaction = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        ...payload,
        result: prediction
      };

      // Update state
      setResult(prediction);
      setTransactions(prev => [transaction, ...prev]);

    } catch (error) {
      console.error('API Error:', error);
      if (error.response) {
        setError(error.response.data.message || 'API request failed');
      } else if (error.request) {
        setError('Network error. Please check if the backend server is running.');
        checkStatus(); // Re-check API status
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      type: 'CASH_OUT',
      amount: '',
      oldbalanceOrg: '',
      newbalanceOrig: '',
      oldbalanceDest: '',
      newbalanceDest: ''
    });
    setResult(null);
    setError('');
  };

  // Calculate stats
  const getStats = () => {
    const fraudCount = transactions.filter(t => t.result.fraud === 1).length;
    const safeCount = transactions.filter(t => t.result.fraud === 0).length;
    
    return {
      total: transactions.length,
      safe: safeCount,
      fraud: fraudCount
    };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fraud Detection Dashboard
          </h1>
          <p className="text-gray-300 text-lg">
            Real-time transaction fraud detection powered by AI
          </p>
          
          {/* API Status Indicator */}
          <div className="flex justify-center mt-4">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
              apiStatus === 'online' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                apiStatus === 'online' ? 'bg-green-400' : 'bg-red-400'
              }`} />
              API {apiStatus === 'online' ? 'Online' : 'Offline'}
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Transactions</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-green-500/10 backdrop-blur-lg rounded-xl p-4 border border-green-500/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-400 text-sm">Safe</p>
                <p className="text-2xl font-bold text-green-400">{stats.safe}</p>
              </div>
              <Shield className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-red-500/10 backdrop-blur-lg rounded-xl p-4 border border-red-500/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-400 text-sm">Fraud</p>
                <p className="text-2xl font-bold text-red-400">{stats.fraud}</p>
              </div>
              <Activity className="w-8 h-8 text-red-400" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transaction Form */}
          <div className="lg:col-span-1 space-y-6">
            <TransactionForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
              disabled={apiStatus === 'offline'}
            />

            {/* Result Alert */}
            {result && (
              <FraudAlert 
                result={result} 
                onClose={() => setResult(null)} 
              />
            )}
          </div>

          {/* Charts */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnalyticsCharts transactions={transactions} />
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-8">
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
