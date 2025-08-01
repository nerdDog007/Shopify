import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    signUp:false,
    login:true,
    email:"",
    password:"",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSignUp: (state, action) => {
      state.signUp = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setEmailAuth: (state, action) => {
      state.email = action.payload;
    },
    setPasswordAuth: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setUser, setToken,setLogin,setSignUp,setEmailAuth,setPasswordAuth } = AuthSlice.actions;
export default AuthSlice.reducer;