import Landing from '../Landing';
import { AppProvider } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function LandingExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Landing />
      </AppProvider>
    </ThemeProvider>
  );
}
