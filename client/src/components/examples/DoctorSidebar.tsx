import DoctorSidebar from '../DoctorSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppProvider } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function DoctorSidebarExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <DoctorSidebar />
          </div>
        </SidebarProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
