import {configureStore} from '@reduxjs/toolkit';
import missionsliceReducer from './slice/MissionsSlice';
import dragonsliceReducer from './slice/DragonsSlice';

export const store=configureStore({
    reducer: {
        dragonslice: dragonsliceReducer,
        missionslice: missionsliceReducer,
    }
});