import Navbar from '../Navbar';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}
