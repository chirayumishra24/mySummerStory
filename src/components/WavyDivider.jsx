import React from 'react';

export default function WavyDivider({ color1 = '#FFD93D', color2 = '#FF6B6B', flip = false }) {
  return (
    <div className="wavy-divider" style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
        <defs>
          <linearGradient id={`waveGrad-${color1.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
          fill={`url(#waveGrad-${color1.replace('#','')})`}
          opacity="0.3"
        />
        <path
          d="M0,80 C240,30 480,110 720,70 C960,30 1200,100 1440,60 L1440,120 L0,120 Z"
          fill={`url(#waveGrad-${color1.replace('#','')})`}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
