import EmojiFace from "./EmojiFace";

interface EmojiCircleProps {
  widthHeigh: number;
  light?: boolean;
}

function EmojiCircle({ widthHeigh, light = false }: EmojiCircleProps) {
  return (
    <div
      className={`rounded-full ${
        light ? "bg-accent-color-light" : "bg-accent-color"
      }`}
      style={{ width: widthHeigh, height: widthHeigh }}
    >
      <div className="text-shade-900">
        <EmojiFace />
      </div>
    </div>
  );
}

export default EmojiCircle;
