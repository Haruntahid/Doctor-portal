import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Activity } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2 -ml-3">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">MediCare</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" data-testid="link-nav-home">
              <button className={`text-sm font-medium transition-colors hover:text-primary ${
                location === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                Home
              </button>
            </Link>
            <a href="/#doctors" data-testid="link-nav-doctors">
              <button className={`text-sm font-medium transition-colors hover:text-primary ${
                location === '/#doctors' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                Doctors
              </button>
            </a>
            <a href="/#blog" data-testid="link-nav-blog">
              <button className={`text-sm font-medium transition-colors hover:text-primary ${
                location === '/#blog' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                Blog
              </button>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" data-testid="link-login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
