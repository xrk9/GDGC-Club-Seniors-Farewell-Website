import { useEffect, useState } from "react";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  startDelay?: number;
  className?: string;
  showPrompt?: boolean;
  scrambleCycles?: number;
  maSpeed?: number;
  spaceSpeed?: number;
  loop?: boolean;
  deleteSpeed?: number;
  pauseDuration?: number;
  revealOnClick?: boolean; 
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?/<>";

export function Typewriter({
  lines,
  speed = 38,
  startDelay = 250,
  className = "",
  showPrompt = true,
  scrambleCycles = 2,
  maSpeed = 0.5,
  spaceSpeed = 0.5,
  loop = false,
  deleteSpeed = 80,
  pauseDuration = 3000,
  revealOnClick = false, 
}: TypewriterProps) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  
  const [scrambleCount, setScrambleCount] = useState(0);
  const [randomChar, setRandomChar] = useState("");
  
  // New state to track if we are paused waiting for a user click
  const [waitingForClick, setWaitingForClick] = useState(false);

  // Initial Start Delay
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (waitingForClick) return; // Halt the typing cycle if waiting for user input

    // --- DELETING LOGIC ---
    if (isDeleting) {
      const t = setTimeout(() => {
        if (charIdx > 0) {
          // Remove char from current line
          setCharIdx((c) => c - 1);
        } else if (lineIdx > 0) {
          // Move to the end of the previous line
          const prevLineIdx = lineIdx - 1;
          setLineIdx(prevLineIdx);
          setCharIdx(lines[prevLineIdx].length);
        } else {
          // Everything is deleted, wait a moment before typing again
          const t = setTimeout(() => {
            setIsDeleting(false);
          }, pauseDuration / 2); 
          return () => clearTimeout(t);
        }
      }, deleteSpeed);
      return () => clearTimeout(t);
    }

    // --- TYPING LOGIC ---
    if (lineIdx >= lines.length) {
      // We reached the end of all lines
      if (loop) {
        const t = setTimeout(() => setIsDeleting(true), pauseDuration);
        return () => clearTimeout(t);
      }
      return;
    }

    const currentLine = lines[lineIdx];

    // End of a line (but not the last line)
    if (charIdx >= currentLine.length) {
      // If revealOnClick is true, pause and wait instead of auto-advancing
      if (revealOnClick && lineIdx + 1 < lines.length) {
        setWaitingForClick(true);
        return;
      }

      const t = setTimeout(() => {
        if (lineIdx + 1 < lines.length) {
          setLineIdx((i) => i + 1);
          setCharIdx(0);
          setScrambleCount(0);
          setRandomChar("");
        } else if (loop) {
          // We are at the very end of the last line
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, 450);
      return () => clearTimeout(t);
    }

    // Handle spaces (skip scramble)
    if (currentLine[charIdx] === " ") {
      const t = setTimeout(() => {
        setCharIdx((c) => c + 1);
        setScrambleCount(0);
        setRandomChar("");
      }, speed * spaceSpeed);
      return () => clearTimeout(t);
    }

    // Handle Scrambling
    if (scrambleCount < scrambleCycles) {
      const t = setTimeout(() => {
        setRandomChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        setScrambleCount((s) => s + 1);
      }, speed * maSpeed);
      return () => clearTimeout(t);
    } 
    
    // Settle character
    const t = setTimeout(() => {
      setCharIdx((c) => c + 1);
      setScrambleCount(0);
      setRandomChar("");
    }, speed);
    
    return () => clearTimeout(t);
  }, [
    charIdx, lineIdx, lines, speed, started, 
    scrambleCount, scrambleCycles, maSpeed, 
    spaceSpeed, isDeleting, deleteSpeed, loop, pauseDuration,
    revealOnClick, waitingForClick // Added new dependencies
  ]);

  // Handler for manual click advancement
  const handleContainerClick = () => {
    if (waitingForClick) {
      setWaitingForClick(false);
      setLineIdx((i) => i + 1);
      setCharIdx(0);
      setScrambleCount(0);
      setRandomChar("");
    }
  };

  return (
    <>
      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: terminal-blink 0.8s step-end infinite;
        }
      `}</style>

      <div 
        className={`typewriter font-mono matrix-glow-text ${waitingForClick ? "cursor-pointer" : ""} ${className}`}
        onClick={handleContainerClick}
      >
        {lines.map((line, i) => {
          if (i > lineIdx) return null;

          const isCurrentLine = i === lineIdx;
          let text = isCurrentLine ? line.slice(0, charIdx) : line;

          if (!isDeleting && isCurrentLine && charIdx < line.length && randomChar) {
            text += randomChar;
          }

          // THE FIX: Check if we are done typing the very last line
          const isFinished = !loop && isCurrentLine && i === lines.length - 1 && charIdx >= line.length && !isDeleting;

          return (
            <div key={i} className="leading-tight whitespace-pre-wrap flex items-center">
              {showPrompt && <span className="text-matrix-dim mr-2 shrink-0">{">"}</span>}
              <span>
                {text}
                {/* Only show the cursor if it's the current line AND we aren't completely finished */}
                {isCurrentLine && !isFinished && (
                  <span className={`animate-blink inline-block ml-0.5 font-light text-[#00FF41] ${waitingForClick ? "opacity-100" : ""}`}>|</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}