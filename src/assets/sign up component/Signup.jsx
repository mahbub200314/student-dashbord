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
               <img className='w-[50px]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8AgP8Adf/m7f8AcP+3zv8Aef8AfP/5/P+fwv8Acv/u9v90p/9Ql//V5f+myf/p8/+Uvf9upP8Abf/L4P+vzv8AaP/c6v/D2f+30f+Otv9bnf8ahv9Ajf+Csf8nif89kv9zq/+sxv8iSpGUAAAERklEQVR4nO2d7XaiMBRFS+okIop8Kogo9v0fcnA6nZYBJYHckLjO/tfVLpa7EkhukpO3NwAAAAAAAAAAAAAAAAAAAADATNbRMcyKoix/zaUsy6LIwmO0XsYkKvzTtmrqsyc4mw33vHPdVNuTX0TGVbI4uQrGhRCeNtqLcSbqJM7MqmxrwTVqdJS4qLfmdILLWecXMuAjzpfAjEt4JTX563MNTbjkqQGX1ibN6V38gwmVOwef3GVlysXzVsQ2OTfn4nmc9E7LzkbayxfiTPiIjiqjLq1NRdcd8A27tDZkzSZszMs0VK8b32jr/4QTfTXH3RIyuyOJTMHMu3geKyhcgtMyMiRdzqP55n9HNBT3WbZAi7nDKV6c+WYZmQ1Bn2YdL9Jk2kYT6y9yBLelbrOb/idAUC0lU+mXibQ8zARnm1ULY9L1ENHo72xGs0f+LE15c4v3eVGU/ilp2p83bPyi4kogM8+Eb8St+O9+CcL8IvMv0i/zPqfJCJE8eFuU48Nw/q5fZvqTWXjVw478fvztxWySEdf94zeFhMyKQGZqWUbUz/q9bsmI69O+lVsy7Hk/UUImtUZmtX9+WZe+GZaM9BKdkhkbWTkkM959d0jGG616uSPDTqO9d3dk+HiZyBkZsXt+l61bnJF5WPLK8o+PDz+O41MsMa9gh8yDOnF2arx/yyAkhjN2yJzLoQuVjeIKAitkRD3ULSuVJ9/skBlq/+/qRR47ZKqBT7FXH31bIcMHZKKt+oDVDpmkX1aZMpNorUwxofhmrUw5oSxircyUeRFbZdb+S8m80G0GGchABjJuyIifsCGZlehir0y9+0lz6cvk3T/Z7ayVYXHY4dgvZ0bdvwgLiR7BMjIr9YUhYWqrzGZk+mIAibKZOzIya9ickZFZW+yMjEzdyRkZmXeoKzKBzJvYFZlQZuDpioxUfcMVGamlkq7ISC2VdEWmkXBxRkbGxRWZSKpY64hMaLXMusvAZTq/Li2W4cl9Bvmbsm+Txf43+0TGZalhc3crfdrf/baOD2zzjdwsmh3VmW1vGYBT1RnIQAYykIEMZCADGci8uIwVO5tsllFewqdLhmADnfrWRl0yBFsb1TedapIh2XSqvCBRlwzBdmD1jdqaZCg2aqtvodclQ7CFXj3cQJMMRbiB+vJKTTIUsRPqgSC6bjOKQBDlqBY9MjRRLcFF8YPokZHYtzYF1XgjTTIk8UbKwVNaZKiCp1QjwfTIUKW1KW6x0CFDF9amGKOnRYYufVIt4FCDDGXAoVr05HwZ0uhJtVDQ+TK0oaBKca2zZajjWlWCdOfK0AfpKkQcz5MxEnEsHz49S8ZQ+LR0LPh0GYOx4G+Sge0TZQwHtv/RiZN6JEpfWeYzSv9qOkr/zs9DDgZPOUiTvkx8eHTIgVjwkIPPz/Z1/MTw+RNZvxIRPj5/YtHjJwAAAAAAAAAAAAAAAAAAAAB4JX4DLfZpwzxqfacAAAAASUVORK5CYII=" alt="Google" />


                Sign up with <b>Google</b>
               </button>

               <button onClick={loginWithFB}>
                <img className='w-[50px]' src="data:image/png;base64,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" alt="Facebook" />
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
