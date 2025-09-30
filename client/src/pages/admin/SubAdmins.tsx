import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useApp } from '@/lib/AppContext';
import { useToast } from '@/hooks/use-toast';

export default function AdminSubAdmins() {
  const { subAdmins, addSubAdmin, deleteSubAdmin } = useApp();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    role: '',
    password: ''
  });

  const handleAdd = () => {
    //todo: remove mock functionality
    if (newAdmin.name && newAdmin.email && newAdmin.role) {
      addSubAdmin({ name: newAdmin.name, email: newAdmin.email, role: newAdmin.role });
      toast({ title: 'Success', description: 'Sub-admin added successfully' });
      setOpen(false);
      setNewAdmin({ name: '', email: '', role: '', password: '' });
    }
  };

  const handleDelete = (id: string, name: string) => {
    deleteSubAdmin(id);
    toast({ title: 'Success', description: `${name} removed successfully` });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Sub-Admin Management</h1>
          <p className="text-muted-foreground">Manage administrative users</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-subadmin">
              <Plus className="h-4 w-4 mr-2" />
              Add Sub-Admin
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Sub-Admin</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  value={newAdmin.name}
                  onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                  placeholder="John Doe"
                  data-testid="input-subadmin-name"
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={newAdmin.email}
                  onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                  placeholder="john@medicare.com"
                  data-testid="input-subadmin-email"
                />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Input
                  value={newAdmin.role}
                  onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                  placeholder="Content Manager"
                  data-testid="input-subadmin-role"
                />
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  value={newAdmin.password}
                  onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                  placeholder="••••••••"
                  data-testid="input-subadmin-password"
                />
              </div>
              <Button onClick={handleAdd} className="w-full" data-testid="button-submit-subadmin">
                Add Sub-Admin
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subAdmins.map(admin => (
              <TableRow key={admin.id}>
                <TableCell className="font-medium">{admin.name}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.role}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(admin.id, admin.name)}
                    data-testid={`button-delete-subadmin-${admin.id}`}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
