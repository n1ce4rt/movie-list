import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import { setLogin } from '../reducers/login_slice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

type Inputs = {
    name: string,
    password: string,
  };

export const Login =() => {
    
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<Inputs>({mode:'all'});
  const status = useAppSelector(state => state.loginReducer.isLogin);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
        
    dispatch(setLogin({name: data.name, password: data.password}));
    setTimeout(() => navigate('/films/page/1'), 1000);
    reset();
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {
          status? 
            <Alert severity="success">This is a success alert — check it out!</Alert>
            :
            <form onSubmit={handleSubmit(onSubmit)} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <TextField label="Login" variant="outlined" margin="normal" 
                {...register('name',{required: 'Тут нужно ввести имя!', maxLength: { value : 15, message: 'Имя не больше 15 букв!'}})}/>
              {errors.name && <span>{errors.name?.message}</span>}

              <TextField label="Password" variant="outlined" margin="normal" 
                {...register('password', { required: 'Тут вводи пароль!', maxLength: { value : 15, message: 'Слишком много!'}})}/>
              {errors.password && <span>{errors.password?.message}</span>}

              <Button
                disabled={!isValid}
                type={'submit'} 
                variant={'contained'}
              >Login</Button>
            </form>
        }
      </Container>
    </>
  );
};