function SloganGraphic() {
  return (
    <>
      <h2 className="sr-only">Wir stehen auf anders</h2>
      <div className="max-w-xs mx-auto" aria-hidden>
        <div className="flex">
          <div className="text-4xl font-display pr-4">Wir</div>
          <div
            className="border-t-2 border-r-2 h-24 mt-4 border-accent-color flex-grow flex-shrink"
            role="presentation"
          />
        </div>
        <div
          className="border-t-2 border-l-2 h-12 border-accent-color flex-grow flex-shrink self-center"
          role="presentation"
        />
        <div className="flex">
          <div className="flex-grow flex-shrink relative">
            <div
              className="border-t-2 border-accent-color"
              role="presentation"
            />
            <div
              className="border-t-2 border-accent-color absolute bottom-0 left-0 right-24"
              role="presentation"
            />
          </div>
          <div className="relative">
            <div className="text-4xl font-display absolute left-0 top-0 -translate-y-1/2 px-4">
              stehen
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="195.973"
              height="101.187"
            >
              <path
                d="M 157.255 2 C 157.255 0 200.33 6.476 194.416 34 C 188.501 61.524 72.339 100.187 0 100.187"
                fill="transparent"
                strokeWidth="2"
                className="stroke-accent-color"
              />
            </svg>
            <div className="text-4xl font-display absolute right-full bottom-0 translate-y-1/2 px-4">
              auf
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="border-b-2 border-l-2 h-12 border-accent-color absolute left-0 right-20"
            role="presentation"
          />
          <div
            className="border-l-2 h-8 border-accent-color absolute right-20 top-12"
            role="presentation"
          />
          <div className="text-4xl font-display text-right pt-20">Anders</div>
        </div>
      </div>
    </>
  );
}

export default SloganGraphic;
