import { configureStore } from "@reduxjs/toolkit";
import SignupSlice from "./SignupSlice";
import LoginSlice from '../redux/LoginSlice'


const store = configureStore({
    reducer: {
        signup: SignupSlice,
        login: LoginSlice
    }
});

export default store;