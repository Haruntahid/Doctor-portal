import Login from '../Login';
import { AppProvider } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function LoginExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Login />
      </AppProvider>
    </ThemeProvider>
  );
}
