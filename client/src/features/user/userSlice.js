

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    password: '',
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
    },
});

console.log(userSlice, "userSlice wala dataas");

export const { createUser } = userSlice.actions;
export default userSlice.reducer;

