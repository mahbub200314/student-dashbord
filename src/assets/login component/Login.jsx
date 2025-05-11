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
                <img className='w-[80px]' src="data:image/png;base64,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" alt="Google" />
              Login with  <b> google</b>
            </div>

            <div className="option" onClick={loginWithFb}>
                <img className='w-[80px]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8AgP8Adf/m7f8AcP+3zv8Aef8AfP/5/P+fwv8Acv/u9v90p/9Ql//V5f+myf/p8/+Uvf9upP8Abf/L4P+vzv8AaP/c6v/D2f+30f+Otv9bnf8ahv9Ajf+Csf8nif89kv9zq/+sxv8iSpGUAAAERklEQVR4nO2d7XaiMBRFS+okIop8Kogo9v0fcnA6nZYBJYHckLjO/tfVLpa7EkhukpO3NwAAAAAAAAAAAAAAAAAAAADATNbRMcyKoix/zaUsy6LIwmO0XsYkKvzTtmrqsyc4mw33vHPdVNuTX0TGVbI4uQrGhRCeNtqLcSbqJM7MqmxrwTVqdJS4qLfmdILLWecXMuAjzpfAjEt4JTX563MNTbjkqQGX1ibN6V38gwmVOwef3GVlysXzVsQ2OTfn4nmc9E7LzkbayxfiTPiIjiqjLq1NRdcd8A27tDZkzSZszMs0VK8b32jr/4QTfTXH3RIyuyOJTMHMu3geKyhcgtMyMiRdzqP55n9HNBT3WbZAi7nDKV6c+WYZmQ1Bn2YdL9Jk2kYT6y9yBLelbrOb/idAUC0lU+mXibQ8zARnm1ULY9L1ENHo72xGs0f+LE15c4v3eVGU/ilp2p83bPyi4kogM8+Eb8St+O9+CcL8IvMv0i/zPqfJCJE8eFuU48Nw/q5fZvqTWXjVw478fvztxWySEdf94zeFhMyKQGZqWUbUz/q9bsmI69O+lVsy7Hk/UUImtUZmtX9+WZe+GZaM9BKdkhkbWTkkM959d0jGG616uSPDTqO9d3dk+HiZyBkZsXt+l61bnJF5WPLK8o+PDz+O41MsMa9gh8yDOnF2arx/yyAkhjN2yJzLoQuVjeIKAitkRD3ULSuVJ9/skBlq/+/qRR47ZKqBT7FXH31bIcMHZKKt+oDVDpmkX1aZMpNorUwxofhmrUw5oSxircyUeRFbZdb+S8m80G0GGchABjJuyIifsCGZlehir0y9+0lz6cvk3T/Z7ayVYXHY4dgvZ0bdvwgLiR7BMjIr9YUhYWqrzGZk+mIAibKZOzIya9ickZFZW+yMjEzdyRkZmXeoKzKBzJvYFZlQZuDpioxUfcMVGamlkq7ISC2VdEWmkXBxRkbGxRWZSKpY64hMaLXMusvAZTq/Li2W4cl9Bvmbsm+Txf43+0TGZalhc3crfdrf/baOD2zzjdwsmh3VmW1vGYBT1RnIQAYykIEMZCADGci8uIwVO5tsllFewqdLhmADnfrWRl0yBFsb1TedapIh2XSqvCBRlwzBdmD1jdqaZCg2aqtvodclQ7CFXj3cQJMMRbiB+vJKTTIUsRPqgSC6bjOKQBDlqBY9MjRRLcFF8YPokZHYtzYF1XgjTTIk8UbKwVNaZKiCp1QjwfTIUKW1KW6x0CFDF9amGKOnRYYufVIt4FCDDGXAoVr05HwZ0uhJtVDQ+TK0oaBKca2zZajjWlWCdOfK0AfpKkQcz5MxEnEsHz49S8ZQ+LR0LPh0GYOx4G+Sge0TZQwHtv/RiZN6JEpfWeYzSv9qOkr/zs9DDgZPOUiTvkx8eHTIgVjwkIPPz/Z1/MTw+RNZvxIRPj5/YtHjJwAAAAAAAAAAAAAAAAAAAAB4JX4DLfZpwzxqfacAAAAASUVORK5CYII=" alt="Facebook" />
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
