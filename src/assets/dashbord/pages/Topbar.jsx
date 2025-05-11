import React, { useEffect, useRef, useState } from 'react'
import './pages.css'
import user from '../../../../public/images/dashbord/user-img.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChartSimple, faComments, faEnvelope, faGear} from '@fortawesome/free-solid-svg-icons'



function Topbar({togglebar}) {

  const [userInfo, setUserInfo] = useState(false);
   const useRefs = useRef(null);
  const showHide = () =>{
    setUserInfo((prev) => !prev)
  }

  useEffect(()=>{
      const handleclick = (event)=>{
        if(useRefs.current && !useRefs.current.contains(event.target)){
          setUserInfo(false)
        }
      }

      if(userInfo){
        document.addEventListener('mousedown',handleclick)
      }

      return ()=>{
        document.removeEventListener('mousedown', handleclick)
      }
  }, [userInfo])

  return (
    <div className='flex bg-bg-connet-body-white z-10 items-center py-4 px-[2%] justify-between border-b-2 border-bg-body-white shadow-[-1px_1px_2px] shadow-font-gray w-full '>

      <div className='flex items-center gap-2'>

      <div onClick={togglebar} className='humberger lg:hidden'>
      <i class="fa-solid fa-bars text-2xl  cursor-pointer " ></i>
      </div>

      <div className="search max-sm:hidden flex justify-between items-center bg-bg-body-white rounded-md   px-3 border-[0.1px] border-gray-200  min-w-[300px] w-[100%] ">
        <input className='outline-none  flex w-full h-full py-3' type="text" placeholder='Search...' />
        <i class="fa-solid fa-magnifying-glass text-[1.2rem] cursor-pointer text-font-gray"></i>
      </div>

      </div>
      {/* .................................................... */}
      <div className='flex items-center gap-[1.8vw]  '>
      <i class="fa-solid fa-bell border-1 border-font-gray text-font-gray p-2 rounded-full cursor-pointer"></i>
      <i class="fa-solid fa-globe border-1 border-font-gray text-font-gray p-2 rounded-full cursor-pointer"></i>
       <div className='relative '>
       <img onClick={showHide}  className=' w-[50px] border-1 rounded-full border-font-gray p-1 cursor-pointer' src={user} alt="user-img" />

        {
          userInfo ? ( <div ref={useRefs} className='userInfo absolute -bottom-[400px] right-0 w-[300px] h-[400px] p-4 rounded-[10px] border-2 border-bg-body-white z-10 bg-bg-body-white shadow-[0px_0px_10px_gray]  '>
              <div className='flex items-center gap-4 mb-4 border-b-1 border-text-gray pb-5'>

                <span className='w-[80px] h-[80px] border-2 rounded-full overflow-hidden border-bg-body-white'>
                  <img className='w-[100%] h-[100%]'
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user-img" />
                  </span>
                <span>
                <b className='text-2xl'>Michel John</b>
                <p className='text-text-gray'>michel@gmail.com</p>
                </span>
              </div> 

              <ul className='user-info flex flex-col  text-text-gray text-[1.1rem] px-2 '>
                <li><FontAwesomeIcon icon={faGear} className='icon' /> Account Setting</li>
                <li><FontAwesomeIcon icon={faChartSimple} className='icon'/> Upgrade Plan</li>
                <li><FontAwesomeIcon icon={faChartLine}className='icon'  /> Daily Activity</li>
                <li><FontAwesomeIcon icon={faComments} className='icon' /> Inbox</li>
                <li><FontAwesomeIcon icon={faEnvelope} className='icon' /> Email</li>
              </ul> 
         </div>) : (null)
        }
       </div>
      </div>
    </div>
  )
}

export default Topbar
