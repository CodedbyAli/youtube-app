import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "videos",
    initialState: {
        searchedVideos: [],
    },
    reducers: {
        searchedVideosList: (state, action) => {
            state.searchedVideos = action.payload;
        }
    }
})

export default videosSlice.reducer;

export const {searchedVideosList} = videosSlice.actions;