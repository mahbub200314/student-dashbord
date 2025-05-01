
import './pages.css'
import grettingImg from '../../../../public/images/dashbord/gretting-img.png';
import grettingPattern from '../../../../public/images/dashbord/grettings-pattern.png';

import ColumnChart from '../charts/ColumnChart';
import { useLocation } from 'react-router';
import Calender from './ItemsForPages/Calender';
import PieCharts from '../charts/PieChart';
import DataTable from './ItemsForPages/DataTable';
import { useEffect, useState } from 'react';

const DashbordIndex = () => {
 const location = useLocation();
 const [user, setUser] = useState({
  name: localStorage.getItem('userName') || 'User',
  email: localStorage.getItem('userEmail') || 'Not Provided',
 });

 useEffect(()=>{
    if(location.state){
      const {name, email} = location.state;
      setUser({name, email});

      // save data in local stroage....
      localStorage.setItem('userName' , name || "user name not found");
      localStorage.setItem('userEmail', email || 'Email not fount')
    } 
 },[location.state])
  


  return (
    <div >
     <div className='grid  xl:grid-cols-4 p-4  max-sm:p-0 gap-4 pb-5'>




     <div className='first-div flex flex-col xl:col-span-3  p-3 gap-5'>

       <div className='header flex  justify-between   bg-bg-blue-theme rounded-2xl py-2 px-[2vw] text-font-white'
            style={{ backgroundImage: `url(${grettingPattern})` }}
       >
        <div className='flex  '>
          <span className='flex flex-col max-xs:gap-5 max-xs:py-4 justify-around'>
            <div >
            <h1 className='text-[2rem] font-bold'>Hello, {user.name || 'User'}!</h1>
            <p>{user.email|| ' '}</p>
            <p className='font-thin text-[0.9rem] tracking-[1px]'>Lets learning something today.</p>
            </div>
            <h3 className='font-light text-[1.1rem] '>Set your study plan and growth with community</h3>
          </span>
        </div>

        <div className='max-xs:hidden  '>
          <img src={grettingImg} alt="" />
        </div>

       </div>
       {/* header end here............. */}

       <div className='coloumn-charts '>
         <ColumnChart/>
        
       </div>
       {/* graph end here.............. */}
             <div className="assingnment">
              <DataTable></DataTable>
             </div>

       {/* assignment end here.................. */}
     </div>


     {/* ......................................................................... */}



     <div className='second-div  xl:col-span-1 '>

      <div className="calender">
        <Calender/>
      </div>{/* calender end here................................. */}






         <div className="events grid gap-3 grid-cols-1  p-5">
           
           <div className='event'>

               <div className='right-side'>
               <i class="fa-brands fa-slack"></i>
               <span>
                <b>Element of design test</b>
                <p>10:00 - 11:00 AM</p>
               </span>
               </div>
               <div className='left-side'><i class="fa-solid fa-angle-right"></i></div>
           </div>{/* event end here*/}


            <div className='event'>

               <div className='right-side'>
               <i class="fa-solid fa-wand-magic-sparkles"></i>
               <span>
                <b>Design Principles test</b>
                <p>10:00 - 11:00 AM</p>
               </span>
               </div>
               <div className='left-side'><i class="fa-solid fa-angle-right"></i></div>
           </div>{/* event end here*/}


            <div className='event'>

               <div className='right-side'>
               <i class="fa-solid fa-briefcase"></i>
               <span>
                <b>Preapre job interview</b>
                <p>10:00 - 11:00 AM</p>
               </span>
               </div>
               <div className='left-side'><i class="fa-solid fa-angle-right"></i></div>
           </div>{/* event end here*/}

              <button className='self-center text-center items-center  rounded-[10px] text-[1.1rem]  py-3 text-white font-semibold bg-bg-blue-theme hover:bg-sky-600 cursor-pointer'>All Event</button>

         </div>{/* events end here..............................*/}
     
      


                  <div className="pie-chart ">
              <PieCharts></PieCharts>
                  </div>


     </div>{/* second div end here........... */}





     </div>   {/*main div end here...........  */}
    </div>
  )
}

export default DashbordIndex












