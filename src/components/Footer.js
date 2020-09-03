import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  background: black;
  padding: 1.5rem;
  height: 10vh;
  position: fixed;
  width: 100%;
  bottom: 0;
  p {
    font-size: 1rem;
    text-align: center;
    color: gray;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>Done by Funmilayo Talabi</p>
      <p>2020</p>
    </FooterStyled>
  );
};

export default Footer;
