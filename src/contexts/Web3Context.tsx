import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrowserProvider, JsonRpcSigner } from 'ethers';
import { useToast } from '@/components/ui/use-toast';

interface Web3ContextType {
  isConnected: boolean;
  account: string | null;
  signer: JsonRpcSigner | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const Web3Context = createContext<Web3ContextType | null>(null);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const { toast } = useToast();

  const connect = async () => {
    if (typeof window.ethereum === 'undefined') {
      toast({
        title: "MetaMask not found",
        description: "Please install MetaMask to use this feature",
        variant: "destructive",
      });
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const newSigner = await provider.getSigner();
      
      setAccount(accounts[0]);
      setSigner(newSigner);
      setIsConnected(true);

      toast({
        title: "Connected to MetaMask",
        description: "Your wallet is now connected",
      });
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to MetaMask",
        variant: "destructive",
      });
    }
  };

  const disconnect = () => {
    setAccount(null);
    setSigner(null);
    setIsConnected(false);
    toast({
      title: "Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  useEffect(() => {
    // Handle account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnect();
        } else {
          setAccount(accounts[0]);
        }
      });

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners();
      }
    };
  }, []);

  return (
    <Web3Context.Provider value={{ isConnected, account, signer, connect, disconnect }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};