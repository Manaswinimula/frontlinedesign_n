
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
// import styled from "styled-components";
// import image1 from "../assets/int1.jpeg";
// import image2 from "../assets/int2.jpeg";
// import image3 from "../assets/int3.jpeg";
// import image4 from "../assets/bed/bed1.jpg";
// import image5 from "../assets/bed2.jpg";
// import image6 from "../assets/bed3.jpg";
// import image7 from "../assets/kit1.jpg";
// import image8 from "../assets/liv1.jpg";
// import image9 from "../assets/liv2.jpg";
// import image10 from "../assets/kit2.jpg";

// const ChatbotContainer = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   z-index: 1000;
// `;

// const ChatbotToggle = styled.div`
//   background-color: #4facfe;
//   color: white;
//   padding: 1rem;
//   border-radius: 25px;
//   cursor: pointer;
//   text-align: center;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #007f7f;
//   }
// `;

// const ChatbotWindow = styled.div`
//   width: 300px;
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `;

// const ChatbotHeader = styled.div`
//   background-color: #4facfe;
//   color: white;
//   padding: 1rem;
//   text-align: center;
//   font-weight: bold;
// `;

// const ChatbotBody = styled.div`
//   padding: 1rem;
//   height: 200px;
//   overflow-y: auto;
//   background-color: #f9f9f9;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const ChatbotMessage = styled.div`
//   background-color: ${({ isUser }) => (isUser ? "#007f7f" : "#e0e0e0")};
//   color: ${({ isUser }) => (isUser ? "white" : "#333")};
//   align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
//   padding: 10px;
//   border-radius: 10px;
//   max-width: 70%;
// `;

// const ChatbotFooter = styled.div`
//   display: flex;
//   padding: 0.5rem;
//   border-top: 1px solid #ddd;
// `;

// const ChatbotInput = styled.input`
//   flex: 1;
//   padding: 0.5rem;
//   border: none;
//   outline: none;
// `;

// const ChatbotSendButton = styled.button`
//   padding: 0.5rem;
//   background-color: #4facfe;
//   color: white;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #007f7f;
//   }
// `;


// function Dashboard() {

//   const [isChatOpen, setIsChatOpen] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [currentMessage, setCurrentMessage] = useState("");
  
//     const toggleChat = () => setIsChatOpen((prev) => !prev);
  
//     const sendMessage = () => {
//       if (currentMessage.trim() === "") return;
  
//       const userMessage = { text: currentMessage, isUser: true };
//       setMessages((prev) => [...prev, userMessage]);
  
//       // Simulated bot response
//       setTimeout(() => {
//         const botResponse = {
//           text: "Thank you for reaching out! How can I assist you?",
//           isUser: false,
//         };
//         setMessages((prev) => [...prev, botResponse]);
//       }, 1000);
  
//       setCurrentMessage("");
//     };
//   const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div>
//       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={image1} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src={image2} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src={image3} className="d-block w-100" alt="..." />
//           </div>
//         </div>
//       </div>
//       <div className="home-card-container">
//         <div className="home-card" onClick={() => handleCardClick("/kitchen")}>
//           <div className="home-card-image">
//             <img src={image7} alt="Kitchen Design" />
//           </div>
//           <div className="home-card-content">
//             <h3>Kitchen Design</h3>
//             <p>A modern kitchen with sleek and stylish finishes.</p>
//           </div>
//         </div>
//         <div className="home-card" onClick={() => handleCardClick("/bedroom")}>
//           <div className="home-card-image">
//             <img src={image4} alt="Bedroom Design" />
//           </div>
//           <div className="home-card-content">
//             <h3>Bedroom Design</h3>
//             <p>A cozy bedroom with a contemporary layout and warm tones.</p>
//           </div>
//         </div>
//         <div className="home-card" onClick={() => handleCardClick("/living-room")}>
//           <div className="home-card-image">
//             <img src={image8} alt="Living Room Design" />
//           </div>
//           <div className="home-card-content">
//             <h3>Living Room Design</h3>
//             <p>An elegant living room with minimalist decor.</p>
//           </div>
//         </div>
//       </div>
//       {/* <ChatbotContainer>
//         {!isChatOpen ? (
//           <ChatbotToggle onClick={toggleChat}>Chat with us!</ChatbotToggle>
//         ) : (
//           <ChatbotWindow>
//             <ChatbotHeader>
//               Chatbot
//               <span
//                 style={{ float: "right", cursor: "pointer" }}
//                 onClick={toggleChat}
//               >
//                 ✖
//               </span>
//             </ChatbotHeader>
//             <ChatbotBody>
//               {messages.map((msg, idx) => (
//                 <ChatbotMessage key={idx} isUser={msg.isUser}>
//                   {msg.text}
//                 </ChatbotMessage>
//               ))}
//             </ChatbotBody>
//             <ChatbotFooter>
//               <ChatbotInput
//                 type="text"
//                 placeholder="Type your message..."
//                 value={currentMessage}
//                 onChange={(e) => setCurrentMessage(e.target.value)}
//               />
//               <ChatbotSendButton onClick={sendMessage}>Send</ChatbotSendButton>
//             </ChatbotFooter>
//           </ChatbotWindow>
//         )}
//       </ChatbotContainer> */}
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image1 from "../assets/int1.jpeg";
import image2 from "../assets/int2.jpeg";
import image3 from "../assets/int3.jpeg";
import image4 from "../assets/bed/bed1.jpg";
import image7 from "../assets/kit1.jpg";
import image8 from "../assets/liv1.jpg";

