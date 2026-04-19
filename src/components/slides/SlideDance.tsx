import { MediaFrame } from "../matrix/MediaFrame";
import dance from "@/assets/dance.jpg";

export function SlideDance() {
  return (
    <div className="flex flex-col h-full w-full justify-center px-12 md:px-20 gap-6">
      <div className="flex items-baseline justify-between">
        <div className="text-matrix-dim text-xs tracking-[0.4em] matrix-glow-text">
          06 // BULLET_TIME
        </div>
        <div className="text-xs text-matrix-dim matrix-glow-text tracking-widest">
          240 FPS // SLO-MO ENGAGED
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl font-light tracking-tight matrix-glow-text-strong">
        dance.
      </h1>
      <div className="relative">
        <MediaFrame label="CAM ARRAY // 24 UNITS" aspect="16/9">
          <img src={dance} alt="dance" className="object-cover w-full h-full" />
        </MediaFrame>
        {/* Bullet time overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative w-[60%] aspect-square">
            <div className="bullet-ring" />
            <div className="bullet-ring r2" />
            <div className="bullet-ring r3" />
            <div className="absolute inset-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-matrix matrix-glow-text" />
          </div>
        </div>
      </div>
    </div>
  );
}
