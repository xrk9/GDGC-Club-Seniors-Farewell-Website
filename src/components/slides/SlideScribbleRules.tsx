import { MediaFrame } from "../matrix/MediaFrame";
import { Typewriter } from "../matrix/Typewriter";
import scrible from "@/assets/scribble.png";

export function SlideScribbleRules() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-40 h-full w-full items-center px-12 md:px-72">
      <div className="md:col-span-4 space-y-6">
        <div className="text-matrix-dim text-xs tracking-[0.4em] matrix-glow-text">
          // Draw.exe
        </div>
        <h1 className="text-6xl md:text-8xl font-light leading-none matrix-glow-text-strong">
          <Typewriter
              lines={["RULES"]}
              speed={45}
              showPrompt={false}
            />
        </h1>
        <ul className="space-y-4 text-xxl md:text-2xl font-light matrix-glow-text">
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[01]</span> 
            <span>Rule 1</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[02]</span> 
            <span>Rule 2</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[03]</span> 
            <span>Rule 3</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[04]</span> 
            <span>Rule 4</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-matrix-dim text-sm">[05]</span> 
            <span>Rule 5</span>
          </li>
        </ul>

        <p className="text-matrix-dim text-xs tracking-widest matrix-glow-text">
          {"We have the sight"}
        </p>
      </div>
      <div className="md:col-span-8 max-w-2xl">
        <MediaFrame label="DRAW THE DOOR">
          <img src={scrible} alt="scribble" className="w-full h-full object-cover" />
        </MediaFrame>
      </div>
    </div>
  );
}
