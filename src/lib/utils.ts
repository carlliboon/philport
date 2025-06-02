import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a standardized filename for file uploads
 * @param options Configuration options for filename generation
 * @returns A standardized filename string
 */
export function generateFileName({ prefix, originalName, userId, timestamp = true }: 
  { prefix: string; originalName: string; userId?: string; timestamp?: boolean; }): 
  string {
  // Get file extension from original name
  const fileExt = originalName.split('.').pop()?.toLowerCase() || '';
  
  // Create base name parts
  const nameParts = [prefix];
  
  // Add user identifier if provided
  if (userId) {
    nameParts.push(userId);
  }
  
  // Add timestamp if enabled
  if (timestamp) {
    nameParts.push(Date.now().toString());
  }
  
  // Join parts and add extension
  return `${nameParts.join('-')}.${fileExt}`;
}
