import Router from './routes/route';
import GlobalStyles from './style/global';
import { ThemeContextProvider } from './hooks/useTheme';
function App() {
  return (
    <ThemeContextProvider>
      <Router />
      <GlobalStyles />
    </ThemeContextProvider>
  );
}

export default App;
