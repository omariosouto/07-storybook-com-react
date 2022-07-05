import ThemeProvider from '../src/theme/ThemeProvider';
import Button from '../src/components/Button/Button';

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <div>
        <h1>Home Page!</h1>
        <Button variant='accent'>
          Botão simplão
        </Button>
      </div>
    </ThemeProvider>
  )
}
