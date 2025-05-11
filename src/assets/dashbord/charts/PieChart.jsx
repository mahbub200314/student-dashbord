
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip, Legend,  } from 'recharts';
import '../pages/pages.css'
const PieCharts = () => {

    const data =[
        {name:'Mentoring', value : 62},
        {name:'Oraganization', value:8},
        {name:'Planning' , value:30}
    ]

    const colors =['#72adff','#50ccab' ,"#42a288"];


  return (
    <div className=''>
    <div className='bg-bg-body-white mx-auto p-4 rounded-[15px] shadow-md '>
        <b className='flex justify-center py-2 text-2xl text-font-gray'>Most Activity</b>
    <ResponsiveContainer width='100%' height={300}>
         <PieChart>
         <Pie
         data={data}
         cx='50%'
         cy='50%'
         label
    
         innerRadius={40}
         dataKey='value'
          fill="#8884d8"
         >
           {data.map((entry, index)=>(
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
           ))}
       
         </Pie>
         
         
         <Legend/>
         <Tooltip/>
         </PieChart>
        </ResponsiveContainer>
    </div>
      
    </div>
  )
}

export default PieCharts
