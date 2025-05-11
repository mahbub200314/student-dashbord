import { useState } from 'react';
import './signup.css'

import { getAuth, createUserWithEmailAndPassword, updateProfile ,FacebookAuthProvider, GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { Link, useNavigate } from 'react-router';

const Signup = () => {
const [information, setInformation]= useState()
const navigate = useNavigate();  
const formHandle = e =>{
  e.preventDefault();
   const name = e.target.name.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
   const phone = e.target.phone.value;
   const auth = getAuth();
   
   //create account with email and password.....................................

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
   
  updateProfile(user,{
  displayName : name ,
  phoneNumber : phone
 } )
 .then(()=>{
  setInformation(user)
  console.log(user)
  alert("Account created succesfully")
  navigate('/login');
 
 }).catch(ProfilerError =>{
  console.error("profile error", ProfilerError)
 })

})
.catch((error) => {
console.log(error)
alert(error)
 
});

   
}


// create account with google..................................................

const loginWithGoogle =()=>{
  const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithPopup(auth , provider)
.then((result)=>{
  const user = result.user;
  console.log(user)
  navigate('/dashbord/dashbordIndex', {state:{name :user.displayName , email:user.email}})
})
.catch((error)=>{
  console.log(error)
})
}



const loginWithFB =()=>{
  const FB_Provider = new FacebookAuthProvider();
const auth = getAuth();
signInWithPopup(auth , FB_Provider)
.then((result)=>{
  const user = result.user;
  console.log(user)
  navigate('/dashbord/dashbordIndex', { state: { name: user.displayName, email: user.email } });
})
.catch((error)=>{
  console.log(error)
})
}




  return (
    <div className='flex items-center justify-center   min-h-[100vh]'>
        
       <div className="SignUp bg-background flex flex-col pe border-2 p-2 rounded-[10px]">

      
{/* .................. sing up first option here............................ */}
      <div className="SingUp1stOption flex flex-col gap-2.5  text-center  px-[5vw] py-5">
         
       <div className="header">
        <h1 className='font-black text-[1.5rem]'>Create an account </h1>
        <h4>Connect with your friends today</h4>
       </div> 
       

       <form  onSubmit={formHandle} className='flex flex-col  '>
        <input type="text" name="name"        id="name" placeholder='Enter Username' required minLength={6}  />    
        <input type="email"    name="email"   id="email" placeholder='Enter Email'    required minLength={6}   />
        <input type="password" name="password"id="password" placeholder='Enter Password' required minLength={4}  />
        <input type="text"     name='phone'   id='phone'    placeholder='Enter your Phone number' minLength={5}   />
        <input type="submit" value="Sign Up Now" className='button' />
       </form>

      </div>
{/* .................. sing up first option end  here............................ */}
 
             <div className=' flex items-center justify-center text-center'>
              <hr className='w-full'/> <h2 className='w-full '>or with </h2> <hr className='w-full' />
             </div>  
           


            {/*...sign up second option here..............  */}
            <div className="signup2ndOption flex flex-col gap-3.5 py-4 text-center ">
               <button onClick={loginWithGoogle}>
               <img src="/images/loginpageimg/google1.png" alt="Google" />


                Sign up with <b>Google</b>
               </button>

               <button onClick={loginWithFB}>
                <img src="/images/loginpageimg/facebook1.png" alt="Facebook" />
                Sign up with <b>Facebook</b>
               </button>
               <u>Already have an account? <Link to="/login"><span className='text-blue-500 cursor-pointer'>Login</span></Link></u>
            </div>

             {/*...sign up second option end here..............  */}

        </div>      
 
    </div>
      
  )
}

export default Signup
