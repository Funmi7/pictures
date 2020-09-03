import axioswithAuth from "../../utils/axiosWithAuth";

export const GET_IMAGES_SUCCESSFUL = "GET_IMAGES_SUCCESSFUL";
export const GET_ERRORS = "GET_ERRORS";

const url = "https://random-picture-gallery.herokuapp.com/images/";

export const getErrors = (errors) => ({
  type: 'GET_ERRORS',
  errors,
});

export const addImage = (image) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      await axioswithAuth().post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const startLoadImages = () => {
  return async (dispatch) => {
    try {
      const images = await axioswithAuth().get(url);
      dispatch(loadImages(images.data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const loadImages = (images) => ({
  type: 'LOAD_PHOTOS',
  images
})