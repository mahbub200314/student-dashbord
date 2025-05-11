import React from 'react'
import './pages.css'

import { Link, useLocation } from 'react-router'

// img import here..................................
import logo from '../../../../public/images/dashbord/logo.png'



const Sidebar = () => {
  const location = useLocation();
  const currentpath = location.pathname;
  return (
    <div className='sidebar relative  bg-bg-body-white w-64 h-full flex flex-col'>

      <div className="  flex place-content-center bg-bg-body-white">
       <img className='w-[170px] h-[60px]' src={logo} alt="Dashbord logo" />
      </div> 

      <ul>
        <li className={currentpath === '/dashbord/dashbordIndex'? 'active':''}><Link to='/dashbord/dashbordIndex'> <i className="fa-solid fa-grip"></i> Dashbord</Link></li>
        <li className={currentpath === '/dashbord/student'? 'active':''}><Link to='/dashbord/student'><i className="fa-solid fa-graduation-cap"></i> Student</Link></li>
        <li className={currentpath === '/dashbord/mentor'? 'active':''}><Link to='/dashbord/mentor'><i className="fa-solid fa-users"></i> Mentor</Link></li>
        <li className={currentpath === '/dashbord/analytics'? 'active':''}><Link to='/dashbord/analytics'><i className="fa-solid fa-chart-simple"></i> Analytics</Link></li>
        <li className={currentpath === '/dashbord/event'? 'active':''}><Link to='/dashbord/event'><i className="fa-solid fa-calendar-week"></i> Event</Link></li>
        <li className={currentpath === '/dashbord/pricing'? 'active':''}><Link to='/dashbord/pricing'><i className="fa-solid fa-coins"></i> Pricing</Link></li>
      </ul>

      <div className='signOut absolute bg-bg-notification py-5 bottom-0 right-0 w-full border-t-1 border-text-gray text-center cursor-pointer'>
         <Link> <i className="fa-solid fa-right-from-bracket"></i> Sign Out</Link>
      </div>

    </div>
  )
}

export default Sidebar
