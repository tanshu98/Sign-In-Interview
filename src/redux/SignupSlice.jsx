import { createSlice } from "@reduxjs/toolkit";

const SignupSlice = createSlice({
    name: 'signup',
    initialState: {
    signupName: "Tanshu",
    address: "Tanshu Address",
    signupContact: 9921139252,
    signupEmail: "tanshu@gmail.com",
    gender: "Male",
    termsAndCond: false,
    signupPassword: "Tanshu@12345",
    },
    reducers: {
        signupHandler: (state,action) => {
            state = action.payload
        }
    }
});

export const {signupHandler} = SignupSlice.actions
export default  SignupSlice.reducer;
