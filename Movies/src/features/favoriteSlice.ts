import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  value: [],
  idList: {},
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: any) => {
      state.value.push(action.payload);
      state.idList[`${action.payload.id}`] = action.payload.title;
    },
    removeFavorite: (state, action: any) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);
      delete state.idList[`${action.payload.id}`];
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
