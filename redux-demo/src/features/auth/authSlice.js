import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',

    initialState:{
        username:null
    },

    reducers:{
        login(state, action){
            state.username=action.payload;
        },
        logout(state, action) {
            state.username= null;
        }
    }
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;