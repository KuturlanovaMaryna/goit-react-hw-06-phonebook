
import { phoneReducer } from "./phone.reduser";

import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore( {
  reducer: {phoneStore: phoneReducer,}
});