import { ReactNode } from "react";

function OfferItem({ children }: { children: ReactNode }) {
  return (
    <button className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full pl-3 pr-6 -ml-4 border-shade-900 border hover:bg-shade-900 hover:text-white transition-all z-[1] hover:-translate-x-1">
      {children}
    </button>
  );
}

function FlexRow({ children }: { children: ReactNode }) {
  return <div className="flex -mb-px">{children}</div>;
}

function GrowItem() {
  return <div className="flex-grow flex-shrink" />;
}

function EndBlackBar() {
  return (
    <div className="flex-grow flex-shrink bg-shade-900 rounded-l-full px-8 -ml-4 border-shade-900 border w-24 hidden sm:block z-[1]"></div>
  );
}
function EndWhiteBar() {
  return (
    <div className="transition-colors flex-grow flex-shrink bg-white px-8 -ml-4 border-shade-900  border-y border-l hidden sm:block z-[1] rounded-l-full"></div>
  );
}

function OfferSelect() {
  return (
    <div className="bg-shade-900 text-3xl mb-12">
      <FlexRow>
        <GrowItem />
        <OfferItem>Webdesign</OfferItem>
        <OfferItem>Website</OfferItem>
        <EndBlackBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <OfferItem>Grafik</OfferItem>
        <OfferItem>Corporate Design</OfferItem>
        <EndWhiteBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <OfferItem>Visitenkarte</OfferItem>
        <OfferItem>Logo</OfferItem>
        <OfferItem>Flyer</OfferItem>
        <EndBlackBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <OfferItem>Plakat</OfferItem>
        <OfferItem>Support</OfferItem>
        <EndBlackBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <OfferItem>Social Media</OfferItem>
        <OfferItem>Code</OfferItem>
        <EndWhiteBar />
      </FlexRow>
    </div>
  );
}

export default OfferSelect;
