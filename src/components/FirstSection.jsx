import { useEffect, useState } from 'react';
import { TopIndicator } from './TopIndicator';
import Group from '../assets/Group.png';
import TablerRibbonHealth from '../assets/tableribbonhealth.png';
import Microscope from '../assets/uitmicroscope.png';
import axios from 'axios';
import { API_URL } from '../api/constants';
import { API_URLS } from '../api/apiConfig';


function FirstSection() {
  const [dataRes, setDataRes] = useState(null)
  useEffect(() => {
    const getGroupedData = async (state) => {
      try {
        const response = await axios.post(API_URL, { state });
        setDataRes(response.data);
      } catch(err) {
        console.error("Error fetching grouped data:", err);
      }
    }
    
    getGroupedData("Benue");

    const getTxCurrData = async (state) => {
      try {
        const response = await axios.post(API_URLS, { state });
        setDataRes(response.data);
        console.log("dataRes:", JSON.stringify(response.data, null, 2));

      } catch(err) {
        console.error("Error fetching TxCurr data:", err);
        
      }
    }
    
    getTxCurrData("Benue")
  }, [])
  return (
    <div className="flex flex-col gap-y-6">
      <TopIndicator 
        value={dataRes?.tx_cur?.data?.[0] ?? ""}
        title="TX_CURR" 
        difference={(-249716).toLocaleString()}
        gapText="TREATMENT GAP" 
        icon={Group}
        valueClass="text-2xl font-bold text-gray-900 text-left"
        titleClass="text-sm text-gray-700 text-left"
        iconSize="h-16 w-16"  
      />
      <TopIndicator 
        value={dataRes?.totalHTSPOS?.data?.[0] ?? ""}
        title="TOTAL HTS_POS" 
        difference={(-10635).toLocaleString()}
        gapText="CASE FINDING GAP" 
        icon={TablerRibbonHealth}
        valueClass="text-2xl font-bold text-gray-900 text-left"
        titleClass="text-sm text-gray-700 text-left"
        iconSize="h-16 w-16"  
      />
      <TopIndicator 
        value={(67152).toLocaleString()}
        title="TOTAL HTS_TST" 
        difference={(-186350).toLocaleString()}
        gapText="TESTING GAP" 
        icon={Microscope}
        valueClass="text-2xl font-bold text-gray-900 text-left"
        titleClass="text-sm text-gray-700 text-left"
        iconSize="h-16 w-16"  
      />
    </div>
  );
}


export default FirstSection;
