import GlobalStyles from './style/global';
import { ThemeContextProvider } from './hooks/useTheme';
import Router from './routes/routeList';
function App() {
  return (
    <ThemeContextProvider>
      <Router />
      <GlobalStyles />
    </ThemeContextProvider>
  );
}

export default App;
