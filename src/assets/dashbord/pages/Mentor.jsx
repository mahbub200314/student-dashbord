import React from 'react'
import './pages.css'
const Mentor = () => {
  const mentor = [
    {
      "id": 1,
      "name": "Tanvir Ahmed",
      "work": "Web Developer",
      "describe": "Tanvir is a passionate web developer with 4 years of experience in MERN stack. He loves to mentor junior developers and help them grow their careers.",
      "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img5.png"
    },
    {
      "id": 2,
      "name": "Sharmin Jahan",
      "work": "UI/UX Designer",
      "describe": "Sharmin specializes in user-centered design. With a strong eye for detail, she mentors aspiring designers to create better user experiences.",
       "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img3.png"
    },
    {
      "id": 3,
      "name": "Rezaul Karim",
      "work": "Frontend Engineer",
      "describe": "Rezaul has 5+ years of experience with React and Tailwind CSS. He enjoys teaching beginners and breaking down complex frontend topics.",
       "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img4.png"
    },
    {
      "id": 4,
      "name": "Mou Rahman",
      "work": "Project Manager",
      "describe": "Mou has led over 20 tech projects successfully. As a mentor, she guides new project managers on team collaboration and agile practices.",
       "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img5.png"
    },
    {
      "id": 5,
      "name": "Samiul Islam",
      "work": "Backend Developer",
      "describe": "Samiul is a Node.js expert who mentors junior devs on building scalable APIs and using Firebase effectively in real-world projects.",
       "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img1.png"
    },
    {
      "id": 6,
      "name": "Nusrat Nahar",
      "work": "Software Engineer",
      "describe": "Nusrat is a full-stack engineer with a love for clean code. She mentors students on writing maintainable JavaScript and solving real problems.",
       "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img2.png"
    },
    {
      "id": 7,
      "name": "Fahim Chowdhury",
      "work": "Web Designer",
      "describe": "Fahim designs responsive and accessible websites. He teaches design principles and how to convert ideas into functional layouts.",
      "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img3.png"
    },
    {
      "id": 8,
      "name": "Arif Hossain",
      "work": "DevOps Engineer",
      "describe": "Arif helps teams deploy code faster with CI/CD pipelines. He enjoys mentoring devs on cloud platforms like AWS and Docker basics.",
       "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img4.png"
    },
    {
      "id": 9,
      "name": "Rumana Kabir",
      "work": "Data Analyst",
      "describe": "Rumana helps mentees understand data storytelling. She shares her knowledge in data visualization, Excel, and basic Python analytics.",
       "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img5.png"
    },
    {
      "id": 10,
      "name": "Asif Mahmud",
      "work": "Tech Lead",
      "describe": "Asif manages a team of 12 engineers. He mentors future leaders on communication, code quality, and leading by example in tech.",
      "img":"https://html.themeholy.com/edmate/assets/images/thumbs/mentor-cover-img6.png"
    }
  ]
  console.log(mentor)
  return (
    <div className='mentor-page bg-bg-body-white w-full min-h-screen flex flex-col justify-center items-center shadow-md'>
      <u className='text-[1.5rem] font-bold pl-20 pt-5 text-text-gray w-full text-left mb-5'>All Mentor</u>
      <div className="card flex flex-wrap gap-5 justify-center items-center">
        {
          mentor.map((mentor)=>(
            <div key={mentor.id} className=" bg-bg-connet-body-white flex flex-col rounded-[10px] overflow-x-hidden gap-5 max-w-[350px] h-[350px] overflow-y-auto">
              <div className='relative w-full '>
              <img src={mentor.img} alt="cover img" className='w-full' />
              <img src={`https://i.pravatar.cc/100?img=${mentor.id}`} alt={mentor.name} className='w-[80px] absolute border-2 border-bg-connet-body-white rounded-full -bottom-8 left-1/2 transform -translate-x-1/2'/>  
              </div>

              <div className='flex flex-col justify-center items-center text-center gap-1 p-1 pt-4 '>
              <b>{mentor.name}</b>
              <p className='text-text-gray'>{mentor.work}</p>
              <p className='font-medium'>{mentor.describe}</p>
              </div>
            </div> 
          ))
        }
      </div>
    </div>
  )
}

export default Mentor
