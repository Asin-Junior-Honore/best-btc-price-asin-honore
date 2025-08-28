import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface AutoRefreshToggleProps {
  onRefresh: () => void;
  interval?: number;
}

export const AutoRefreshToggle: React.FC<AutoRefreshToggleProps> = ({
  onRefresh,
  interval = 30000
}) => {
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (autoRefresh) {
      intervalId = setInterval(() => {
        onRefresh();
        setCountdown(interval / 1000);
      }, interval);

      setCountdown(interval / 1000);

      const countdownInterval = setInterval(() => {
        setCountdown(prev => Math.max(0, prev - 1));
      }, 1000);

      return () => {
        clearInterval(intervalId);
        clearInterval(countdownInterval);
      };
    }
  }, [autoRefresh, interval, onRefresh]);

  return (
    <div className="auto-refresh">
      <button
        onClick={() => setAutoRefresh(!autoRefresh)}
        className={`refresh-btn ${autoRefresh ? 'active' : ''}`}
      >
        <RefreshCw size={16} />
        Auto Refresh {autoRefresh ? `(${countdown}s)` : ''}
      </button>
    </div>
  );
};