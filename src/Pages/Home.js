import React from "react";
import styled from "styled-components";
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px; /* Add some padding for better spacing on smaller screens */
  }
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
