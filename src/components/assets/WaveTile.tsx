interface WaveTileProps {
  width: number;
  animate?: boolean;
}

function WaveTile({ width, animate = false }: WaveTileProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="81.5 13 60.3866667 60.5"
      width={width}
    >
      <path
        d="M 81.501 43.5 C 81.501 26.655 95.063 13 111.793 13 C 128.523 13 142.086 26.655 142.086 43.5"
        className="fill-accent-color"
      ></path>
      <path
        d="M 0 30.5 C 0 13.655 13.562 -0 30.292 -0 C 47.022 -0 60.584 13.655 60.584 30.5"
        transform="translate(111.501 43) rotate(180 30.292 15.25)"
        className="fill-accent-color"
      ></path>
      <path
        d="M 0 30.5 C 0 13.655 13.562 -0 30.292 -0 C 47.022 -0 60.584 13.655 60.584 30.5"
        transform="translate(51.1143333 43) rotate(180 30.292 15.25)"
        className="fill-accent-color"
      ></path>
    </svg>
  );
}

export default WaveTile;
