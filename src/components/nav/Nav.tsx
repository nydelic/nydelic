import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavContent from "./NavContent";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [floatingBurgerShowing, setFloatingBurgerShowing] = useState(false);

  // show floating burger on scroll
  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    function scrollHandler(e: Event) {
      const newScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // scroll up -> show floating burger
      if (lastScrollTop > newScrollTop) {
        // only if we are scrolled down already far enough
        if (newScrollTop > 100) {
          setFloatingBurgerShowing(true);
        } else {
          setFloatingBurgerShowing(false);
        }
      }
      // scroll down -> hide floting burger
      else {
        setFloatingBurgerShowing(false);
      }

      lastScrollTop = newScrollTop;
    }
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          {/* eslint-disable-next-line */}
          <img src="/Nydelic_Logo.svg" className="h-14" alt="Logo" />
        </div>
        <button
          className={`p-3 pt-5 flex flex-col ${navOpen ? "hidden" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setNavOpen(true);
          }}
        >
          <VisuallyHidden.Root>Navigation öffnen</VisuallyHidden.Root>
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
      {/* button that is available on scroll */}
      <motion.button
        variants={{
          showing: {
            pointerEvents: "auto",
            translateX: "0%",
            translateY: "0%",
          },
          hidden: {
            pointerEvents: "none",
            translateX: "100%",
            translateY: "-50%",
          },
        }}
        initial="hidden"
        tabIndex={1}
        aria-hidden={!floatingBurgerShowing && navOpen}
        data-aria-hidden={!floatingBurgerShowing && navOpen}
        animate={floatingBurgerShowing && !navOpen ? "showing" : "hidden"}
        className="z-50 fixed -top-2 -right-2 p-5 h-20 w-20 rounded-full flex flex-col justify-center items-center bg-accent-color-light"
        onClick={(e) => {
          e.preventDefault();
          setNavOpen(true);
        }}
      >
        <VisuallyHidden.Root>Navigation öffnen</VisuallyHidden.Root>
        <span className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0" />
        <span className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0" />
        <span className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0" />
      </motion.button>
    </>
  );
}

export default Nav;
