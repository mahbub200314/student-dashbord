import React from 'react'

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';
const ColumnChart = () => {
    

const data = [
  { month: 'Jan', Study: 45, Exam: 22 },
  { month: 'Feb', Study: 55, Exam: 20 },
  { month: 'Mar', Study: 40, Exam: 19 },
  { month: 'Apr', Study: 50, Exam: 38 },
  { month: 'May', Study: 35, Exam: 30 },
  { month: 'Jun', Study: 42, Exam: 25 },
  { month: 'Jul', Study: 50, Exam: 28 },
  { month: 'Aug', Study: 44, Exam: 23 },
  { month: 'Sep', Study: 53, Exam: 22 },
  { month: 'Oct', Study: 39, Exam: 20 },
  { month: 'Nov', Study: 48, Exam: 37 },
  { month: 'Dec', Study: 10, Exam: 30 },
];
  return (
    <div className=' mt-[2rem]'>
        <ResponsiveContainer width="100%" height={500}  className=' shadow-md p-2 max-sm:p-0 rounded-2xl border-font-gray bg-bg-body-white'>
      <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis label={{ value: 'Hour', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Study" stackId="b" fill="#14d6b0" barSize={20} />
        <Bar dataKey="Exam" stackId="b" fill="#b2f5ea" radius={[10,10,0,0]}/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default ColumnChart
