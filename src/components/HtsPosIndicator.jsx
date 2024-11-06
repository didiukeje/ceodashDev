import { useEffect, useState } from 'react';
import HtsPos from './HtsPos';
import LeadIndicators from './LeadIndicators';
import axios from 'axios';
import { API_URL } from '../api/constants';

const HtsPosIndicator = () => {
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
    
    getGroupedData("Benue")
  }, [])
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <HtsPos />
        <div className="m-2">
          <p className="font-medium text-gray-600 mb-2">HTS_POS Lead Indicators</p>
          <div className="flex flex-wrap gap-2">
            <LeadIndicators value={dataRes?.total_index?.data?.[0] ?? ""} title="Index Cases" />
            <LeadIndicators value="214" title="PITC Cases" />
            <LeadIndicators value="55" title="Key Pop Cases" />
            <LeadIndicators value="226" title="Community Cases" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtsPosIndicator;
