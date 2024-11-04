import ApinLogo from "../assets/apin-logo.png"; 
import IconOrderBg from "../assets/iconorderbg.png"; 
function ApinHeader() {
  return (
    <div 
      className="bg-white rounded-[3px] h-[95px] w-[309px] shadow-md p-4 flex items-center space-x-4"
    >
      <div 
        className="relative h-14 w-14 bg-cover bg-center rounded-full"
        style={{ backgroundImage: `url(${IconOrderBg})` }}
      >
        <img 
          src={ApinLogo} 
          alt="APIN Logo" 
          className="absolute inset-0 h-10 w-10 m-auto" 
        />
      </div>

      <div className="flex flex-col justify-between">
        <h2 className="text-base">APIN Situation Room</h2>
        <div className="flex items-center space-x-2">
          <select className="text-sm px-2 py-1">
            <option value="benue">Benue</option>
            <option value="lagos">Osun</option>
            <option value="abuja">Plateau</option>
            <option value="kano">Ogun</option>
            <option value="kano">Oyo</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ApinHeader;
