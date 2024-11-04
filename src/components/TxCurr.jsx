import BulletChart from '../assets/bullet-chart.png';
import DonutPieChart from '../charts/DonutPieChart';

const TxCurr = () => {
  return (
    <div className="w-full w-[385px] h-[230px] bg-white rounded-md shadow-md p-4 flex flex-col justify-start items-start space-y-2">
      <p className="text-xs text-gray-600">2nd 95 Primary Indicator</p>
      <h2 className="text-lg font-semibold text-gray-800">TxCurr</h2>

      <p className="text-xs font-semibold text-gray-800">MONTHLY PVLS TREND</p>

      <div className="flex flex-col sm:flex-row items-end gap-4">
        <img src={BulletChart} alt="Bulleted Chart" className="w-full sm:max-w-[180px] h-auto" />
        <DonutPieChart label="Percent TX_CURR" percentage={18}/>
      </div>

      <div className="flex flex-col sm:flex-row justify-start items-center gap-3">
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

export default TxCurr;
