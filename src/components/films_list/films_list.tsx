import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { FilmCard } from '../film_card/film_card';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchFilms, setPage } from '../reducers/films_slice';
import { PaginationButtons } from '../pagination/pagination';


export const FilmsList =() => {


  const { page } = useParams();
  const dispatch = useAppDispatch();


  const films = useAppSelector(state => state.filmReducer.data?.movies);

  useEffect  (() => {
    dispatch(fetchFilms(Number(page)));
  },[page, dispatch]);
    
  return (
    <>
      <PaginationButtons />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{margin: '0 auto', maxWidth: '1100px'}}>
        {films?.map((film) => (
          <Grid xs={2} sm={4} md={3}  key={film.title} sx={{p: '5px', height: 'auto' }}>
            <FilmCard
              id={film.id}
              img={film.large_cover_image}
              alt={film.slug}
              title={film.title}
              description={film.summary}
              year={film.year}
              genres={film.genres}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};