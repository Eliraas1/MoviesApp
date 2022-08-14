import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: any) => {
      state.user = action.payload;
    },
    logoutUser: state => {
      state = initialState;
    },
  },
});

export const {setUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;
