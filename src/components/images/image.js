import React from "react";
import styled from "styled-components";

const ImageStyled = styled.div`
 margin: 0.5rem;
 
  img {
    float: left;
    width:  27rem;
    height: 27rem;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Image = ({ id }) => {
  return (
    <ImageStyled>
      <img src={`https://random-picture-gallery.herokuapp.com/images/${id}`} alt="Photo" />
    </ImageStyled>
  );
};

export default Image;
