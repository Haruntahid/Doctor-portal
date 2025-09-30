import { Users, UserCog, FileText, Calendar } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import PatientTable from '@/components/PatientTable';
import { useApp } from '@/lib/AppContext';

export default function AdminDashboard() {
  const { doctors, patients, blogPosts } = useApp();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of your medical portal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Doctors"
          value={doctors.length}
          icon={UserCog}
        />
        <StatsCard
          title="Total Patients"
          value={patients.length}
          icon={Users}
        />
        <StatsCard
          title="Blog Posts"
          value={blogPosts.length}
          icon={FileText}
        />
        <StatsCard
          title="Appointments"
          value={patients.filter(p => p.status === 'confirmed').length}
          icon={Calendar}
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Patients</h2>
        <PatientTable patients={patients} />
      </div>
    </div>
  );
}
