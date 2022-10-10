import { easeQuadOut } from "d3-ease";
import {
  motion,
  useMotionTemplate,
  useTime,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import EmojiFace from "./EmojiFace";

interface EmojiSunProps {}

const EMOJI_SUN_SIZE = 30;

interface PulsateScaleXProps {
  pulsate: boolean;
  children: ReactNode;
}
function PulsateScaleX({ pulsate, children }: PulsateScaleXProps) {
  if (pulsate) {
    return (
      <motion.div
        initial={{ scaleX: 0.4 }}
        animate={{ scaleX: 0.8 }}
        transition={{
          repeatType: "mirror",
          repeat: Infinity,
          duration: 2,
          easings: ["easeInOut"],
        }}
      >
        {children}
      </motion.div>
    );
  }
  return <motion.div initial={{ scaleX: 0.4 }}>{children}</motion.div>;
}

interface RhombusProps {
  rotate: number;
  pulsate: boolean;
}

function Rhombus({ rotate, pulsate }: RhombusProps) {
  return (
    <div
      style={{
        marginLeft: -EMOJI_SUN_SIZE,
        rotate: `${rotate}deg`,
      }}
    >
      <PulsateScaleX pulsate={pulsate}>
        <div
          className="bg-current"
          style={{
            transform: "rotate(45deg)",
            width: EMOJI_SUN_SIZE,
            height: EMOJI_SUN_SIZE,
          }}
        />
      </PulsateScaleX>
    </div>
  );
}

const SPIKE_PAIR_COUNT = 10;

function EmojiSun({}: EmojiSunProps) {
  const [currentSpikees, setCurrentSpikees] = useState(2);
  const stepSize = 360 / (currentSpikees * 2);

  const time = useTime();
  const spikees = useTransform(
    time,
    [0, 1000], // For every N miliseconds
    [2, SPIKE_PAIR_COUNT], // min-max spikes
    { clamp: true, ease: easeQuadOut }
  );

  useEffect(() => {
    return spikees.onChange((numbr) => {
      setCurrentSpikees(Math.round(numbr));
    });
  }, [spikees]);

  const shouldPulsate = currentSpikees === SPIKE_PAIR_COUNT;

  return (
    <div className="flex p-3 relative">
      <div
        style={{
          width: EMOJI_SUN_SIZE,
          height: EMOJI_SUN_SIZE,
        }}
      />
      {Array.from(Array(currentSpikees + 1).keys()).map((key) => (
        <Rhombus key={key} rotate={stepSize * key} pulsate={shouldPulsate} />
      ))}
      <div className="absolute top-0 left-0 right-0 bottom-0 text-shade-900 p-1">
        <EmojiFace />
      </div>
    </div>
  );
}

export default EmojiSun;
