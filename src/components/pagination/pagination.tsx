import * as React from 'react';
import{ Pagination, PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';





export const PaginationButtons: React.FC = () => {
  

  const {page, movieCount } = useAppSelector(state => state.filmReducer);
  const navigate = useNavigate();

  return (
    <Stack spacing={2} sx={{ marginBottom: '15px'}}>
      <Pagination 
        page={page} 
        count={movieCount? Math.ceil(movieCount / 8) : 1}
        onChange={(_, page: number) => {
          navigate(`/films/page/${page}`);

        }}

        hidePrevButton 
        hideNextButton  />
    </Stack>
  );
};