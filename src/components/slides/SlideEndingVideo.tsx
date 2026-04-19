import { MediaFrame } from "../matrix/MediaFrame";
import endingImg from "@/assets/ending.jpg";

export function SlideEndingVideo() {
  return (
    /* items-center centers the block horizontally; justify-center centers it vertically */
    <div className="flex flex-col h-full w-full items-center justify-center px-8 md:px-16 gap-6">
      
      {/* Wrapper to constrain the width so it doesn't fill the whole screen */}
      <div className="w-full max-w-7xl flex flex-col gap-4">
        
        {/* Top Header Labels */}
        <div className="flex items-baseline justify-between px-1">
          <div className="text-matrix-dim text-[10px] md:text-xs tracking-[0.4em] matrix-glow-text opacity-90">
            // ONE FINAL ENCRYPTION REMAINS
          </div>
          <div className="text-[10px] md:text-xs text-matrix-dim matrix-glow-text tracking-widest opacity-90">
            ▶ MEMORIES ARCHIEVE DECRYPTED
          </div>
        </div>

        {/* The Frame: Set to 16/9 */}
        <MediaFrame aspect="16/9">
          <img 
            src={endingImg} 
            alt="ending feed" 
            className="w-full h-full object-contain bg-black" 
          />
        </MediaFrame>

        {/* Bottom Label */}
        <div className="text-center text-matrix-dim text-[10px] md:text-xs tracking-[0.5em] matrix-glow-text opacity-80 mt-2">
          — END OF TRANSMISSION —
        </div>
      </div>
      
    </div>
  );
}