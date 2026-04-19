import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import { DigitalRain } from "./matrix/DigitalRain";
import { beep } from "./matrix/beep";

import { SlideWaiting } from "./slides/SlideWaiting";
import { SlideGettingStarted } from "./slides/SlideGettingStarted";
import { SlideCake } from "./slides/SlideCake";
import { SlideWishes } from "./slides/SlideWishes";
import { SlideWish_k } from "./slides/SlideWish_k";
import { SlideMusic } from "./slides/SlideMusic";
import { SlideMeme } from "./slides/SlideMeme";
import { SlideMemes } from "./slides/SlideMemes";
import { SlideMeme_k } from "./slides/SlideMeme_k";
import { SlideDance } from "./slides/SlideDance";
import { SlideGames } from "./slides/SlideGames";
import { SlideBonus } from "./slides/SlideBonus";
import { SlideEndingVideo } from "./slides/SlideEndingVideo";
import { SlideMore } from "./slides/SlideMore";
import { SlideGift } from "./slides/SlideGift";
import { SlideGifts } from "./slides/SlideGifts";
import { SlideEnding } from "./slides/SlideEnding";

import { SlideMusicIntro } from "./slides/SlideMusicIntro";

// videos here
import video from "@/assets/music.jpg"

// images here
import cake from "@/assets/test.jpg"

type Slide = {
  id: string;
  title: string;
  render: () => ReactElement;
};

const SLIDES: Slide[] = [
  { id: "waiting", title: "awaiting connection...", render: () => <SlideWaiting /> },
  { id: "getting-started", title: "the matrix has you...", render: () => <SlideGettingStarted /> },
  { id: "cake", title: "slicing the cake", render: () => <SlideCake /> },
  { id: "wishes", title: "WISHES FROM OUR SENIORS", render: () => <SlideWishes /> },
  { id: "wishe_k", title: "WISHES FROM OUR SENIORS", render: () => <SlideWish_k src={video} lab="Congrats Neo, You're finally free"/> },
  { id: "music", title: "MUSIC PERFORMANCE", render: () => <SlideMusic /> },
  { id: "memes", title: "memes", render: () => <SlideMemes /> },
  { id: "memes", title: "memes", render: () => <SlideMeme name="Our Target" tar="Target Acquired" tar2="Initiating meme protocol..." lab="01/18"/> },
  { id: "wishe_k", title: "memes", render: () => <SlideMeme_k src={cake} lab="I know Kungfu"/> },
  { id: "bonus", title: "bonus content", render: () => <SlideBonus /> },
  { id: "ending-video", title: "ending video", render: () => <SlideEndingVideo /> },
  { id: "end", title: "end ?", render: () => <SlideMore /> },
  { id: "gifts", title: "one final transaction", render: () => <SlideGift /> },
  { id: "games", title: "It's a glitch in the matrix", render: () => <SlideGifts /> },
  { id: "games-1", title: "games", render: () => <SlideGames /> },
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
