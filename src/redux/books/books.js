import { nanoid } from 'nanoid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ID = 'zXhm48Ndrhf2GoMq5JlN';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks', async () => {
    const res = await fetch(`${URL}/${ID}/books`);
    const books = await res.json();
    const bookObj = [Object.keys(books).map((key) => (
      {
        id: key,
        ...books[key][0],
      }
    ))];
    return bookObj;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook', async ({ title, author, category }, thunkAPI) => {
    await fetch(`${URL}/${ID}/books`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: nanoid(),
        title,
        author,
        category,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => thunkAPI.dispatch(fetchBooks()));
    const { books } = thunkAPI.getState().books;
    return books;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook', async (bookId, thunkAPI) => {
    await fetch(`${URL}/${ID}/books/${bookId}`, {
      method: 'DELETE',
    }).then(() => thunkAPI.dispatch(fetchBooks()));
    const { books } = thunkAPI.getState().books;
    return books;
  },
);

const options = {
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => action.payload[0],
    [addBook.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
};

const booksSlice = createSlice(options);
export const selectBooks = (state) => state.books;
export default booksSlice.reducer;