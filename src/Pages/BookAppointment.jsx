// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import axios from "axios";

// const BookAppointment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     message: "",
//   });
//   const [statusMessage, setStatusMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://your-backend-url.com/appointments", // Replace with your deployed backend URL
//         formData
//       );
//       setStatusMessage(response.data.message);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         date: "",
//         time: "",
//         message: "",
//       });
//     } catch (error) {
//       setStatusMessage(
//         error.response?.data?.message || "Failed to book appointment. Please try again."
//       );
//     }
//   };

//   return (
//     <Container>
//       <Title
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Book Your Appointment
//       </Title>
//       <Form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <FormGroup>
//           <Label htmlFor="name">Full Name</Label>
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your full name"
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="email">Email</Label>
//           <Input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="phone">Phone</Label>
//           <Input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter your phone number"
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="date">Preferred Date</Label>
//           <Input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="time">Preferred Time</Label>
//           <Input
//             type="time"
//             id="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="message">Additional Notes</Label>
//           <TextArea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Share any details about your project..."
//           ></TextArea>
//         </FormGroup>
//         <SubmitButton
//           type="submit"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Book Appointment
//         </SubmitButton>
//       </Form>
//       {statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
//     </Container>
//   );
// };

// // Styled Components
// const Container = styled.div`
//   max-width: 600px;
//   margin: 2rem auto;
//   padding: 2rem;
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled(motion.h2)`
//   text-align: center;
//   color: #2c3e50;
//   font-size: 2rem;
//   margin-bottom: 1.5rem;
// `;

// const Form = styled(motion.form)`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 1rem;
//   margin-bottom: 0.5rem;
//   color: #34495e;
// `;

// const Input = styled.input`
//   padding: 0.8rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   &:focus {
//     outline: none;
//     border-color: #3498db;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 0.8rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   resize: none;
//   height: 100px;
//   &:focus {
//     outline: none;
//     border-color: #3498db;
//   }
// `;

// const SubmitButton = styled(motion.button)`
//   padding: 1rem;
//   background-color: #3498db;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 1.2rem;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const StatusMessage = styled.p`
//   text-align: center;
//   margin-top: 1rem;
//   font-size: 1rem;
//   color: ${(props) => (props.error ? "#e74c3c" : "#27ae60")};
// `;

// export default BookAppointment;


import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h2)`
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #34495e;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  height: 100px;
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: ${(props) => (props.error ? "#e74c3c" : "#27ae60")};
`;

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://your-backend-url.com/appointments", formData);
      setStatusMessage("Appointment booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      setStatusMessage("Failed to book appointment. Please try again.");
    }
  };

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Book Your Appointment
      </Title>
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Preferred Date</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time">Preferred Time</Label>
          <Input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Additional Notes</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share any details about your project..."
          ></TextArea>
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointment
        </SubmitButton>
      </Form>
      {statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
    </Container>
  );
};

export default BookAppointment;
