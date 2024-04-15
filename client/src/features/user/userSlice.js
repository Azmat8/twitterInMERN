import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import axios from 'axios';
const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
  birthdate: '',
  username: '',
  selectedLanguages: [],
  selectedInterests: [],
  following: [],



};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(action.payload, "action");
      state.id = action.payload._id;
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


    followUser: (state, action) => {
      if (!state.following) {
        state.following = [];
      }
      state.following.push(action.payload);
    },
    unfollowUser: (state, action) => {
      state.following = state.following.filter(id => id !== action.payload);
    },



  },
  extraReducers: (builder) => {
    builder.addCase(followUnfollowUser.fulfilled, (state, action) => {
      // Update followersCount and followingCount based on response
      const { followingCount, followersCount } = action.payload;
      state.followingCount = followingCount;
      state.followersCount = followersCount;
    });
  },
});

export const { createUser, logoutUser, getBirthdate, getUsername, userLangUages, setUserInterests, followUser, unfollowUser } = userSlice.actions;


// const token = localStorage.getItem('token');
// // console.log(token)

// export const followUnfollowUser = createAsyncThunk(
//   'user/followUnfollowUser',
//   async (userId) => {
//     const response = await axios.post(`http://localhost:8080/followUnFollowUsers/${userId}`, {}, {
//       headers: {
//         Authorization: `Bearer ${token}` // Ensure the token is retrieved from where you store it
//       }
//     });
//     console.log("hello follo userSlice", response)
//     return response.data;
//   }
// );

export const followUnfollowUser = createAsyncThunk(
  'user/followUnfollowUser',
  async (userId) => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');

    // Check if token exists
    if (!token) {
      // Handle case when token is not found
      console.error('Token not found');
      return; // Return or handle as required
    }


    try {
      // Send request with token in headers
      const response = await axios.post(`http://localhost:8080/followUnFollowUsers/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("hello follo userSlice", response);
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      throw error;
    }
  }
);



// export const followUnfollowUser = createAsyncThunk(
//   'user/followUnfollowUser',
//   async (userId) => {
//     const response = await axios.post(`http://localhost:8080/followUnFollowUsers/${userId}`);
//     console.log("hello follo userSlice", response)
//     return response.data;
//   }
// );

export default userSlice.reducer;





