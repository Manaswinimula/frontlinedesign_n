import React from "react";
import styled from "styled-components";

// Styled components for the About Us page
const AboutUsPage = styled.div`
  padding: 50px;
  background-color:rgb(202, 254, 238);
  font-family: Arial, sans-serif;
  text-align: center;
  height:85vh;
`;

const AboutUsTitle = styled.h1`
  font-size: 2.5rem;
  color:rgb(32, 69, 58);
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
`;

const AboutUsDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const AboutSection = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const AboutSectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #0ea5e9;
  margin-bottom: 10px;
`;

const AboutSectionParagraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

function About() {
  return (
    <AboutUsPage>
      <AboutUsTitle>About Us</AboutUsTitle>
      <AboutUsDescription>
        Welcome to Frontline! We are committed to delivering exceptional products and services tailored to meet your needs.
      </AboutUsDescription>
      <AboutUsContent>
        <AboutSection>
          <AboutSectionTitle>Our Mission</AboutSectionTitle>
          <AboutSectionParagraph>
            To provide outstanding value to our customers through innovation and dedication.
          </AboutSectionParagraph>
        </AboutSection>
        <AboutSection>
          <AboutSectionTitle>Our Vision</AboutSectionTitle>
          <AboutSectionParagraph>
            To be a leader in our industry, known for integrity and excellence.
          </AboutSectionParagraph>
        </AboutSection>
        <AboutSection>
          <AboutSectionTitle>Why Choose Us?</AboutSectionTitle>
          <AboutSectionParagraph>
            Our passion for quality and commitment to customer satisfaction set us apart.
          </AboutSectionParagraph>
        </AboutSection>
      </AboutUsContent>
    </AboutUsPage>
  );
}

export default About;
