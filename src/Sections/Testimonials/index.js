import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: green;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: green;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: green;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const BoldGreenText = styled.p`
  margin: 8px 0;
  font-size: 0.9rem;
  color: green;
  font-weight: bold;
  text-align: center;
`;




const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Explore our domains !</Title>
      <Carousal>
        <Slider {...settings}>
        <Card
            text={
              <BoldGreenText>
                Climate & Energy
              </BoldGreenText>
            }
            name="CLIMATE+ENERGY"
            image="https://media.giphy.com/media/WSqsdbIH6mLrHe78tJ/giphy.gif" // Replace with the actual path to your image
          />

          <Card
            text={
            <BoldGreenText>
            Health
          </BoldGreenText>}
            name="ItzzCk"
            image="https://media.giphy.com/media/DBbPjLMsQPruMkDcrd/giphy.gif" // Replace with the actual path to your image
          />

          <Card
            text={
              <BoldGreenText>
              Biodiversity & Conservation
            </BoldGreenText>}
            name="ItzzCk"
            image="https://media.giphy.com/media/7JSZvADyhEzG5ZdYKT/giphy.gif" // Replace with the actual path to your image
          />

            <Card
            text={
              <BoldGreenText>
              Food Water Waste
            </BoldGreenText>}
            name="ItzzCk"
            image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZ1dDU0ZnE1MGU1MTY3d3FtaXd6enMzd3kwejd3c3pwNG5hbXo0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tSFcmWr7Y3qFy/giphy.gif" // Replace with the actual path to your image
          />

<Card
            text={
              <BoldGreenText>
              Society
            </BoldGreenText>}
            name="ItzzCk"
            image="https://media.giphy.com/media/j3zXDjSHt8hc5pLI7Y/giphy.gif" // Replace with the actual path to your image
          />

<Card
            text={
              <BoldGreenText>
              Education
            </BoldGreenText>}
            name="ItzzCk"
            image="https://media.giphy.com/media/KDYB0cH4HW8xc3VIAx/giphy.gif" // Replace with the actual path to your image
          />

          

        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
