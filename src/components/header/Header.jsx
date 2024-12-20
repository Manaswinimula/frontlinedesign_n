// import React, { useEffect } from "react";  // Import useEffect here
// import styled from 'styled-components';
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../header/Header.css";
// import { useAuth } from "../../Context/AuthContext";
// import Logout from "../../Pages/Logout";

// const StyledHeader = styled.div`
//   // 
// `;

// const StyledNavLink = styled(NavLink)`
//   color: white;
//   text-decoration: none;
//   font-size: 1rem;
//   font-weight: 500;
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &.active {
//     font-weight: bold;
//     text-decoration: none;
//     background-color: #D4F6FF;
//     color:rgb(44, 4, 46);
//   }

//   &:hover {
//     background-color:rgb(158, 229, 249);
//     color: rgb(44, 4, 46);
//     text-decoration: none;
//   }
// `;

// function Header() {
//   const { state, logout } = useAuth();  
//   const navigate = useNavigate();

//   // Importing useEffect to handle side effects
//   // useEffect(() => {
//   //   if (!state.isAuthenticated) {
//   //     navigate('/login');  // Redirect to login if user is not authenticated
//   //   }
//   // }, [state.isAuthenticated, navigate]);  
//   // Dependency array to re-run when authentication status changes


//   const handleLogout = async () => {
//     try {
//       // Dispatch the logout action to clear the user session
//       logout();
//       // Optionally remove user info from the backend
//       await axios.delete('http://localhost:3000/current_user');  // Assuming you're using a backend to manage current_user
//       navigate('/login');  // Redirect to login page after logout
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <StyledHeader>
//       <nav className="nav">
//         <i className="uil uil-bars navOpenBtn"></i>
//         <a href="/" className="logo">
//           Frontline
//         </a>
//           <i className="uil uil-times navCloseBtn"></i>
          
          
//           {/* <li><Link to="#">Services</Link></li> */}
//           <li>
//             <StyledNavLink to="/about">About Us</StyledNavLink>
//           </li>b 
//           <li>
//             <StyledNavLink to="/contactus">Contact Us</StyledNavLink>
//           </li>
//         {!state.isAuthenticated ? (
//           <>
//           <li>
//             <StyledNavLink to="/">Home</StyledNavLink>
//           </li>
//             <li>
//               <StyledNavLink to='/signup'>Register</StyledNavLink>
//             </li>
//             <li>
//               <StyledNavLink to='/login'>Login</StyledNavLink>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <StyledNavLink to='/dashboard'>Dashboard</StyledNavLink>
//             </li>
//             <li>
//               <StyledNavLink to='/myprofile'>Profile</StyledNavLink>
//             </li>
//             <li>
//               <StyledNavLink to='/wishlist'>Wishlist</StyledNavLink>
//             </li>
//             <li>
//               <Logout />
//               <StyledNavLink onClick={handleLogout} to='/logout'>Logout</StyledNavLink>
//             </li>
//           </>
//         )}
        
//       </nav>
//     </StyledHeader>
//   );
// }

// export default Header;
// import React, { useState } from "react";
// import styled from "styled-components";
// import { NavLink, useNavigate } from "react-router-dom";
// import "../header/Header.css";
// import "@iconscout/unicons/css/line.css";
// import { useAuth } from "../../Context/AuthContext";

// const StyledHeader = styled.div`
//   .nav {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 2rem;
//     background-color: #333;
//     color: white;
//   }

//   .logo {
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: white;
//     text-decoration: none;
//   }

//   .nav-links {
//     display: flex;
//     gap: 1rem;
//     list-style: none;
//     transition: all 0.3s ease;

//     @media (max-width: 768px) {
//       display: none;
//       position: absolute;
//       top: 60px;
//       right: 0;
//       background-color: #333;
//       flex-direction: column;
//       align-items: center;
//       width: 100%;
//       box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
//       padding: 1rem 0;
//     }
//   }

//   .nav-links.active {
//     display: flex;
//   }

//   .navOpenBtn,
//   .navCloseBtn {
//     display: none;
//     font-size: 1.8rem;
//     color: white;
//     cursor: pointer;

//     @media (max-width: 768px) {
//       display: block;
//     }
//   }
// `;

// const StyledNavLink = styled(NavLink)`
//   color: white;
//   text-decoration: none;
//   font-size: 1rem;
//   font-weight: 500;
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &.active {
//     font-weight: bold;
//     text-decoration: none;
//     background-color: #d4f6ff;
//     color: rgb(44, 4, 46);
//   }

//   &:hover {
//     background-color: rgb(158, 229, 249);
//     color: rgb(44, 4, 46);
//     text-decoration: none;
//   }
// `;

// function Header() {
//   const { state, logout } = useAuth();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       logout();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <StyledHeader>
//       <nav className="nav">
//         <a href="/" className="logo">
//           Frontline
//         </a>

//         {/* Hamburger Menu Icon */}
//         <i
//           className={`uil ${menuOpen ? "uil-times navCloseBtn" : "uil-bars navOpenBtn"}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         ></i>

//         {/* Navigation Links */}
//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <li>
//             <StyledNavLink to="/about">About Us</StyledNavLink>
//           </li>
//           <li>
//             <StyledNavLink to="/contactus">Contact Us</StyledNavLink>
//           </li>
//           {!state.isAuthenticated ? (
//             <>
//               <li>
//                 <StyledNavLink to="/">Home</StyledNavLink>
//               </li>
//               <li>
//                 <StyledNavLink to="/signup">Register</StyledNavLink>
//               </li>
//               <li>
//                 <StyledNavLink to="/login">Login</StyledNavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
//               </li>
//               <li>
//                 <StyledNavLink to="/myprofile">Profile</StyledNavLink>
//               </li>
//               <li>
//                 <StyledNavLink to="/wishlist">Wishlist</StyledNavLink>
//               </li>
//               <li>
//                 <StyledNavLink onClick={handleLogout} to="/logout">
//                   Logout
//                 </StyledNavLink>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </StyledHeader>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { NavLink, useNavigate } from "react-router-dom";
// import "@iconscout/unicons/css/line.css";

// import { useAuth } from "../../Context/AuthContext";

// const StyledHeader = styled.div`
//   .nav {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 2rem;
//     background-color: #333;
//     color: white;
//     position: relative;
//   }

//   .logo {
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: white;
//     text-decoration: none;
//   }

//   .hamburger {
//     display: none;
//     font-size: 2rem;
//     color: white;
//     cursor: pointer;

//     @media (max-width: 768px) {
//       display: block;
//     }
//   }

//   .side-nav {
//     position: fixed;
//     top: 0;
//     right: -300px;
//     width: 250px;
//     height: 100vh;
//     background-color: #11101d;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 100px;
//     transition: right 0.3s ease;
//     z-index: 100;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   }

//   .side-nav.active {
//     right: 0;
//   }

//   .close-btn {
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     font-size: 2rem;
//     color: white;
//     cursor: pointer;
//   }

//   .nav-links {
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
//   }

//   .nav-links li {
//     text-align: center;
//   }

//   .nav-links a {
//     color: white;
//     text-decoration: none;
//     font-size: 1.2rem;
//     font-weight: 500;
//     transition: color 0.3s ease;

//     &.active {
//       font-weight: bold;
//       color: #0ea5e9;
//     }

//     &:hover {
//       color: #0ea5e9;
//     }
//   }
// `;

// function Header() {
//   const { state, logout } = useAuth();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       logout();
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <StyledHeader>
//       <nav className="nav">
//         <a href="/" className="logo">
//           Frontline
//         </a>

//         {/* Hamburger Menu Icon */}
//         <i
//           className="uil uil-bars hamburger"
//           onClick={() => setMenuOpen(true)}
//         ></i>

//         {/* Side Navigation */}
//         <div className={`side-nav ${menuOpen ? "active" : ""}`}>
//           <i
//             className="uil uil-times close-btn"
//             onClick={() => setMenuOpen(false)}
//           ></i>

//           <ul className="nav-links">
//             <li>
//               <NavLink to="/about" onClick={() => setMenuOpen(false)}>
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contactus" onClick={() => setMenuOpen(false)}>
//                 Contact Us
//               </NavLink>
//             </li>
//             {!state.isAuthenticated ? (
//               <>
//                 <li>
//                   <NavLink to="/" onClick={() => setMenuOpen(false)}>
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
//                     Register
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/login" onClick={() => setMenuOpen(false)}>
//                     Login
//                   </NavLink>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
//                     Dashboard
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/myprofile" onClick={() => setMenuOpen(false)}>
//                     Profile
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>
//                     Wishlist
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/logout"
//                     onClick={() => {
//                       setMenuOpen(false);
//                       handleLogout();
//                     }}
//                   >
//                     Logout
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </StyledHeader>
//   );
// }

// export default Header;



// const StyledHeader = styled.div`
//   .nav {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 2rem;
//     background: linear-gradient(90deg, #4c4c4c, #1a1a1a);
//     color: white;
//     position: relative;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   }

//   .logo {
//     font-size: 1.8rem;
//     font-weight: bold;
//     color: #ffffff;
//     text-decoration: none;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #0ea5e9;
//     }
//   }

//   .hamburger {
//     display: none;
//     font-size: 2rem;
//     color: white;
//     cursor: pointer;

//     @media (max-width: 768px) {
//       display: block;
//     }
//   }

//   .horizontal-nav {
//     display: flex;
//     gap: 2rem;

//     @media (max-width: 768px) {
//       display: none;
//     }
//   }

//   .horizontal-nav a {
//     color: white;
//     text-decoration: none;
//     font-size: 1.1rem;
//     font-weight: 500;
//     padding: 0.5rem 1rem;
//     border-radius: 5px;
//     transition: all 0.3s ease;

//     &.active {
//       font-weight: bold;
//       color: #0ea5e9;
//       background: rgba(14, 165, 233, 0.2);
//     }

//     &:hover {
//       color: #0ea5e9;
//       background: rgba(14, 165, 233, 0.1);
//     }
      
//   }

//   .side-nav {
//     position: fixed;
//     top: 0;
//     right: -300px;
//     width: 250px;
//     height: 100vh;
//     background-color: #11101d;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 100px;
//     transition: right 0.3s ease;
//     z-index: 100;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   }

//   .side-nav.active {
//     right: 0;
//   }

//   .close-btn {
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     font-size: 2rem;
//     color: white;
//     cursor: pointer;
//   }

//   .side-nav-links {
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
//   }

//   .side-nav-links li {
//     text-align: center;
//   }

//   .side-nav-links a {
//     color: white;
//     text-decoration: none;
//     font-size: 1.2rem;
//     font-weight: 500;
//     transition: color 0.3s ease;

//     &.active {
//       font-weight: bold;
//       color: #0ea5e9;
//     }

//     &:hover {
//       color: #0ea5e9;
//     }
//   }
// `;

import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import "@iconscout/unicons/css/line.css";
import { useAuth } from "../../Context/AuthContext";

const StyledHeader = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #333333;
    color: white;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0ea5e9;
    }
  }

  .hamburger {
    display: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .horizontal-nav {
    display: flex;
    gap: 2rem;
    list-style-type: none; /* Remove bullets from the list items */

    @media (max-width: 768px) {
      display: none;
    }
  }

  .horizontal-nav li {
    list-style-type: none; /* Ensure no bullets on each list item */
    margin-top: 5px;
  }

  .horizontal-nav a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &.active {
      font-weight: bold;
      color: #0ea5e9;
      background: rgba(14, 165, 233, 0.2);
    }

    &:hover {
      color: #0ea5e9;
      background: rgba(14, 165, 233, 0.1);
    }
  }

  .side-nav {
    position: fixed;
    top: 0;
    right: -300px;
    width: 250px;
    height: 100vh;
    background-color: #11101d;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    transition: right 0.3s ease;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .side-nav.active {
    right: 0;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }

  .side-nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .side-nav-links li {
    text-align: center;
  }

  
  

  .side-nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &.active {
      font-weight: bold;
      color: #0ea5e9;
    }

    &:hover {
      color: #0ea5e9;
    }
  }
