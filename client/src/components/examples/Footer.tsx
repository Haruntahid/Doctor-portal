import Footer from '../Footer';
import { AppProvider } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function FooterExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Footer />
      </AppProvider>
    </ThemeProvider>
  );
}
