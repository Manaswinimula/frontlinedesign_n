import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa"; 

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 2% auto;
  padding: 20px;
  background-color:rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PenIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-top: 10px;
  color: #555;
`;

const InfoText = styled.p`
  margin: 5px 0;
  color: #333;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #d4f6ff;
  color: rgb(9, 60, 71);
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: rgb(129, 211, 230);
  }
`;

const DeleteButton = styled(Button)`
  background-color:red;
  color: white;
  &:hover {
    background-color:rgb(212, 42, 23);
    color:white;
  }
`;

const ErrorMessage = styled.div`
  color: red; 
  margin-top: 15px;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 15px;
`;

const FieldError = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
const RemoveImageButton = styled(Button)`
  background-color:red;
  color: white;
  &:hover {
    background-color:rgb(212, 42, 23);
    color:white;
  }
`


const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("useremail");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5224/api/Frontline/GetUsers/GetUserList");
        const userData = response.data.find((user) => user.email === userEmail);
        if (userData) {
          setUser(userData);
          setFormData(userData);
        } else {
          setError("User not found!");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Unable to fetch user details.");
      }
    };

    if (userEmail) {
      fetchUserDetails();
    } else {
      setError("No user logged in.");
      navigate("/login");
    }
  }, [userEmail, navigate]);

  const validateForm = () => {
    const errors = {};

    if (!formData?.name.trim()) {
      errors.name = "Name is required.";
    }
    
    if (!/^\d{10}$/.test(formData?.phone)) {
      errors.phone = "Phone number must be a valid 10-digit number.";
    }
  
    if (!formData?.password) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.password)) {
      errors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      errors.password = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      errors.password = "Password must contain at least one special character.";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await axios.put(
        `http://localhost:5224/api/Frontline/UpdateUser/${user.id}`,
        formData
      );
      if (response.status === 200) {
        setSuccess("Profile updated successfully.");
        setUser(formData);
        setIsEditing(false);
      } else {
        setError("Failed to update profile.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Error updating profile. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5224/api/Frontline/DeleteUser/${user.id}`
      );
      if (response.status === 200) {
        localStorage.removeItem("useremail");
        navigate("/signup");
      } else {
        setError("Failed to delete profile.");
      }
    } catch (err) {
      console.error("Error deleting profile:", err);
      setError("Error deleting profile. Please try again.");
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const profilePicture = reader.result;
        setFormData((prevData) => ({ ...prevData, profilePicture }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = async () => {
    try {
      const updatedData = { ...formData, profilePicture: null };
      const response = await axios.put(
        `http://localhost:5224/api/Frontline/UpdateUser/${user.id}`,
        updatedData
      );
      if (response.status === 200) {
        setFormData(updatedData);
        localStorage.removeItem("profilePicture");
        setSuccess("Profile picture removed successfully.");
      } else {
        setError("Failed to remove profile picture.");
      }
    } catch (err) {
      console.error("Error removing profile picture:", err);
      setError("Error removing profile picture. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    //setPasswordVisible((prevState) => !prevState);
    setPasswordVisible(true); 
    setTimeout(() => {
      setPasswordVisible(false); 
    }, 1000);
  };

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <Heading>My Profile</Heading>
      <ProfileImageWrapper>
        <ProfileImage onClick={handleImageClick}>
          {formData?.profilePicture ? (
            <img src={formData.profilePicture} alt="Profile" />
          ) : (
            <FaUserCircle />
          )}
        </ProfileImage>
        <PenIcon onClick={handleImageClick}>✏️</PenIcon>
      </ProfileImageWrapper>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {formData?.profilePicture && (
        <div>
          <RemoveImageButton onClick={handleRemoveImage}>
            Remove Image
          </RemoveImageButton>
        </div>
      )}
      {isEditing ? (
        <form onSubmit={handleSave}>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={formData?.name || ""}
            onChange={handleChange}
          />
          {validationErrors.name && <FieldError>{validationErrors.name}</FieldError>}
          <Label>Email</Label>
          <Input type="email" name="email" value={formData?.email || ""} disabled />
          <Label>Phone Number</Label>
          <Input
            type="text"
            name="phone"
            value={formData?.phone || ""}
            onChange={handleChange}
          />
          {validationErrors.phone && <FieldError>{validationErrors.phone}</FieldError>}
          <Label>Password</Label>
          <PasswordWrapper>
            <Input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData?.password || ""}
              onChange={handleChange}
            />
            <EyeIcon onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </PasswordWrapper>
          {validationErrors.password && (
            <FieldError>{validationErrors.password}</FieldError>
          )}
          <Button type="submit">Save Changes</Button>
        </form>
      ) : (
        <div>
          <Label>Name</Label>
          <InfoText>{user.name}</InfoText>
          <Label>Email</Label>
          <InfoText>{user.email}</InfoText>
          <Label>Phone Number</Label>
          <InfoText>{user.phone || "Not Provided"}</InfoText>
        </div>
      )}
      <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
      {success && <SuccessMessage>{success}</SuccessMessage>}
      <DeleteButton onClick={handleDelete}>Delete Profile</DeleteButton>
    </ProfileContainer>
  );
};

export default MyProfile;


