import React from "react";
import { Cross, Swords, Shield, Sparkles, ShieldEllipsis, Gauge } from "lucide-react";

export default function StatColourBar({ value = 128, statType }) {
  // Ensure the value is between 0 and 255
  const clampedValue = Math.max(0, Math.min(255, value));

  // Calculate the percentage for the bar width
  const percentage = (clampedValue / 255) * 100;

  // Calculate the color based on the value
  const red = Math.round(255 * (1 - (percentage * 1.5) / 100));
  const green = Math.round(255 * ((percentage * 1.5) / 100));

  const icon = {
    hp: <Cross className="h-5 w-5" />,
    attack: <Swords className="h-5 w-5" />,
    defense: <Shield className="h-5 w-5" />,
    "special-attack": <Sparkles className="h-5 w-5" />,
    "special-defense": <ShieldEllipsis className="h-5 w-5" />,
    speed: <Gauge className="h-5 w-5" />,
  };

  return (
    <div className="w-full max-w-md mx-auto p-1">
      <div className="relative h-6 bg-gray-200 rounded-sm overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-300 ease-in-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: `rgb(${red},${green},0)`,
          }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={255}
        />
        <div className="gap-3 absolute inset-0 flex items-center justify-end pr-3">
          <span className="text-sm font-medium text-gray-500">
            {clampedValue}
          </span>
          <span className="text-gray-500">
            {icon[statType]}
          </span>
        </div>
        hi
      </div>
    </div>
  );
}
