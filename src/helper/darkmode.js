export const useTheme = {
  handleSetTheme(theme) {
    localStorage.setItem('theme', theme);
  },

  handleGetTheme() {
    const theme = localStorage.getItem('theme');
    return theme;
  },
};