`;



function Header() {
  const { state, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      logout();
      navigate("/home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const renderLinks = () => (
    <>
    {!state.isAuthenticated && (
      <li className="home">
        <NavLink to="/">Home</NavLink>
      </li>
    )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
      {!state.isAuthenticated ? (
        <>
          <li>
            <NavLink to="/signup">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          
          
        </>
      ) : (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/myprofile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
          {/* <li>
            <NavLink to="/bookappointment">Book Appointment</NavLink>
          </li> */}
          <li>
            <NavLink
              to="/logout"
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
            >
              Logout
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <StyledHeader>
      <nav className="nav">
        <a href="/dashboard" className="logo">
          Frontline
        </a>

        {/* Horizontal Navigation for Large Screens */}
        <ul className="horizontal-nav">{renderLinks()}</ul>

        {/* Hamburger Menu Icon for Small Screens */}
        <i
          className="uil uil-bars hamburger"
          onClick={() => setMenuOpen(true)}
        ></i>

        {/* Side Navigation for Small Screens */}
        <div className={`side-nav ${menuOpen ? "active" : ""}`}>
          <i
            className="uil uil-times close-btn"
            onClick={() => setMenuOpen(false)}
          ></i>
          <ul className="side-nav-links">{renderLinks()}</ul>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;


