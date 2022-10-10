import type { NextPage } from "next";
import Head from "next/head";
import ArrowDown from "../src/components/assets/ArrowDown";
import EmojiCircle from "../src/components/assets/EmojiCircle";
import HeaderSeperator from "../src/components/assets/HeaderSeperator";
import Wave from "../src/components/assets/Wave";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nydelic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <br />
      <HeaderSeperator />
      <div className="max-w-2xl mx-auto">
        <br />
        <br />
        <h1 className="text-4xl">Das neue digitale Gesicht deiner Marke</h1>
        <br />
        <br />
        <div className="flex justify-center">
          <ArrowDown />
        </div>
        <br />
        <br />
      </div>
      <Wave />
      <div className="max-w-2xl mx-auto">
        <br />
        <br />
        <p>Du brauchst eine (neue) Website?</p>
        <p>Hier bist du richtig!</p>
        <br />
        <div className="flex justify-around">
          <EmojiCircle widthHeigh={70} light />
          <EmojiCircle widthHeigh={70} />
        </div>
      </div>

      <br />
    </>
  );
};

export default Home;
