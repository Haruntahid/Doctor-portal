import StatsCard from '../StatsCard';
import { Users } from 'lucide-react';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function StatsCardExample() {
  return (
    <ThemeProvider>
      <div className="p-6">
        <StatsCard
          title="Total Patients"
          value="152"
          icon={Users}
          description="+12 this week"
        />
      </div>
    </ThemeProvider>
  );
}
