/**
 * Decorative animated bar audio visualizer.
 */
export function AudioViz({ bars = 48 }: { bars?: number }) {
  return (
    <div className="flex items-end gap-[3px] h-32 w-full px-2">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="viz-bar flex-1"
          style={{
            animationDelay: `${(i * 47) % 600}ms`,
            animationDuration: `${500 + ((i * 73) % 400)}ms`,
            opacity: 0.6 + ((i % 5) * 0.08),
          }}
        />
      ))}
    </div>
  );
}
