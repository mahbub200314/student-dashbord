import React from 'react'
import './pages.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import AreaCharts from '../charts/AreaCharts'
import TimeCharts from '../charts/TimeCharts'
import ColumnChart from '../charts/ColumnChart'
import PieChart from '../charts/PieChart'
import { faCalendarMinus, faChartLine, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import GeographicChart from '../charts/GeoGrpahicChart'
const Analytics = () => {
  return (
    <div className='p-[2%]'>

      <h1 className='text-2xl font-bold text-text-gray pb-5'>Analytics</h1>
     
    <main className='grid lg:grid-cols-3 gap-[2%]'>
    <div className="slides1 grid gap-5 lg:col-span-2">


      <div className='flex flex-wrap gap-10 justify-center  my-5'>

          <div className='bg-bg-body-white p-5 max-md:w-full rounded-lg'>

            <span className='flex gap-5'><FontAwesomeIcon icon={faCalendarMinus} className='text-[2rem] text-white p-4  px-4.5 rounded-full bg-bg-blue-theme' /><p className='text-[1.1rem] flex items-center font-bold'>Time Spend</p></span>

            <div className='flex  items-center justify-between'>
              <div><b className='font-bold text-[1.5rem]'>49:9:10</b> <p className='text-red-500'>2:25:08</p></div>
              
              <div className='w-[100px] h-[100px] '>
                <TimeCharts></TimeCharts>
              </div>

            </div>
          </div>


          <div className='  bg-bg-body-white p-5 max-md:w-full rounded-lg'>

            <span className='flex gap-5'><FontAwesomeIcon icon={faChartLine} className='text-[2rem] text-white p-4  px-4.5 rounded-full bg-orange-400' /><p className='text-[1.1rem] flex items-center font-bold'>Avg. Activity</p></span>

            <div className='flex  items-center justify-between'>
              <div><b className='font-bold text-[1.5rem]'>75%</b> <p className='text-red-500'>8%</p></div>
              
              <div className='w-[100px] h-[100px] '>
                <TimeCharts></TimeCharts>
              </div>

            </div>
          </div>

          <div className='  bg-bg-body-white p-5 max-md:w-full  rounded-lg'>

            <span className='flex gap-5'><FontAwesomeIcon icon={faMoneyCheckDollar} className='text-[2rem] text-white p-4  px-4.5 rounded-full bg-red-400' /><p className='text-[1.1rem] flex items-center font-bold'>Money Spend</p></span>

            <div className='flex  items-center justify-between'>
              <div><b className='font-bold text-[1.5rem]'>$543</b> <p className='text-red-500'>88$</p></div>
              
              <div className='w-[100px] h-[100px] '>
                <TimeCharts></TimeCharts>
              </div>

            </div>
          </div>


      </div>



      <div> 
        <AreaCharts />
      </div>  



      <div >
        <ColumnChart />
      </div>

    </div> {/* slide1 end */}



     {/* ......................................................................*/}




    <div className="slides2 lg:col-span-1 g">
      <div>
        <PieChart />
      </div>

      <div className='mt-10'>
        <GeographicChart />
      </div>

    </div>{/* slide2 end */}
    </main>



    </div>
  )
}

export default Analytics
