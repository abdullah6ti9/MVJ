import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'horizontal';
  inverted?: boolean; // if true, uses white stroke/fill, else dark/black stroke/fill
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'w-10 h-10',
  variant = 'full',
  inverted = false,
  showSubtitle = true,
}) => {
  const strokeColor = inverted ? '#FFFFFF' : '#1A1A1A';
  const fillColor = inverted ? '#FFFFFF' : '#1A1A1A';

  // Saw blade teeth calculation for 20 teeth
  const teethCount = 20;
  const cx = 100;
  const cy = 100;
  const rOuter = 96;
  const rInner = 84;

  let sawPath = '';
  for (let i = 0; i < teethCount; i++) {
    const angle1 = (i / teethCount) * 2 * Math.PI;
    const angle2 = ((i + 0.4) / teethCount) * 2 * Math.PI;
    const angle3 = ((i + 0.85) / teethCount) * 2 * Math.PI;

    const x1 = cx + rInner * Math.cos(angle1);
    const y1 = cy + rInner * Math.sin(angle1);

    const x2 = cx + rOuter * Math.cos(angle2);
    const y2 = cy + rOuter * Math.sin(angle2);

    const x3 = cx + rInner * Math.cos(angle3);
    const y3 = cy + rInner * Math.sin(angle3);

    if (i === 0) {
      sawPath += `M ${x1.toFixed(2)} ${y1.toFixed(2)} `;
    } else {
      sawPath += `L ${x1.toFixed(2)} ${y1.toFixed(2)} `;
    }
    sawPath += `L ${x2.toFixed(2)} ${y2.toFixed(2)} L ${x3.toFixed(2)} ${y3.toFixed(2)} `;
  }
  sawPath += 'Z';

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {/* Emblem */}
        <div className="shrink-0 w-10 h-10">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {/* Saw Blade Ring */}
            <path d={sawPath} fill="none" stroke={strokeColor} strokeWidth="5" strokeLinejoin="round" />
            <circle cx="100" cy="100" r="78" fill="none" stroke={strokeColor} strokeWidth="3" />

            {/* MJV CONSTRUCTION TEXT */}
            <text
              x="100"
              y="56"
              textAnchor="middle"
              fill={fillColor}
              fontSize="20"
              fontWeight="900"
              fontFamily="Impact, Arial Black, sans-serif"
              letterSpacing="1.5"
            >
              MJV
            </text>
            <text
              x="100"
              y="78"
              textAnchor="middle"
              fill={fillColor}
              fontSize="16"
              fontWeight="800"
              fontFamily="Arial, sans-serif"
              letterSpacing="1"
            >
              CONSTRUCTION
            </text>

            {/* HOUSE OUTLINE */}
            <path
              d="M 62 120 L 100 90 L 138 120 V 162 C 138 165 135 168 132 168 H 68 C 65 168 62 165 62 162 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Chimney */}
            <path
              d="M 122 108 V 96 H 132 V 116"
              fill="none"
              stroke={strokeColor}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* CROSSED HAMMER & SAW */}
            {/* Hammer */}
            <g transform="translate(100, 134) rotate(-35) translate(-100, -134)">
              <rect x="96" y="112" width="8" height="38" rx="2" fill={fillColor} />
              <path d="M 86 112 H 114 C 116 112 118 108 116 104 L 110 98 H 90 L 84 104 C 82 108 84 112 86 112 Z" fill={fillColor} />
            </g>
            {/* Saw */}
            <g transform="translate(100, 134) rotate(35) translate(-100, -134)">
              <path d="M 88 110 L 112 110 L 108 150 L 92 150 Z" fill={fillColor} />
              <path d="M 88 110 H 112 V 102 C 112 98 108 94 100 94 C 92 94 88 98 88 102 Z" fill="none" stroke={strokeColor} strokeWidth="3" />
            </g>
          </svg>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col text-left">
          <div className="flex items-baseline space-x-1.5">
            <span
              className={`font-serif text-2xl font-bold tracking-tight ${
                inverted ? 'text-white' : 'text-[#1A1A1A]'
              }`}
            >
              MJV
            </span>
            <span
              className={`font-serif text-2xl font-light tracking-tight ${
                inverted ? 'text-white/80' : 'text-[#1A1A1A]/80'
              }`}
            >
              Construction
            </span>
          </div>
          {showSubtitle && (
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#B87333] font-semibold leading-none mt-0.5">
              Portland, Oregon
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Outer Saw Teeth Ring */}
        <path d={sawPath} fill="none" stroke={strokeColor} strokeWidth="6" strokeLinejoin="round" />
        <circle cx="100" cy="100" r="76" fill="none" stroke={strokeColor} strokeWidth="3" />

        {/* MJV CONSTRUCTION TEXT */}
        <text
          x="100"
          y="56"
          textAnchor="middle"
          fill={fillColor}
          fontSize="22"
          fontWeight="900"
          fontFamily="Impact, 'Arial Black', sans-serif"
          letterSpacing="2"
        >
          MJV
        </text>
        <text
          x="100"
          y="78"
          textAnchor="middle"
          fill={fillColor}
          fontSize="15"
          fontWeight="800"
          fontFamily="'Arial Black', Arial, sans-serif"
          letterSpacing="1.2"
        >
          CONSTRUCTION
        </text>

        {/* HOUSE OUTLINE */}
        <path
          d="M 60 120 L 100 88 L 140 120 V 162 C 140 165 137 168 134 168 H 66 C 63 168 60 165 60 162 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Chimney */}
        <path
          d="M 124 106 V 94 H 134 V 114"
          fill="none"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* CROSSED HAMMER & HAND SAW */}
        {/* Hammer Handle & Head */}
        <g transform="translate(100, 136) rotate(-35) translate(-100, -136)">
          <rect x="96" y="112" width="8" height="40" rx="2" fill={fillColor} />
          {/* Hammer Head */}
          <path d="M 82 110 H 118 V 100 H 82 Z" fill={fillColor} />
        </g>
        {/* Hand Saw */}
        <g transform="translate(100, 136) rotate(35) translate(-100, -136)">
          <path d="M 90 110 L 110 110 L 105 152 L 95 152 Z" fill={fillColor} />
          {/* Saw Handle */}
          <path d="M 90 110 H 110 V 98 C 110 94 104 92 100 92 C 96 92 90 94 90 98 Z" fill={fillColor} />
        </g>
      </svg>
    </div>
  );
};
