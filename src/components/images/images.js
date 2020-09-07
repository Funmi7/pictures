import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { startLoadImages } from "../../state/actions/imagesActions";
import Image from "./image";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const ImagesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15vh;
`;

const Images = ({ errors, images, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(startLoadImages());
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  return (
    <ImagesStyled>
      {errors && errors.get_error && (
        <p className="errorMsg centered-message">{errors.get_error}</p>
      )}
      {isLoading ? (
        <Loader type="TailSpin" color="#2BAD60" height={80} width={80} />
      ) : (
        images.map((image) => <Image key={image._id} id={image._id} />)
      )}
    </ImagesStyled>
  );
};

const mapStateToProps = (state) => ({
  images: state.images || [],
  errors: state.errors || {},
});

export default withRouter(connect(mapStateToProps)(Images));
