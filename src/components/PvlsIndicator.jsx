import Pvls from './Pvls';
import PITC from './PITC';
import DonutPieChart from '../charts/DonutPieChart';
import TestingTAT from './TestingTAT';

const PvlsIndicator = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full max-w-[375px]">
        <Pvls />
        <div className="m-2">
          {/* Title for the PVLS section */}
          <p className="font-medium text-gray-600 mb-1">PVLS Lead Indicators</p>
          <div className="flex flex-wrap gap-4 items-center">
            <PITC value="177,163" title="Eligibles" />
            <div className="flex gap-10 transform scale-75"> 
            <div className="w-14 h-14">
                <DonutPieChart label="" percentage={95} />
                </div>
                <div className="w-14 h-14">
                    <DonutPieChart label="" percentage={64} />
                </div>
            </div>
            <TestingTAT value="6.9" title="Testing TAT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvlsIndicator;
