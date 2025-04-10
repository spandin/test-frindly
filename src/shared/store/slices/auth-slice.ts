import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
  isAuth: boolean
}

const initialState: AuthState = {
  isAuth: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true
    },

    logout: (state) => {
      state.isAuth = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
