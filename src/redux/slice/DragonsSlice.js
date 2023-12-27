import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const dragons=createAsyncThunk("dragonslice", async()=>{
    const res=await fetch("https://api.spacexdata.com/v4/dragons");
    return res.json();
});

const dragonslice=createSlice({
    name: "dragons slice",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(dragonslice.isLoading, (state, action) => {
            state.isLoading=true;
        });
        builder.addCase(dragonslice.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data=action.payload;
        });
        builder.addCase(dragonslice.rejected, (state, action) => {
            state.isError=true;
            console.log("error");
        });
    }
    
});

export default dragonslice.reducer;