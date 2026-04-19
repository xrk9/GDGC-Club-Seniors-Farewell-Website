import { Typewriter } from "../matrix/Typewriter";

export function SlideWaiting() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center px-12">
      <div className="text-matrix-dim text-xs tracking-[0.4em] mb-12 matrix-glow-text uppercase">
        // GDGC FAREWELL PARTY
      </div>
      <div className="text-5xl md:text-7xl font-light tracking-tight matrix-glow-text-strong text-center">
        <Typewriter
          lines={["Welcome in the simulation..."]}
          speed={60}
          showPrompt={false}
          loop={true}
        />
      </div>
      <div className="absolute bottom-12 left-12 text-xs text-matrix-dim matrix-glow-text tracking-widest">
        [ FOLLOW THE WHITE RABBIT ]
      </div>
      <div className="absolute bottom-12 right-12 text-xs text-matrix-dim matrix-glow-text tracking-widest">
        UPLINK: 100% ▮▮▮▮▮▮▮▮
      </div>
    </div>
  );
}
