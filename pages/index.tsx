import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import ArrowDown from "../src/components/assets/ArrowDown";
import EmojiCircle from "../src/components/assets/EmojiCircle";
import HeaderSeperator from "../src/components/assets/HeaderSeperator";
import SloganGraphic from "../src/components/assets/SloganGraphic";
import Wave from "../src/components/assets/Wave";

function ParallaxEmoji() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="flex justify-around mb-24">
      <motion.div ref={parallaxRef} style={{ y: y1 }}>
        <EmojiCircle widthHeigh={115} />
      </motion.div>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nydelic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <br />
        <br />
        <HeaderSeperator />
        <section className="px-8">
          <h1 className="text-4xl max-w-max mx-auto mb-12">
            Das neue <br />
            digitale Gesicht <br />
            deiner Marke
          </h1>
          <div className="flex justify-center mb-20 lg:mb-14">
            <ArrowDown />
          </div>
        </section>
        <Wave />
        <section className="max-w-2xl px-8 mx-auto">
          <br />
          <br />
          <h1 className="text-4xl">
            Ja, wir machen <br /> Webdesign
          </h1>
          <br />
          <p className="px-4 text-xl">
            Du brauchst eine <br /> (neue) Website?
          </p>
          <br />
          <p className="px-4 text-xl mb-24">Hier bist du richtig!</p>
          <ParallaxEmoji />
          <SloganGraphic />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </main>
    </>
  );
};

export default Home;
