import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutPieChart = ({ label, percentage }) => {
  // Determine colors based on the percentage
  let backgroundColor;
  if (percentage >= 70) {
    backgroundColor = ['#28A745', '#ADD8E6']; // Green for >= 70%
  } else if (percentage >= 50) {
    backgroundColor = ['#A6CE39', '#ADD8E6']; // Light green for 50% to 69%
  } else {
    backgroundColor = ['#FF0000', '#ADD8E6']; // Red for < 50%
  }

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage], // Use the passed percentage
        backgroundColor: backgroundColor, // Set the background colors dynamically
        borderWidth: 0, // No border
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Makes it a donut
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip
      legend: { display: false }, // Disable legend
    },
    elements: {
      arc: {
        borderRadius: 5, // Smooth edges
      },
    },
  };

  return (
    <div className="relative w-[80px] h-[80px]">
      <Doughnut data={data} options={options} />

      {/* Percentage in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-xl">{percentage}%</span>
      </div>

      {/* Tag below the chart */}
      <p className="text-center text-sm font-bold text-gray-800 mt-2 -ml-10 w-[150px]">{label}</p>
    </div>
  );
};

export default DonutPieChart;
