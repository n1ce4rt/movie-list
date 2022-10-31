import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Header } from '../header/header';
import { useAppSelector } from '../hooks/hooks';
import { ErrorPage } from '../error/error_page';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '90px 0px 30px',
  '& .MuiTextField-root': { width: '25ch' },
};

export const Layout = () => {

  const error = useAppSelector(state => state.filmReducer.error);

  return (
    <>
      <Header />
      <Box sx={style}>
        {error ? <ErrorPage /> : <Outlet />}
      </Box>
      <footer style={{ textAlign: 'center' }}>2022</footer>
    </>
  );
};