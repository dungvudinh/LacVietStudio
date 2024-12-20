import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  typography: {
    fontFamily: ['"Manrope"'], 
    fontSize:window.innerWidth <=739 ? 16.8 : 19.6, 
    button:{
      fontSize:`${window.innerWidth <= 739 ? '13px' : '15px'}`
    },    
  }, 
  palette: {
    primary: {
      main: '#f77919', 
      // This will set the default button color
    },
    secondary:{
      main: "rgb(137, 137, 137)"
    }, 
    orange: createColor('#f77919'), 
    white:'#ffffff',
    dark:'#111', 
    iconFillColor:'#BDBDBD', 
    borderColor:'#ddd'
  }, 
  
})
root.render(
  <React.StrictMode>
      <GlobalStyles>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
      </GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
