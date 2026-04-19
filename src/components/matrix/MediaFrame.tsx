import type { ReactNode } from "react";

interface MediaFrameProps {
  children: ReactNode;
  label?: string;
  className?: string;
  aspect?: string; // e.g. "16/9"
}

export function MediaFrame({
  children,
  label,
  className = "",
  aspect = "3/2",
}: MediaFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Top Label: Large & High-Tech */}
      {label && (
        <div className="flex items-center justify-between text-lg md:text-sm uppercase tracking-[0.3em] text-matrix-dim mb-3 px-1">
          <span className="matrix-glow-text">// {label}</span>
          <span className="matrix-glow-text animate-pulse">REC ●</span>
        </div>
      )}

      <div 
        className="crt-frame bg-black relative overflow-hidden" 
        style={{ aspectRatio: aspect }}
      >
        {children}
        
        {/* Tint overlay is inside the frame so it applies to the image */}
        <div className="crt-tint pointer-events-none" />
      </div>

      {/* Bottom Label: Balanced Size */}
      {label && (
        <div className="flex items-center justify-between text-base md:text-xs tracking-[0.3em] text-matrix-dim mt-3 px-1 matrix-glow-text">
          <span>SIGNAL: STABLE</span>
          <span>THE_MATRIX</span>
        </div>
      )}
    </div>
  );
}