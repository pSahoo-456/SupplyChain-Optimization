import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Pages/Layout';
// import { Dashboard } from './VendorPage/Dashboard';
// import { Products } from './VendorPage/Products';
import Signup from './Authentication/Signup';
import { Loader } from 'lucide-react';
import Login from './Authentication/Login';
import { useAuthStore} from './contentStore/authStore.js';
import Home from './Home/Home.jsx';
import Dashboard from './Pages/Dashboard.jsx';
// import { useProductStore } from './contentStore/productStore.js';

function App() {
  const { user, isChekingAuth, authCheck } = useAuthStore();
useEffect(() => {
  authCheck();
  // console.log("authenticated user -->", user);
}, [authCheck]);
if (isChekingAuth) {
  // console.log("Heyyyy !!");
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center bg-black h-full">
        <Loader className="animate-spin text-red-600 size-10" />
      </div>
    </div>
  );
}
  // console.log(user)
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={!user?<Signup/>:<Navigate to={"/"} />} />
        <Route path="/signin" element={!user?<Login />:<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
