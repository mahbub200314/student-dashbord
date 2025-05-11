// components/UserStatsCard.jsx
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../pages/pages.css';
const data = [
  { name: 'New York', percent: 20, color: '#60a5fa' },       // Blue
  { name: 'San Francisco', percent: 40, color: '#fb923c' },  // Orange
  { name: 'Bangladesh', percent: 50, color: '#22c55e' },     // Green
];

export default function GeographicChart() {
  return (
    <div className="bg-bg-body-white rounded-xl shadow-md p-4 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Users by country</h2>
      
      <div className="w-full h-40 mb-4">
         
         <img 
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1024px-World_map_blank_without_borders.svg.png" 
  alt="World map"
  className="w-full h-full object-contain rounded"
/>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>{item.name}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
