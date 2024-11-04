import PropTypes from 'prop-types';

export function TopIndicator({
  value,
  title,
  difference,
  gapText,
  icon,
  titleClass = "text-sm font-medium text-gray-700", 
  valueClass = "text-xs text-gray-500 font-bold",  
  differenceClass = "text-[10px] text-red-500",   
  gapTextClass = "text-gray-400 text-[10px]",      
}) {
  return (
    <div className="bg-white rounded-lg h-[85px] w-[230px] shadow-md p-2 flex items-center">
      <div className="relative h-10 w-10 bg-cover bg-center rounded-full mr-2">
        <img src={icon} alt={title} className="absolute inset-0 h-8 w-8 m-auto" />
      </div>

      <div className="flex flex-col justify-center">
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
  gapText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,


  titleClass: PropTypes.string,      
  valueClass: PropTypes.string,      
  differenceClass: PropTypes.string, 
  gapTextClass: PropTypes.string,    
};

export default TopIndicator;
