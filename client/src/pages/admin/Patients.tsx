import PatientTable from '@/components/PatientTable';
import { useApp } from '@/lib/AppContext';

export default function AdminPatients() {
  const { patients } = useApp();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Patients Management</h1>
        <p className="text-muted-foreground">View and manage patient appointments</p>
      </div>

      <PatientTable patients={patients} />
    </div>
  );
}
