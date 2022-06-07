import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = {
  books: booksReducer,
  categories: categoriesReducer,
};

//Created the state store and combined with the reducer method
const store = createStore(combineReducers(reducers));
export default store;
