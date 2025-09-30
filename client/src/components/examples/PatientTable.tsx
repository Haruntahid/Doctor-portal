import PatientTable from '../PatientTable';
import { AppProvider, useApp } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

function PatientTableDemo() {
  const { patients } = useApp();
  return (
    <div className="p-6">
      <PatientTable patients={patients} />
    </div>
  );
}

export default function PatientTableExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <PatientTableDemo />
      </AppProvider>
    </ThemeProvider>
  );
}
