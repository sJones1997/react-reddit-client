import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from '../features/searchbar/searchBarSlice';

export default configureStore({
    reducer: {
        searchBar: searchBarReducer
    }
  });