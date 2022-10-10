import { ThemeProvider } from 'styled-components';
import GlobalStyles from './style/global';
// import Home from './view/home/index';
import theme from './style/theme';
import { Outlet } from 'react-router-dom';
// import Header from './components/header/index';
// import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/route';
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <Router />
      <Outlet />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
