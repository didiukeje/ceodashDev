// TestingTAT.jsx

const TestingTAT = ({ value, title }) => {
  return (
    <div className="w-[70px] h-[60px] flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
      <p className="text-xs font-semibold text-gray-600">DAYS</p>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  );
};

export default TestingTAT;
