import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface AccessControlDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AccessControlDialog = ({ open, onOpenChange }: AccessControlDialogProps) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [duration, setDuration] = useState("");
  const { toast } = useToast();

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow positive numbers or empty string
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) >= 0)) {
      setDuration(value);
    }
  };

  const handleGrantAccess = () => {
    if (!walletAddress.startsWith("0x")) {
      toast({
        title: "Invalid wallet address",
        description: "Wallet address must start with 0x",
        variant: "destructive",
      });
      return;
    }

    // Additional validation and grant access logic would go here
    toast({
      title: "Access Granted",
      description: "Access has been granted to the specified wallet address",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Manage Access Control</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label htmlFor="walletAddress" className="text-sm font-medium">
              Doctor's Wallet Address
            </label>
            <Input
              id="walletAddress"
              placeholder="0x..."
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="duration" className="text-sm font-medium">
              Access Duration (days, optional)
            </label>
            <Input
              id="duration"
              type="number"
              min="0"
              placeholder="Enter number of days"
              value={duration}
              onChange={handleDurationChange}
            />
          </div>
          <div className="pt-4">
            <Button 
              className="w-full bg-emerald-500 hover:bg-emerald-600"
              onClick={handleGrantAccess}
            >
              Grant Access
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Authorized Doctors</h3>
            <p className="text-muted-foreground text-center py-4">
              No doctors authorized yet
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};