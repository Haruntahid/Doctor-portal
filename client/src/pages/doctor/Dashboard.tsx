import { Users, CheckCircle } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import PatientTable from '@/components/PatientTable';
import { useApp } from '@/lib/AppContext';

export default function DoctorDashboard() {
  const { patients } = useApp();
  
  //todo: remove mock functionality - filter by current doctor
  const totalPatients = patients.length;
  const servedPatients = patients.filter(p => p.status === 'completed').length;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Doctor Dashboard</h1>
        <p className="text-muted-foreground">Overview of your patients</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatsCard
          title="Total Patients"
          value={totalPatients}
          icon={Users}
          description="All time"
        />
        <StatsCard
          title="Served Patients"
          value={servedPatients}
          icon={CheckCircle}
          description="Completed appointments"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Patient List</h2>
        <PatientTable patients={patients} />
      </div>
    </div>
  );
}
