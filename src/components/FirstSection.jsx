import { TopIndicator } from './TopIndicator';
import Group from '../assets/Group.png';
import TablerRibbonHealth from '../assets/tableribbonhealth.png';
import Microscope from '../assets/uitmicroscope.png';
import IconOrder from "../assets/iconorder.png";



function FirstSection() {
  return (
    <div className="grid grid-cols-2 gap-y-1 w-full">
      <TopIndicator 
        value="27" 
        title="DAYS TO COP END" 
        icon={IconOrder}
        valueClass="text-2xl font-bold text-gray-900"
        titleClass="text-sm text-gray-700"
        difference="" 
      />
      <TopIndicator 
        value="0" 
        title="TX_CURR" 
        difference={(-249716).toLocaleString()}
        gapText="TREATMENT GAP" 
        icon={Group}
        valueClass="text-2xl font-bold text-gray-900"
        titleClass="text-sm text-gray-700"
      />
      <TopIndicator 
        value={(1009).toLocaleString()}
        title="TOTAL HTS_POS" 
        difference={(-10635).toLocaleString()}
        gapText="CASE FINDING GAP" 
        icon={TablerRibbonHealth}
        valueClass="text-2xl font-bold text-gray-900"
        titleClass="text-sm text-gray-700"
      />
      <TopIndicator 
        value={(677152).toLocaleString()}
        title="TOTAL HTS_TST" 
        difference={(-186350).toLocaleString()}
        gapText="TESTING GAP" 
        icon={Microscope}
        valueClass="text-2xl font-bold text-gray-900"
        titleClass="text-sm text-gray-700"
      />
    </div>
  );
}


export default FirstSection;
