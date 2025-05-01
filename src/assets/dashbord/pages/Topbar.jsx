import React from 'react'
import './pages.css'
import user from '../../../../public/images/dashbord/user-img.png'
function Topbar({togglebar}) {
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
      <img className='w-[50px] border-1 rounded-full border-font-gray p-1 cursor-pointer' src={user} alt="user-img" />
      </div>
    </div>
  )
}

export default Topbar
