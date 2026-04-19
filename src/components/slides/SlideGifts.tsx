import { MediaFrame } from "../matrix/MediaFrame";
import { Typewriter } from "../matrix/Typewriter";
import pills from "@/assets/pills.jpg";

export function SlideGifts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-40 h-full w-full items-center px-12 md:px-72">
      <div className="md:col-span-4 space-y-6">
        <div className="text-matrix-dim text-xs tracking-[0.4em] matrix-glow-text">
          12 // CHOICE.bin
        </div>
        <h1 className="text-7xl md:text-9xl font-light leading-none matrix-glow-text-strong">
          <Typewriter
              lines={["GAMES"]}
              speed={45}
              showPrompt={false}
            />
        </h1>
        <div className="space-y-4 text-sm tracking-widest">
          <div className="border-l-2 pl-3" style={{ borderColor: "var(--pill-red)", color: "var(--pill-red)", textShadow: "0 0 8px var(--pill-red)" }}>
            ◉ RED // PLAY
          </div>
          <div className="border-l-2 pl-3" style={{ borderColor: "var(--pill-blue)", color: "var(--pill-blue)", textShadow: "0 0 8px var(--pill-blue)" }}>
            ◉ BLUE // LEAVE
          </div>
        </div>
        <p className="text-matrix-dim text-xs tracking-widest matrix-glow-text">
          {"> select payload // press ENTER"}
        </p>
      </div>
      <div className="md:col-span-8 max-w-2xl">
        <MediaFrame label="IT'S YOUR CHOICE">
          <img src={pills} alt="red and blue pill" className="w-full h-full object-cover" />
        </MediaFrame>
      </div>
    </div>
  );
}
