import Link from "next/link";
import EmojiSun from "../src/components/assets/EmojiSun";
import { Nav } from "../src/components/nav";

interface ContactProps {}

function Contact({}: ContactProps) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div
          role="presentation"
          className="flex justify-around text-red text-white bg-accent-color px-[10%] py-2 mb-12"
        >
          <EmojiSun size={60} faceColor="text-accent-color" />
        </div>
        <div className="text-center text-2xl mb-12">
          {/* eslint-disable-next-line */}
          <img src="/Nydelic_Logo.svg" className="h-14 mx-auto" alt="Logo" />
          <br />
          <a href="mailto:hello@nydelic.ch">hello@nydelic.ch</a>
          <br />
          <br />
          Nydelic Klg.
          <br />
          Kirchberg 4<br />
          8512 Thundorf
          <br />
          <br />
          <Link href="/team">
            <a className="block underline text-accent-color text-2xl">Team</a>
          </Link>
        </div>
        <div
          role="presentation"
          className="flex justify-around text-red text-white bg-accent-color px-[10%] pt-12 pb-36 mb-0"
        >
          <EmojiSun size={60} faceColor="text-accent-color" />
        </div>
      </main>
      <footer className="flex max-w-2xl mx-auto justify-around text-sm py-12 pb-6">
        <div>impressum</div>
        <div>nydelic klg</div>
        <div>copyright 2023</div>
      </footer>
    </>
  );
}

export default Contact;
