// postSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
  author: '',
  hashtags: [],
  mediaAttachments: [],
  isRetweet: false,
  originalPost: "",
  visibility: "",
  location: ""
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    createPost: (state, action) => {
      const {
        content,
        author,
        hashtags,
        mediaAttachments,
        isRetweet,
        originalPost,
        visibility,
        location
      } = action.payload;
      
      state.content = content;
      state.author = author;
      state.hashtags = hashtags;
      state.mediaAttachments = mediaAttachments;
      state.isRetweet = isRetweet;
      state.originalPost = originalPost;
      state.visibility = visibility;
      state.location = location;
    }
  }
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
