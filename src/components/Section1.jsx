import GoogleMapComponent from '../maps/map'; 
import FirstSection from './FirstSection';
import ApinHeader from './ApinHeader';
import { TopIndicator } from './TopIndicator';
import IconOrder from "../assets/iconorder.png";

const Section1 = () => {
  return (
    <div className="flex flex-wrap w-full px-4 py-2 space-y-4 md:space-y-0 "> 
      {/* Left Column */}
     <div className="flex flex-col w-full md:w-[300px] mb-4 space-y-6">
        <ApinHeader />  
        <TopIndicator 
        value="27" 
        title="DAYS TO COP END" 
        icon={IconOrder}
        valueClass="text-4xl font-bold text-gray-900"
        titleClass="text-m text-gray-700"
        difference="" 
        height="h-[22vh]" 
        iconSize="h-16 w-16"  
       />      
     </div>
      {/* Right Column */}
      <div className="flex flex-1 w-full md:w-auto ml-20">  
        <div className="flex-1 mb-4">  
          <FirstSection />
        </div>
        <div className="flex-shrink-0 w-full max-w-[55vw] h-[48vh] overflow-hidden">
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Section1;
