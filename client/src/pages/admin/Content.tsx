import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useApp } from '@/lib/AppContext';
import { useToast } from '@/hooks/use-toast';

export default function AdminContent() {
  const { contactInfo, updateContactInfo } = useApp();
  const { toast } = useToast();
  const [formData, setFormData] = useState(contactInfo);

  const handleSave = () => {
    //todo: remove mock functionality
    updateContactInfo(formData);
    toast({ title: 'Success', description: 'Contact information updated successfully' });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Content Management</h1>
        <p className="text-muted-foreground">Update contact information and images</p>
      </div>

      <Card className="p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              data-testid="input-contact-phone"
            />
          </div>
          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              data-testid="input-contact-email"
            />
          </div>
          <div className="space-y-2">
            <Label>Physical Address</Label>
            <Input
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              data-testid="input-contact-address"
            />
          </div>
          <Button onClick={handleSave} data-testid="button-save-contact">
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}
