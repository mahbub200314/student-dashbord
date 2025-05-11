import './login.css'
import {FacebookAuthProvider, GoogleAuthProvider,signInWithPopup,getAuth,signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../fire base/firebaseinfo'
import { Navigate, useNavigate,Link } from 'react-router';

function Login() {
 const auth = getAuth(app)  
const provider = new GoogleAuthProvider();  
    const navigate = useNavigate();  

        const loginWithGoogle =()=>{
          signInWithPopup(auth,provider)
          
          .then(result =>{
            
            console.log(result.user);
            navigate('/dashbord/dashbordIndex', {state: {name: result.user.displayName, email: result.user.email}})
          })
          .catch((error=>{
            console.log(error)
          }))
        }

          // for facebook login........................................... 
        const FB_Provider = new FacebookAuthProvider();  

        const loginWithFb =()=>{
              signInWithPopup(auth,FB_Provider)
              .then((result)=>{
                const user = result.user;
                console.log(user)
                navigate('/dashbord/dashbordIndex', { state: { name: user.displayName, email: user.email } });
              })
              .catch((error)=>{
                console.log(error)
              })
        }


        // for email and password login...........................................

        const loginForm = (e) =>{
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const password =e.target.password.value;

          signInWithEmailAndPassword(auth,email, password)
          .then(result=>{
            const user = result.user;
           console.log(user)
           navigate('/dashbord/dashbordIndex', {state: {name, email}})
          })
          .catch(error=>{
            console.log(error)
            alert(error + 'enter correct email and password')
          })
        
        }

  return (
    <div className="login">
      <div className="grid grid-cols-1 md:grid-cols-2 md:rounded-4xl md:m-15 overflow-hidden">
        <div className="slide flex flex-col gap-1.5 py-[2rem] ">
          <h1 className="text-extra-big font-extrabold">Login</h1>
          <p>Dear student login your ID</p>

            {/* form .................. */}
          <form onSubmit={loginForm} className="input flex flex-col gap-3 my-6 ">
            <input type="text"    name="name"       placeholder="Username" required minLength={6}/>
            <input type="email"    name="email"     placeholder="Email"    required minLength={6} />
            <input type="password" name="password"  placeholder="Password" required minLength={4} />

             <input type="submit" value="Login Now" className=" button " /> 
         
          </form>
             

          <div className="other-login-option flex flex-col gap-1 text-center">
            <p>
              <b>Login </b> with others
            </p> 
            <div className="option" onClick={loginWithGoogle}>
                <img src="./images/loginpageimg/google1.png" alt="Google" />
              Login with  <b> google</b>
            </div>

            <div className="option" onClick={loginWithFb}>
                <img src="./images/loginpageimg/facebook1.png" alt="Facebook" />
              Login with<b> Facebook</b>
            </div>
            
          </div>
          <p>If you have no account? <u className='text-blue-600'><b><Link to='/'>Create Account</Link></b></u></p>
        </div>



  {/*       slide 2 start here--------------------- */}
 

        <div className="slide slide2 flex items-center justify-center">
          <div className=" relative min-w-70 h-[70%] bg-[#8574f2] font-extrabold text-[1.7rem] text-white rounded-[2rem] shadow-[0_0px_030px_rgba(0,0,0,0.25)]   pl-2 pr-3 py-3 mx-20 ">
            <p>Very good <br></br> works are<br></br> waiting for<br></br> you Login<br></br> Now!!!</p>
            <img src="/public/images/login page img/women with tab 1.png" alt=""  className=" w-[220px] h-[380px] absolute bottom-0 right-[-2rem]"/>
            <img src="/public/images/login page img/thunderbolt 1.svg" alt="" className="absolute bottom-13 left-[-30px] bg-white p-3 rounded-[2.9rem]" />
          </div>
        </div>{/* slide 2 end here----*/}
      </div>
      {/* grid end */}
    </div>
  );
}

export default Login;
