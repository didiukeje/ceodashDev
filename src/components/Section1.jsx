import GoogleMapComponent from '../maps/map'; 
import FirstSection from './FirstSection';
import ApinHeader from './ApinHeader';

const Section1 = () => {
  return (
    <div className="flex flex-wrap w-full px-4 py-2 space-x-6">
      <div className="flex-shrink-0 w-full md:w-auto md:max-w-[300px] mb-4">
        <ApinHeader />
      </div>

      <div className="flex flex-1 w-full md:w-auto mb-4">
        <FirstSection />
      </div>

      <div className="flex-shrink-0 w-full md:w-[400px] md:ml-4">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default Section1;
