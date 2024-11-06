import GoogleMapComponent from '../maps/map'; 
import FirstSection from './FirstSection';
import ApinHeader from './ApinHeader';
import { TopIndicator } from './TopIndicator';
import IconOrder from "../assets/iconorder.png";

const Section1 = () => {
  return (
    <div className="flex flex-wrap w-full px-4 py-2 space-y-4 md:space-y-0"> {/* Added vertical spacing for smaller screens */}
      {/* Left Column */}
      <div className="flex flex-col w-full md:w-[300px] mb-4 space-y-8">  {/* Organized as a column */}
        <ApinHeader />  
        <TopIndicator 
          value="27" 
          title="DAYS TO COP END" 
          icon={IconOrder}
          valueClass="text-2xl font-bold text-gray-900"
          titleClass="text-sm text-gray-700"
          difference="" 
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-1 w-full md:w-auto ml-20">  {/* Horizontal layout for FirstSection and Map */}
        <div className="flex-1 mb-4">  
          <FirstSection />
        </div>
        <div className="flex-shrink-0 w-full max-w-[55vw] h-[49vh] overflow-hidden">
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Section1;
