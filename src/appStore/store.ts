import { configureStore } from '@reduxjs/toolkit';
import employeeSlice from '../features/employeeSlice';

export const store = configureStore({
    reducer: {
        employeeState: employeeSlice
    }
});

export type MainState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;