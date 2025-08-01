import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/Auth";
import SignUpReducer from "./slices/SignUp";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    signUp: SignUpReducer,
  },
});

export default store;