import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { hideOthers, Undo } from "aria-hidden";

import Wave from "../assets/Wave";
import ClientOnlyPortal from "../ClientOnlyPortal";

interface NavContentProps {
  visible: boolean;
  onClose: () => void;
}

function NavContent({ visible, onClose }: NavContentProps) {
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
      document.body.style.overflow = "hidden";
    } else {
      undoAriaHideRef.current?.();
      document.body.style.overflow = "";
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
        <motion.button
          className="absolute top-0 right-0 p-3 pt-5 flex flex-col"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          animate={visible ? "btn-visible" : "btn-hidden"}
          initial="btn-hidden"
          variants={{
            "btn-visible": { transition: {} },
            "btn-hidden": { transition: {} },
          }}
        >
          <motion.span
            style={{ transformOrigin: "center left" }}
            variants={{
              "btn-visible": {
                rotate: "45deg",
                translateY: -4,
                translateX: 4,
              },
              "btn-hidden": {
                rotate: "0",
                translateY: 0,
                translateX: 0,
              },
            }}
            className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0"
          />
          <motion.span
            style={{ transformOrigin: "center" }}
            variants={{
              "btn-visible": {
                scaleX: 0,
              },
              "btn-hidden": {
                scaleX: 1,
              },
            }}
            className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0"
          />
          <motion.span
            style={{ transformOrigin: "center left" }}
            variants={{
              "btn-visible": {
                rotate: "-45deg",
                translateY: 4,
                translateX: 4,
              },
              "btn-hidden": {
                rotate: "0",
                translateY: 0,
                translateX: 0,
              },
            }}
            className="relative inline-block w-8 h-[3px] bg-shade-900 rounded-full mb-1 last:mb-0"
          />
        </motion.button>

        <motion.nav className="flex-grow flex-shrink-0 flex">
          <ul className="text-5xl font-display m-auto w-full max-w-md py-8 px-6">
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
          <div className="mt-[-25px] after:absolute after:block after:left-0 after:right-0 after:top-full after:h-[50vh] after:-mt-1 after:bg-accent-color">
            <Wave />
          </div>
        </motion.div>
      </motion.div>
    </ClientOnlyPortal>
  );
}

export default NavContent;
