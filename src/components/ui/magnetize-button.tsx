"use client" 

import * as React from "react"
import { cn } from "@/utils/classNameUtils";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { TeamColor } from "@/types/team";
import { getTeamTextColor, getTeamBackgroundLightColor, getTeamBorderColor } from "@/utils/teamUtils";

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
    color?: TeamColor;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

function MagnetizeButton({
    className,
    particleCount = 12,
    attractRadius = 50,
    color = 'purple',
    children,
    ...props
}: MagnetizeButtonProps) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 360 - 180,
            y: Math.random() * 360 - 180,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i]?.x || 0,
            y: particles[i]?.y || 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    const getColorClasses = () => {
        if (color === 'purple' || !color) {
            return {
                background: "bg-violet-100 dark:bg-violet-900",
                hover: "hover:bg-violet-200 dark:hover:bg-violet-800",
                text: "text-violet-600 dark:text-violet-300",
                border: "border border-violet-300 dark:border-violet-700",
                particle: "bg-violet-400 dark:bg-violet-300"
            };
        }

        const textColor = getTeamTextColor(color);
        const bgLight = getTeamBackgroundLightColor(color);
        const borderColor = getTeamBorderColor(color);
        
        const baseColorMatch = textColor.match(/text-([a-z]+)-/);
        const baseColor = baseColorMatch ? baseColorMatch[1] : 'gray';
        
        return {
            background: bgLight,
            hover: `hover:bg-${baseColor}-200 dark:hover:bg-${baseColor}-800`,
            text: textColor,
            border: borderColor,
            particle: textColor
        };
    };

    const colorClasses = getColorClasses();

    return (
        <Button
            className={cn(
                "min-w-40 relative touch-none",
                colorClasses.background,
                colorClasses.hover,
                colorClasses.text,
                colorClasses.border,
                "transition-all duration-300",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            {...props}
        >
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ x: particles[index]?.x || 0, y: particles[index]?.y || 0 }}
                    animate={particlesControl}
                    className={cn(
                        "absolute w-1.5 h-1.5 rounded-full",
                        colorClasses.particle,
                        "transition-opacity duration-300",
                        isAttracting ? "opacity-100" : "opacity-40"
                    )}
                />
            ))}
            <span className="relative w-full flex items-center justify-center gap-2">
                <Magnet
                    className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isAttracting && "scale-110"
                    )}
                />
                {children || (isAttracting ? "Attracting" : "Hover me")}
            </span>
        </Button>
    );
}

export { MagnetizeButton }
