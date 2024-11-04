import HtsPos from './HtsPos';
import PITC from './PITC';

const HtsPosIndicator = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <HtsPos />
        <div className="m-2">
          <p className="font-medium text-gray-600 mb-2">HTS_POS Lead Indicators</p>
          <div className="flex flex-wrap gap-4">
            <PITC value="409" title="Index Cases" />
            <PITC value="214" title="PITC Cases" />
            <PITC value="55" title="Key Pop Cases" />
            <PITC value="226" title="Community Cases" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtsPosIndicator;
