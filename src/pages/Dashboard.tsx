import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Shield, FileText } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome to MedSecure</h1>
        <p className="text-muted-foreground">Secure, encrypted medical data management platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 card-hover">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Upload Data</h3>
            <p className="text-sm text-muted-foreground">Securely upload and encrypt your medical records</p>
            <Button className="button-primary w-full">Upload Files</Button>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-secondary rounded-full">
              <FileText className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold">Generate Summary</h3>
            <p className="text-sm text-muted-foreground">AI-powered analysis of your medical data</p>
            <Button className="button-secondary w-full">Generate</Button>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-accent/10 rounded-full">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold">Manage Access</h3>
            <p className="text-sm text-muted-foreground">Control who can access your medical records</p>
            <Button className="button-accent w-full">Manage</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;