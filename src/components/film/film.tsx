import * as React from 'react';
import { useParams } from 'react-router-dom';
import {CssBaseline, Container, Box, Typography, CardMedia} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchFilm } from '../reducers/films_slice';



export const Film = () => {

  const dispatch = useAppDispatch();
  const { id } = useParams();


  const movie = useAppSelector(state => state.filmReducer.movie);

  React.useEffect(() => {
    dispatch(fetchFilm(Number(id)));
  },[id, dispatch]);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc'}}>
          <Typography>
            {movie?.title_long}
          </Typography>
          <CardMedia
            component="img"
            alt={movie?.title_english}
            height="auto"
            image={movie?.large_cover_image}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
};