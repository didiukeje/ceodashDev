import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Line,
  LabelList,
} from 'recharts';

// Sample Data
const data = [
  { month: 'O', value1: 70, value2: 60 },
  { month: 'D', value1: 68, value2: 58 },
  { month: 'F', value1: 75, value2: 55 },
  { month: 'A', value1: 80, value2: 50 },
  { month: 'J', value1: 72, value2: 48 },
  { month: 'A', value1: 78, value2: 45 },
];

const BulletedChart = () => {
  return (
    <div className="w-[150px] h-[120px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          {/* X-Axis with labels for months */}
          <XAxis
            dataKey="month"
            axisLine={{ stroke: '#000' }}
            tickLine={{ stroke: '#000' }}
            tick={{ fontSize: 12 }}
          />

          {/* Y-Axis (hidden for simplicity) */}
          <YAxis hide={true} />

          {/* Two colored areas */}
          <Area type="monotone" dataKey="value1" stroke="#29AFFF" fill="#29AFFF" />
          <Area type="monotone" dataKey="value2" stroke="#7390E2" fill="#7390E2" />

          {/* Line with static visible dots */}
          <Line
            type="monotone"
            dataKey="value1"
            stroke="transparent"
            dot={{ stroke: '#29AFFF', strokeWidth: 2, r: 6 }}
          >
            <LabelList dataKey="value1" position="top" className="text-xs" />
          </Line>
          <Line
            type="monotone"
            dataKey="value2"
            stroke="transparent"
            dot={{ stroke: '#7390E2', strokeWidth: 2, r: 6 }}
          >
            <LabelList dataKey="value2" position="bottom" className="text-xs" />
          </Line>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BulletedChart;
