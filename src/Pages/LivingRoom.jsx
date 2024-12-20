import React, { useState, useContext } from "react";
import styled from "styled-components";
import { WishlistContext } from "../Context/WishListContext";
import limage1 from "../assets/livingroom/limage1.jpeg";
import limage2 from "../assets/livingroom/limage2.jpeg";
import limage3 from "../assets/livingroom/limage3.jpeg";
import limage4 from "../assets/livingroom/limage4.jpeg";
import bed3 from "../assets/bed/bed3.jpg";
import bed4 from "../assets/bed/bed4.jpg";
import bed5 from "../assets/bed/bed5.jpg";
import bed6 from "../assets/bed/bed6.jpg";
import bed7 from "../assets/bed/bed7.jpg";
import bed8 from "../assets/bed/bed8.jpg";
import bed9 from "../assets/bed/bed9.jpg";
import bed10 from "../assets/bed/bed10.jpg";
import bed11 from "../assets/bed/bed11.jpg";
import bed12 from "../assets/bed/bed12.jpg";
import bed13 from "../assets/bed/bed13.jpg";
import bed14 from "../assets/bed/bed14.jpg";
import bed15 from "../assets/bed/bed15.jpg";
import bed16 from "../assets/bed/bed16.jpg";
import bed17 from "../assets/bed/bed17.jpg";
import bed18 from "../assets/bed/bed18.jpg";
// (other imports remain the same)

// Notification Styles
const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #28a745;
  color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  z-index: 1000;
  animation: fadeInOut 3s ease forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;

const WishlistButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const BedroomContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const BedroomImage = styled.img`
  width: 100%;
  height: 80vh;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const BedroomHeading = styled.h1`
  font-size: 2rem;
  margin: 10px 0;
`;

const BedroomParagraph = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const Card = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1em;
  text-align: center;
  color: #555;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 400px;
  text-align: center;
  position: relative;
`;

const PopupImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const PopupTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const PopupDescription = styled.p`
  color: #555;
  margin-bottom: 15px;
`;

const PopupExtraContent = styled.div`
  font-size: 0.9rem;
  color: #777;
`;

const PopupClose = styled.button`
  position: absolute;
  top: -50px;
  right: -27px;
  background: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #ff1a1a;
  }
`;

// (other styled components remain the same)

