import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.CategoriesReducer);
  const CheckStatusHandler = () => {
    dispatch(CheckStatus());
  };

  return (
    <div>
      <button type="button" className="status-btn" onClick={CheckStatusHandler}>Check Status!</button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
