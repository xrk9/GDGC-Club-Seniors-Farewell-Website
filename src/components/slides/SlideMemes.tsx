import { Typewriter } from "../matrix/Typewriter";
import React, { useMemo } from "react";
import meme1 from "@/assets/meme1.jpg";
import meme2 from "@/assets/meme2.jpg";
import meme3 from "@/assets/meme3.jpg";
import meme4 from "@/assets/meme4.jpg";
import meme5 from "@/assets/meme5.jpg";
import meme6 from "@/assets/meme6.jpg";
import meme7 from "@/assets/meme7.jpg";
import meme8 from "@/assets/meme8.jpg";
import meme9 from "@/assets/meme9.jpg";

const baseMemes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9];
// Using 12 instances to fill the "void" effectively
const memes = [...baseMemes];

export function SlideMemes() {
  const floatingMemes = useMemo(() => {
    return memes.map((src, i) => {
      const size = Math.random() * 150 + 200; // Larger size (150px - 250px) for better visibility
      return {
        src,
        id: i,
        size,
        left: `${Math.random() * 80 + 5}%`, 
        top: `${Math.random() * 75 + 5}%`,  
        delay: `${Math.random() * -20}s`, // Negative delay so they are already mid-animation on load
        duration: `${Math.random() * 12 + 18}s`, // Very slow drifting
        rotation: Math.random() * 16 - 8, 
      };
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden text-[#00FF41] font-mono">
      
      <style>
        {`
          @keyframes matrixDrift {
            0% { transform: translate(0px, 0px) rotate(var(--rot)); }
            33% { transform: translate(20px, -40px) rotate(calc(var(--rot) + 2deg)); }
            66% { transform: translate(-15px, 20px) rotate(calc(var(--rot) - 2deg)); }
            100% { transform: translate(0px, 0px) rotate(var(--rot)); }
          }
          .meme-artifact {
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
            border: 1px solid rgba(0, 255, 65, 0.3);
          }
        `}
      </style>

      {/* BACKGROUND: The Memory Void */}
      <div className="absolute inset-0 z-0">
        {floatingMemes.map((meme) => (
          <div
            key={meme.id}
            className="absolute meme-artifact overflow-hidden rounded-sm"
            style={{
              left: meme.left,
              top: meme.top,
              width: `${meme.size}px`,
              height: `${meme.size}px`,
              animation: `matrixDrift ${meme.duration} ease-in-out infinite`,
              animationDelay: meme.delay,
              '--rot': `${meme.rotation}deg`, 
              /* Removed the sepia/green filter for normal visibility */
              filter: "brightness(0.9) contrast(1.1)", 
            }}
          >
            <img 
              src={meme.src} 
              alt="memory" 
              className="w-full h-full object-cover" 
            />
            {/* Subtle CRT Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
          </div>
        ))}
      </div>

      {/* FOREGROUND: Central Text Console */}
      <div className="relative z-10 flex flex-col items-center text-center p-8 bg-black/80 backdrop-blur-[2px] border border-[#00FF41]/20 rounded-sm shadow-[0_0_30px_rgba(0,255,65,0.1)]">
        
        <h1 className="text-6xl md:text-8xl tracking-tighter matrix-glow-text-strong mb-2">
          <Typewriter
              lines={["MEME REVIEW"]}
              speed={55}
              showPrompt={false}
            />
        </h1>
        
        <div className="h-1 w-full bg-[#00FF41] mb-6 shadow-[0_0_15px_#00FF41]" />
        
        <div className="space-y-2">
          <p className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">
            YOU'RE ABOUT TO EXPERIENCE DEJA VU
          </p>
          <p className="text-sm opacity-90 tracking-widest text-[#00FF41]/80">
            CORE_MEMORIES: [LOGS/FUNNY_GLITCHES.TXT]
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[#00FF41]/30 w-full text-xs opacity-90 tracking-[0.3em]">
          DEJA VU IS A GLITCH IN THE MATRIX
        </div>

      </div>

      {/* Global Vignette for Depth */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,black_90%)]" />
      
    </div>
  );
}