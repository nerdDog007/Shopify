import { createSlice } from "@reduxjs/toolkit";

const SignUpSlice = createSlice({
  name: "signUp",
  initialState: {
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setConfirmPassword } = SignUpSlice.actions;
export default SignUpSlice.reducer;