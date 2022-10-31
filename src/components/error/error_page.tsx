import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setError } from '../reducers/films_slice';
import { useAppDispatch } from '../hooks/hooks';

export const ErrorPage: React.FC =() => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function onClickHandler () {
    dispatch(setError());
    navigate(0);
  }
  return (
    <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
      <Typography variant="h1" gutterBottom textAlign={'center'}>
        Oops!
      </Typography>
      <Typography variant="h3" gutterBottom textAlign={'center'}>
        Something went wrong!<br/>
        Please try again!
      </Typography>
      <Button type="button" variant={'contained'} onClick={onClickHandler}>Try again</Button>
    </Container>
  );
};