import { ThemeProvider } from 'styled-components';
import GlobalStyles from './style/global';
import Home from './view/home/index';
import theme from './style/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
