import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
  birthdate: '',
  username: '',
  selectedLanguages: [],
  selectedInterests: []

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(action.payload, "action")
      state.id = action.payload._id
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logoutUser: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
    },
    // Action to store birthdate
    getBirthdate: (state, action) => {
      state.birthdate = action.payload;
    },
    // Action to store username
    getUsername: (state, action) => {
      state.username = action.payload;
    },
    // Action to store languages
    userLangUages: (state, action) => {
      state.selectedLanguages = action.payload;
    },

    // Action to store topics
    setUserInterests: (state, action) => {
      state.selectedInterests = action.payload;
    },




  }
});

export const { createUser, logoutUser, getBirthdate, getUsername, userLangUages, setUserInterests } = userSlice.actions;
export default userSlice.reducer;
