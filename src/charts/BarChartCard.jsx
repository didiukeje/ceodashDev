import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart data
const data = {
  labels: ['Current\nAchievement', 'Current\nExpectation', 'FY25'],
  datasets: [
    {
      label: 'Performance',
      data: [9160, 10783, 11644],
      backgroundColor: '#29AFFF',
      borderColor: '#29AFFF',
      borderWidth: 1,
      borderRadius: 2,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        display: true,
        font: { size: 10 }, 
        padding: 5, 
        callback: function (value, index) {
          // Return the labels as multiline text
          const label = this.getLabelForValue(value);
          return label.split('\n'); // Line break for the labels
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        lineWidth: 1,
        color: (context) =>
          context.tick.value === 0 || context.tick.value === 12000 ? '#E0E0E0' : 'transparent',
      },
      ticks: { display: false },
    },
  },
  animation: {
    onComplete: function (chart) {
      if (!chart.ctx) return; // Ensure the chart context exists
      const ctx = chart.ctx;
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#000';

      chart.data.datasets[0].data.forEach((value, index) => {
        const meta = chart.getDatasetMeta(0);
        const bar = meta.data[index];
        if (bar) {
          ctx.fillText(value, bar.x, bar.y - 5); // Position number on top of each bar
        }
      });
    },
  },
};

const BarChartCard = () => (
  <div className="w-[180px] h-[200px] flex flex-col items-start whitespace-pre-wrap"> 
    <Bar data={data} options={options} />
  </div>
);

export default BarChartCard;
