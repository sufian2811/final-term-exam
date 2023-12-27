import {configureStore} from '@reduxjs/toolkit';
import dragonSlice from '../slices/dragonSlice';
import missionSlice from '../slices/missionSlice';


const store=configureStore({
    reducer:{
        dragon:dragonSlice,
        mission:missionSlice
    }
})

export default store;