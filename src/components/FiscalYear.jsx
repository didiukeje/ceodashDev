import IconOrder from "../assets/iconorder.png";

export default function FiscalYear() {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 w-[180px] h-[80px] m-2">
      <div className="flex items-center">
        <img
          src={IconOrder}
          alt="Icon representing fiscal year"
          className="w-12 h-12" 
        />
        <div className="ml-3"> 
        <h1 className="text-lg font-bold leading-none truncate">27</h1>
          <p className="text-xs text-gray-500">DAYS TO COP END</p> 
        </div>
      </div>
    </div>
  );
}
