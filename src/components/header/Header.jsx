import React, { useState, useEffect, useRef } from "react";
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

    @media (max-width: 768px) {
      padding: 1rem;
    }
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

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  .hamburger {
    display: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    background-color: #333333; 
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .horizontal-nav {
    display: flex;
    gap: 2rem;
    list-style-type: none;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .horizontal-nav li {
    list-style-type: none;
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

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .side-nav {
    position: fixed;
    top: 0;
    right: -300px;
    width: 250px;
    height: 100vh;
    background-color:#333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    transition: right 0.3s ease;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 480px) {
      width: 180px;
    }
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

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .side-nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 480px) {
      gap: 1rem;
    }
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

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;




function Header() {
  const { state, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const sideNavRef = useRef(null);

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

  // useEffect(()=>{
  //   const handleClickOutside = (e) =>{
  //     if (sideNavRef.current && !sideNavRef.current.contains(e.target)){
  //       setMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return ()=>{
  //     document.removeEventListener("click", handleClickOutside);
  //   }

  // })

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


