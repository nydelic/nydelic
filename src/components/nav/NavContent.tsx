import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { hideOthers, Undo } from "aria-hidden";

import Wave from "../assets/Wave";
import ClientOnlyPortal from "../ClientOnlyPortal";

function NavContent({ visible }: { visible: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const undoAriaHideRef = useRef<Undo>();

  const containerVariants: Variants = {
    visible: {
      backgroundColor: "#ffffff",
      pointerEvents: "auto",
      transition: {
        staggerChildren: 0.05,
      },
    },
    hidden: {
      backgroundColor: "rgba(255,255,255,0)",
      pointerEvents: "none",
      transition: {
        when: "afterChildren",
      },
    },
  };

  const waveVariants: Variants = {
    visible: {
      translateY: 0,

      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
    hidden: {
      translateY: "calc(100% + 25px)",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const navItemVariants: Variants = {
    visible: {
      translateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hidden: {
      translateX: 100,
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  // aria-hide other elements when nav is open
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    if (visible) {
      undoAriaHideRef.current = hideOthers(containerRef.current);
    } else {
      undoAriaHideRef.current?.();
    }
  }, [visible]);

  return (
    <ClientOnlyPortal containerId="portal-root">
      <motion.div
        ref={containerRef}
        className="fixed top-0 left-0 right-0 bottom-0 flex flex-col z-40 invisible"
        variants={containerVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        onAnimationComplete={(a) => {
          switch (a) {
            case "hidden":
              containerRef.current?.classList.add("invisible");
              break;
          }
        }}
        onAnimationStart={(a) => {
          switch (a) {
            case "visible":
              containerRef.current?.classList.remove("invisible");
              break;
          }
        }}
      >
        <motion.nav className="flex-grow flex-shrink-0 flex">
          <ul className="text-5xl font-display m-auto w-full max-w-md py-8">
            <motion.li variants={navItemVariants} className="mb-6">
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li variants={navItemVariants} className="mb-6">
              <Link href="/offer">Angebot</Link>
            </motion.li>
            <motion.li variants={navItemVariants} className="mb-6">
              <Link href="/about">Über uns</Link>
            </motion.li>
            {/* <motion.li variants={navItemVariants} className="mb-6">
          <Link href="/about">Leitbild</Link>
        </motion.li> */}
            <motion.li variants={navItemVariants} className="mb-6">
              <Link href="/contact">Kontakt</Link>
            </motion.li>
          </ul>
        </motion.nav>
        <motion.div
          className="flex-grow flex-shrink bg-accent-color"
          role="presentation"
          variants={waveVariants}
        >
          <div className="mt-[-25px] after:absolute after:block after:left-0 after:right-0 after:top-full after:h-11 after:bg-accent-color">
            <Wave />
          </div>
        </motion.div>
      </motion.div>
    </ClientOnlyPortal>
  );
}

export default NavContent;
