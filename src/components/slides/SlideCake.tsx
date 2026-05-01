import { MediaFrame } from "../matrix/MediaFrame";
import { Typewriter } from "../matrix/Typewriter";
import cake from "@/assets/cake.jpg";

export function SlideCake() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full w-full items-center px-12 md:px-20">
      <div className="md:col-span-5">
        <div className="text-matrix-dim text-xs tracking-[0.4em] mb-4 matrix-glow-text">
          // THERE IS NO CAKE
        </div>
        <h1 className="text-5xl md:text-7xl font-light leading-[0.95] matrix-glow-text-strong">
          <Typewriter
          lines={["Lets Cut\nthe Cake"]}
          speed={50}
          showPrompt={false}
        />
        </h1>
        <p className="mt-6 text-matrix-dim text-lg tracking-widest matrix-glow-text">
          <span>&gt; We came here to eat the cake</span><br />
          <span>&gt; Reality is here</span>
        </p>
      </div>
      <div className="md:col-span-7">
        <MediaFrame label="Wake up seniors, we need you.">
          <img src={cake} alt="cake" className="object-cover w-full h-full" />
        </MediaFrame>
      </div>
    </div>
    
  );
}
