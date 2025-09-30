import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, User, Stethoscope } from 'lucide-react';
import { useApp } from '@/lib/AppContext';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useApp();
  const { toast } = useToast();
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //todo: remove mock functionality - dummy auth
    if (adminEmail && adminPassword) {
      login('admin', 'admin-1');
      toast({
        title: 'Login Successful',
        description: 'Welcome back, Admin!'
      });
      setLocation('/admin/dashboard');
    }
  };

  const handleDoctorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //todo: remove mock functionality - dummy auth
    if (doctorEmail && doctorPassword) {
      login('doctor', 'doctor-1');
      toast({
        title: 'Login Successful',
        description: 'Welcome back, Doctor!'
      });
      setLocation('/doctor/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-semibold">MediCare Portal</span>
          </div>
          <h1 className="text-3xl font-semibold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="admin" data-testid="tab-admin-login">
                <User className="h-4 w-4 mr-2" />
                Admin
              </TabsTrigger>
              <TabsTrigger value="doctor" data-testid="tab-doctor-login">
                <Stethoscope className="h-4 w-4 mr-2" />
                Doctor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="admin">
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="admin@medicare.com"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    required
                    data-testid="input-admin-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input
                    id="admin-password"
                    type="password"
                    placeholder="••••••••"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                    data-testid="input-admin-password"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-admin-login">
                  Sign In as Admin
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="doctor">
              <form onSubmit={handleDoctorLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="doctor-email">Email</Label>
                  <Input
                    id="doctor-email"
                    type="email"
                    placeholder="doctor@medicare.com"
                    value={doctorEmail}
                    onChange={(e) => setDoctorEmail(e.target.value)}
                    required
                    data-testid="input-doctor-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor-password">Password</Label>
                  <Input
                    id="doctor-password"
                    type="password"
                    placeholder="••••••••"
                    value={doctorPassword}
                    onChange={(e) => setDoctorPassword(e.target.value)}
                    required
                    data-testid="input-doctor-password"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-doctor-login">
                  Sign In as Doctor
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
