import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { value: 10 },
  { value: 30 },
  { value: 33 },
  { value: 44 },
  { value: 55 },
  { value: 60 },
];

export default function TimeCharts() {
  return (
    <div className="flex justify-center items-center bg-blue-50 ">
      <div className="h-24 w-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Tooltip
              contentStyle={{ backgroundColor: "white", border: "none" }}
              formatter={(value) => [`${value}`, ""]}
            />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              fill="url(#blueGradient)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
