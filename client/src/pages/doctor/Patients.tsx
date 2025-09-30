import PatientTable from '@/components/PatientTable';
import { useApp } from '@/lib/AppContext';

export default function DoctorPatients() {
  const { patients } = useApp();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Patients</h1>
        <p className="text-muted-foreground">View and manage your patient appointments</p>
      </div>

      <PatientTable patients={patients} />
    </div>
  );
}
