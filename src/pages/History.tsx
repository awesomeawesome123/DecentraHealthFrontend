import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText, User, Clock } from 'lucide-react';

const History = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Access History</h2>
        <p className="text-muted-foreground">Track all activities related to your medical data</p>
      </div>

      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-secondary rounded-full">
                <FileText className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">Dr. Sarah Johnson</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Accessed Medical Report - 2024 • 2 hours ago</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default History;