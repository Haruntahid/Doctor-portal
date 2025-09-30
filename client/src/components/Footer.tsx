import { Activity, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '@/lib/AppContext';

export default function Footer() {
  const { contactInfo } = useApp();

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">MediCare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing quality healthcare services with compassion and excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span data-testid="text-footer-phone">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span data-testid="text-footer-email">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span data-testid="text-footer-address">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/doctors" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Doctors
              </a>
              <a href="/appointment" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 MediCare Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
