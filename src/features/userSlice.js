import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
  initialState: {
  accessToken: null,
    
  },
  reducers: {
    login: (state, action) => {
      
      return {
        ...state,
        accessToken: action.payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        accessToken: null,
      };
    },
  },
});


export const {login,logout} = userSlice.actions;

export const selectAccessToken = (state) => state.accessToken;

export default userSlice.reducer;