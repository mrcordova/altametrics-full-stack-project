import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
interface AuthState {
  isAuthenticated: boolean
  user: {
    password: string
    email: string
  } | null
  token: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error("Invalid login credentials")
      }

      const data = await response.json()

      return data.accessToken
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  },
)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true
      state.token = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      console.error("Login failed:", action.payload)
    })
  },
})
export const { logout } = authSlice.actions
export default authSlice.reducer