const CarouselInner = styled.div`
  height: 600px;
`;

const HomeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const HomeCard = styled.div`
  position: relative;
  width: 370px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const HomeCardImage = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s;
  }

  ${HomeCard}:hover & img {
    transform: scale(1.1);
  }
`;

const HomeCardContent = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
`;

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatbotToggle = styled.div`
  background-color: #4facfe;
  color: white;
  padding: 1rem;
  border-radius: 25px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007f7f;
  }
`;

const ChatbotWindow = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ChatbotHeader = styled.div`
  background-color: #4facfe;
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;

const ChatbotBody = styled.div`
  padding: 1rem;
  height: 200px;
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChatbotMessage = styled.div`
  background-color: ${({ isUser }) => (isUser ? "#007f7f" : "#e0e0e0")};
  color: ${({ isUser }) => (isUser ? "white" : "#333")};
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
`;

const ChatbotFooter = styled.div`
  display: flex;
  padding: 0.5rem;
  border-top: 1px solid #ddd;
`;

const ChatbotInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  outline: none;
`;

const ChatbotSendButton = styled.button`
  padding: 0.5rem;
  background-color: #4facfe;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #007f7f;
  }
`;

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  const sendMessage = () => {
    if (currentMessage.trim() === "") return;

    const userMessage = { text: currentMessage, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Simulated bot response
    setTimeout(() => {
      const botResponse = {
        text: "Thank you for reaching out! How can I assist you?",
        isUser: false,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setCurrentMessage("");
  };

  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <CarouselInner className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          </div>
        </CarouselInner>
      </div>
      <HomeCardContainer>
        <HomeCard onClick={() => handleCardClick("/kitchen")}>  
          <HomeCardImage>
            <img src={image7} alt="Kitchen Design" />
          </HomeCardImage>
          <HomeCardContent>
            <h3>Kitchen Design</h3>
            <p>A modern kitchen with sleek and stylish finishes.</p>
          </HomeCardContent>
        </HomeCard>
        <HomeCard onClick={() => handleCardClick("/bedroom")}>  
          <HomeCardImage>
            <img src={image4} alt="Bedroom Design" />
          </HomeCardImage>
          <HomeCardContent>
            <h3>Bedroom Design</h3>
            <p>A cozy bedroom with a contemporary layout and warm tones.</p>
          </HomeCardContent>
        </HomeCard>
        <HomeCard onClick={() => handleCardClick("/living-room")}>  
          <HomeCardImage>
            <img src={image8} alt="Living Room Design" />
          </HomeCardImage>
          <HomeCardContent>
            <h3>Living Room Design</h3>
            <p>An elegant living room with minimalist decor.</p>
          </HomeCardContent>
        </HomeCard>
      </HomeCardContainer>
      {/* <ChatbotContainer>
        {!isChatOpen ? (
          <ChatbotToggle onClick={toggleChat}>Chat with us!</ChatbotToggle>
        ) : (
          <ChatbotWindow>
            <ChatbotHeader>
              Chatbot
              <span
                style={{ float: "right", cursor: "pointer" }}
                onClick={toggleChat}
              >
                ✖
              </span>
            </ChatbotHeader>
            <ChatbotBody>
              {messages.map((msg, idx) => (
                <ChatbotMessage key={idx} isUser={msg.isUser}>
                  {msg.text}
                </ChatbotMessage>
              ))}
            </ChatbotBody>
            <ChatbotFooter>
              <ChatbotInput
                type="text"
                placeholder="Type your message..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
              />
              <ChatbotSendButton onClick={sendMessage}>Send</ChatbotSendButton>
            </ChatbotFooter>
          </ChatbotWindow>
        )}
      </ChatbotContainer> */}
    </div>
  );
}

export default Dashboard;
