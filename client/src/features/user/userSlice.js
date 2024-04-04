import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(action.payload, "action")
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logoutUser: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
    }
  }
});

export const { createUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
