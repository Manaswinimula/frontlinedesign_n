import React, { useState, useContext } from "react";
import styled from "styled-components";
import { WishlistContext } from "../Context/WishListContext";
import bedcover from "../assets/bedcover.jpg";
import bed1 from "../assets/Kitchen/kit1.jpg";
import bed2 from "../assets/Kitchen/kit2.jpg";
import bed3 from "../assets/Kitchen/kit3.jpg";
import bed4 from "../assets/Kitchen/kit4.jpg";
import bed5 from "../assets/Kitchen/kit5.jpg";
import bed6 from "../assets/Kitchen/kit6.jpg";
import bed7 from "../assets/Kitchen/kit7.jpg";
import bed8 from "../assets/Kitchen/kit8.jpg";
import bed9 from "../assets/Kitchen/kit9.jpg";
import bed10 from "../assets/Kitchen/kit10.jpg";
import bed11 from "../assets/Kitchen/kit11.jpg";
import bed12 from "../assets/Kitchen/kit12.jpg";
import bed13 from "../assets/Kitchen/kit13.jpg";
import bed14 from "../assets/Kitchen/kit14.jpg";
import bed15 from "../assets/Kitchen/kit15.jpg";
import bed16 from "../assets/Kitchen/kit16.jpg";
import bed17 from "../assets/Kitchen/kit17.jpg";
import bed18 from "../assets/Kitchen/kit18.jpg";
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
    @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;
const BedroomContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin-right:15px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const BedroomImage = styled.img`
  width: 100%;
  height: 80vh;
  border-radius: 10px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
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

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    padding: 10px;
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

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
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

function Kitchen() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState(null); // Notification state
  const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const bedroomIdeas = [
    {
      id: 1,
      title: "Modular Kitchen",
      description: "Sleek and Modern: Clean lines and minimalist designs for a contemporary kitchen feel.",
      imageSrc: bed14,
    },
    {
      id: 2,
      title: "L-Shape Kitchen",
      description: "Farmhouse Appeal: Cozy, practical designs with a blend of vintage and rustic charm.",
      imageSrc: bed2,
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      description: "Rustic Charm: Natural wood elements and vintage finishes that bring warmth to any kitchen.",
      imageSrc: bed3,
    },
    {
      id: 4,
      title: "Galley Kitchen",
      description: "Industrial Style: Exposed brick, metal finishes, and raw elements for an urban edge.",
      imageSrc: bed4,
    },
    {
      id: 5,
      title: "Stylish Kitchen",
      description: "Traditional Elegance: Classic design with intricate details and timeless finishes.",
      imageSrc: bed5,
    },
    {
      id: 6,
      title: "Elegant Design",
      description: "Open Concept: Spacious, airy layouts that seamlessly connect your kitchen to the living area.",
      imageSrc: bed6,
    },
    {
      id: 7,
      title: "Vibrant Kitchen",
      description: "Scandi-Inspired: Light woods, neutral tones, and functional design for a Scandinavian touch.",
      imageSrc: bed7,
    },
    {
      id: 8,
      title: "Eco-friendly Kitchen",
      description: "Contemporary Comfort: Mixing comfort with sleek modern touches for a versatile, family-friendly space.",
      imageSrc: bed8,
    },
    {
      id: 9,
      title: "Stylish Kitchen",
      description: "Luxury Kitchens: High-end materials and sophisticated finishes for a premium, high-performance kitchen.",
      imageSrc: bed9,
    },
    {
      id: 10,
      title: "Vintage Kitchen",
      description: "Minimalist Elegance: Simple, understated designs that focus on functionality and clean aesthetics.",
      imageSrc: bed10,
    },
    {
      id: 11,
      title: "Modular Kitchen",
      description: "Cottage Charm: Soft floral prints, vintage-inspired furniture, and cozy accents create a quaint, comfortable retreat with a cozy, countryside appeal.",
      imageSrc: bed11,
    },
    {
      id: 12,
      title: "Elegant Kitchen",
      description: "Coastal Vibes: Light, airy designs inspired by the beach, featuring soft colors and natural textures.",
      imageSrc: bed12,
    },
    {
      id: 13,
      title: "Vibrant Kitchen",
      description: "Smart Kitchens: Integrated technology that makes cooking and organizing easier, with touchless faucets and smart appliances.",
      imageSrc: bed13,
    },
    {
      id: 14,
      title: "Island Kitchen",
      description: "Vintage-Inspired: Nostalgic, retro designs with bold colors and playful patterns.",
      imageSrc: bed18,
    },
    {
      id: 15,
      title: "Simple Design",
      description: "Black and White Contrast: Bold, high-contrast kitchen designs that make a statement with sleek monochrome finishes.",
      imageSrc: bed1,
    },
    {
      id: 16,
      title: "L-Shaped Kitchen",
      description: "Compact and Functional: Space-saving designs that maximize every inch of your kitchen.",
      imageSrc: bed16,
    },
    {
      id: 17,
      title: "Parallel Kitchen",
      description: "Rustic Charm: Natural wood elements and vintage finishes that bring warmth to any kitchen.",
      imageSrc: bed17,
    },
    {
      id: 18,
      title: "U-Shape Kitchen",
      description: "Bold and Bright: Use of vibrant colors and unique patterns to create an energetic cooking space.",
      imageSrc: bed15,
    }
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
    if (!wishlist.some(item => item.id === selectedCard.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, selectedCard]); // Update local wishlist
      addToWishlist(selectedCard); // Update global wishlist (if applicable)
      showNotification(`${selectedCard.title} added to wishlist!`); // Show notification
    }
    closePopup();
  };

  const handleRemoveFromWishlist = (cardId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== cardId));
    removeFromWishlist(cardId); // Remove from global wishlist context
    showNotification(`Item removed from wishlist!`);
  };

  return (
    <BedroomContainer>
      {notification && <Notification>{notification}</Notification>}
      <BedroomImage src={bed4} alt="Kitchen" />
      <BedroomHeading>Kitchen Design</BedroomHeading>
      <BedroomParagraph>
      Discover stylish and functional kitchen designs.
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
              For inquiries, contact us, and our team will help bring your vision to life and transforming your space.
              </p>
            </PopupExtraContent>
            <WishlistButton
              onClick={handleAddToWishlist}
              disabled={wishlist.some(item => item.id === selectedCard.id)}
            >
              {wishlist.some(item => item.id === selectedCard.id)
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

export default Kitchen;






