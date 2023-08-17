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
            text="The interplay of climate and energy is crucial. Transitioning to renewables like solar and wind is vital to curb emissions and ensure a sustainable future."
            name="CLIMATE+ENERGY"
            image="avatar-1"
          />

          <Card
            text="Beneath the starry night, whispers of leaves danced, weaving dreams in the quiet forest, where adventure awaited those curious enough."
            name="ItzzCk"
            image="avatar-2"
          />

          <Card
            text="Beneath the starry night, whispers of leaves danced, weaving dreams in the quiet forest, where adventure awaited those curious enough."
            name="ItzzCk"
            image="avatar-3"
          />

          <Card
            text="Beneath the starry night, whispers of leaves danced, weaving dreams in the quiet forest, where adventure awaited those curious enough."
            name="ItzzCk"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
