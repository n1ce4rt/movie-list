
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <p>Страница не найдена.<br/>Вернуться на<Button onClick={ ()=> navigate('/')}>главную</Button>?</p>
    </Box>
        
        
  );
};