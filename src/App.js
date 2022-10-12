import { ThemeProvider } from 'styled-components';
import GlobalStyles from './style/global';
import theme from './style/theme';

import Router from './routes/route';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
