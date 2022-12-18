import { motion, useScroll, useTransform } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import ArrowDown from "../src/components/assets/ArrowDown";
import EmojiCircle from "../src/components/assets/EmojiCircle";
import HeaderSeperator from "../src/components/assets/HeaderSeperator";
import OfferSelect from "../src/components/assets/OfferSelect";
import SloganGraphic from "../src/components/assets/SloganGraphic";
import Target from "../src/components/assets/Target";
import Wave from "../src/components/assets/Wave";
import { Nav } from "../src/components/nav";

function ParallaxEmoji({
  light = false,
  inverseParallax = false,
}: {
  light?: boolean;
  inverseParallax?: boolean;
}) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    inverseParallax ? [-100, 100] : [100, -100]
  );

  return (
    <motion.div ref={parallaxRef} style={{ y: y1 }}>
      <EmojiCircle light={light} widthHeigh={115} />
    </motion.div>
  );
}
function ParallaxCircleBG() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -40]);

  return (
    <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 z-[-1]">
      <motion.div
        ref={parallaxRef}
        style={{ y: y1 }}
        className="max-w-sm w-[100%] after:pb-[100%] after:block mx-auto"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-full" />
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
      <header>
        <Nav />
      </header>
      <main>
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
          <h1 className="text-4xl mt-12">
            Ja, wir machen <br /> Webdesign
          </h1>
          <br />
          <p className="px-4 text-xl">
            Du brauchst eine <br /> (neue) Website?
          </p>
          <br />
          <p className="px-4 text-xl mb-24">Hier bist du richtig!</p>
          <div className="flex justify-center mb-24">
            <ParallaxEmoji />
          </div>
          <SloganGraphic />
        </section>
        <div
          aria-hidden
          role="presentation"
          className="overflow-hidden py-[50vmax] h-0 my-[-50vmax]"
        >
          <div
            aria-hidden
            role="presentation"
            className="overflow-hidden w-[120vw] ml-[-10vw] rotate-[15deg] relative"
          >
            <div
              aria-hidden
              className="border-2 h-[40vw] mt-[-24vw] rounded-[100%] border-accent-color w-full"
              role="presentation"
            />
          </div>
        </div>
        <div aria-hidden role="presentation" className="mb-[30vw]" />
        <section className="mb-12">
          <div className="max-w-2xl px-8 mx-auto">
            <h1 className="text-4xl">Deine Wünsche?</h1>
            <br />
            <p className="px-4 text-xl mb-12">
              Markiere (durch darauf tippen) <br />
              was du dir wünschst.
            </p>
          </div>
          <OfferSelect />
          <div className="flex justify-center">
            <div className="text-center">
              <Link href={"/request-offer"}>
                <a className="block px-6 py-6 mb-8 rounded-full border border-accent-color text-accent-color text-2xl hover:text-white hover:bg-accent-color transition-colors">
                  <del>Offerte anfragen</del>
                </a>
              </Link>
              <small className="relative block text-accent-color-light -translate-y-8">
                *momentan noch nicht verfügbar
              </small>
              <Link href={"#contact"}>
                <a className="block underline text-accent-color text-2xl">
                  Kontakt
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Wave light />
        <div className="mt-[-25px] py-12 text-shade-900 bg-accent-color-light relative">
          <section className="max-w-sm px-8 mx-auto z-[1] relative">
            <ParallaxCircleBG />
            <h1 className="text-4xl mb-12">Leitbild</h1>
            <h2 className="text-3xl mb-4">digital</h2>
            <p className="px-4 text-xl mb-12">
              Wir freuen uns auf fröhliche <br />
              Zusammenarbeit die vor <br />
              Kreativität und Ideen lebt! <br />
            </p>
            <h2 className="text-3xl mb-4 text-accent-color-light">kreativ</h2>
            <p className="px-4 text-xl mb-12 text-accent-color-light">
              Haben wir uns erst eine Idee <br />
              in den Kopf gesetzt, wird <br />
              alles daran gelegt diese <br />
              Perfekt umzusetzen!
            </p>
            <h2 className="text-3xl mb-4">überlegt</h2>
            <p className="px-4 text-xl mb-12">
              Wir freuen uns auf fröhliche <br />
              Zusammenarbeit die vor <br />
              Kreativität und Ideen lebt! <br />
            </p>
          </section>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="539"
          height="123"
          viewBox="0 0 539 123"
          preserveAspectRatio="none"
          className="w-full mt-[-1px]"
        >
          <path
            d="M 539 0 L -0 -0 L -0 13 C -0 13 370.351 37.963 539 123 Z"
            className="fill-accent-color-light"
          />
        </svg>
        <section className="max-w-2xl px-8 mx-auto" id="contact">
          <h1 className="text-4xl mb-24 text-center">Wer wir sind?</h1>
          <div className="flex justify-around max-w-sm mx-auto mb-24">
            <ParallaxEmoji light inverseParallax />
            <ParallaxEmoji />
          </div>
          <h2 className="text-4xl mb-12 text-center">
            2 kreative <br />
            Köpfe mit Liebe <br />
            zum Web!
          </h2>
          <div className="flex justify-center mb-12">
            <Link href="/team">
              <a className="block underline text-accent-color text-2xl">Team</a>
            </Link>
          </div>
          <div className="flex justify-around mb-24 max-w-sm mx-auto">
            <ArrowDown />
            <div className="translate-y-12">
              <ArrowDown />
            </div>
            <ArrowDown />
          </div>
          <div className="-mx-8">
            <Target />
          </div>
          <h2 className="text-4xl mb-12 text-center">Volltreffer landen!</h2>
          <div className="flex justify-center mb-24">
            <Link href="/contact">
              <a className="block text-center min-w-[15rem] px-6 py-6 mb-8 rounded-full border border-accent-color text-accent-color text-2xl hover:text-white hover:bg-accent-color transition-colors">
                Kontakt
              </a>
            </Link>
          </div>
        </section>
        <Wave />
      </main>
      <footer className="flex max-w-2xl mx-auto justify-around text-sm py-12 pb-6">
        <div>impressum</div>
        <div>nydelic klg</div>
        <div>copyright 2023</div>
      </footer>
    </>
  );
};

export default Home;
