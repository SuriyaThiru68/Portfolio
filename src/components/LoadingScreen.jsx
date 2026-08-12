import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let current = 0;

    const interval = 30;
    const tick = () => {
      if (!mounted) return;
      current = Math.min(100, current + 1);
      setProgress(current);

      if (current >= 100) {
        window.setTimeout(() => {
          if (mounted && onFinish) onFinish();
        }, 100);
        return;
      }

      window.setTimeout(tick, interval);
    };

    tick();
    return () => {
      mounted = false;
    };
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <span className="loading-screen__label">Loading</span>
      <span className="loading-screen__percent">{progress}%</span>
    </div>
  );
};

export default LoadingScreen;
