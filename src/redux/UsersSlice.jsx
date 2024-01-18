import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {}
}

const UsersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        add: (state, action) => {
            state.user = action.payload
        },
        remove: (state) => {
            state.user = {}
        }
    }
})

export const { add, remove } = UsersSlice.actions
export default UsersSlice.reducer