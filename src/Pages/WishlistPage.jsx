import React, { useContext } from "react";
import styled from "styled-components";
import { WishlistContext } from "../Context/WishListContext";
import { FaPhoneAlt } from "react-icons/fa";

// Styled components
const WishlistContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const WishlistHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e60000;
  }
`;

// Contact Section Styles
const ContactSection = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const ContactCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: #007bff;
`;

const ContactHeading = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const ContactText = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #555;
`;

const ContactLink = styled.a`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <WishlistContainer>
      <WishlistHeading>My Wishlist</WishlistHeading>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <CardsContainer>
          {wishlist.map((item) => (
            <Card key={item.id}>
              <CardImage src={item.imageSrc} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <RemoveButton onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </RemoveButton>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      )}

      {/* Contact Us Section */}
      <ContactSection>
        <ContactCard>
          <ContactIcon>
            <FaPhoneAlt />
          </ContactIcon>
          <ContactHeading>Phone</ContactHeading>
          <ContactText>Feel free to contact us! We'll help you design
          your space and bring your vision to life.</ContactText>
          <ContactLink href="tel:+919704714412">+91 9704714412</ContactLink>
        </ContactCard>
      </ContactSection>
    </WishlistContainer>
  );
}

export default WishlistPage;



