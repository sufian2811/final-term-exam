import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const fetchDragons=createAsyncThunk('fetchDragon',async()=>{
       const res=await fetch('https://api.spacexdata.com/v4/dragons');
       return res.json();
})

export const dragonSlice=createSlice({
    name:'dragon',
    initialState:{
        data:[],
        isLoading:false
    },
    reducers:{
        updateReserve:(state,action)=>{
            const newState = JSON.parse(JSON.stringify(state));

            const hold = newState.data.find((ele) => ele.id === action.payload);
        
            if(hold.reserve===false){
                hold.reserve=true;
            }
            else{
                hold.reserve=false;
            }
            
            return newState;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchDragons.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchDragons.fulfilled,(state,action)=>{
            state.isLoading=false;
            
            state.data=action.payload;
        })
    }
})

export default dragonSlice.reducer;
export const {updateReserve}=dragonSlice.actions;