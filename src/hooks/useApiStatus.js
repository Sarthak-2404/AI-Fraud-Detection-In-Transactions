import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const useApiStatus = () => {
  const [status, setStatus] = useState('checking'); // checking, online, offline
  const [lastChecked, setLastChecked] = useState(null);

  const checkStatus = async () => {
    try {
      await axios.get(`${API_BASE_URL}/health`, { timeout: 5000 });
      setStatus('online');
    } catch (error) {
      setStatus('offline');
    } finally {
      setLastChecked(new Date());
    }
  };

  useEffect(() => {
    checkStatus();
    
    // Check API status every 30 seconds
    const interval = setInterval(checkStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return { status, lastChecked, checkStatus };
};
