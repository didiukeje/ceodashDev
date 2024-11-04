import BarChartCard from '../charts/BarChartCard';
import BulletChart from '../assets/bullet-chart.png';

const HtsPos = () => {
  return (
    <div className="w-[375px] h-[230px] bg-white rounded-lg shadow-md p-4 flex flex-col space-y-4">
      {/* Title Section */}
      <div className="w-full">
        <p className="text-xs text-gray-500 text-left">1ST 95 Primary Indicator</p>
        <h2 className="text-xl font-bold text-gray-800 text-left">HTS_POS</h2>
      </div>

      {/* Content Section */}
      <div className="flex space-x-4">
        {/* Left Column: Bar Chart and Labels */}
        <div className="flex flex-col space-y-2 w-1/2">
          <p className="text-xs text-gray-500">HTS_POS vs rolling COP target</p>
          <BarChartCard />
        </div>

        {/* Right Column: Line Chart and Labels */}
        <div className="flex flex-col space-y-2 w-1/2">
          <p className="text-xs text-gray-500 text-center">Monthly HTS_POS trend</p>
          <img src={BulletChart} alt="Bulleted Chart" className="w-[160px] h-[40px]" />
          <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
            <span>Target</span>
            <div className="h-2 w-2 rounded-full bg-blue-400 mr-1"></div>
            <span>Achievement</span>
            <div className="h-2 w-2 rounded-full bg-blue-300 mr-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtsPos;
