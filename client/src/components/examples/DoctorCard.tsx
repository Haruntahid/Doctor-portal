import DoctorCard from '../DoctorCard';
import { AppProvider, useApp } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

function DoctorCardDemo() {
  const { doctors } = useApp();
  return (
    <div className="p-6">
      <DoctorCard doctor={doctors[0]} showContact={true} />
    </div>
  );
}

export default function DoctorCardExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <DoctorCardDemo />
      </AppProvider>
    </ThemeProvider>
  );
}
