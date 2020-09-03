import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addImage } from "../../state/actions/imagesActions";
import styled from "styled-components";

const UploadFormStyled = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
.upload {
  margin-top: 2rem;
}
  button {
    width: 25rem;
    padding: 1rem 2rem 1rem 2rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    margin-top: 2rem;
  }
`

const UploadImage = ({ errors, dispatch, props }) => {
  const [image, setImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(errors);
  }, [errors]);

  useEffect(() => {
    setErrorMessage("");
  }, []);
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (image) {
      setErrorMessage("");
      dispatch(addImage(image));
      setIsSubmitted(true);
    }
  };

  return (
    <UploadFormStyled>
      {errorMessage && errorMessage.upload_error ? (
        <p>{errorMessage.upload_error}</p>
      ) : (
        isSubmitted && <p>Image uploaded successfully</p>
      )}
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Upload an image</Form.Label>
          <Form.Control  className="upload" type="file" name="image" onChange={handleChange} />
        </Form.Group>
        <Button className="button" variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </UploadFormStyled>
  );
};

const mapStateToProps = (state) => ({
  images: state.images || [],
  errors: state.errors || {},
});

export default withRouter(connect(mapStateToProps)(UploadImage));
