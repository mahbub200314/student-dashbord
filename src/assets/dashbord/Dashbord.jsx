import { BrowserRouter, Route, Routes } from "react-router";
import './dashbord.css';
import { useState } from "react";
import Sidebar from "./pages/Sidebar";
import DashbordIndex from "./pages/DashbordIndex";
import Student from "./pages/Student";
import Mentor from "./pages/Mentor";
import Analytics from "./pages/Analytics";
import Event from "./pages/Event";
import Pricing from "./pages/Pricing";
import SignOut from "./pages/SignOut";
import Topbar from "./pages/Topbar";


function Dashbord() {

  // const location = useLocation(); // Retrieve the state passed from Login.jsx
  // const { name, email } = location.state || {};

  const [isOpen , setIsopen]=useState(false);
  const togglebar =()=>{
    setIsopen(!isOpen)
  };
  const closeSidebar = () => {
    setIsopen(false);
   // Close sidebar
  };
  return (

    
    <div>
           {/* <h1>Welcome to the Dashboard</h1>
      {name && <p><strong>Name:</strong> {name}</p>}
      {email && <p><strong>Email:</strong> {email}</p>} */}
      
      
      <div className="flex overflow-x-hidden w-full">

            {/* sider bar */}
            <div className={`fixed top-0 left-0 h-screen bg-body-white shadow-2xl transition-transform duration-300 z-50 ${
  isOpen ? 'translate-x-0' : '-translate-x-full'
} lg:relative lg:translate-x-0 w-64`}>
              <Sidebar></Sidebar>
            
            </div>


            
        {/* Overlay for small screens */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-25 z-40 lg:hidden"
            onClick={closeSidebar} // Close sidebar when overlay is clicked
          ></div>
        )}
          
          {/* side bar contentes navigate here */}
          <div className=" main-content relative flex-1   w-full h-screen overflow-scroll ">
            
            {/* fixed top bar */}
            <div className=" top-bar flex w-[100%]  sticky top-0 right-0 z-10">
             <Topbar togglebar={togglebar}></Topbar>
            </div>
    {/* fixed top bar end here */}

    {/* side bar pages navigate here */}
            <div className="overflow-y-scroll">
            <Routes>
            {/* <Route path="/" element={<DashbordIndex />} /> */}
             <Route path="/dashbordIndex" element={<DashbordIndex />} /> 

            <Route path="student" element={<Student />} />
            <Route path="mentor" element={<Mentor />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="event" element={<Event />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="signOut" element={<SignOut />} />
            </Routes>
            </div>

        </div>
              
    </div>
            
          
          




      </div>  
  )
}

export default Dashbord
