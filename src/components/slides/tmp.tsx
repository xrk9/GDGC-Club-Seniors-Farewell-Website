import memePerson from "@/assets/cake.jpg"; // ← Replace with the actual photo of the person

export function SlideMeme() {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden bg-black px-12 md:px-20 py-12">
      {/* Subtle animated Matrix digital rain background */}
      <div className="absolute inset-0 matrix-rain opacity-30 pointer-events-none" />

      <div className="flex items-baseline justify-between mb-8 relative z-10">
        <div>
          <div className="text-matrix-dim text-xl mt-2 font-mono tracking-widest">
            LOADING FUNNY SIMULATION...
          </div>
        </div>

        <div className="text-right text-xs text-matrix-dim matrix-glow-text font-mono">
          SYSTEM STATUS: <span className="text-matrix-green">GLITCHING</span><br />
          REALITY: BENT<br />
          HUMOR LEVEL: OVER 9000
        </div>
      </div>

      {/* Central Media Frame - The Person in Matrix Style */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative w-full max-w-2xl mx-auto group">
          {/* CRT / Glitch Frame with glowing border */}
          <div className="crt-frame relative rounded-xl overflow-hidden border-4 border-matrix-green/80 shadow-2xl shadow-matrix-green/50 aspect-[4/3] md:aspect-square">
            <img 
              src={memePerson} 
              alt="Meme Subject" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
            />
            
            {/* Matrix overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
            <div className="crt-tint absolute inset-0" />
            
            {/* Glitch scanline */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,#0f0_2px,#0f0_4px)] opacity-20 pointer-events-none animate-scanline" />
            
            {/* Glowing "In the Matrix" label */}
            <div className="absolute top-6 left-6 bg-black/70 px-6 py-2 border border-matrix-green/60 backdrop-blur-sm">
              <div className="text-matrix-green font-mono text-sm tracking-[0.2em] matrix-glow-text">
                NOW SHOWING
              </div>
              <div className="text-white text-2xl md:text-3xl font-light tracking-wider">
                NAME OF THE PERSON
              </div>
            </div>

            {/* Bottom fun text - meme/joke vibe */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="inline-block bg-black/80 px-8 py-3 border-t-2 border-matrix-green/70 font-mono text-lg md:text-xl text-white tracking-widest">
                THERE IS NO SPOON...<br />
                <span className="text-matrix-green text-base">ONLY MEMES</span>
              </div>
            </div>
          </div>

          {/* Decorative glitch accents around the frame */}
          <div className="absolute -inset-4 border border-matrix-green/30 rounded-2xl -z-10 animate-pulse-slow" />
          <div className="absolute -inset-8 border border-matrix-green/10 rounded-3xl -z-20" />
        </div>
      </div>

      {/* Footer hint - fun & teasing next slide */}
      <div className="text-center mt-10 text-matrix-dim text-xs tracking-[0.3em] font-mono matrix-glow-text">
        INITIATING MEME SEQUENCE... • RED PILL OR BLUE PILL? • CHOOSE LAUGHTER
      </div>
    </div>
  );
}