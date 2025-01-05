

import React, { useState, useContext } from "react";
import styled from "styled-components";
import { WishlistContext } from "../Context/WishListContext"
import bedcover from "../assets/bedcover.jpg";
import bed1 from "../assets/bed/bed1.jpg";
import bed2 from "../assets/bed/bed2.jpg";
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

function Bedroom() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState(null); // Notification state
  const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const bedroomIdeas = [
    {
      id: 1,
      title: "Bedroom Idea 1",
      description: "Industrial Chic: Exposed brick walls, metal furniture, and bold black accents create an urban, industrial vibe.",
      imageSrc: bed1,
    },
    {
      id: 2,
      title: "Bedroom Idea 2",
      description: "Coastal Retreat: Soft blues and whites dominate this serene coastal bedroom, with light wood accents, nautical decor, and large windows.",
      imageSrc: bed2,
    },
    {
      id: 3,
      title: "Bedroom Idea 3",
      description: "Minimalist Zen: A calm, clutter-free space with neutral tones, low-profile furniture, and natural elements",
      imageSrc: bed3,
    },
    {
      id: 4,
      title: "Bedroom Idea 4",
      description: "Bohemian Haven: Eclectic and colorful, this bedroom features a mix of patterned textiles, vintage furniture, and vibrant plants, creating a cozy, carefree atmosphere.",
      imageSrc: bed4,
    },
    {
      id: 5,
      title: "Bedroom Idea 5",
      description: "Vintage Glam: Antique furniture, mirrored accents, and a mix of luxurious fabrics like silk and satin combine to create an elegant, vintage-inspired retreat",
      imageSrc: bed5,
    },
    {
      id: 6,
      title: "Kids Bedroom Idea 6",
      description: "Modern Playroom: Sleek, functional furniture with bright pops of color and plenty of storage for toys and books, creating an organized yet fun space.",
      imageSrc: bed6,
    },
    {
      id: 7,
      title: "Kids Bedroom Idea 7",
      description: "Princess Palace: A whimsical bedroom with pink and gold accents, a canopy bed, and royal decor, turning the room into a magical princess retreat.",
      imageSrc: bed7,
    },
    {
      id: 8,
      title: "Bedroom Idea 8",
      description: "Luxury Suite: High-end furniture, sleek finishes, and plush textures elevate the space, offering a relaxing, luxurious escape with a minimalist approach.",
      imageSrc: bed8,
    },
    {
      id: 9,
      title: "Bedroom Idea 9",
      description: "Modern Farmhouse: Clean lines combined with rustic elements like wooden floors, open shelving, and soft linens create a fresh take on farmhouse style.",
      imageSrc: bed9,
    },
    {
      id: 10,
      title: "kBedroom Idea 10",
      description: "Vintage Toy Room: A charming room with retro toys, classic wooden furniture, and warm tones, creating a nostalgic and timeless space.",
      imageSrc: bed10,
    },
    {
      id: 11,
      title: "Bedroom Idea 11",
      description: "Cottage Charm: Soft floral prints, vintage-inspired furniture, and cozy accents create a quaint, comfortable retreat with a cozy, countryside appeal.",
      imageSrc: bed11,
    },
    {
      id: 12,
      title: "Bedroom Idea 12",
      description: "Shabby Chic: Light, airy pastel tones, vintage furniture, and distressed finishes create a soft, romantic vibe with a nostalgic charm.",
      imageSrc: bed12,
    },
    {
      id: 13,
      title: "Bedroom Idea 13",
      description: "Urban Loft: Concrete floors, exposed ductwork, and modern furnishings create an edgy yet comfortable space, with large windows to showcase the city skyline.",
      imageSrc: bed13,
    },
    {
      id: 14,
      title: "Bedroom Idea 14",
      description: "Glamorous Retreat: A luxurious bedroom with plush velvet textures, metallic accents, and elegant chandeliers, creating a glamorous and opulent atmosphere.",
      imageSrc: bed14,
    },
    {
      id: 15,
      title: "Bedroom Idea 15",
      description: "Art Deco Opulence: Rich, bold colors like emerald and gold, geometric patterns, and elegant finishes create a sophisticated.",
      imageSrc: bed15,
    },
    {
      id: 16,
      title: "Bedroom Idea 16",
      description: "Shabby Chic: Light, airy pastel tones, vintage furniture, and distressed finishes create a soft, romantic vibe with a nostalgic charm.",
      imageSrc: bed16,
    },
    {
      id: 17,
      title: "Bedroom Idea 17",
      description: "Cottage Charm: Soft floral prints, vintage-inspired furniture, and cozy accents create a quaint, comfortable retreat with a cozy, countryside appeal.",
      imageSrc: bed17,
    },
    {
      id: 18,
      title: "Kids Bedroom Idea 18",
      description: "Adventure Theme: A playful, adventurous space with a treehouse bed, wooden accents, and nature-inspired.",
      imageSrc: bed18,
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
      <BedroomImage src={bedcover} alt="Bedroom" />
      <BedroomHeading>Bedroom Design</BedroomHeading>
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
                If you like the design, feel free to contact us! We'll send our workers to help design
                your bedroom and bring your vision to life.
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

export default Bedroom;






