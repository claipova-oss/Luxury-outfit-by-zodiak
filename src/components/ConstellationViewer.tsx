import React from 'react';
import { StarPoint } from '../data/zodiacData';

interface ConstellationViewerProps {
  name: string;
  latinName: string;
  stars: StarPoint[];
  connections: [number, number][];
  symbol: string;
  element: 'api' | 'tanah' | 'udara' | 'air';
}

export const ConstellationViewer: React.FC<ConstellationViewerProps> = ({
  name,
  latinName,
  stars,
  connections,
  symbol,
  element,
}) => {
  const getGlowColor = () => {
    switch (element) {
      case 'api':
        return '#f59e0b'; // warm flame gold
      case 'air':
        return '#38bdf8'; // aquatic celestial blue
      case 'udara':
        return '#e2e8f0'; // platinum silver
      case 'tanah':
        return '#10b981'; // emerald green
    }
  };

  const glow = getGlowColor();

  return (
    <div className="relative w-full aspect-[4/3] max-w-md mx-auto rounded-lg overflow-hidden border border-[#d4af37]/30 bg-[#070b14] flex flex-col items-center justify-center p-4 shadow-2xl">
      {/* Background Star Nebula Ambient */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glow} 0%, transparent 70%)`,
        }}
      />

      {/* Decorative Constellation Grid Ring */}
      <div className="absolute inset-4 rounded-full border border-[#d4af37]/15 pointer-events-none" />
      <div className="absolute inset-12 rounded-full border border-dashed border-[#d4af37]/10 pointer-events-none" />

      {/* SVG Constellation */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10"
        style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))' }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f3e5ab" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Constellation Connection Lines */}
        {connections.map(([fromIdx, toIdx], i) => {
          const from = stars[fromIdx];
          const to = stars[toIdx];
          if (!from || !to) return null;
          return (
            <line
              key={`conn-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.8"
              strokeDasharray="none"
              opacity="0.75"
            />
          );
        })}

        {/* Stars */}
        {stars.map((star, idx) => {
          const radius = star.size || 2.5;
          return (
            <g key={`star-${idx}`} className="group cursor-default">
              {/* Star Glow Halo */}
              <circle
                cx={star.x}
                cy={star.y}
                r={radius * 2.8}
                fill="url(#starGlow)"
                opacity="0.45"
              />
              {/* Star Core */}
              <circle
                cx={star.x}
                cy={star.y}
                r={radius * 0.9}
                fill="#ffffff"
              />
              {/* Star Name Label */}
              {star.label && (
                <text
                  x={star.x + (star.x > 60 ? -3 : 3)}
                  y={star.y - 3}
                  textAnchor={star.x > 60 ? 'end' : 'start'}
                  fill="#c5a059"
                  fontSize="3"
                  fontFamily="'Cinzel', serif"
                  letterSpacing="0.05em"
                  opacity="0.85"
                >
                  {star.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Footer Info Overlay */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#a69c8a] z-20 border-t border-[#d4af37]/20 pt-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[#d4af37] font-serif text-sm">{symbol}</span>
          <span className="font-cinzel tracking-wider uppercase text-[#e5e0d8]">{latinName}</span>
        </div>
        <span className="font-mono text-[10px] text-[#8e8574]">CHART ASTRONOMIQUE 2026</span>
      </div>
    </div>
  );
};
