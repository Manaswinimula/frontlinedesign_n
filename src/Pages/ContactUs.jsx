import React from "react";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const ContactPage = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-in-out;
  margin: 0;
  font-family: "Poppins", sans-serif;
  background:rgb(202, 254, 238);
  color: #333;
  height:90vh;
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color:rgb(32, 69, 58);
  font-weight:bold;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
`;

const ContactCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ContactCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4facfe;
`;

const ContactCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ContactCardText = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  color: #4facfe;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #00aaff;
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: #4facfe;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #00aaff;
    transform: scale(1.2);
  }
`;

const ContactUs = () => {
  return (
    <ContactPage>
      <ContactTitle>Get in Touch</ContactTitle>
      <ContactSubtitle>
        We'd love to hear from you! Reach out through any of the channels below.
      </ContactSubtitle>

      <ContactCardContainer>
        <ContactCard>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <ContactCardTitle>Email</ContactCardTitle>
          <ContactCardText>Drop us an email anytime!</ContactCardText>
          <ContactLink href="mailto:contact@frontline.com">contact@frontline.com</ContactLink>
        </ContactCard>

        <ContactCard>
          <ContactIcon>
            <FaPhoneAlt />
          </ContactIcon>
          <ContactCardTitle>Phone</ContactCardTitle>
          <ContactCardText>Call us for immediate assistance:</ContactCardText>
          <ContactLink href="tel:+919704714412">+91 9704714412</ContactLink>
        </ContactCard>

        <ContactCard>
          <SocialIcons>
            <SocialIcon href="https://www.instagram.com/charan__x7/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://x.com/Sricharan000" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
          </SocialIcons>
          <ContactCardTitle>Social Media</ContactCardTitle>
          <ContactCardText>Connect with us on our social platforms!</ContactCardText>
        </ContactCard>
      </ContactCardContainer>
    </ContactPage>
  );
};

export default ContactUs;
