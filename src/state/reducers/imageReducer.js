
const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PHOTOS':
      return action.images;
    default:
      return state;
  }
};
export default imagesReducer;
