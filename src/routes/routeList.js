import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../view/home/index';
import About from '../view/about/index';
import Header from '../components/header/index';
import Projects from '../view/projects/index';
import { useTheme } from '../hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import Banner from '../assets/Img/banner.png';
import Bannerdark from '../assets/Img/bannerdark.png';

export default function Router() {
  const { theme } = useTheme();

  let themeStyled = {
    background: '#11172B',
    backgroundLight: '#1B2138',
    primary: '#0EE7B7',
    secondary: '#7AC7E3',
    gradienteDarkColor: 'linear-gradient(225deg, #313860 0%, #11172B 100%);',
    gradienteLitBlue: 'linear-gradient(225deg, #31ffff 0%, #7125e8 100%);',
    gradientePurpleBlue: 'linear-gradient(225deg, #7125e8 0%, #31ffff 100%);',
    gradienteBluePurple: 'linear-gradient(225deg, #31ffff 0%, #7125e8 100%)',
    gradientePinkPurple: 'linear-gradient(225deg, #f8f8 0%, #7125e8 100%)',
    text: '#848DA0',
    textHighlight: '#444B5B',
    textLight: '#C4C4C4',
    border: '#313958',
    inputBackground: '#1E253E',
    backgroundUrlImage: theme === 'dark' ? Bannerdark : Banner,
  };

  return (
    <ThemeProvider theme={themeStyled}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
