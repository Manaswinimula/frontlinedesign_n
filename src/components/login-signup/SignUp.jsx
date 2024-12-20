// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled, { keyframes } from "styled-components";
// import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons

// // Animations
// const zoomIn = keyframes`
//   from {
//     opacity: 0;
//     transform: scale(0.8);
//   }
//   to {
//     opacity: 1;
//     transform: scale(1);
//   }
// `;

// const shake = keyframes`
//   10%, 90% {
//     transform: translateX(-1px);
//   }
//   20%, 80% {
//     transform: translateX(2px);
//   }
//   30%, 50%, 70% {
//     transform: translateX(-4px);
//   }
//   40%, 60% {
//     transform: translateX(4px);
//   }
// `;

// // Styled Components
// const RegisterContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f9f9f9;
// `;

// const SignUpContainer = styled.div`
//   background-color: rgb(246, 238, 238);
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 4px 4px 10px 2px rgba(72, 71, 71, 0.3);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   animation: ${zoomIn} 0.7s ease-out; /* Apply zoom-in animation */
// `;

// const Title = styled.h2`
//   color: #333;
//   margin-bottom: 20px;
// `;

// const InputContainer = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 300px;
//   margin-bottom: 15px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;

//   &:focus {
//     outline: none;
//     border-color: rgb(118, 180, 246);
//   }
// `;

// const Icon = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: rgb(134, 6, 76);
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   margin-top: 10px;
//   max-width: 300px;

//   &:hover {
//     background-color: rgb(207, 19, 122);
//   }
// `;

// const ErrorText = styled.p`
//   color: red;
//   font-size: 14px;
//   margin: 5px 0 0;
//   animation: ${(props) => (props.shake ? shake : "none")} 0.5s ease-in-out; /* Apply shake animation */
// `;

// const Para = styled.p`
//   font-size: 20px;
//   margin-top: 20px;
// `;

// const Anchortag = styled.a`
//   color: blue;
// `;

// // Component
// const SignUp = () => {
//   const [user, setUser] = useState({
//     id: parseInt(Math.random() * 10000, 10),
//     name: '',
//     phone: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     // Form validation logic
//     if (!user.name) newErrors.name = "Name is required.";
//     if (!user.phone) newErrors.phone = "Phone number is required.";
//     if (!user.email) newErrors.email = "Email is required.";
//     if (!user.password) newErrors.password = "Password is required.";
//     if (user.password !== user.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = async () => {
//     if (!validateForm()) return;

//     try {
//       // Check if email already exists
//       const existingUsersResponse = await axios.get(`http://localhost:3000/users?email=${user.email}`);
//       console.log("Existing users response:", existingUsersResponse.data); // Log the response to debug

//       if (existingUsersResponse.data.length > 0) {
//         setErrors({ email: "Email already exists. Please use a different email." });
//         return;
//       }

//       // Proceed with registration if email is unique
//       const newUser = {
//         id: user.id,
//         name: user.name,
//         phone: user.phone,
//         email: user.email,
//         password: user.password,
//       };

//       const response = await axios.post("http://localhost:3000/users", newUser);
//       if (response.status === 201) {
//         navigate("/login");
//       } else {
//         console.error("Failed to register user!");
//       }
//     } catch (error) {
//       console.error("Error registering user:", error);
//     }
//   };

//   return (
//     <RegisterContainer>
//       <Title>Register</Title>
//       <SignUpContainer>
//         <InputContainer>
//           <Input
//             type="text"
//             placeholder="Name"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//           />
//           {errors.name && <ErrorText shake>{errors.name}</ErrorText>}
//         </InputContainer>

//         <InputContainer>
//           <Input
//             type="tel"
//             placeholder="Phone Number"
//             value={user.phone}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//           />
//           {errors.phone && <ErrorText shake>{errors.phone}</ErrorText>}
//         </InputContainer>

//         <InputContainer>
//           <Input
//             type="email"
//             placeholder="Email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//           {errors.email && <ErrorText shake>{errors.email}</ErrorText>}
//         </InputContainer>

//         <InputContainer>
//           <Input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//           <Icon onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? <FiEyeOff /> : <FiEye />}
//           </Icon>
//           {errors.password && <ErrorText shake>{errors.password}</ErrorText>}
//         </InputContainer>

//         <InputContainer>
//           <Input
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="Confirm Password"
//             value={user.confirmPassword}
//             onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//           />
//           <Icon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//             {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
//           </Icon>
//           {errors.confirmPassword && <ErrorText shake>{errors.confirmPassword}</ErrorText>}
//         </InputContainer>

//         <Button onClick={handleRegister}>Register</Button>

//         <Para>
//           Already have an account? <Anchortag href="/login">Click here</Anchortag>
//         </Para>
//       </SignUpContainer>
//     </RegisterContainer>
//   );
// };

// export default SignUp;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Animations
const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const shake = keyframes`
  10%, 90% {
    transform: translateX(-1px);
  }
  20%, 80% {
    transform: translateX(2px);
  }
  30%, 50%, 70% {
    transform: translateX(-4px);
  }
  40%, 60% {
    transform: translateX(4px);
  }
`;

// Styled Components
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const SignUpContainer = styled.div`
  background-color: rgb(246, 238, 238);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 2px rgba(72, 71, 71, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${zoomIn} 0.7s ease-out;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: rgb(118, 180, 246);
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(134, 6, 76);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  max-width: 300px;

  &:hover {
    background-color: rgb(207, 19, 122);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0 0;
  animation: ${(props) => (props.shake ? shake : "none")} 0.5s ease-in-out;
`;

const Para = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const Anchortag = styled.a`
  color: blue;
`;

// Component
const SignUp = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing users and calculate next ID
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://frontlineserver.onrender.com/users");
        if (response.data.length > 0) {
          const maxId = Math.max(...response.data.map((u) => u.id));
          setUser((prevUser) => ({ ...prevUser, id: maxId + 1 }));
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!user.name) newErrors.name = "Name is required.";
    if (!user.phone) newErrors.phone = "Phone number is required.";
    if (!user.email) newErrors.email = "Email is required.";
    if (!user.password) newErrors.password = "Password is required.";
    if (user.password !== user.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const existingUsersResponse = await axios.get(
        `https://frontlineserver.onrender.com/users?email=${user.email}`
      );
      if (existingUsersResponse.data.length > 0) {
        setErrors({ email: "Email already exists. Please use a different email." });
        return;
      }

      const newUser = {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
      };

      const response = await axios.post("https://frontlineserver.onrender.com/users", newUser);
      if (response.status === 201) {
        navigate("/login");
      } else {
        console.error("Failed to register user!");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <RegisterContainer>
      <Title>Register</Title>
      <SignUpContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          {errors.name && <ErrorText shake>{errors.name}</ErrorText>}
        </InputContainer>

        <InputContainer>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          {errors.phone && <ErrorText shake>{errors.phone}</ErrorText>}
        </InputContainer>

        <InputContainer>
          <Input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          {errors.email && <ErrorText shake>{errors.email}</ErrorText>}
        </InputContainer>

        <InputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Icon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </Icon>
          {errors.password && <ErrorText shake>{errors.password}</ErrorText>}
        </InputContainer>

        <InputContainer>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          />
          <Icon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </Icon>
          {errors.confirmPassword && <ErrorText shake>{errors.confirmPassword}</ErrorText>}
        </InputContainer>

        <Button onClick={handleRegister}>Register</Button>

        <Para>
          Already have an account? <Anchortag href="/login">Click here</Anchortag>
        </Para>
      </SignUpContainer>
    </RegisterContainer>
  );
};

export default SignUp;
