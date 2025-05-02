"use client";

import type { ReactNode } from "react";
import { StarknetConfig } from "@starknet-react/core";
import { useStarknetConfig } from "@/hooks/use-starknet-connect";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Get the complete Starknet configuration from our hook
  const starknetConfig = useStarknetConfig();

  return <StarknetConfig {...starknetConfig}>{children}</StarknetConfig>;
}
