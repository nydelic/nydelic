import { ReactNode } from "react";

function FlexRow({ children }: { children: ReactNode }) {
  return <div className="flex -mb-px">{children}</div>;
}

function GrowItem() {
  return <div className="flex-grow flex-shrink" />;
}

function EndBlackBar() {
  return (
    <div className="flex-grow flex-shrink bg-shade-900 rounded-l-full px-8 -ml-4 border-shade-900 border w-24"></div>
  );
}
function EndWhiteBar() {
  return (
    <div className="flex-grow flex-shrink bg-white px-8 -ml-4 border-shade-900 border-y w-24"></div>
  );
}

function OfferSelect() {
  return (
    <div className="bg-shade-900 text-3xl mb-12">
      <FlexRow>
        <GrowItem />
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Webdesign
        </div>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Website
        </div>
        <EndBlackBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Grafik
        </div>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Corporate Design
        </div>
        <EndWhiteBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Visitenkarte
        </div>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Logo
        </div>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Flyer
        </div>
        <EndBlackBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Plakat
        </div>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Support
        </div>
        <EndBlackBar />
      </FlexRow>
      <FlexRow>
        <GrowItem />
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Social Media
        </div>
        <div className="whitespace-nowrap text-ellipsis overflow-hidden bg-white rounded-l-full px-8 -ml-4 border-shade-900 border">
          Code
        </div>
        <EndWhiteBar />
      </FlexRow>
    </div>
  );
}

export default OfferSelect;
