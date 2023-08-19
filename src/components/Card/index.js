import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 280px;
  padding-top: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  cursor: pointer;
`;

const CardContent = styled.div`
  padding: 16px;
  background-color: #3A3A3A;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const CardText = styled.p`
  margin: 8px 0;
  font-size: 0.9rem;
  color: #537D32;
`;

const Card = ({ title, text, image }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <CardWrapper>
      <CardImage src={image} alt={title} onClick={toggleTextVisibility} />
      <CardContent visible={isTextVisible}>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
