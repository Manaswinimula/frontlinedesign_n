import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import SignUp from "../login-signup/SignUp";
import Login from "../login-signup/Login";
import Dashboard from "../layouts/Dashboard";
import About from "../../Pages/About";
import ContactUs from "../../Pages/ContactUs";

function AppRouter() {
  return (
    <Router>
      <MainLayouts>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayouts>
    </Router>
  );
}

export default AppRouter;
