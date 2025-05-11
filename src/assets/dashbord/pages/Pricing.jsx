import React from 'react'
import './pages.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBox, faEarthEurope, faTrophy} from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
  return (
    <div>
      <h1 className='pl-[6%] py-4 text-2xl text-text-gray font-bold'>Pricing Plan</h1>

      <div className="pricing-plan ">

        <div className='mx-[6%] py-5 mb-10 border-b-1 border-gray-200'>
          <b>Pricing Break down</b>
          <p>Creating a detailed pricing plan for your course requries considering various factors.</p>
        </div>

        <div className="cards flex flex-wrap justify-center gap-5 m-2">

        <div className="card border-1 border-bg-blue-theme rounded-[10px]  py-[3rem] px-[4%]  max-w-[350px] w-full   ">
          <FontAwesomeIcon icon={faBox}  className='text-2xl text-bg-blue-theme '/>
          <b className='block text-2xl my-2 '> Basic Plan</b>
          <p>Perfect plan for students</p>
          <p><span className='text-[3rem] text-bg-blue-theme'>$50</span>/year</p>
          <hr  className='my-7'/>
           <div className='flex flex-col gap-4 '>
           <p><span><FontAwesomeIcon icon={faCheck} className='check' /></span> Intro video the course</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Interactive quizes </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Course curriculam </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Community supports</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Certificate of completion </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check' /></span> Sample lessons</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Acces to course community </p>

           </div>
           <button>Get Started</button>
        </div>{/* card end */}

        <div className="card border-1 border-bg-blue-theme rounded-[10px]  py-[3rem] px-[4%]  max-w-[350px] w-full   ">
          <FontAwesomeIcon icon={faEarthEurope}   className='text-2xl text-bg-blue-theme '/>
          <b className='block text-2xl my-2 '> Standard plan</b>
          <p>For users who want to do more</p>
          <p><span className='text-[3rem] text-bg-blue-theme'>$150</span>/year</p>
          <hr  className='my-7'/>
           <div className='flex flex-col gap-4 '>
           <p><span><FontAwesomeIcon icon={faCheck} className='check' /></span> Intro video the course</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Interactive quizes </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Course curriculam </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Community supports</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Certificate of completion </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check' /></span> Sample lessons</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Acces to course community </p>

           </div>
           <button>Get Started</button>
        </div>{/* card end */}

        <div className="card border-1 border-bg-blue-theme rounded-[10px]  py-[3rem] px-[4%]  max-w-[350px] w-full   ">
          <FontAwesomeIcon icon={faTrophy}  className='text-2xl text-bg-blue-theme '/>
          <b className='block text-2xl my-2 '> Premium Plan</b>
          <p>Your entire friends in one place </p>
          <p><span className='text-[3rem] text-bg-blue-theme'>$300</span>/year</p>
          <hr  className='my-7'/>
           <div className='flex flex-col gap-4 '>
           <p><span><FontAwesomeIcon icon={faCheck} className='check' /></span> Intro video the course</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Interactive quizes </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Course curriculam </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Community supports</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Certificate of completion </p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check' /></span> Sample lessons</p>
          <p><span><FontAwesomeIcon icon={faCheck} className='check'/></span> Acces to course community </p>

           </div>
           <button>Get Started</button>
        </div>{/* card end */}
        </div>

        <div className='pl-[6%] py-3'>
          <b>Terms & policy</b>
          <ul>
            <li>1. Set up multiple pricing levels with different features and functionalities to maximize revenue</li>
            <li>2. Continuously test different price points and discounts to find the sweet spot that resonates with your target audience</li>
            <li>3. Price your course based on the perceived value it provides to students, considering factors</li>
          </ul>

        </div>

      </div> {/* Pricing Plan Section end */}

    </div>
  )
}

export default Pricing
