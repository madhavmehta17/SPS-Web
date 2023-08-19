import React from "react";
import styled, { keyframes } from "styled-components";
import pinkBlob from "../../assets/blobPink.png";
import purpleBlob from "../../assets/blob purple.png";
import whiteBlob from "../../assets/blob white.png";
import arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";

const move = keyframes`
  0% { transform: translateY(-5px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(-5px); }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: black;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 2;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 25vw);
  height: calc(15% + 50vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const MobileSvg = styled.img`
  max-width: 50%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;

  /* Add these lines to move the element to the right */
  position: relative;
  left: 170px;

  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 2;

    /* Update positioning for smaller screens */
    left: 10px;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: #39c232;
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.8rem + 0.5vw);
  color: #728875;
`;

const CTA = styled.button`
  background-color: #337437; /* Beautiful green color */
  color: blac;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <Blobs>
        <PinkBlob>
          <img src="https://media.giphy.com/media/FcqKy4Kj7XOK0hCW4g/giphy.gif" alt="" width="1000" height="1000" />
        </PinkBlob>
      </Blobs>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Title>Witness the Power of Innovation</Title>
          <SubText>
            Get ready for an electrifying experience at HackX by IEEE SPS VITV, a 36-hour hackathon aiming to inspire breakthroughs and unleash undiscovered potential from budding tech enthusiasts. Be a part of the action and let your creativity take control.
          </SubText>
          <CTA>
            Register Now <img src={arrow} alt="Arrow Right" />
          </CTA>
        </Lb>

        <MobileSvg src={Mobile} alt="Mobile Svg" width="400" height="400" />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
