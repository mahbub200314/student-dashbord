import React from "react";
import '../pages/pages.css';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", study: 5, test: 8 },
  { month: "Feb", study: 13, test: 21 },
  { month: "Mar", study: 10, test: 17 },
  { month: "Apr", study: 19, test: 38 },
  { month: "May", study: 11, test: 18 },
  { month: "Jun", study: 32, test: 47 },
  { month: "Jul", study: 14, test: 23 },
  { month: "Aug", study: 22, test: 35 },
  { month: "Sep", study: 9, test: 16 },
  { month: "Oct", study: 15, test: 27 },
  { month: "Nov", study: 11, test: 20 },
  { month: "Dec", study: 13, test: 25 },
];

const AreaCharts = () => {
  return (
    <div className="w-full h-[400px] p-4 bg-bg-body-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Study Statistics</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 10, left: -25, bottom: 50 }}>
          <defs>
            <linearGradient id="colorStudy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorTest" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3" />
          <Tooltip />
          <Area type="monotone" dataKey="study" stroke="#3b82f6" fillOpacity={1} fill="url(#colorStudy)" />
          <Area type="monotone" dataKey="test" stroke="#10b981" fillOpacity={1} fill="url(#colorTest)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;
