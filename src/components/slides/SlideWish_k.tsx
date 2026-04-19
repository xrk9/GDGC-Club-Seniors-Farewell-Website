import { MediaFrame } from "../matrix/MediaFrame";

// Use curly braces to destructure props
export function SlideWish_k({ src, lab }: { src: string; lab: string }) {
  return (
    <div className="flex items-center justify-center h-full w-full px-12 md:px-20">
      <div className="w-full max-w-5xl">
        {/* Changed 'label' to 'lab' to match your parameter */}
        <MediaFrame label={lab}>
          <video 
            src={src} 
            className="w-full h-full object-contain bg-white" 
            autoPlay={true}
            playsInline={true}
          />
        </MediaFrame>
      </div>
    </div>
  );
}