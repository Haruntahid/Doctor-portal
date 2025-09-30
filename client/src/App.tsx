import { Switch, Route, Redirect } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { AppProvider, useApp } from '@/lib/AppContext';
import NotFound from '@/pages/not-found';

import Landing from '@/pages/Landing';
import Appointment from '@/pages/Appointment';
import Login from '@/pages/Login';

import AdminLayout from '@/layouts/AdminLayout';
import AdminDashboard from '@/pages/admin/Dashboard';
import AdminDoctors from '@/pages/admin/Doctors';
import AdminPatients from '@/pages/admin/Patients';
import AdminBlog from '@/pages/admin/Blog';
import AdminContent from '@/pages/admin/Content';
import AdminSubAdmins from '@/pages/admin/SubAdmins';
import AdminSettings from '@/pages/admin/Settings';

import DoctorLayout from '@/layouts/DoctorLayout';
import DoctorDashboard from '@/pages/doctor/Dashboard';
import DoctorPatients from '@/pages/doctor/Patients';
import DoctorProfile from '@/pages/doctor/Profile';
import DoctorSettings from '@/pages/doctor/Settings';

function ProtectedRoute({ children, allowedRole }: { children: React.ReactNode; allowedRole: 'admin' | 'doctor' }) {
  const { currentUser } = useApp();
  
  if (!currentUser.role) {
    return <Redirect to="/login" />;
  }
  
  if (currentUser.role !== allowedRole) {
    return <Redirect to="/login" />;
  }
  
  return <>{children}</>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/doctors" component={Landing} />
      <Route path="/blog" component={Landing} />
      <Route path="/appointment" component={Appointment} />
      <Route path="/login" component={Login} />
      
      <Route path="/admin/dashboard">
        <ProtectedRoute allowedRole="admin">
          <AdminLayout><AdminDashboard /></AdminLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/doctors">
        <ProtectedRoute allowedRole="admin">
          <AdminLayout><AdminDoctors /></AdminLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/patients">
        <ProtectedRoute allowedRole="admin">
          <AdminLayout><AdminPatients /></AdminLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/blog">
        <ProtectedRoute allowedRole="admin">
          <AdminLayout><AdminBlog /></AdminLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/content">
        <ProtectedRoute allowedRole="admin">
          <AdminLayout><AdminContent /></AdminLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/subadmins">
        <ProtectedRoute allowedRole="admin">
          <AdminLayout><AdminSubAdmins /></AdminLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/settings">
        <ProtectedRoute allowedRole="admin">
          <AdminLayout><AdminSettings /></AdminLayout>
        </ProtectedRoute>
      </Route>

      <Route path="/doctor/dashboard">
        <ProtectedRoute allowedRole="doctor">
          <DoctorLayout><DoctorDashboard /></DoctorLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/doctor/patients">
        <ProtectedRoute allowedRole="doctor">
          <DoctorLayout><DoctorPatients /></DoctorLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/doctor/profile">
        <ProtectedRoute allowedRole="doctor">
          <DoctorLayout><DoctorProfile /></DoctorLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/doctor/settings">
        <ProtectedRoute allowedRole="doctor">
          <DoctorLayout><DoctorSettings /></DoctorLayout>
        </ProtectedRoute>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AppProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
