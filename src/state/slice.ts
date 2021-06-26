import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRepos } from '../network/api';
import { RootState } from './store';

export interface Repository {
  title: string;
  description: string;
  url: string;
  language: string;
  forksCount: number;
  issuesCount: number;
  watchersCount: number;
}

export interface AppState {
  repos: Repository[]; 
}

const initialState: AppState = {
  repos: [],
};

export const getRepos = createAsyncThunk(
  'app/fetchRepos',
  async () =>  fetchRepos()
);

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
      });
  },
});


export const repos = (state: RootState) => state.repos;

export default slice.reducer;
