import { MediaFrame } from "../matrix/MediaFrame";
import pills from "@/assets/pills.jpg";

export function SlideGames() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full w-full items-center px-12 md:px-48">
      
      {/* LEFT COLUMN */}
      <div className="md:col-span-6 pr-4">
        <div className="text-matrix-dim text-xs tracking-[0.4em] matrix-glow-text mb-3">
          {"// PERFORMANCE_STRESS_TEST"} {/* Wrapped in quotes to prevent Regex error */}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light leading-none matrix-glow-text-strong mb-8 uppercase">
          Game Question
        </h1>
        
        <ul className="space-y-4 text-xl md:text-2xl font-light matrix-glow-text">
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[01]</span> 
            <span>OPTION_A _________________</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[02]</span> 
            <span>OPTION_B ________________</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[03]</span> 
            <span>OPTION_C ___________________</span>
          </li>
        </ul>
        
        <div className="mt-10 flex items-center gap-4">
          <div className="h-2 w-2 bg-matrix animate-ping rounded-full" />
          <p className="text-xs tracking-[0.3em] text-matrix-dim matrix-glow-text uppercase">
            Awaiting player input...
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="md:col-span-6 flex items-center justify-center h-full">
        <MediaFrame 
          aspect="1/1" 
          label="GUESS ME" 
          className="w-full max-w-xl"
        >
          {/* Ensure children are valid React nodes (strings or elements) */}
          {/* <div className="w-full h-full flex items-center justify-center bg-matrix/10 border border-matrix/40">
            <span className="matrix-glow-text-strong text-2xl font-mono text-matrix">
              {"[IMAGE_DATA_LOCKED]"}
            </span>
          </div> */}
          <img
            src={pills}
            className="width-full height-full object-cover opacity-90 contrast-125 brightness-90"
          />
          
          {/* If using an actual img, ensure the src isn't undefined/null */}
          {/* <img src={gameFeedImg} className="w-full h-full object-cover" /> */}
        </MediaFrame>
      </div>
    </div>
  );
}