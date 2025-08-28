import React from 'react';

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
}

export const Sparkline: React.FC<SparklineProps> = ({ 
  data, 
  width = 100, 
  height = 30 
}) => {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} className="sparkline">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};