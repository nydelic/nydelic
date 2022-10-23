import { useEffect, useRef, useState } from "react";
import WaveTile from "./WaveTile";

interface WaveProps {
  light?: boolean;
}

const WAVE_TILE_WIDTH = 50;
const WAVE_TILE_WIDTH_TW = "[--wave-tile-width:50px]";

function Wave({ light = false }: WaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tileCount, setTileCount] = useState(0);
  useEffect(() => {
    function windowSizeHandler() {
      const containerX = containerRef.current?.clientWidth;
      // const containerY = containerRef.current?.clientHeight;

      if (!containerX /*|| !containerY */) {
        throw new Error("You broke the universe");
      }

      const tilesNeeded = Math.ceil(containerX / WAVE_TILE_WIDTH) + 1; // + 1 for animation
      setTileCount(tilesNeeded);
    }
    window.addEventListener("resize", windowSizeHandler);

    // run once on load
    windowSizeHandler();

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);
  return (
    <div className="w-full overflow-hidden relative" ref={containerRef}>
      <div
        className={`motion-safe:animate-move-wave flex ${WAVE_TILE_WIDTH_TW}`}
        style={{ marginLeft: -WAVE_TILE_WIDTH }}
      >
        {Array.from(Array(tileCount).keys()).map((key) => (
          <WaveTile light={light} key={key} width={WAVE_TILE_WIDTH} />
        ))}
      </div>
    </div>
  );
}

export default Wave;
