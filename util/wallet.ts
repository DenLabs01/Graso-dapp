/**
 * Wallet utility functions
 *
 * This file contains utility functions for wallet operations
 * such as address formatting, validation, and clipboard operations.
 */

/**
 * Truncates a Starknet address for display purposes
 *
 * @param address - The full Starknet address
 * @param startChars - Number of characters to show at the start
 * @param endChars - Number of characters to show at the end
 * @returns Truncated address string
 */
export function truncateAddress(
  address: string,
  startChars = 4,
  endChars = 4
): string {
  if (!address) return "";

  // Remove "0x" prefix if it exists for consistent formatting
  const cleanAddress = address.startsWith("0x") ? address.slice(2) : address;

  if (cleanAddress.length <= startChars + endChars) {
    return address; // Return full address if it's too short to truncate
  }

  const start = address.slice(0, startChars + 2); // +2 to include "0x"
  const end = address.slice(-endChars);

  return `${start}...${end}`;
}

/**
 * Copies text to clipboard
 *
 * @param text - The text to copy to clipboard
 * @returns Promise that resolves when the text is copied
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    return Promise.resolve();
  } catch (error) {
    console.error("Failed to copy text: ", error);

    // Fallback method for browsers that don't support clipboard API
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      return Promise.resolve();
    } catch (err) {
      console.error("Fallback: Failed to copy text: ", err);
      return Promise.reject(err);
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

/**
 * Validates if a string is a valid Starknet address
 *
 * @param address - The address to validate
 * @returns Boolean indicating if the address is valid
 */
export function isValidStarknetAddress(address: string): boolean {
  // Basic validation - Starknet addresses are hex strings
  if (!address) return false;

  // Remove 0x prefix if present
  const cleanAddress = address.startsWith("0x") ? address.slice(2) : address;

  // Check if it's a valid hex string of the correct length
  // Starknet addresses are 64 characters (without 0x prefix)
  return /^[0-9a-fA-F]{64}$/.test(cleanAddress);
}
