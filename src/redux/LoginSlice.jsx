import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
    loginContact: 9921139252,
    loginEmail: "tanshu@gmail.com",
    loginPassword: "Tanshu@12345",
    },
    reducers: {
        loginHandler: (state,action) => {
            state = action.payload
        }
    }
});

export const {loginHandler} = LoginSlice.actions
export default LoginSlice.reducer
