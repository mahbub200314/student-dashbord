
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';

 import Dashbord from './assets/dashbord/Dashbord';
import Login from './assets/login component/Login';
import Signup from './assets/sign up component/Signup'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashbord/*' element={<Dashbord/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
