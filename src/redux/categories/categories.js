export const checkStatus = () => ({
  type: 'STATUSCHECK',
});

const categoriesReducer = (categories = [], action) => {
  switch (action.type) {
    case 'STATUSCHECK':
      return 'Under Construction';
    default:
      return categories;
  }
};

export default categoriesReducer;
