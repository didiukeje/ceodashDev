import TxCurr from './TxCurr';
import LeadIndicators from './LeadIndicators';

const TxCurrIndicator = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <TxCurr />
        <div className="m-2">
          <p className="font-medium text-gray-600 mb-1">Tx_Curr Lead Indicators</p>
          <div className="flex flex-wrap gap-2 w-[32vw]">
            <LeadIndicators value="6" title="PMTCT" />
            <LeadIndicators value="591" title="TX_NEW" />
            <LeadIndicators value="67,553" title="IIT" />
            <LeadIndicators value="0" title="Returned" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxCurrIndicator;

