import ApinLogo from "../assets/apin-logo.png"; 
import IconOrderBg from "../assets/iconorderbg.png"; 

function ApinHeader() {
  return (
    <div 
      className="bg-white rounded-[3px] h-[22.5vh] w-[330px] shadow-md p-4 flex items-center space-x-4"
    >
      <div 
        className="relative h-20 w-20 bg-cover bg-center rounded-full"
        style={{ backgroundImage: `url(${IconOrderBg})` }}
      >
        <img 
          src={ApinLogo} 
          alt="APIN Logo" 
          className="absolute inset-0 h-16 w-16 m-auto" 
        />
      </div>

      <div className="flex flex-col border-l-2 p-2 justify-between text-left">  {/* Add text-left here */}
        <h2 className="text-2xl pb-4 font-semibold">APIN Situation Room</h2>  {/* Increased font size and left-aligned */}
        <p className="text-xl font-medium text-gray-500">Benue</p>  {/* Increased font size and left-aligned */}
      </div>
    </div>
  );
}

export default ApinHeader;
