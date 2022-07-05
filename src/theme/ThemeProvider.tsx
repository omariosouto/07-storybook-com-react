import theme from './theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export default function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
}
