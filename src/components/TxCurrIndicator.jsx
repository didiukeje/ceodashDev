import TxCurr from './TxCurr';
import PITC from './PITC';

const TxCurrIndicator = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <TxCurr />
        <div className="m-2">
          <p className="font-medium text-gray-600 mb-1">Tx_Curr Lead Indicators</p>
          <div className="flex flex-wrap gap-4">
            <PITC value="6" title="PMTCT" />
            <PITC value="591" title="TX_NEW" />
            <PITC value="67,553" title="IIT" />
            <PITC value="0" title="Returned" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxCurrIndicator;

