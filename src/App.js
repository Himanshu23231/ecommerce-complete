// import { useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { useEffect, useState } from 'react';
import Confirmbooking from './Pages/Confirmbooking'
import Signup from './Pages/Singup';

function App() {

  const [update, setupdate] = useState(false);
  const [uploade, setuploade] = useState(true);
  const [Logins, setLogins] = useState(false);

  // console.log(Logins)
  // let userDtail = JSON.parse(localStorage.getItem('userDtail'))|| ""
  useEffect(() => {
    let userDetail = JSON.parse(localStorage.getItem('userDtail')) || ""
    if (userDetail) {
      setLogins(true)
    }

  }, [Logins])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar Logins={Logins} setLogins={setLogins} />
        <Routes>
          {!Logins && <Route path='/' element={<Navigate to={'/Login'} />} />}
          {Logins && <Route path='/' element={<Home setupdate={setupdate} update={update} />} />}
          <Route path='/' element={<Home setupdate={setupdate} update={update} />} />
          <Route path='/CartPage' element={<Cart setuploade={setuploade} uploade={uploade} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Confirmbooking' element={<Confirmbooking />} />
          {Logins && <Route path='/Login' element={<Navigate to={'/'} />} />}
          {!Logins && <Route path='/Login' element={<Login Logins={Logins} setLogins={setLogins} to={'/'} />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
