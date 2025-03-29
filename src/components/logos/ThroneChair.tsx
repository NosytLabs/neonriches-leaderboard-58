
import React from 'react';

interface ThroneChairProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

const ThroneChair: React.FC<ThroneChairProps> = ({ 
  className = '', 
  size = 48, 
  animate = false 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      className={className}
    >
      {/* Throne Base with darker rich wood color */}
      <path 
        d="M12 36H36V42H12V36Z" 
        fill="#5D4037" 
        stroke="#D4AF37" 
        strokeWidth="1.5"
        className={animate ? "animate-pulse-slow" : ""}
      />
      
      {/* Throne Back with carved details */}
      <path 
        d="M14 20H34V36H14V20Z" 
        fill="#5D4037" 
        stroke="#D4AF37" 
        strokeWidth="1.5"
      />
      
      {/* Luxurious red cushion with tufted pattern */}
      <rect x="16" y="22" width="16" height="14" fill="#9B2335" />
      
      {/* Cushion buttons */}
      <circle cx="18" cy="24" r="0.8" fill="#D4AF37" />
      <circle cx="22" cy="24" r="0.8" fill="#D4AF37" />
      <circle cx="26" cy="24" r="0.8" fill="#D4AF37" />
      <circle cx="30" cy="24" r="0.8" fill="#D4AF37" />
      <circle cx="18" cy="28" r="0.8" fill="#D4AF37" />
      <circle cx="22" cy="28" r="0.8" fill="#D4AF37" />
      <circle cx="26" cy="28" r="0.8" fill="#D4AF37" />
      <circle cx="30" cy="28" r="0.8" fill="#D4AF37" />
      <circle cx="18" cy="32" r="0.8" fill="#D4AF37" />
      <circle cx="22" cy="32" r="0.8" fill="#D4AF37" />
      <circle cx="26" cy="32" r="0.8" fill="#D4AF37" />
      <circle cx="30" cy="32" r="0.8" fill="#D4AF37" />
      
      {/* Throne armrests with skull decorations */}
      <path d="M11 30L14 26V36H11V30Z" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5"/>
      <path d="M37 30L34 26V36H37V30Z" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.5"/>
      
      {/* Skull motifs on armrests */}
      <circle cx="12" cy="29" r="1.2" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.3"/>
      <circle cx="36" cy="29" r="1.2" fill="#4E342E" stroke="#D4AF37" strokeWidth="0.3"/>
      
      {/* Throne Top with spikes */}
      <path 
        d="M14 20L16 15L20 20L24 14L28 20L32 15L34 20" 
        fill="#5D4037" 
        stroke="#D4AF37" 
        strokeWidth="0.8"
      />
      
      {/* Crown on throne with gemstones */}
      <path 
        d="M18 12L24 6L30 12L28 15L20 15L18 12Z" 
        fill="#D4AF37" 
        stroke="#5D4037" 
        strokeWidth="0.5"
        className={animate ? "animate-pulse-slow" : ""}
      />
      <rect 
        x="18" 
        y="15" 
        width="12" 
        height="3" 
        fill="#D4AF37" 
        stroke="#5D4037" 
        strokeWidth="0.5"
      />
      
      {/* Crown jewels */}
      <circle cx="21" cy="16.5" r="0.8" fill="#9B2335"/>
      <circle cx="24" cy="16.5" r="0.8" fill="#1F4788"/>
      <circle cx="27" cy="16.5" r="0.8" fill="#2C784A"/>
      
      {/* Pile of Money/Coins */}
      <ellipse 
        cx="24" 
        cy="42" 
        rx="12" 
        ry="2.5" 
        fill="#D4AF37" 
        opacity="0.9"
        className={animate ? "animate-pulse-slow" : ""}
      />
      
      {/* Individual Coins */}
      <g className={animate ? "animate-bounce-slow" : ""}>
        <circle cx="14" cy="40" r="2.5" fill="#D4AF37" stroke="#5D4037" strokeWidth="0.3"/>
        <text x="14" y="41" fontFamily="Arial" fontSize="2.5" fill="#5D4037" textAnchor="middle" fontWeight="bold">$</text>
      </g>
      
      <g className={animate ? "animate-bounce-slow animation-delay-500" : ""}>
        <circle cx="34" cy="40" r="2.5" fill="#D4AF37" stroke="#5D4037" strokeWidth="0.3"/>
        <text x="34" y="41" fontFamily="Arial" fontSize="2.5" fill="#5D4037" textAnchor="middle" fontWeight="bold">$</text>
      </g>
      
      <g className={animate ? "animate-bounce-slow animation-delay-200" : ""}>
        <circle cx="19" cy="42" r="2" fill="#D4AF37" stroke="#5D4037" strokeWidth="0.3"/>
        <text x="19" y="43" fontFamily="Arial" fontSize="2" fill="#5D4037" textAnchor="middle" fontWeight="bold">$</text>
      </g>
      
      <g className={animate ? "animate-bounce-slow animation-delay-300" : ""}>
        <circle cx="29" cy="42" r="2" fill="#D4AF37" stroke="#5D4037" strokeWidth="0.3"/>
        <text x="29" y="43" fontFamily="Arial" fontSize="2" fill="#5D4037" textAnchor="middle" fontWeight="bold">$</text>
      </g>
    </svg>
  );
};

export default ThroneChair;
