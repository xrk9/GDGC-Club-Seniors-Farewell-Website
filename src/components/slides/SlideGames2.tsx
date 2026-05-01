import { MediaFrame } from "../matrix/MediaFrame";
import { Typewriter } from "../matrix/Typewriter";
import game from "@/assets/game.png";

export function SlideGames2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full w-full items-center px-12 md:px-48">
      
      {/* LEFT */}
      <div className="md:col-span-6 pr-4">
        <div className="text-matrix-dim text-xs tracking-[0.4em] matrix-glow-text mb-3">
          {"// PERFORMANCE_STRESS_TEST"}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light leading-none matrix-glow-text-strong mb-8 uppercase">
          Who is most<br />likely to 
        </h1>
        
        {/* <ul className="space-y-4 text-xl md:text-2xl font-light matrix-glow-text">
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
        </ul> */}
        <div className="text-xxl md:text-3xl font-light matrix-glow-text">
                  <Typewriter
                    lines={[
                      " [8] have secret crush in class?",
                      " [9] date a senior/junior secretly?",
                      "[10] get scolded by every teacher?",
                      "[11] act like a team leader but did the \n\tleast work",
                      "[12] romise last drink but takes three \n\t more",
                      "[13] roast everybody but cant take the \n\t singlecomback",
                      "[14] get scolded by hr in the job",
                    ]}
                    showPrompt={false}
                    speed={32}
                    revealOnClick={true}
                  />
                </div>
        
        <div className="mt-10 flex items-center gap-4">
          <div className="h-2 w-2 bg-matrix animate-ping rounded-full" />
          <p className="text-xs tracking-[0.3em] text-matrix-dim matrix-glow-text uppercase">
            Awaiting player input...
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="md:col-span-6 flex items-center justify-center h-full">
        <MediaFrame 
          aspect="1/1" 
          label="GUESS ME" 
          className="w-full max-w-xl"
        >
          <img
            src={game}
            className="width-full height-full object-cover opacity-90 contrast-125 brightness-90"
          />
        </MediaFrame>
      </div>
    </div>
  );
}