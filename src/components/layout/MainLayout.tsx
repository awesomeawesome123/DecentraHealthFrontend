import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon, Home, FileText, Shield, History } from 'lucide-react';

interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: FileText, label: 'Medical Data', path: '/medical-data' },
  { icon: Shield, label: 'Access Control', path: '/access-control' },
  { icon: History, label: 'History', path: '/history' },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-foreground">MedSecure</h1>
        </div>
        <nav className="px-4 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 mb-1 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-secondary'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;