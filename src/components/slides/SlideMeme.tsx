import { MediaFrame } from "../matrix/MediaFrame";
import { Typewriter } from "../matrix/Typewriter";
import memePerson from "@/assets/cake.jpg";

export function SlideMeme({name, tar, tar2, lab} : {name:string; tar:string; tar2:string; lab:string}) {
  return (
    // 1. justify-center and items-center completely centers everything on the screen
    <div className="flex flex-col items-center justify-center -mt-10 h-full w-full px-12 md:px-20 overflow-hidden gap-12">
      
      {/* 2. CENTERED TITLE: Massive and commanding */}
      <div className="w-full text-center">
        <h1 className="text-4xl md:text-7xl font-mono text-matrix matrix-glow-text-strong tracking-[0.2em] leading-none">
          {/* Flex container to force centering */}
          <div className="flex justify-center w-full">
            <Typewriter
              lines={[tar]}
              speed={40}
              showPrompt={false}
              scrambleCycles={3}
            />
          </div>
        </h1>
        <div className="text-lg text-matrix-green tracking-widest mt-4 opacity-80">
          {tar2}
        </div>
      </div>

      {/* 3. THE REVEAL SECTION: Pointer + Image */}
      {/* md:flex-row puts the text and image side-by-side on laptops */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 w-full max-w-5xl">
        
        {/* 4. THE NAME POINTING TO THE FRAME */}
        <div className="flex flex-col items-center md:items-end text-matrix-green font-mono transform -translate-y-[180px]">
          {/* Change "CAKE GUY" to the actual person's name */}
          <div className="text-2xl md:text-4xl font-bold whitespace-nowrap matrix-glow-text">
            {name}
          </div>
          {/* Arrow pointing RIGHT on desktop */}
          <div className="hidden md:block text-3xl tracking-tighter ">
            ──────────►
          </div>
        </div>

        {/* 5. THE MEDIA FRAME: Fixed as a square portrait */}
        {/* z-10 keeps it above the background, w-64 h-64 makes it a perfect portrait size */}
        <div className="w-64 h-64 md:w-140 md:h-140 relative z-10 flex-shrink-0">
          <MediaFrame label={lab} aspect={"1/1"}>
            <img 
              src={memePerson} 
              alt="meme target"
              // object-cover ensures the image fills the square perfectly without stretching
              className="w-full h-full object-cover bg-black/40" 
            />
          </MediaFrame>
        </div>

      </div>

    </div>
  );
}