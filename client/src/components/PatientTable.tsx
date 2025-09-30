import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import type { Patient } from '@/lib/AppContext';

interface PatientTableProps {
  patients: Patient[];
  onStatusChange?: (id: string, status: Patient['status']) => void;
}

export default function PatientTable({ patients, onStatusChange }: PatientTableProps) {
  const getStatusVariant = (status: Patient['status']) => {
    switch (status) {
      case 'confirmed':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'completed':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Problem</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id} data-testid={`row-patient-${patient.id}`}>
              <TableCell className="font-medium" data-testid={`text-patient-name-${patient.id}`}>
                {patient.name}
              </TableCell>
              <TableCell>{patient.doctor}</TableCell>
              <TableCell>{new Date(patient.date).toLocaleDateString()}</TableCell>
              <TableCell>{patient.time}</TableCell>
              <TableCell className="max-w-xs truncate">{patient.problem}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(patient.status)} data-testid={`badge-status-${patient.id}`}>
                  {patient.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => console.log('More options for', patient.id)}
                  data-testid={`button-patient-actions-${patient.id}`}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
