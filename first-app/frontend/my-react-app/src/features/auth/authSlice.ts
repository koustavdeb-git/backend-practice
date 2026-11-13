import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean
}

const initialAuthState: AuthState = {
    user : null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState : initialAuthState,
    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false
        }
    }
})

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;