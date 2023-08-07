import { createSlice } from '@reduxjs/toolkit';
const initiateState = { theme : localStorage.getItem('theme') ?? 'light' };

const themeSlice = createSlice({
    name: 'theme',
    initialState: initiateState,
    reducers: {
        switchTheme(state, action){
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload);
        }
    }
})

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;