function LivingRoom() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState(null); // Notification state
  const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const bedroomIdeas = [
    {
      id: 1,
      title: "Livingroom Idea 1",
      description:
        "The living room is the heart of the home, where memories are made, stories are shared, and love is felt.",
      imageSrc: limage1,
    },
    {
      id: 2,
      title: "Livingroom Idea 2",
      description:
        "A living room should be a reflection of the people who live in it—warm, inviting, and full of life.",
      imageSrc: limage2,
    },
    {
      id: 3,
      title: "Livingroom Idea 3",
      description:
        "Home is not a place; it’s a feeling. And the living room is where that feeling comes to life.",
      imageSrc: limage3,
    },
    {
      id: 4,
      title: "Livingroom Idea 4",
      description:
        "The living room: where everyone gathers to avoid cleaning their own rooms.",
      imageSrc: limage4,
    },
    {
      id: 5,
      title: "Livingroom Idea 5",
      description:
        "A living room without a cozy couch is like tea without sugar—almost there, but not quite right.",
      imageSrc: limage1,
    },
    {
      id: 6,
      title: "Livingroom Idea 6",
      description:
        "Keep your living room simple and serene; it’s the space where clutter shouldn’t dare to intrude.",
      imageSrc: limage2,
    },
    {
      id: 7,
      title: "Livingroom Idea 7",
      description: "In a minimalist living room, every piece tells a story.",
      imageSrc: limage3,
    },
    {
      id: 8,
      title: "Livingroom Idea 8",
      description:
        "A well-decorated living room isn’t about trends; it’s about timeless comfort.",
      imageSrc: limage4,
    },
    {
      id: 9,
      title: "Livingroom Idea 9",
      description:
        "Color your living room with your dreams, and it will become your sanctuary.",
      imageSrc: limage1,
    },
    {
      id: 10,
      title: "Livingroom Idea 10",
      description:
        "The living room is not just a space; it’s a witness to laughter, tears, and everything in between.",
      imageSrc: limage2,
    },
    {
      id: 11,
      title: "Livingroom Idea 11",
      description:
        "In the living room, time slows down, and togetherness takes center stage.",
      imageSrc: limage3,
    },
    {
      id: 12,
      title: "Livingroom Idea 12",
      description:
        "The living room is not just a space; it’s a witness to laughter, tears, and everything in between.",
      imageSrc: limage4,
    },
    {
      id: 13,
      title: "Livingroom Idea 13",
      description:
        "A well-decorated living room isn’t about trends; it’s about timeless comfort.",
      imageSrc: limage1,
    },
    {
      id: 14,
      title: "Livingroom Idea 14",
      description:
        "The living room is not just a space; it’s a witness to laughter, tears, and everything in between.",
      imageSrc: limage2,
    },
    {
      id: 15,
      title: "Livingroom Idea 15",
      description:
        "In the living room, time slows down, and togetherness takes center stage.",
      imageSrc: limage3,
    },
    {
      id: 16,
      title: "Livingroom Idea 16",
      description:
        "A well-decorated living room isn’t about trends; it’s about timeless comfort.",
      imageSrc: limage1,
    },
    {
      id: 17,
      title: "Livingroom Idea 17",
      description:
        "In the living room, time slows down, and togetherness takes center stage.",
      imageSrc: limage2,
    },
    {
      id: 18,
      title: "Livingroom Idea 18",
      description:
        "A well-decorated living room isn’t about trends; it’s about timeless comfort.",
      imageSrc: limage4,
    },
    // Add other ideas here...
  ];

  const openPopup = (card) => {
    setSelectedCard(card);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedCard(null);
    document.body.style.overflow = "auto";
  };

  // Display notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000); // Remove notification after 3 seconds
  };

  // Handle adding to wishlist
  const handleAddToWishlist = () => {
    if (!wishlist.some((item) => item.id === selectedCard.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, selectedCard]); // Update local wishlist
      addToWishlist(selectedCard); // Update global wishlist (if applicable)
      showNotification(`${selectedCard.title} added to wishlist!`); // Show notification
    }
    closePopup();
  };

  const handleRemoveFromWishlist = (cardId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== cardId)
    );
    removeFromWishlist(cardId); // Remove from global wishlist context
    showNotification(`Item removed from wishlist!`);
  };

  return (
    <BedroomContainer>
      {notification && <Notification>{notification}</Notification>}
      <BedroomImage src={limage1} alt="Bedroom" />
      <BedroomHeading>Living Room Design</BedroomHeading>
      <BedroomParagraph>
        Explore cozy and contemporary bedroom designs.
      </BedroomParagraph>

      <CardsContainer>
        {bedroomIdeas.map((item) => (
          <Card key={item.id} onClick={() => openPopup(item)}>
            <CardImage src={item.imageSrc} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </CardsContainer>

      {selectedCard && (
        <PopupOverlay>
          <PopupCard>
            <PopupClose onClick={closePopup}>✕</PopupClose>
            <PopupImage src={selectedCard.imageSrc} alt={selectedCard.title} />
            <PopupTitle>{selectedCard.title}</PopupTitle>
            <PopupDescription>{selectedCard.description}</PopupDescription>
            <PopupExtraContent>
              <p>
                If you like the design, feel free to contact us! We'll send our
                workers to help design your bedroom and bring your vision to
                life.
              </p>
            </PopupExtraContent>
            <WishlistButton
              onClick={handleAddToWishlist}
              disabled={wishlist.some((item) => item.id === selectedCard.id)}
            >
              {wishlist.some((item) => item.id === selectedCard.id)
                ? "Already in Wishlist"
                : "Add to Wishlist"}
            </WishlistButton>
          </PopupCard>
        </PopupOverlay>
      )}
      <BedroomHeading>My Wishlist</BedroomHeading>
      <CardsContainer>
        {wishlist.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.imageSrc} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <WishlistButton onClick={() => handleRemoveFromWishlist(item.id)}>
              Remove from Wishlist
            </WishlistButton>
          </Card>
        ))}
      </CardsContainer>
    </BedroomContainer>
  );
}

export default LivingRoom;
