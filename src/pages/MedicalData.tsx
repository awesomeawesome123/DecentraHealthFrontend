import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const MedicalData = () => {
  const { toast } = useToast();

  const handleUploadClick = () => {
    // In a real implementation, this would open a file picker
    toast({
      title: "Upload Feature",
      description: "File upload functionality will be implemented in the next phase",
    });
  };

  const handleViewSummary = () => {
    toast({
      title: "View Summary",
      description: "Summary view will be available once AI processing is implemented",
    });
  };

  const handleManageAccess = () => {
    toast({
      title: "Access Management",
      description: "Access control features will be implemented in the next phase",
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Medical Data</h2>
          <p className="text-muted-foreground">Upload and manage your medical records</p>
        </div>
        <Button className="button-primary" onClick={handleUploadClick}>
          <Upload className="w-4 h-4 mr-2" />
          Upload New
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Medical Report - 2024</h3>
                <p className="text-sm text-muted-foreground">Encrypted • 2.4 MB</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handleViewSummary}>View Summary</Button>
              <Button variant="outline" onClick={handleManageAccess}>Manage Access</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MedicalData;