import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Employee } from '../models/employee.model';

const initialValue: Employee = {
    id:0,
    name: '',
    email: '',
    website: ''
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialValue,
    reducers: {
        saveEmployeeData: (state, action: PayloadAction<Employee>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.website = action.payload.website;
        }
    }
});

export const { saveEmployeeData } = employeeSlice.actions;
export default employeeSlice.reducer;