import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface loginStateType {
    isLogin: boolean,
               user: userType 
}
export interface userType {
    name: string | null,
    password: string | null
}
const initialState: loginStateType = {
  isLogin: false,
  user: {
    name: null,
    password: null,
  },
};
const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<userType>) {
      state.user = {...state,
        name: action.payload.name,
        password: action.payload.password,
      };
      state.isLogin = true;
    },
    setLogOut(state) {
      state.isLogin = false;
    },
  },
});


export const {setLogin, setLogOut} = loginSlice.actions;
export default loginSlice.reducer;