import { MediaFrame } from "../matrix/MediaFrame";

export function SlideMeme_k({ src, lab }: { src: string; lab: string }) {
  return (
    <div className="flex items-center justify-center pt-12 h-full w-full px-12 md:px-20">
      <div className="w-full max-w-[45rem]">
        <MediaFrame label={lab} aspect={"1/1"} >
          <img 
            src={src} 
            className=" grayscale brightness-110" 
          />
        </MediaFrame>
      </div>
    </div>
  );
}