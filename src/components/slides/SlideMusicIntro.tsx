import { Typewriter } from "../matrix/Typewriter";

export function SlideMusicIntro() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center px-0">
      <div className="text-5xl md:text-6xl font-light tracking-tight matrix-glow-text-strong text-center">
        <Typewriter
            lines={["Time for a music performance"]}
            speed={45}
            showPrompt={false}
          />
      </div>
    </div>
  );
}