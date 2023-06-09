import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {...state, currentUser: action.payload}
            //This will cause the state to update the currentUser with data contained in the action.payload property. This action.payload data will be set up later in a user login form.
        }
    }
})

export const userReducer = userSlice.reducer
export const { setCurrentUser } = userSlice.actions

export const selectCurrentUser = (state) => state.user.currentUser
