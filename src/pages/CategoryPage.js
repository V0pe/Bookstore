import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, checkStatus } from '../redux/categories/categories';

export default function CategoryPage() {
  const Status = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button className="category-btn" type="button" onClick={handleClick}>
        Check Status
      </button>
      <h1>{Status}</h1>
    </div>
  );
}
