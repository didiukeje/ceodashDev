import HtsPosIndicator from './HtsPosIndicator';
import TxCurrIndicator from './TxCurrIndicator';
import PvlsIndicator from './PvlsIndicator';

const Section2 = () => {
  return (
    <div className="flex flex-wrap justify-between mx-8 space-y-1">
      <div className="flex-shrink-0 w-full max-w-[375px]">
        <HtsPosIndicator />
      </div>
      <div className="flex-shrink-0 w-full max-w-[375px]">
        <TxCurrIndicator />
      </div>
      <div className="flex-shrink-0 w-full max-w-[375px]">
        <PvlsIndicator />
      </div>
    </div>
  );
};

export default Section2;