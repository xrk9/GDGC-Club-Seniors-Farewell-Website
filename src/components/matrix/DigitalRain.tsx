import { useEffect, useRef } from "react";

/**
 * Persistent slow digital rain. Sits behind everything at low opacity.
 */
export function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 24;
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛ0123456789ABCDEF<>{}[]/\\|=+*%$#@!?";

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize)
      );
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let last = 0;
    const stepMs = 90; // slow

    const draw = (t: number) => {
      if (t - last >= stepMs) {
        last = t;
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${fontSize}px "JetBrains Mono", "Fira Code", monospace`;

        for (let i = 0; i < drops.length; i++) {
          const ch = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          // bright head
          ctx.fillStyle = Math.random() > 0.97 ? "#39FF14" : "#00FF41";
          ctx.fillText(ch, x, y);
          if (y > height && Math.random() > 0.975) drops[i] = 0;
          drops[i] += 1;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="rain-canvas" aria-hidden />;
}
