import { Typewriter } from "../matrix/Typewriter";
import rabbit from "@/assets/rabbit.png"; 

export function SlideGettingStarted() {
  return (
    // 1. Ensure the parent is transparent so the Rain behind it shows through
    <div className="relative flex flex-col h-full w-full items-center justify-center px-12 overflow-hidden bg-transparent">
      
      {/* 2. THE MIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={rabbit} 
          alt="background rabit"
          /* 'opacity-20' is the key: it lets the Rain behind it be visible.
             'mix-blend-lighten' or 'mix-blend-screen' will make the rain 
             look like it's glowing ON the metallic parts of the mic.
          */
          className="w-full h-full object-cover opacity-25 grayscale brightness-75 contrast-150 mix-blend-screen"
        />
        
        {/* 3. VIGNETTE OVERLAY: Fades the edges to black so the Rain is clearer at the sides */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,black_100%)] opacity-80" />
      </div>

      {/* 4. CONTENT LAYER */}
      <div className="fixed top-70 left-0 w-full z-50 flex flex-col items-center pt-12 px-6"> 
        <div className="text-matrix-dim text-xs tracking-[0.4em] mb-12 matrix-glow-text uppercase">
          GETTING STARTED
        </div>
        
        <div className="text-xl md:text-4xl font-light leading-relaxed matrix-glow-text px-6 text-center">
          <Typewriter
            lines={[
              "You spent 4 years building this simulation.",
              "You were not just a member, but the architect.",
              "You finally found the back door to the simulation.",
              "The rabbit hole doesn't end here, it only gets deeper from here.",
              "THE SHOW ISN'T OVER YET.",
            ]}
            speed={32}
            revealOnClick={true}
          />
        </div>
      </div>

    </div>
  );
}