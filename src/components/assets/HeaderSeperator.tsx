import EmojiSun from "./EmojiSun";

interface HeaderSeperatorProps {}

function HeaderSeperator({}: HeaderSeperatorProps) {
  return (
    <div className="flex justify-around text-red text-white bg-shade-900 px-[10%] py-0">
      <EmojiSun />
      <EmojiSun />
      <EmojiSun />
    </div>
  );
}

export default HeaderSeperator;
