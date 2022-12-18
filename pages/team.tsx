import Image from "next/image";
import Link from "next/link";
import EmojiSun from "../src/components/assets/EmojiSun";
import Wave from "../src/components/assets/Wave";
import { Nav } from "../src/components/nav";

interface TeamProps {}

function Team({}: TeamProps) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="relative h-[400px]">
          <Image
            src="/janik_and_jo.jpg"
            width={1920}
            height={1080}
            objectFit="cover"
            alt="Janik & Josias definetly legit"
            layout="fill"
          />
        </div>

        <div className="flex-grow flex-shrink bg-accent-color pb-24 text-white">
          <div className="mt-[-25px]">
            <Wave />
          </div>
          <section className="max-w-2xl px-8 mx-auto">
            <h1 className="text-4xl mt-12">Wir sind</h1>
            <br />
            <p className="px-4 text-xl">
              2 buben aus der ostschweiz
              <br />
              und wir gestalten gerne. <br />
              fürs leben gerne..
            </p>
          </section>
          <section className="max-w-2xl px-8 mx-auto">
            <h1 className="text-4xl mt-12">Janik (links)</h1>
            <br />
            <p className="px-4 text-xl">
              Setzt liebend gerne seine kreativen Fähigkeiten ein, um funktional
              und ästhetisch ansprechende Produkte und Erlebnisse zu erschaffen.
            </p>
          </section>
          <section className="max-w-2xl px-8 mx-auto">
            <h1 className="text-4xl mt-12">Josias (rechts)</h1>
            <br />
            <p className="px-4 text-xl">
              Haucht den gestalteten Produkte von Janik leben ein und liebt die
              ständig wandelnde Natur seines Jobs und somit die Möglichkeit, das
              neuste und beste für die Produkte einzusetzen.
            </p>
          </section>
          <div className="h-[5vmax]" />
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
                className="border-2 h-[40vw] mt-[-24vw] rounded-[100%] border-white w-full"
                role="presentation"
              />
            </div>
          </div>
          <div className="h-[25vmax]" />
          <section className="text-center">
            <h1 className="text-4xl">Unser Ziel:</h1>
            <br />
            <p className="px-4 text-xl mb-12">
              von dem leben was wir lieben <br />
              um zu lieben wie wir leben.
            </p>
          </section>
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

export default Team;
