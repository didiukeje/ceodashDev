import PropTypes from 'prop-types';

export function TopIndicator({
  value,
  title,
  difference,
  gapText = "", 
  icon,
  titleClass = "text-sm font-medium text-gray-400", 
  valueClass = "text-xs text-gray-500 font-bold",  
  differenceClass = "text-[10px] text-red-500",   
  gapTextClass = "text-gray-400 text-[10px]",  
  height = "h-[100px]",  
  iconSize = "h-12 w-12"  
}) {
  return (
    <div className={`bg-white rounded-lg ${height} w-[330px] shadow-md p-2 flex items-center`}>
      {/* Icon Section */}
      <div className={`relative ${iconSize} bg-cover bg-center rounded-full mr-4`}>
        <img src={icon} alt={title} className="absolute inset-0 m-auto" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center text-left">
        <h2 className={valueClass}>{value}</h2>
        <p className={titleClass}>{title}</p>
        <p className={differenceClass}>
          {difference.toLocaleString()} <br />
          <span className={gapTextClass}>{gapText}</span>
        </p>
      </div>
    </div>
  );
}

TopIndicator.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  difference: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gapText: PropTypes.string, 
  icon: PropTypes.string.isRequired,
  
  titleClass: PropTypes.string,      
  valueClass: PropTypes.string,      
  differenceClass: PropTypes.string, 
  gapTextClass: PropTypes.string,  
  height: PropTypes.string, 
  iconSize: PropTypes.string, 
};

TopIndicator.defaultProps = {
  gapText: "",
  height: "h-[100px]",
  iconSize: "h-10 w-10",  
};

export default TopIndicator;
