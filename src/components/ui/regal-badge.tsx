
import React from "react";
import { cn } from "@/lib/utils";
import { RegalBadgeProps } from "@/types/ui-types";

const RegalBadge: React.FC<RegalBadgeProps> = ({
  variant = "royal",
  size = "md",
  className,
  children,
  label,
  rarity,
  tier,
  ...props
}) => {
  // Get classes based on the variant
  const getVariantClasses = () => {
    switch (variant) {
      case "gold":
        return "bg-royal-gold/20 text-royal-gold border-royal-gold/40";
      case "silver":
        return "bg-slate-300/20 text-slate-300 border-slate-300/40";
      case "crimson":
        return "bg-royal-crimson/20 text-royal-crimson border-royal-crimson/40";
      case "navy":
        return "bg-royal-navy/20 text-royal-navy border-royal-navy/40";
      case "royal":
      default:
        return "bg-gradient-to-r from-royal-crimson/20 via-royal-gold/20 to-royal-navy/20 text-white border-royal-gold/40";
    }
  };

  // Get classes based on rarity
  const getRarityClasses = () => {
    if (!rarity && !tier) return "";
    
    const rarityValue = rarity || tier || "";
    
    switch (rarityValue.toLowerCase()) {
      case "legendary":
      case "whale":
        return "bg-royal-gold/20 text-royal-gold border-royal-gold/40";
      case "epic":
      case "shark":
        return "bg-purple-500/20 text-purple-400 border-purple-500/40";
      case "rare":
      case "dolphin":
        return "bg-blue-500/20 text-blue-400 border-blue-500/40";
      case "uncommon":
      case "fish":
        return "bg-green-500/20 text-green-400 border-green-500/40";
      case "common":
      case "crab":
        return "bg-gray-500/20 text-gray-300 border-gray-500/40";
      case "octopus":
        return "bg-pink-500/20 text-pink-400 border-pink-500/40";
      case "pro":
        return "bg-royal-crimson/20 text-royal-crimson border-royal-crimson/40";
      case "royal":
        return "bg-gradient-to-r from-royal-crimson/20 via-royal-gold/20 to-royal-navy/20 text-white border-royal-gold/40";
      default:
        return "";
    }
  };

  // Get size classes
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-2 py-0.5 text-xs";
      case "lg":
        return "px-3 py-1 text-sm";
      case "md":
      default:
        return "px-2.5 py-0.5 text-xs";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        getSizeClasses(),
        (rarity || tier) ? getRarityClasses() : getVariantClasses(),
        className
      )}
      {...props}
    >
      {children || label || (tier && `${tier.charAt(0).toUpperCase() + tier.slice(1)} Tier`)}
    </span>
  );
};

export default RegalBadge;
