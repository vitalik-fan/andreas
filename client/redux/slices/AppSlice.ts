import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store'
import {AuthResponse} from "../../models/response/AuthResponse";
import { IUser } from '../../models/IUser';

export interface appState {
  isLoading: boolean
}

const initialState: appState = {
  isLoading: true
}

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {

  }
})
export const { setLoading } = appReducer.actions

export default appReducer.reducer
