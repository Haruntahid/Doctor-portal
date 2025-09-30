import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useApp } from '@/lib/AppContext';
import DoctorCard from '@/components/DoctorCard';
import { useToast } from '@/hooks/use-toast';

export default function AdminDoctors() {
  const { doctors, addDoctor, deleteDoctor } = useApp();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialization: '',
    availability: '',
    email: '',
    phone: '',
    image: ''
  });

  const handleAddDoctor = () => {
    //todo: remove mock functionality
    if (newDoctor.name && newDoctor.specialization) {
      addDoctor({
        ...newDoctor,
        image: newDoctor.image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400'
      });
      toast({ title: 'Success', description: 'Doctor added successfully' });
      setOpen(false);
      setNewDoctor({ name: '', specialization: '', availability: '', email: '', phone: '', image: '' });
    }
  };

  const handleDelete = (id: string, name: string) => {
    deleteDoctor(id);
    toast({ title: 'Success', description: `${name} removed successfully` });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Doctors Management</h1>
          <p className="text-muted-foreground">Manage your medical team</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-doctor">
              <Plus className="h-4 w-4 mr-2" />
              Add Doctor
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Doctor</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  value={newDoctor.name}
                  onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                  placeholder="Dr. John Smith"
                  data-testid="input-doctor-name"
                />
              </div>
              <div className="space-y-2">
                <Label>Specialization</Label>
                <Input
                  value={newDoctor.specialization}
                  onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                  placeholder="Cardiologist"
                  data-testid="input-doctor-spec"
                />
              </div>
              <div className="space-y-2">
                <Label>Availability</Label>
                <Input
                  value={newDoctor.availability}
                  onChange={(e) => setNewDoctor({ ...newDoctor, availability: e.target.value })}
                  placeholder="Mon-Fri, 9AM-5PM"
                  data-testid="input-doctor-availability"
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={newDoctor.email}
                  onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
                  placeholder="doctor@medicare.com"
                  data-testid="input-doctor-email"
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  value={newDoctor.phone}
                  onChange={(e) => setNewDoctor({ ...newDoctor, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  data-testid="input-doctor-phone"
                />
              </div>
              <div className="space-y-2">
                <Label>Image URL (optional)</Label>
                <Input
                  value={newDoctor.image}
                  onChange={(e) => setNewDoctor({ ...newDoctor, image: e.target.value })}
                  placeholder="https://..."
                  data-testid="input-doctor-image"
                />
              </div>
              <Button onClick={handleAddDoctor} className="w-full" data-testid="button-submit-doctor">
                Add Doctor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map(doctor => (
          <div key={doctor.id} className="relative">
            <DoctorCard doctor={doctor} showContact />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => handleDelete(doctor.id, doctor.name)}
              data-testid={`button-delete-doctor-${doctor.id}`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
