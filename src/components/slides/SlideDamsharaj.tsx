import { Typewriter } from "../matrix/Typewriter";
import dance from "@/assets/cincam1.png"; 

export function SlideDamsharaj() {
  return (
    // 1. Ensure the parent is transparent so the Rain behind it shows through
    <div className="relative flex flex-col h-full w-full items-center justify-center px-12 overflow-hidden bg-transparent">
      
      {/* 2. THE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={dance} 
          alt="dance pic"
          className="w-full h-full object-cover opacity-25 grayscale brightness-75 contrast-150 mix-blend-screen"
        />
        
        {/* 3. VIGNETTE OVERLAY: Fades the edges to black so the Rain is clearer at the sides */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,black_100%)] opacity-80" />
      </div>

      {/* 4. CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-matrix-dim text-sm tracking-[0.4em] mb-12 matrix-glow-text uppercase text-center max-w-2xl">
          do not try to bend the sppon, instead try to realize the truth
        </div>
        
        <div className="text-5xl md:text-6xl font-light tracking-tight matrix-glow-text-strong text-center">
          <Typewriter
              lines={["DUMB CHARADES"]}
              speed={45}
              showPrompt={false}
            />
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute bottom-12 left-12 text-xs text-matrix-dim matrix-glow-text tracking-widest z-10">
        [ YOU HAVE THE SIGHT NOW ]
      </div>
      <div className="absolute bottom-12 right-12 text-xs text-matrix-dim matrix-glow-text tracking-widest z-10">
        TIMER RUNNING OUT ❚❚❚❚❚
      </div>
    </div>
  );
}