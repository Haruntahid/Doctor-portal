import Appointment from '../Appointment';
import { AppProvider } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function AppointmentExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Appointment />
      </AppProvider>
    </ThemeProvider>
  );
}
