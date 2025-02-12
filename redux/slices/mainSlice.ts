import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const logIn = (state: MainState, action: PayloadAction<boolean>) => {
  state.isLoggedIn = action.payload;
}

const user = (state: MainState, action: PayloadAction<Record<string, any>>) => {
  state.user = action.payload;
}

const isLoading = (state: MainState, action: PayloadAction<boolean>) => {
  state.isLoading = action.payload;
}


/************ Action Handlers ****************/

interface MainState {
  isLoggedIn: boolean;
  user: Record<string, any>;
  isLoading: boolean;
}

const initialState: MainState = {
  isLoggedIn: false,
  user: {},
  isLoading: true,
};


const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    logIn,
    user,
    isLoading,
  },
});

export const { logIn: logInAction, user: userAction, isLoading: isLoadingAction } = mainSlice.actions;
export default mainSlice.reducer;