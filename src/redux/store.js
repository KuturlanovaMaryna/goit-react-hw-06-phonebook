
import { contactsReducer } from "./phone.reduser";
import { filterReducer } from "./filter.reducer";

import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore( {
  reducer: {
    phoneStore: contactsReducer,
    filterStore: filterReducer,
  }
});