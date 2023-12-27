import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const fetchMissions=createAsyncThunk('fetchMission',async()=>{
    const res=await fetch('https://api.spacexdata.com/v3/missions');
    return res.json();
})

export const missionSlice=createSlice({
    name:'mission',
    initialState:{
        data:[],
        isLoading:false
    },
    reducers:{
        updateMission:(state,action)=>{
          const hold=state.data.find((ele)=> ele.mission_id===action.payload);
          if(hold.join){
            hold.join=false;
          }
          else{
            hold.join=true;
          }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMissions.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchMissions.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
    }
})

export default missionSlice.reducer
export const {updateMission}=missionSlice.actions;