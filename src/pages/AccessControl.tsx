import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Shield, Users } from 'lucide-react';
import { AccessControlDialog } from '@/components/AccessControlDialog';

const AccessControl = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Access Control</h2>
          <p className="text-muted-foreground">Manage permissions for your medical data</p>
        </div>
        <Button className="button-primary" onClick={() => setDialogOpen(true)}>
          <UserPlus className="w-4 h-4 mr-2" />
          Grant Access
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Dr. Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Access granted • View only</p>
              </div>
            </div>
            <Button variant="outline" className="text-accent hover:text-accent-foreground">
              Revoke Access
            </Button>
          </div>
        </Card>
      </div>

      <AccessControlDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default AccessControl;