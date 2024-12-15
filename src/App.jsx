import "./App.css";
import AppRouter from "./components/routes/AppRouter";
function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import SignUp from "./components/login-signup/SignUp";
// import Login from "./components/login-signup/Login";
// import Dashboard from "./components//Dashboard";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/signup" />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
