"use client";

import { useState, useCallback, useEffect } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  type Connector,
} from "@starknet-react/core";

/**
 * Custom hook for managing wallet connection state and operations
 */
export function useWalletConnection() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const { address, isConnected, isConnecting: isReconnecting } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // Connect to wallet with error handling
  const connectWallet = useCallback(
    async (connector: Connector) => {
      if (!connector) return Promise.reject(new Error("No connector provided"));

      setIsConnecting(true);
      setConnectionError(null);

      try {
        await connect({ connector });

        // Save the last used connector for auto-connect
        if (connector.id) {
          localStorage.setItem("lastUsedConnector", connector.id);
        }
        return Promise.resolve();
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to connect wallet";
        console.error("Wallet connection error:", errorMessage);
        setConnectionError(errorMessage);
        return Promise.reject(error);
      } finally {
        setIsConnecting(false);
      }
    },
    [connect]
  );

  // Disconnect wallet
  const disconnectWallet = useCallback(() => {
    disconnect();
    localStorage.removeItem("lastUsedConnector");
  }, [disconnect]);

  // Auto-connect on component mount
  const autoConnect = useCallback(() => {
    if (
      !isConnected &&
      !isReconnecting &&
      connectors &&
      connectors.length > 0
    ) {
      const lastConnector = localStorage.getItem("lastUsedConnector");

      if (lastConnector) {
        const connector = connectors.find((c) => c.id === lastConnector);
        if (connector) {
          connectWallet(connector).catch(() => {
            // Silent fail for auto-connect
          });
        }
      }
    }
  }, [connectWallet, connectors, isConnected, isReconnecting]);

  // Listen for wallet_disconnected events
  useEffect(() => {
    const handleWalletDisconnected = () => {
      // Clear any connection state
      localStorage.removeItem("lastUsedConnector");
    };

    window.addEventListener("wallet_disconnected", handleWalletDisconnected);

    return () => {
      window.removeEventListener(
        "wallet_disconnected",
        handleWalletDisconnected
      );
    };
  }, []);

  // Run auto-connect on component mount
  useEffect(() => {
    autoConnect();
  }, [autoConnect]);

  return {
    address,
    isConnected,
    isConnecting,
    connectionError,
    connectors,
    connectWallet,
    disconnectWallet,
    autoConnect,
  };
}
