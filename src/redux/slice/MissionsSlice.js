import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const missions=createAsyncThunk("missionslice", async()=>{
    const res=await fetch("https://api.spacexdata.com/v3/missions");
    return res.json();
});

const missionslice=createSlice({
    name: "mission slice",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(missionslice.pending, (state, action) => {
            state.isLoading=true;
        });
        builder.addCase(missionslice.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data=action.payload;
        });
        builder.addCase(missionslice.rejected, (state, action) => {
            state.isError=true;
            console.log("error");
        });
    }
    
});

export default missionslice.reducer;