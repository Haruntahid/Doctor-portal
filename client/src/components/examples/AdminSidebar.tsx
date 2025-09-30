import AdminSidebar from '../AdminSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppProvider } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function AdminSidebarExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AdminSidebar />
          </div>
        </SidebarProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
