import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { useApp } from '@/lib/AppContext';

export default function DoctorProfile() {
  const { doctors } = useApp();
  const { toast } = useToast();
  
  //todo: remove mock functionality - get current doctor
  const currentDoctor = doctors[0];
  const [formData, setFormData] = useState({
    name: currentDoctor?.name || '',
    specialization: currentDoctor?.specialization || '',
    email: currentDoctor?.email || '',
    phone: currentDoctor?.phone || '',
    availability: currentDoctor?.availability || ''
  });

  const handleSave = () => {
    //todo: remove mock functionality
    toast({ title: 'Success', description: 'Profile updated successfully' });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your profile information</p>
      </div>

      <Card className="p-6 max-w-2xl">
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="h-24 w-24">
            <AvatarImage src={currentDoctor?.image} />
            <AvatarFallback>{currentDoctor?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">{currentDoctor?.name}</h2>
            <p className="text-muted-foreground">{currentDoctor?.specialization}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              data-testid="input-profile-name"
            />
          </div>
          <div className="space-y-2">
            <Label>Specialization</Label>
            <Input
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              data-testid="input-profile-spec"
            />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              data-testid="input-profile-email"
            />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              data-testid="input-profile-phone"
            />
          </div>
          <div className="space-y-2">
            <Label>Availability</Label>
            <Input
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              data-testid="input-profile-availability"
            />
          </div>
          <Button onClick={handleSave} data-testid="button-save-profile">
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}
