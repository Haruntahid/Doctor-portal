import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Clock } from 'lucide-react';
import type { Doctor } from '@/lib/AppContext';

interface DoctorCardProps {
  doctor: Doctor;
  showContact?: boolean;
}

export default function DoctorCard({ doctor, showContact = false }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-doctor-${doctor.id}`}>
      <div className="aspect-square relative overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2" data-testid={`text-doctor-name-${doctor.id}`}>
          {doctor.name}
        </h3>
        <Badge variant="secondary" className="mb-4" data-testid={`text-doctor-spec-${doctor.id}`}>
          {doctor.specialization}
        </Badge>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{doctor.availability}</span>
          </div>
          {showContact && (
            <>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{doctor.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{doctor.phone}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
