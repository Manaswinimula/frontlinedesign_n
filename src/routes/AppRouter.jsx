import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import SignUp from "../components/login-signup/SignUp";
import Login from "../components/login-signup/Login";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Dashboard from "../Pages/Dashboard";
import ProtectedRouter from "./ProtectedRouter";
import MyProfile from "../Pages/MyProfile";
import { AuthProvider } from "../Context/AuthContext";
import Home from "../Pages/Home";
import Logout from "../Pages/Logout";
import Kitchen from "../Pages/Kitchen";
import Bedroom from "../Pages/Bedroom";
import LivingRoom from "../Pages/LivingRoom";
import { WishlistProvider } from "../Context/WishListContext";
import WishlistPage from "../Pages/WishlistPage";
function AppRouter() {
   const [userEmail, setUserEmail] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserEmail = localStorage.getItem("useremail");
    setUserEmail(storedUserEmail)
  })

  return (
    <Router>
      <AuthProvider>
        <WishlistProvider>
      <MainLayouts>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/kitchen" element={
            <ProtectedRouter>
              <Kitchen />
            </ProtectedRouter>
          } />
          <Route path="/bedroom" element={
            <ProtectedRouter>
              <Bedroom />
            </ProtectedRouter>
          } />
          <Route path="/livingroom" element={
            <ProtectedRouter>
              <LivingRoom />
            </ProtectedRouter>
          } />
          <Route path="/wishlist" element={
            <ProtectedRouter>
              <WishlistPage />
            </ProtectedRouter>
          } />
          <Route path="/dashboard" element={
            <ProtectedRouter>
              <Dashboard />
            </ProtectedRouter>
          } />
          <Route path="/myprofile" element={
            <ProtectedRouter>
              <MyProfile userEmail={userEmail}/>
            </ProtectedRouter>
          } />
          <Route path="/logout" element={
            <ProtectedRouter>
              <Logout />
            </ProtectedRouter>
          } />
        </Routes>
      </MainLayouts>
      </WishlistProvider>
      </AuthProvider>
    </Router>
  );
}

export default AppRouter;
