import BulletChart from '../assets/bulleted-chart.png';
import DonutPieChart from '../charts/DonutPieChart';

const Pvls = () => {
  return (
    <div className="w-[385px] h-[230px] bg-white rounded-md shadow-md p-4 flex flex-col justify-start items-start space-y-2">
      <p className="text-xs text-gray-600">3rd 95 Primary Indicator</p>
      <h2 className="text-lg font-semibold text-gray-800">PVLS</h2>

      <p className="text-xs font-semibold text-gray-800">MONTHLY PVLS TREND</p>

      <div className="flex items-end gap-8">
        <img src={BulletChart} alt="Bulleted Chart" className="w-[160px] h-[60px]" />
        <DonutPieChart label="Percent PVLS" percentage={95}/>
      </div>

      <div className="flex justify-start items-center gap-3">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-[#29AFFF] mr-1"></div>
          <span className="text-xs text-gray-800">Target</span>
        </div>

        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-[#7390E2] mr-1"></div>
          <span className="text-xs text-gray-800">Achievement</span>
        </div>
      </div>
    </div>
  );
};

export default Pvls;
