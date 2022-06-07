export const checkStatus = () => ({
  type: 'bookstore/categories/STATUS_CHECK',
});

const categoriesReducer = (categories = [], action) => {
  switch (action.type) {
    case 'bookstore/categories/STATUS_CHECK':
      return 'Under Construction';
    default:
      return categories;
  }
};

export default categoriesReducer;
