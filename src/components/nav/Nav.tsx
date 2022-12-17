import { useState } from "react";
import NavContent from "./NavContent";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center">
        <div>x</div>
        <button
          className={`p-3 pt-5 flex flex-col ${navOpen ? "hidden" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setNavOpen(true);
          }}
        >
          <span className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0" />
          <span className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0" />
          <span className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0" />
        </button>
      </div>
      <NavContent
        visible={navOpen}
        onClose={() => {
          setNavOpen(false);
        }}
      />
    </>
  );
}

export default Nav;
