import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  CssBaseline, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Root from './Root';
import AuthLayout from './AuthLayout';
import LandingPage from './screens/LandingPage';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';



const getTheme = (mode) => createTheme({
  palette: {
    mode: mode, // 'light' or 'dark'
    primary: {
      main: '#01257D', // Customize your primary color
      light: '#00FFFF', // Customize your primary light color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
      light: '#FAFCFF', // Customize your secondary color
    },
    background: {
      default: mode === 'light' ? '#fff' : '#121212',
      paper: mode === 'light' ? '#fff' : '#121212',
    },
    text: {
      primary: mode === 'light' ? '#000' : '#fff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: mode === 'light' ? '#000' : '#fff',
            backgroundColor: mode === 'light' ? '#fff' : '#121212',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: mode === 'light' ? '#000' : '#fff',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: mode === 'light' ? '#000' : '#fff',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: mode === 'light' ? '#000' : '#fff',
          },
        },
      },
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
      <><Route path="/" element={<Root />}>
      <Route index element={<LandingPage />} />
      <Route path='/create-new' element={<Home />} />
    </Route><Route path="/" element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route></>
    
  )
);

function App() {
  
  useLayoutEffect(() => {
    document.title = 'Welcome to Track io.';
  }, []);
  const [mode, setMode] = useState('light');

  const theme = getTheme(mode);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',                       // Makes the div appear clickable
        transition: 'background 0.3s',
      }} onClick={toggleTheme} role='button' >
        <IconButton color="inherit">
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
