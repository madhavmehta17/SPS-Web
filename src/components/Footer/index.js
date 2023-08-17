import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(1.5rem + 1.5vw); /* Adjust the padding values to control the width */
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center; /* Center-align content horizontally */
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const LeftText = styled.div`
  text-align: center; /* Center-align text */
`;

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
      2023 HackX by IEEE SPS VITV. All rights reserved.
      </LeftText>
    </FOOTER>
  );
};

export default Footer;
