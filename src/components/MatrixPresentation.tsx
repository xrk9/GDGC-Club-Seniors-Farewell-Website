import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import { DigitalRain } from "./matrix/DigitalRain";
import { beep } from "./matrix/beep";

import { SlideWaiting } from "./slides/SlideWaiting";
import { SlideGettingStarted } from "./slides/SlideGettingStarted";
import { SlideCake } from "./slides/SlideCake";
import { SlideWishes } from "./slides/SlideWishes";
import { SlideWish_k } from "./slides/SlideWish_k";
import { SlideMusic } from "./slides/SlideMusic";
import { SlideWho } from "./slides/SlideWho";
import { SlideMeme_k } from "./slides/SlideMeme_k";
import { SlideDance } from "./slides/SlideDance";
import { SlideGameScribble } from "./slides/SlideGameScribble";
import { SlideBonus } from "./slides/SlideBonus";
import { SlideEndingVideo } from "./slides/SlideEndingVideo";
import { SlideMore } from "./slides/SlideMore";
import { SlideGift } from "./slides/SlideGift";
import { SlideGames } from "./slides/SlideGames";
import { SlideGames2 } from "./slides/SlideGames2";
import { SlideEnding } from "./slides/SlideEnding";
import { SlideDamsharaj } from "./slides/SlideDamsharaj";
import { SlideDrink } from "./slides/SlideDrink";
import { SlideScribbleRules } from "./slides/SlideScribbleRules";
import { SlideGameTorS } from "./slides/SlideGameTorS";
import { SlideTorSRules } from "./slides/SlideTorSRules";
import { SlideConfess } from "./slides/SlideConfess";

// Images here
import who1 from "@/assets/meme4.jpg"

// videos here
import video1 from "@/assets/senior_vdo.mp4"
import video2 from "@/assets/senior2.mp4"
import video3 from "@/assets/senior5.mp4"

type Slide = {
  id: string;
  title: string;
  render: () => ReactElement;
};

const SLIDES: Slide[] = [
  // ~ Waiting Page
  { id: "waiting", title: "awaiting connection...", render: () => <SlideWaiting /> },
  // ~ First Introductory Slide
  { id: "getting-started", title: "the matrix has you...", render: () => <SlideGettingStarted /> },
  // ~ Cake cutting ceremony
  { id: "cake", title: "slicing the cake", render: () => <SlideCake /> },
  // ~ Wishes from Seniors
  { id: "wishes", title: "WISHES FROM OUR SENIORS", render: () => <SlideWishes /> },
  { id: "wishe_k", title: "WISHES FROM OUR SENIORS", render: () => <SlideWish_k src={video1} lab="Congrats Neo, You're finally free"/> },
  { id: "wishe_k", title: "WISHES FROM OUR SENIORS", render: () => <SlideWish_k src={video2} lab="Congrats Neo, You're finally free"/> },
  { id: "wishe_k", title: "WISHES FROM OUR SENIORS", render: () => <SlideWish_k src={video3} lab="Congrats Neo, You're finally free"/> },

  ////{ id: "music", title: "MUSIC PERFORMANCE", render: () => <SlideMusic /> },
  // ~ Confession
  { id: "confess", title: "I'm finally ready", render: () => <SlideConfess /> },
  { id: "confessions", title: "confessions", render: () => <SlideMeme_k src={who1} lab="I know Kungfu"/> },

  // ~ Guess Who
  { id: "guess who", title: "I got my eyes on you", render: () => <SlideWho src = {who1} name="Our Target" tar="Guess Who?" tar2="From the Childhood Photo" lab="01/18"/> },
  
  //// { id: "bonus", title: "bonus content", render: () => <SlideBonus /> },
  
  // ~ Scribble Game
  { id: "game1", title: "The answer is out there", render: () => <SlideGameScribble /> },
  { id: "game1 - rules", title: "The answer is out there", render: () => <SlideScribbleRules /> },
  // ~ Truth or Shot Game
  { id: "game2", title: "You're empty, you're already dead", render: () => <SlideGameTorS /> },
  { id: "game2 - rules", title: "You're empty, you're already dead", render: () => <SlideTorSRules /> },
  // ~ Gift Ceremony 
  { id: "gifts", title: "one final transaction", render: () => <SlideGift /> },
  // ~ Drinking Ceremony   
  { id: "drink", title: "i got more than you thought", render: () => <SlideDrink /> },
  // ~ Who is most likely to
  // ! need to add them
  // TODO : 1.Guess the person from the photo
  // TODO :     Two slides - one ask, other photo
  { id: "Make it count", title: "He's beginning to believe", render: () => <SlideGames /> },
  { id: "Make it count", title: "He's beginning to believe", render: () => <SlideGames2 /> },
  // ~ End ?
  { id: "end", title: "end ?", render: () => <SlideMore /> },
  // ~ Damsharaj
  { id: "damsharaj", title: "title", render: () => <SlideDamsharaj /> },
  // ~ End
  { id: "ending-video", title: "ending video", render: () => <SlideEndingVideo /> },
  { id: "ending", title: "ending", render: () => <SlideEnding /> },
];

const TRANSITION_MS = 380;

export function MatrixPresentation() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const lockRef = useRef(false);

  const go = useCallback(
    (delta: number) => {
      if (lockRef.current) return;
      const next = (index + delta + SLIDES.length) % SLIDES.length;
      if (next === index) return;
      lockRef.current = true;
      beep(delta > 0 ? 880 : 660, 80);
      setPhase("out");
      window.setTimeout(() => {
        setIndex(next);
        setPhase("in");
        beep(1320, 40, 0.025);
        window.setTimeout(() => {
          lockRef.current = false;
        }, TRANSITION_MS);
      }, TRANSITION_MS);
    },
    [index]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        setIndex(0);
      } else if (e.key === "End") {
        setIndex(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const current = SLIDES[index];
  const isConstruct = current.id === "ending";

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ background: isConstruct ? "#FFFFFF" : "#000000" }}
    >
      {!isConstruct && <DigitalRain />}

      {/* Slide stage */}
      <div
        className="absolute inset-0 z-10"
        key={current.id + phase}
      >
        <div
          className={`h-full w-full ${phase === "out" ? "glitch-out" : "glitch-in"}`}
        >
          {current.render()}
        </div>
      </div>

      {/* HUD overlay (hidden on construct) */}
      {!isConstruct && (
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 text-[14px] tracking-[0.35em] text-matrix-dim matrix-glow-text">
          <div>o_o THE_MATRIX</div>
          <div className="text-matrix-bright matrix-glow-text-strong">
            {current.title.toUpperCase()}
          </div>
          <div>
            GDGC FAREWELL
          </div>
        </div>
      )}      
    </div>
  );
}
