"use client";

import { useRef, useEffect } from "react";
import { Copy, ExternalLink, LogOut } from "lucide-react";
import { copyToClipboard } from "@/util/wallet";

interface WalletDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
  onDisconnect: () => void;
}

export function WalletDropdown({
  isOpen,
  onClose,
  address,
  onDisconnect,
}: WalletDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle copy address to clipboard
  const handleCopyAddress = () => {
    if (address) {
      copyToClipboard(address);
      // Show toast notification
      const toast = document.createElement("div");
      toast.className =
        "fixed bottom-4 right-4 bg-[#171717] text-white px-4 py-2 rounded-lg shadow-lg z-50";
      toast.textContent = "Address copied to clipboard";
      document.body.appendChild(toast);

      // Add animation style
      toast.style.animation = "fadeIn 0.2s ease-in-out";

      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s";
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    }
  };

  // View on explorer
  const viewOnExplorer = () => {
    if (address) {
      window.open(`https://starkscan.co/contract/${address}`, "_blank");
    }
  };

  if (!isOpen || !address) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 z-50 w-72 bg-[#ffffff] rounded-lg border border-gray-200 shadow-lg"
      style={{
        animation: "fadeIn 0.15s ease-in-out, slideDown 0.2s ease-out",
        transformOrigin: "top right",
      }}
    >
      <div className="p-4">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-1">
              Connected Wallet
            </p>
            <div className="bg-gray-50 p-3 rounded-md overflow-hidden">
              <p className="text-sm font-mono text-[#171717] break-all">
                {address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-sm text-[#171717] cursor-pointer"
              onClick={handleCopyAddress}
            >
              <Copy className="w-3.5 h-3.5" />
              Copy Address
            </button>

            <button
              className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-sm text-[#171717]  cursor-pointer"
              onClick={viewOnExplorer}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View on Explorer
            </button>
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors text-sm  cursor-pointer"
            onClick={onDisconnect}
          >
            <LogOut className="w-3.5 h-3.5" />
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}
