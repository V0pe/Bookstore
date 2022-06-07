import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = createStore(combineReducers(reducers));
export default store;
