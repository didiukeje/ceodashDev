import HtsPosIndicator from './HtsPosIndicator';
import TxCurrIndicator from './TxCurrIndicator';
import PvlsIndicator from './PvlsIndicator';

const Section2 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-1 p-4">
      <div className="w-[32vw] h-[32vw]">
        <HtsPosIndicator />
      </div>
      <div className="w-[32vw] h-[32vw]">
        <TxCurrIndicator />
      </div>
      <div className="w-[32vw] h-[32vw]">
        <PvlsIndicator />
      </div>
    </div>
  );
};

export default Section2;

