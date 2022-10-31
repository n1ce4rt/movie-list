import * as React from 'react';
import {AppBar, Toolbar, IconButton, Menu, MenuItem, Button, LinearProgress} from '@mui/material';
import  AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setError } from '../reducers/films_slice';
import { setLogOut } from '../reducers/login_slice';

export const Header :React.FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLogin = useAppSelector(state => state.loginReducer.isLogin);
  const isLoading  = useAppSelector(state => state.filmReducer.loading);
  const userName = useAppSelector(state => state.loginReducer.user.name);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handlelogOut = () => {
    dispatch(setError());
    dispatch(setLogOut());
    setAnchorEl(null);
    navigate('/login');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        {isLogin? 
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{userName}</MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handlelogOut}>Log out</MenuItem>
            </Menu>
          </>
          :
          <Button color="inherit" onClick={()=> navigate('/login')}>Login</Button>
        }
      </Toolbar>
      {isLoading && <LinearProgress />}
    </AppBar>
      
  );
};