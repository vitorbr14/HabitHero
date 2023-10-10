import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useState, useEffect } from 'react';

const defaultTheme = createTheme();

export default function SignUp() {

  const {register, handleSubmit, formState:{errors}} = useForm()
  
  

  const onSubmit =  (data) =>{
    axios.post('http://localhost:5000/api/v1/auth/register',data)
    .then((res)=>{
      console.log(res.data)
      window.localStorage.setItem('info',JSON.stringify(res.data))
      
      

    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <ThemeProvider theme={defaultTheme}>
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                  {...register('name',{required:true})}
                  
                 

                />
              </Grid>
              
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register('email',{required:true})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('password',{required:true})}
                />
              </Grid>
             
            </Grid>
            <Button
             onClick={()=>handleSubmit(onSubmit)()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link to="/login"> Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}