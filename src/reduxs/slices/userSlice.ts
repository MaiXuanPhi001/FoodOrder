import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserSlice {
    isLogin: boolean
}

const initialState: UserSlice = {
    isLogin: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload
        }
    },
    extraReducers: builder => { }
})

export const { setLogin } = userSlice.actions

export default userSlice.reducer