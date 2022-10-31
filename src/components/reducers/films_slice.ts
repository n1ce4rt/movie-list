import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataType, filmsAPI, movieType } from '../../api/api';




export type filmType = {
    id: string
    tittle: string
    year: number
    rating: number
    genres: string[]
    description: string
    background_image: string
}

type SliceState = {
    data: dataType | null
    movie: movieType | null
    page: number
    movieCount: number | null
    loading: boolean
    error: string | undefined
}

const initialState: SliceState = {
  data: null,
  movie: null,
  page: 1,
  movieCount: null,
  loading: false,
  error: undefined,
};

export const fetchFilms = createAsyncThunk<dataType, number,{rejectValue: string}>(
  'films/fetchFilms',
  async function  (page, {rejectWithValue, dispatch})  {
    dispatch(resetMovie());
    try {
     
      const response  = await filmsAPI.getFilms(page);
      return response;
      
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const fetchFilm = createAsyncThunk<movieType, number, {rejectValue: string}>(
  'films/fetchFilm',
  async function (id, {rejectWithValue}) {
    try {
      const response = await filmsAPI.getFilm(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    resetMovie(state) {
      state.movie = null;
    },
    setError(state) {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page_number;
        state.movieCount = action.payload.movie_count;
        state.data = action.payload;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, asction) => {
        state.loading = false;
        state.movie = asction.payload;
      })
    // .addCase(fetchFilms.rejected, (state, action) => {
    //     state.loading = false
    //     state.error = action.payload
    // })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const  { setError, resetMovie } = filmsSlice.actions;
export default filmsSlice.reducer;