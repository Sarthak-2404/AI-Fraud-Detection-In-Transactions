import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

const FraudAlert = ({ result, onClose }) => {
  if (!result) return null;

  const isFraud = result.fraud === 1;
  const riskLevel = result.risk_level || 'low';

  const getAlertConfig = () => {
    if (isFraud) {
      return {
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        iconBg: 'bg-red-500/20',
        iconColor: 'text-red-400',
        title: 'Fraud Detected',
        titleColor: 'text-red-400',
        description: 'This transaction has been flagged as potentially fraudulent.',
        icon: AlertTriangle
      };
    } else {
      return {
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30',
        iconBg: 'bg-green-500/20',
        iconColor: 'text-green-400',
        title: 'Safe Transaction',
        titleColor: 'text-green-400',
        description: 'This transaction appears to be legitimate.',
        icon: CheckCircle
      };
    }
  };

  const config = getAlertConfig();
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      className={`${config.bgColor} ${config.borderColor} border rounded-2xl p-6 relative`}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      )}
      
      <div className="flex items-start gap-4">
        <div className={`${config.iconBg} p-3 rounded-xl`}>
          <Icon className={`w-6 h-6 ${config.iconColor}`} />
        </div>
        
        <div className="flex-1">
          <h3 className={`text-xl font-bold ${config.titleColor} mb-2`}>
            {config.title}
          </h3>
          <p className="text-gray-300 mb-4">
            {config.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-gray-400 mb-1">Confidence</div>
              <div className="text-white font-semibold">
                {((result.confidence || 0) * 100).toFixed(1)}%
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-gray-400 mb-1">Risk Level</div>
              <div className={`font-semibold capitalize ${
                riskLevel === 'high' ? 'text-red-400' :
                riskLevel === 'medium' ? 'text-yellow-400' : 'text-green-400'
              }`}>
                {riskLevel}
              </div>
            </div>
          </div>
          
          {isFraud && (
            <div className="mt-4 flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
              <Info className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-400">
                <strong>Recommended Action:</strong> Review this transaction carefully and consider additional verification steps before proceeding.
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FraudAlert;
